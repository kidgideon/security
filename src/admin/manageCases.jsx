// ManageCases.jsx
import "../styles/page-secure-case.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db, storage } from "../../config/firebase";
import {
  doc,
  getDoc,
  updateDoc,
  arrayUnion,
} from "firebase/firestore";
import {
  ref,
  uploadBytes,
  getDownloadURL
} from "firebase/storage";

const ManageCases = () => {
  const { caseId } = useParams();
  const [caseData, setCaseData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [newStage, setNewStage] = useState({ title: "", description: "", text: "" });
  const [mediaFiles, setMediaFiles] = useState([]);
  const [stageLoading, setStageLoading] = useState(false);

  useEffect(() => {
    const fetchCase = async () => {
      setLoading(true);
      const docRef = doc(db, "cases", caseId);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setCaseData(docSnap.data());
      }
      setLoading(false);
    };
    fetchCase();
  }, [caseId]);

  // Add stage and update UI without reload
  const handleAddStage = async () => {
    if (caseData.closed) return;
    setStageLoading(true);

    try {
      // Upload all media files
      const uploads = await Promise.all(mediaFiles.map(async (file) => {
        const fileType = file.type.startsWith("image") ? "image" : file.type.startsWith("video") ? "video" : null;
        if (!fileType) throw new Error("Unsupported file type.");
        const fileRef = ref(storage, `cases/${caseId}/${Date.now()}_${file.name}`);
        const snapshot = await uploadBytes(fileRef, file);
        const url = await getDownloadURL(snapshot.ref);
        return { url, type: fileType };
      }));

      const newStageData = {
        ...newStage,
        media: uploads
      };

      const caseRef = doc(db, "cases", caseId);
      await updateDoc(caseRef, {
        stages: arrayUnion(newStageData)
      });

      // Update UI without reload
      setCaseData(prev => ({
        ...prev,
        stages: prev.stages ? [...prev.stages, newStageData] : [newStageData]
      }));
      setNewStage({ title: "", description: "", text: "" });
      setMediaFiles([]);
    } catch (err) {
      alert(err.message || "Error adding stage.");
    }
    setStageLoading(false);
  };

  const handleMediaChange = (e) => {
    setMediaFiles(Array.from(e.target.files));
  };

  const handleCloseCase = async () => {
    const caseRef = doc(db, "cases", caseId);
    await updateDoc(caseRef, { closed: true });
    setCaseData(prev => ({ ...prev, closed: true }));
  };

  if (loading) return <div className="secure-manage-cases">Loading...</div>;
  if (!caseData) return <div className="secure-manage-cases">Case not found.</div>;

  return (
    <div className="secure-manage-cases">
      <div className="secure-case-header">
        <h2>{caseData.name}</h2>
        <p><strong>ID:</strong> {caseId}</p>
        <p><strong>Court:</strong> {caseData.court}</p>
        {caseData.closed && <p className="secure-closed-badge">This case is closed</p>}
        {!caseData.closed && (
          <button className="secure-close-btn" onClick={handleCloseCase}>Close Case</button>
        )}
      </div>

      {!caseData.closed && (
        <div className="secure-stage-form">
          <h3>Add Stage</h3>
          <input
            placeholder="Stage Title"
            value={newStage.title}
            onChange={e => setNewStage(prev => ({ ...prev, title: e.target.value }))}
            disabled={stageLoading}
          />
          <input
            placeholder="Description"
            value={newStage.description}
            onChange={e => setNewStage(prev => ({ ...prev, description: e.target.value }))}
            disabled={stageLoading}
          />
          <textarea
            placeholder="Text"
            value={newStage.text}
            onChange={e => setNewStage(prev => ({ ...prev, text: e.target.value }))}
            disabled={stageLoading}
          />
          <input
            type="file"
            multiple
            onChange={handleMediaChange}
            disabled={stageLoading}
          />
          <button
            onClick={handleAddStage}
            disabled={stageLoading}
          >
            {stageLoading ? "Submitting..." : "Submit Stage"}
          </button>
        </div>
      )}

      <div className="secure-stages-list">
        <h3>Stages</h3>
        {caseData.stages && caseData.stages.length > 0 ? (
          caseData.stages.map((stage, index) => (
            <div key={index} className="secure-stage-card">
              <h4>Stage {index + 1}: {stage.title}</h4>
              <p>{stage.description}</p>
              <p>{stage.text}</p>
              <div className="secure-media-preview">
                {stage.media && stage.media.length > 0 ? (
                  stage.media.map((file, idx) =>
                    file.type === "image" ? (
                      <img key={idx} src={file.url} alt={`img-${idx}`} />
                    ) : (
                      <video key={idx} src={file.url} controls />
                    )
                  )
                ) : (
                  <span>No media attached.</span>
                )}
              </div>
            </div>
          ))
        ) : <p>No stages yet.</p>}
      </div>
    </div>
  );
};

export default ManageCases;