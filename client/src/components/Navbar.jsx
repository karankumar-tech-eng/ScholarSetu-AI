import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h2>🎓 ScholarSetu AI</h2>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/scholarships">Scholarships</Link>
        <Link to="/eligibility">Eligibility</Link>
        <Link to="/college-predictor">College Predictor</Link>
        <Link to="/tracker">Track</Link>
        <Link to="/alerts">Alerts</Link>
      </div>
    </nav>
  );
}