import { useState } from "react";

export default function CollegePredictor() {
  const [rank, setRank] = useState("");
  const [category, setCategory] = useState("");
  const [college, setCollege] = useState("");

  const predictCollege = () => {
    const r = Number(rank);

    if (r <= 5000) {
      setCollege("High chance: Top IITs / NITs / IIITs");
    } else if (r <= 15000) {
      setCollege("Good chance: NITs, IIITs, State Government Colleges");
    } else if (r <= 40000) {
      setCollege("Moderate chance: State Engineering Colleges and Private Universities");
    } else {
      setCollege("You can target private colleges, state counseling, and scholarship-based admission.");
    }
  };

  return (
    <div className="page">
      <h1>College Predictor</h1>
      <p className="page-subtitle">
        Predict possible colleges based on rank, category, and exam performance.
      </p>

      <div className="form-box">
        <input
          type="number"
          placeholder="Enter Your Rank"
          value={rank}
          onChange={(e) => setRank(e.target.value)}
        />

        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">Select Category</option>
          <option value="SC">SC</option>
          <option value="ST">ST</option>
          <option value="OBC">OBC</option>
          <option value="General">General</option>
        </select>

        <button onClick={predictCollege}>Predict College</button>
      </div>

      {college && (
        <div className="result-card">
          <h3>Prediction Result</h3>
          <p>{college}</p>
          <p><b>Category:</b> {category}</p>
        </div>
      )}
    </div>
  );
}