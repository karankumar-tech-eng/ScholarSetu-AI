import { scholarships } from "../data/scholarships";

export default function Scholarships() {
  return (
    <div className="page">
      <h1>Available Scholarships</h1>
      <p className="page-subtitle">
        Explore government and private scholarships based on category, income, and education level.
      </p>

      <div className="card-grid">
        {scholarships.map((item) => (
          <div className="scholar-card" key={item.id}>
            <span className="badge">{item.status}</span>
            <h3>{item.name}</h3>
            <p><b>Category:</b> {item.category}</p>
            <p><b>Education:</b> {item.education}</p>
            <p><b>Income Limit:</b> ₹{item.incomeLimit}</p>
            <p><b>Amount:</b> {item.amount}</p>
            <p><b>Deadline:</b> {item.deadline}</p>
            <button>Apply Now</button>
          </div>
        ))}
      </div>
    </div>
  );
}