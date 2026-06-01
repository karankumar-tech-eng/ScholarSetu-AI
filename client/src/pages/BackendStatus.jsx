import { useEffect, useState } from "react";

export default function BackendStatus() {
  const [status, setStatus] = useState("Checking backend...");

  useEffect(() => {
    fetch("http://localhost:5000/api/health")
      .then((res) => res.json())
      .then((data) => setStatus(data.message))
      .catch(() => setStatus("Backend not connected"));
  }, []);

  return (
    <div className="result-card status-card">
      <h3>Backend Status</h3>
      <p>{status}</p>
    </div>
  );
}