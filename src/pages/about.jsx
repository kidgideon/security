import Nav from "../components/nav";
import Footer from "../components/footer";

const About = () => {
  return (
    <>
      <Nav />
      <div className="about-secure-gov-container">
        <header className="about-secure-gov-header">
          <h1>About the International Digital Surveillance Service (IDSS)</h1>
          <p>
            The IDSS is a high-authority, globally-aligned agency operating under strict legal and constitutional oversight. Our mission is to enhance national and international digital integrity through surveillance, enforcement, and digital intelligence management.
          </p>
        </header>

        <section className="about-secure-gov-section mission-section-gover">
          <h2>Our Mission</h2>
          <p>
            The mission of IDSS is centered around protecting digital infrastructure, enforcing cyber laws, and responding to digital threats in real-time. We provide support for intelligence operations, advanced digital analytics, and technological law enforcement measures that empower justice systems across borders.
          </p>
          <p>
            Our operations are structured to ensure privacy laws are respected while maintaining tight oversight on malicious digital activities, cyber espionage, and illicit data trafficking.
          </p>
        </section>

        <section className="about-secure-gov-section operation-section-legal">
          <h2>Operational Scope</h2>
          <ul>
            <li>Digital case profiling and forensic investigations</li>
            <li>Data surveillance and national infrastructure monitoring</li>
            <li>Cybercrime evidence collation for judicial processing</li>
            <li>Secure digital case storage and retrieval systems</li>
            <li>Borderless collaboration with Interpol and allied agencies</li>
            <li>Incident response to critical cyber threats and leaks</li>
          </ul>
        </section>

        <section className="about-secure-gov-section legal-compliance-info">
          <h2>Legal Compliance</h2>
          <p>
            IDSS operates in strict compliance with the International Data Protection Agreement (IDPA) and follows regional data regulations, including but not limited to GDPR, CCPA, and UN cybersecurity mandates.
          </p>
          <p>
            All data managed or accessed by IDSS is stored under tier-5 compliant encrypted systems with strict key-based access policies. Our personnel undergo regular training on lawful data access, audit trails, and operational ethics.
          </p>
        </section>

        <section className="about-secure-gov-section innovation-infra-block">
          <h2>Innovation & Infrastructure</h2>
          <p>
            With over 120 petabytes of managed digital evidence, our infrastructure is designed for resilience, scalability, and zero-downtime. The agency integrates AI-driven surveillance tools, predictive behavioral analytics, and real-time data mining across federal systems.
          </p>
          <p>
            Our development teams continuously work on proprietary systems used for secure data ingestion, tamper-proof logging, and intelligent red-flagging of anomalous case patterns.
          </p>
        </section>

        <section className="about-secure-gov-section accountability-contact-block">
          <h2>Transparency and Accountability</h2>
          <p>
            Every case is logged with an immutable digital footprint and is subject to audit by both internal and external oversight panels. We believe digital power must be balanced by measurable transparency.
          </p>
          <p>
            The agency publishes a quarterly “State of Surveillance” report detailing our operations, case resolutions, anonymized impact metrics, and international cooperation summaries.
          </p>

          <h3>Contact Our Legal Oversight Department</h3>
          <p>
            For any inquiries regarding data access rights, legal challenges, or policy clarification, please reach out through our secure legal portal at <strong>legal.idss-gov.org</strong>.
          </p>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default About;
