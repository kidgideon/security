import Logo from "../images/logo.png";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../../config/firebase";
import { doc, getDoc } from "firebase/firestore";

const Nav = () => {
  const [search, setSearch] = useState("");
  const [searching, setSearching] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSearch = async (e) => {
  e.preventDefault();
  setError("");
  if (!search.trim()) return;
  setSearching(true);

  try {
    const docRef = doc(db, "cases", search.trim());
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      navigate(`/view/cases/${search.trim()}`);
    } else {
      alert("No case found");
    }
  } catch {
    alert("No case found");
  }

  setSearching(false);
};

  return (
    <header className="home-header">
      <img src={Logo} alt="IDSS Logo" className="home-logo" />
      <h1 className="home-title">IDSS: Global Security, Intelligence & Resilience</h1>
      <p className="home-subtitle">
        Trusted by governments, agencies, and institutions worldwide for actionable intelligence, cyber defense, and operational support.
      </p>
      <nav className="home-nav">
        <button onClick={() => navigate("/")}>Home</button>
        <button onClick={() => navigate("/about")}>About</button>
        <button onClick={() => navigate("/services")}>Services</button>
        <button onClick={() => navigate("/contact")}>Contact</button>
      </nav>
      <form className="case-search-form" onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search for cases, incidents, or Case ID..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="case-search-input"
        />
        <button type="submit" className="case-search-btn" disabled={searching}>
          {searching ? "Searching..." : "Search"}
        </button>
        {error && <span style={{ color: "#B80C09", marginLeft: "1rem" }}>{error}</span>}
      </form>
    </header>
  );
};

export default Nav;