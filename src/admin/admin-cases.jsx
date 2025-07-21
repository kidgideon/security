import React, { useEffect, useState } from "react";
import { db } from "../../config/firebase";
import {
  doc,
  getDoc,
  setDoc,
  updateDoc,
  collection,
  addDoc,
  getDocs,
  serverTimestamp,
} from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import "../styles/case.css";

const PIN_DOC = doc(db, "siteSettings", "settings");

const AdminCases = () => {
  const [pinModal, setPinModal] = useState(true);
  const [enteredPin, setEnteredPin] = useState("");
  const [sitePin, setSitePin] = useState(null);
  const [pinLoading, setPinLoading] = useState(true);
  const [pinError, setPinError] = useState("");
  const [resetMode, setResetMode] = useState(false);
  const [oldPin, setOldPin] = useState("");
  const [newPin, setNewPin] = useState("");

  const [caseName, setCaseName] = useState("");
  const [caseCourt, setCaseCourt] = useState("");
  const [caseLoading, setCaseLoading] = useState(false);
  const [cases, setCases] = useState([]);
  const [casesLoading, setCasesLoading] = useState(true);

  const navigate = useNavigate();

  // PIN logic
  useEffect(() => {
    const fetchPin = async () => {
      setPinLoading(true);
      try {
        const docSnap = await getDoc(PIN_DOC);
        setSitePin(docSnap.exists() ? docSnap.data().sitePin : null);
      } catch (e) {
        setSitePin(null);
      }
      setPinLoading(false);
    };
    fetchPin();
  }, []);

  const handlePinSubmit = async (e) => {
    e.preventDefault();
    setPinError("");
    setPinLoading(true);
    if (!enteredPin.match(/^\d{4}$/)) {
      setPinError("PIN must be a 4-digit number.");
      setPinLoading(false);
      return;
    }
    try {
      if (sitePin) {
        if (enteredPin === sitePin) {
          setPinModal(false);
        } else {
          setPinError("Incorrect PIN.");
        }
      } else {
        await setDoc(PIN_DOC, { sitePin: enteredPin });
        setSitePin(enteredPin);
        setPinModal(false);
      }
    } catch (err) {
      setPinError("Error verifying PIN.");
    }
    setPinLoading(false);
  };

  const handleResetPin = async (e) => {
    e.preventDefault();
    setPinError("");
    setPinLoading(true);
    if (oldPin !== sitePin) {
      setPinError("Old PIN is incorrect.");
      setPinLoading(false);
      return;
    }
    if (!newPin.match(/^\d{4}$/)) {
      setPinError("New PIN must be a 4-digit number.");
      setPinLoading(false);
      return;
    }
    try {
      await updateDoc(PIN_DOC, { sitePin: newPin });
      setSitePin(newPin);
      setResetMode(false);
      setPinModal(false);
      setOldPin("");
      setNewPin("");
    } catch (err) {
      setPinError("Error resetting PIN.");
    }
    setPinLoading(false);
  };

  // Case logic
  useEffect(() => {
    const fetchCases = async () => {
      setCasesLoading(true);
      try {
        const querySnap = await getDocs(collection(db, "cases"));
        const caseArr = [];
        querySnap.forEach((doc) => {
          caseArr.push(doc.data());
        });
        setCases(caseArr.sort((a, b) => b.createdAt?.seconds - a.createdAt?.seconds));
      } catch (err) {
        setCases([]);
      }
      setCasesLoading(false);
    };
    if (!pinModal) fetchCases();
  }, [pinModal]);

  const handleCaseSubmit = async (e) => {
    e.preventDefault();
    setCaseLoading(true);
    const caseId = Math.floor(Math.random() * 1e15).toString().padStart(15, "0");
    try {
      await setDoc(doc(db, "cases", caseId), {
        name: caseName,
        court: caseCourt,
        caseId,
        createdAt: serverTimestamp(),
      });
      setCaseName("");
      setCaseCourt("");
      // Refresh cases
      const querySnap = await getDocs(collection(db, "cases"));
      const caseArr = [];
      querySnap.forEach((doc) => {
        caseArr.push(doc.data());
      });
      setCases(caseArr.sort((a, b) => b.createdAt?.seconds - a.createdAt?.seconds));
    } catch (err) {
      // handle error
    }
    setCaseLoading(false);
  };

  return (
    <div className="admin-cases-container">
      {pinModal && (
        <div className="pin-modal">
          <div className="pin-modal-content">
            <h2>Admin PIN Verification</h2>
            {pinLoading ? (
              <div className="modal-loading">Loading...</div>
            ) : resetMode ? (
              <form onSubmit={handleResetPin}>
                <input
                  type="password"
                  placeholder="Old PIN"
                  value={oldPin}
                  onChange={(e) => setOldPin(e.target.value)}
                  maxLength={4}
                  required
                />
                <input
                  type="password"
                  placeholder="New PIN"
                  value={newPin}
                  onChange={(e) => setNewPin(e.target.value)}
                  maxLength={4}
                  required
                />
                <button type="submit" className="modal-btn">Reset PIN</button>
                <button type="button" className="modal-btn" onClick={() => setResetMode(false)}>Cancel</button>
                {pinError && <div className="modal-error">{pinError}</div>}
              </form>
            ) : (
              <form onSubmit={handlePinSubmit}>
                <input
                  type="password"
                  placeholder={sitePin ? "Enter PIN" : "Set New PIN"}
                  value={enteredPin}
                  onChange={(e) => setEnteredPin(e.target.value)}
                  maxLength={4}
                  required
                />
                <button type="submit" className="modal-btn">{sitePin ? "Unlock" : "Set PIN"}</button>
                {sitePin && (
                  <button type="button" className="modal-btn" onClick={() => setResetMode(true)}>
                    Reset PIN
                  </button>
                )}
                {pinError && <div className="modal-error">{pinError}</div>}
              </form>
            )}
          </div>
        </div>
      )}

      {!pinModal && (
        <div className="admin-cases-content">
          <h1>Admin Case Management</h1>
          <form className="case-form" onSubmit={handleCaseSubmit}>
            <input
              type="text"
              placeholder="Case Name"
              value={caseName}
              onChange={(e) => setCaseName(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Court"
              value={caseCourt}
              onChange={(e) => setCaseCourt(e.target.value)}
              required
            />
            <button type="submit" className="case-btn" disabled={caseLoading}>
              {caseLoading ? "Creating..." : "Create Case"}
            </button>
          </form>
          <div className="cases-list">
            <h2>All Cases</h2>
            {casesLoading ? (
              <div className="cases-loading">Loading cases...</div>
            ) : cases.length === 0 ? (
              <div className="no-cases">No cases found.</div>
            ) : (
              <div className="case-cards">
                {cases.map((c) => (
                  <div
                    className="case-card"
                    key={c.caseId}
                    onClick={() => navigate(`/manage/cases/${c.caseId}`)}
                  >
                    <div className="case-name">{c.name}</div>
                    <div className="case-court">{c.court}</div>
                    <div className="case-id">ID: {c.caseId}</div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminCases;