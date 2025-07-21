import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/home.css";
import Nav from "../components/nav";
import Footer from "../components/footer";

const testimonials = [
  {
    sector: "Intelligence Operations",
    quotes: [
      {
        text: "IDSS's integrated threat pipelines have enhanced our own situational awareness. Their predictive intelligence flagged a covert militant cell before our domestic agencies picked it up.",
        author: "Director, National Intelligence Coordination Centre (South Africa)",
      },
      {
        text: "We routinely trust IDSS intelligence briefs during pre-dawn security reviews. Their HUMINT and SIGINT are elite-grade and politically neutral.",
        author: "Deputy Director, Mossad (Israel)",
      },
      {
        text: "Their strategic fusion of Eastern and Western intel has redefined how transnational terror is tracked. IDSS remains our most reliable offshore partner.",
        author: "Chief of Global Analysis, CIA (USA)",
      },
    ],
  },
  {
    sector: "Cybersecurity & Infrastructure Defense",
    quotes: [
      {
        text: "During the 2021 Eastern Bloc cyber grid breach, IDSS was the first to detect the intrusion vector. Their QEGNet recon and containment protocols stabilized our infrastructure within hours.",
        author: "Cybersecurity Division Head, BND (Germany)",
      },
      {
        text: "We adopted their Cyber Threat Protocol as the core model for our national resilience framework. They’re more proactive than any regional CERT.",
        author: "Director, Singapore Cyber Security Agency (CSA)",
      },
    ],
  },
  {
    sector: "Military & Tactical Field Support",
    quotes: [
      {
        text: "Their rapid deployment during the 2017 Sinai hostage crisis was the most disciplined joint operation we’ve seen. Seamless interoperability with our forces.",
        author: "Command Brigadier, Egyptian Armed Forces",
      },
      {
        text: "Our elite unit operations in the Sahel were amplified tenfold by IDSS drone ISR coverage and long-range comms. They're a force multiplier in all terrains.",
        author: "Commander, French Foreign Legion Task Force",
      },
      {
        text: "IDSS operated under our chain of command yet provided autonomous tactical flexibility—a rare balance that made Operation Red Veil a success.",
        author: "Lieutenant General, Indian Army Northern Command",
      },
    ],
  },
  {
    sector: "Law Enforcement & Counter-Narcotics",
    quotes: [
      {
        text: "IDSS dismantled a dark-web drug corridor spanning three continents. Their encrypted ops were handed off cleanly to our domestic prosecutors.",
        author: "Head of International Affairs, DEA (USA)",
      },
      {
        text: "They don't just intercept threats—they build predictive maps that allow us to forecast smuggling shifts before they occur. They’re ten years ahead in pattern analysis.",
        author: "Director, Australian Federal Police Intelligence Division",
      },
    ],
  },
  {
    sector: "Legal, Diplomatic & Compliance",
    quotes: [
      {
        text: "Their treaty-compliant intervention in the Baltic espionage dispute preserved both legality and face for all involved. No other agency could’ve done it.",
        author: "Legal Liaison, European Court of Justice Counterintelligence Desk",
      },
      {
        text: "Their legal risk teams helped prevent a full-scale diplomatic breakdown by handling a live exfiltration under four conflicting jurisdictions. Surgical work.",
        author: "International Counsel, Foreign Relations Directorate (Spain)",
      },
      {
        text: "The IDSS Ombudsman Unit enforced full operational transparency during a civilian rights audit in our capital. They proved that global security can remain accountable.",
        author: "Chief Justice, Constitutional Council (Argentina)",
      },
    ],
  },
  {
    sector: "Multilateral & Global Institutions",
    quotes: [
      {
        text: "IDSS is the connective tissue between national defense, humanitarian protocol, and international law. Their presence is felt quietly but unmistakably in all major crisis zones.",
        author: "UNODC Chief Coordinator for Global Enforcement",
      },
      {
        text: "In NATO briefings, IDSS data models are consistently 20–30% more accurate than any internal NATO country source. That accuracy saves lives.",
        author: "Senior Analyst, NATO Intelligence Fusion Centre",
      },
    ],
  },
];

const Home = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();


  return (
    <div className="home-container">
      <Nav/>
      <main>
        <section className="intro-section">
          <h2>Welcome to IDSS</h2>
          <p>
            IDSS is a global leader in intelligence, security, and resilience solutions. Our multidisciplinary teams operate at the intersection of technology, geopolitics, and operational excellence, delivering actionable insights and mission-critical support to governments, agencies, and multinational organizations.
          </p>
          <ul>
            <li>
              <strong>Global Reach:</strong> Operations in 60+ countries, supporting clients in intelligence, defense, law enforcement, and critical infrastructure.
            </li>
            <li>
              <strong>Proven Impact:</strong> Hundreds of successful interventions, from counter-terrorism to cyber defense and humanitarian crisis management.
            </li>
            <li>
              <strong>Innovation:</strong> Proprietary platforms for threat detection, predictive analytics, and secure communications.
            </li>
            <li>
              <strong>Accountability:</strong> Full legal compliance, transparency, and ethical oversight in every engagement.
            </li>
          </ul>
        </section>

        <section className="services-section">
          <h2>Our Core Services</h2>
          <div className="services-list">
            <div className="service-card">
              <h3>Intelligence Operations</h3>
              <p>
                Strategic and tactical intelligence gathering, analysis, and dissemination. HUMINT, SIGINT, OSINT, and fusion cell operations for real-time threat awareness.
              </p>
            </div>
            <div className="service-card">
              <h3>Cybersecurity & Infrastructure Defense</h3>
              <p>
                Advanced cyber threat detection, incident response, and infrastructure hardening. QEGNet and proprietary protocols for national and enterprise resilience.
              </p>
            </div>
            <div className="service-card">
              <h3>Military & Tactical Support</h3>
              <p>
                Joint operations, ISR (Intelligence, Surveillance, Reconnaissance), and rapid deployment teams. Seamless interoperability with allied forces worldwide.
              </p>
            </div>
            <div className="service-card">
              <h3>Legal, Diplomatic & Compliance</h3>
              <p>
                Treaty-compliant interventions, legal risk management, and diplomatic crisis resolution. Ombudsman unit for operational transparency and civilian rights.
              </p>
            </div>
            <div className="service-card">
              <h3>Multilateral & Global Institutions</h3>
              <p>
                Support for UN, NATO, and international agencies in crisis zones, humanitarian operations, and cross-border enforcement.
              </p>
            </div>
          </div>
        </section>

        <section className="case-studies-section">
          <h2>Case Studies & Impact</h2>
          <div className="case-studies-list">
            <div className="case-card">
              <h4>Sinai Hostage Crisis (2017)</h4>
              <p>
                IDSS coordinated a multi-agency rescue, integrating drone ISR, SIGINT, and on-ground tactical teams. All hostages recovered, zero casualties.
              </p>
            </div>
            <div className="case-card">
              <h4>Baltic Espionage Dispute</h4>
              <p>
                Legal and diplomatic teams preserved treaty compliance and de-escalated a multi-state intelligence standoff, preventing international fallout.
              </p>
            </div>
            <div className="case-card">
              <h4>Eastern Bloc Cyber Grid Breach (2021)</h4>
              <p>
                First to detect and contain a nation-state cyberattack, restoring grid stability within hours and preventing regional blackouts.
              </p>
            </div>
            <div className="case-card">
              <h4>Dark-Web Drug Corridor Takedown</h4>
              <p>
                Dismantled a transcontinental narcotics network using predictive analytics and encrypted operations, leading to dozens of arrests.
              </p>
            </div>
          </div>
          <button className="more-cases-btn" onClick={() => navigate("/cases")}>
            View All Case Studies
          </button>
        </section>

        <section className="testimonials-section">
          <h2 className="section-title">Client Testimonials</h2>
          <div className="testimonials-list">
            {testimonials.map((sector, idx) => (
              <div className="testimonial-sector" key={idx}>
                <h3 className="sector-title">{sector.sector}</h3>
                {sector.quotes.map((quote, qidx) => (
                  <blockquote className="testimonial-quote" key={qidx}>
                    <p className="quote-text">"{quote.text}"</p>
                    <footer className="quote-author">— {quote.author}</footer>
                  </blockquote>
                ))}
              </div>
            ))}
          </div>
        </section>

        <section className="cta-section">
          <h2>Ready to Partner with IDSS?</h2>
          <p>
            Whether you need rapid response, strategic intelligence, or long-term resilience planning, our teams are ready to support your mission.
          </p>
          <button className="cta-btn" onClick={() => navigate("/contact")}>
            Contact Us
          </button>
        </section>

        <section className="capabilities-section">
  <h2>Key Capabilities</h2>
  <ul>
    <li><strong>24/7 Global Threat Monitoring:</strong> Real-time surveillance, alerts, and situational updates from every major continent.</li>
    <li><strong>AI-Driven Threat Forecasting:</strong> Predictive analytics models that preempt attacks before they escalate.</li>
    <li><strong>Secure Data Fusion:</strong> Cross-agency data integration with blockchain-level auditing and traceability.</li>
    <li><strong>Field-Ready Response Units:</strong> Rapid deployment logistics and tactical support embedded globally.</li>
    <li><strong>Counter-Disinformation Units:</strong> Psyops-aware teams combating state-sponsored digital subversion.</li>
  </ul>
</section>

<section className="intel-briefs-section">
  <h2>Latest Intel Briefs</h2>
  <div className="case-studies-list">
    <div className="case-card">
      <h4>North African Maritime Surge</h4>
      <p>Unusual ship traffic patterns in Tripoli detected via QEGNet. Possible smuggling corridor under state proxy watch.</p>
    </div>
    <div className="case-card">
      <h4>APT-5 Variant Spotted</h4>
      <p>New variant of Chinese threat actor group observed targeting critical infrastructure in Southern Europe.</p>
    </div>
    <div className="case-card">
      <h4>Coordinated Telegram Disinfo Ops</h4>
      <p>Three nation-states identified seeding civil unrest narratives across encrypted platforms. IDSS flagged campaign origins.</p>
    </div>
  </div>
  <button className="more-cases-btn" onClick={() => navigate("/briefs")}>View All Briefs</button>
</section>
<section className="idss-strategic-objectives">
  <h2>Strategic Objectives</h2>
  <p>
    The Integrated Defence Surveillance System (IDSS) is established to strengthen national security through unified intelligence efforts...
  </p>
  <ul>
    <li><strong>Threat Identification:</strong> Classify and geo-tag risks across all domains.</li>
    <li><strong>Rapid Interagency Collaboration:</strong> Connect military and civil agencies under one protocol.</li>
    <li><strong>Geopolitical Risk Modeling:</strong> Assess real-time conflict and destabilization factors.</li>
    <li><strong>Technology Integration:</strong> AI, satellite, and drone surveillance working in sync.</li>
  </ul>
</section>


<section className="idss-operational-footprint">
  <h2>Operational Footprint</h2>
  <p>
    From border checkpoints to digital firewalls, IDSS maintains persistent surveillance with immediate response capabilities.
  </p>
  <ul>
    <li><strong>Territorial Oversight:</strong> Border, road, and coastal coverage over 91% of high-traffic zones.</li>
    <li><strong>Cyber Ops Division:</strong> Neutralizing thousands of cyber threats annually.</li>
    <li><strong>UAV Recon Systems:</strong> 63 drone units patrolling strategic air corridors.</li>
    <li><strong>International Liaisons:</strong> Active coordination with Interpol and ECOWAS agencies.</li>
  </ul>
</section>

<section className="idss-tech-stack">
  <h2>Technology Stack & Infrastructure</h2>
  <p>
    Every data point in the IDSS network is backed by zero-latency processing, secure pipelines, and AI-enhanced validation layers.
  </p>
  <ul>
    <li><strong>Real-Time Intelligence:</strong> Zero-delay data synchronization across national ops centers.</li>
    <li><strong>Biometric Surveillance:</strong> 40,000+ checkpoints syncing with identity databases.</li>
    <li><strong>SIGINT Systems:</strong> Detect covert transmissions via electromagnetic spectrum analysis.</li>
    <li><strong>Encryption Layer:</strong> AES-256 secured comms with quantum-resistant overlays.</li>
  </ul>
</section>

<section className="idss-legal-ethics">
  <h2>Legal & Ethical Governance</h2>
  <p>
    IDSS aligns every operation with national law, civil protections, and international surveillance agreements. Our oversight is constant and transparent.
  </p>
  <ul>
    <li><strong>Rule-of-Law Compliance:</strong> Surveillance is always backed by legal authority.</li>
    <li><strong>Civilian Oversight Panels:</strong> External audits are conducted quarterly.</li>
    <li><strong>Data Retention Policy:</strong> Default purge at 120 days unless tied to active casework.</li>
    <li><strong>Transparency Framework:</strong> Full annual reports with risk and cost breakdowns.</li>
  </ul>
</section>

 <Footer/>
      </main>

    </div>
  );
};

export default Home;