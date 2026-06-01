import BackendStatus from "./BackendStatus";

export default function Home() {
  return (
    <div>
      <BackendStatus />
      <section className="hero">
        <div className="hero-text">
          <p className="tag">AI Powered Scholarship & Benefits Platform</p>
          <h1>Find Scholarships & Government Benefits Easily</h1>
          <p>
            ScholarSetu AI helps students discover scholarships, check eligibility,
            verify documents, track applications, and never miss important deadlines.
          </p>

          <div className="buttons">
            <button>Find Scholarships</button>
            <button className="outline">Check Eligibility</button>
          </div>
        </div>

        <div className="hero-card">
          <h3>Platform Features</h3>
          <p>✅ AI Eligibility Checker</p>
          <p>✅ Scholarship Recommendation</p>
          <p>✅ Deadline Alerts</p>
          <p>✅ Document Verification</p>
          <p>✅ College Predictor</p>
          <p>✅ Voice Search Support</p>
        </div>
      </section>

      <section className="stats">
        <div>
          <h2>50+</h2>
          <p>Scholarship Schemes</p>
        </div>
        <div>
          <h2>10K+</h2>
          <p>Students Helped</p>
        </div>
        <div>
          <h2>AI</h2>
          <p>Eligibility Engine</p>
        </div>
      </section>
    </div>
  );
}