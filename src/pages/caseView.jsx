import "../styles/view.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../config/firebase";
import { doc, getDoc } from "firebase/firestore";
import Nav from "../components/nav";
import Footer from "../components/footer";

const CaseView = () => {
  const { caseId } = useParams();
  const [caseData, setCaseData] = useState(null);
  const [loading, setLoading] = useState(true);

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

  if (loading) return <div className="case-view-container">Loading...</div>;
  if (!caseData) return <div className="case-view-container">Case not found.</div>;

  return (
    <div className="container">
       <Nav/>
  <div className="case-view-container">
      <div className="case-view-header">
        <h2>{caseData.name}</h2>
        <p><strong>ID:</strong> {caseId}</p>
        <p><strong>Court:</strong> {caseData.court}</p>
        {caseData.closed && <span className="case-closed-badge">Closed</span>}
      </div>
      <div className="case-view-stages">
        <h3>Case Stages</h3>
        {caseData.stages && caseData.stages.length > 0 ? (
          [...caseData.stages].reverse().map((stage, idx) => (
            <div key={idx} className="case-stage-card">
              <div className="case-stage-info">
                <h4>Stage {caseData.stages.length - idx}: {stage.title}</h4>
                <p className="case-stage-desc">{stage.description}</p>
                <p className="case-stage-text">{stage.text}</p>
              </div>
              <div className="case-media-list">
                {stage.media && stage.media.length > 0 ? (
                  stage.media.map((file, mIdx) =>
                    file.type === "image" ? (
                      <img key={mIdx} src={file.url} alt={`img-${mIdx}`} className="case-media-item" />
                    ) : (
                      <video key={mIdx} src={file.url} controls className="case-media-item" />
                    )
                  )
                ) : (
                  <span className="case-no-media">No media attached.</span>
                )}
              </div>
            </div>
          ))
        ) : (
          <p>No stages yet.</p>
        )}
      </div>

     
    </div>
     <Footer/>
    </div>
  
  );
};

export default CaseView;