const Footer = () => {
  return (
    <footer className="home-footer">
      <div className="footer-grid">
        <div className="footer-column">
          <h4>About IDSS</h4>
          <p>
            The Integrated Defense & Surveillance Service (IDSS) is a sovereign-authorized entity dedicated to safeguarding national interests through strategic intelligence, risk mitigation, and high-level threat response. Operating across jurisdictions, IDSS partners with global agencies to ensure operational readiness, crisis resilience, and secure data ecosystems.
          </p>
        </div>

        <div className="footer-column">
          <h4>Global Headquarters</h4>
          <p>Secure Operations Wing, Sector 12</p>
          <p>Geneva Administrative Zone, Switzerland</p>
          <p>Email: securedesk@idss-intl.org</p>
          <p>Tel: +41 22 555 0198</p>
        </div>

        <div className="footer-column">
          <h4>Governance & Compliance</h4>
          <ul>
            <li><a href="/privacy-policy">Privacy Policy</a></li>
            <li><a href="/data-governance">Data Sovereignty</a></li>
            <li><a href="/compliance">Oversight & Regulation</a></li>
            <li><a href="/accessibility">Accessibility Framework</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Knowledge & Resources</h4>
          <ul>
            <li><a href="/briefs">Strategic Briefings</a></li>
            <li><a href="/whitepapers">Research & Whitepapers</a></li>
            <li><a href="/alliances">Interagency Alliances</a></li>
            <li><a href="/careers">Careers at IDSS</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} IDSS. All operations conducted under transnational charter 18-INTL-487B. Certified under the International Security Compliance Framework.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
