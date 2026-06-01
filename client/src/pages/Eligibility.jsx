import { useState } from "react";
import { scholarships } from "../data/scholarships";

export default function Eligibility() {
  const [category, setCategory] = useState("");
  const [income, setIncome] = useState("");
  const [education, setEducation] = useState("");
  const [results, setResults] = useState([]);

  const checkEligibility = () => {
    const matched = scholarships.filter((s) => {
      const categoryMatch = s.category === category || s.category === "All";
      const incomeMatch = Number(income) <= s.incomeLimit;
      const educationMatch = s.education === education;

      return categoryMatch && incomeMatch && educationMatch;
    });

    setResults(matched);
  };

  return (
    <div className="page">
      <h1>AI Eligibility Checker</h1>
      <p className="page-subtitle">
        Enter your details and get scholarship recommendations instantly.
      </p>

      <div className="form-box">
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">Select Category</option>
          <option value="SC">SC</option>
          <option value="ST">ST</option>
          <option value="OBC">OBC</option>
          <option value="General">General</option>
          <option value="Female">Female</option>
        </select>

        <input
          type="number"
          placeholder="Annual Family Income"
          value={income}
          onChange={(e) => setIncome(e.target.value)}
        />

        <select value={education} onChange={(e) => setEducation(e.target.value)}>
          <option value="">Select Education Level</option>
          <option value="School">School</option>
          <option value="College">College</option>
        </select>

        <button onClick={checkEligibility}>Check Eligibility</button>
      </div>

      <div className="result-section">
        {results.length > 0 ? (
          results.map((item) => (
            <div className="result-card" key={item.id}>
              <h3>{item.name}</h3>
              <p>{item.amount}</p>
              <p><b>Deadline:</b> {item.deadline}</p>
            </div>
          ))
        ) : (
          <p className="empty">No result yet. Fill the form and check eligibility.</p>
        )}
      </div>
    </div>
  );
}