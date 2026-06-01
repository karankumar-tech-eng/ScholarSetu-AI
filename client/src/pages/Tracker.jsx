import { useState } from "react";

export default function Tracker() {
  const [applications, setApplications] = useState([
    {
      id: 1,
      name: "Post Matric Scholarship",
      status: "Document Verification",
      progress: 60,
    },
    {
      id: 2,
      name: "National Scholarship Scheme",
      status: "Application Submitted",
      progress: 40,
    },
  ]);

  return (
    <div className="page">
      <h1>Application Tracking</h1>
      <p className="page-subtitle">
        Track scholarship applications and document verification status.
      </p>

      <div className="tracker-list">
        {applications.map((app) => (
          <div className="tracker-card" key={app.id}>
            <h3>{app.name}</h3>
            <p>Status: {app.status}</p>

            <div className="progress-bar">
              <div style={{ width: `${app.progress}%` }}></div>
            </div>

            <p>{app.progress}% Completed</p>
          </div>
        ))}
      </div>
    </div>
  );
}