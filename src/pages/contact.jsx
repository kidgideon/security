
import Nav from "../components/nav";
import Footer from "../components/footer";

const Contact = () => {
  return (
    <div className="secure-page-contact-wrapper">
      <Nav />
      <main className="secure-page-contact-content">
        <h1 className="secure-page-contact-heading">Contact IDSS</h1>
        <p className="secure-page-contact-intro">
          The International Department of Strategic Security (IDSS) maintains strict but transparent communication channels. Our contact lines are open to government collaborators, international regulatory bodies, and authorized institutional representatives.
        </p>

        <section className="secure-page-contact-section">
          <h2 className="secure-page-contact-subheading">Headquarters</h2>
          <p className="secure-page-contact-paragraph">
            <strong>Global Intelligence Centre</strong><br />
            19 Strathmore Plaza, Geneva, Switzerland<br />
            ZIP 1202<br />
            Tel: +41 22 123 4567<br />
            Email: hq@idss.gov.int
          </p>
        </section>

        <section className="secure-page-contact-section">
          <h2 className="secure-page-contact-subheading">Technical Operations</h2>
          <p className="secure-page-contact-paragraph">
            All inquiries regarding our technical platforms, cyber intelligence infrastructure, or digital case systems should be directed to the Office of Secure Technologies.
          </p>
          <p className="secure-page-contact-paragraph">
            Email: tech-ops@idss.gov.int<br />
            Emergency Line (Encrypted): +41 22 987 6543
          </p>
        </section>

        <section className="secure-page-contact-section">
          <h2 className="secure-page-contact-subheading">Information Requests</h2>
          <p className="secure-page-contact-paragraph">
            For document authentication, FOIA submissions, or security clearance verifications, please submit a formal application through our secure document portal. Unauthorized communication may be subject to international policy restrictions.
          </p>
        </section>

        <section className="secure-page-contact-section">
          <h2 className="secure-page-contact-subheading">Secure Contact Form</h2>
          <form className="secure-page-contact-form">
            <label>
              Full Name:
              <input type="text" placeholder="Your name" required />
            </label>
            <label>
              Institutional Email:
              <input type="email" placeholder="you@institution.gov" required />
            </label>
            <label>
              Message:
              <textarea rows="5" placeholder="Enter your message" required></textarea>
            </label>
            <button type="submit">Submit Securely</button>
          </form>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
