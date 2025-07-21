
import Nav from "../components/nav";
import Footer from "../components/footer";

const Services = () => {
  return (
    <div className="secure-page-services-container">
      <Nav />
      <main className="secure-page-services-content">
        <h1 className="secure-page-services-header">Our Specialized Services</h1>

        <section className="secure-page-services-section">
          <h2 className="secure-page-services-subheader">Investigative Intelligence</h2>
          <p className="secure-page-services-paragraph">
            At IDSS, our investigative intelligence unit operates with the utmost precision and discretion. We leverage cutting-edge digital forensics, cross-border surveillance protocols, and AI-enhanced data mining to uncover critical information in real-time. Our analysts are trained in behavioral profiling, cyber tracking, and human terrain mapping to ensure accuracy and strategic relevance in every report we generate.
          </p>
        </section>

        <section className="secure-page-services-section">
          <h2 className="secure-page-services-subheader">National Security Consultation</h2>
          <p className="secure-page-services-paragraph">
            Governments and multinational organizations partner with IDSS for strategic national security guidance. Our experts assess vulnerabilities in infrastructure, communications, and personnel systems, offering classified recommendations that meet international compliance frameworks. Our advisory services are backed by rigorous simulations and field-tested countermeasure protocols.
          </p>
        </section>

        <section className="secure-page-services-section">
          <h2 className="secure-page-services-subheader">Secure Data Infrastructure</h2>
          <p className="secure-page-services-paragraph">
            IDSS builds and maintains secure, scalable, and fully encrypted cloud-based platforms for sensitive government operations. From blockchain-integrated evidence management systems to classified case archiving protocols, our infrastructure solutions are built for resilience, adaptability, and zero-compromise performance.
          </p>
        </section>

        <section className="secure-page-services-section">
          <h2 className="secure-page-services-subheader">Rapid Response Deployment</h2>
          <p className="secure-page-services-paragraph">
            In moments of crisis or suspected security breach, our field operations team is capable of deploying investigative assets globally within 24 hours. We coordinate with legal bodies, intelligence agencies, and cyber defense units to mitigate threats and secure national interests before escalation.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
