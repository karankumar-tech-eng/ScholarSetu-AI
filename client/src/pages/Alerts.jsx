export default function Alerts() {
  const alerts = [
    {
      id: 1,
      title: "Post Matric Scholarship deadline approaching",
      date: "31 July 2026",
      type: "Deadline Alert",
    },
    {
      id: 2,
      title: "Upload caste certificate for verification",
      date: "Pending",
      type: "Document Alert",
    },
    {
      id: 3,
      title: "New scholarship added for college students",
      date: "Today",
      type: "New Scheme",
    },
  ];

  return (
    <div className="page">
      <h1>Deadline Alerts</h1>
      <p className="page-subtitle">
        Never miss scholarship deadlines and required document updates.
      </p>

      <div className="alert-list">
        {alerts.map((alert) => (
          <div className="alert-card" key={alert.id}>
            <span>{alert.type}</span>
            <h3>{alert.title}</h3>
            <p>{alert.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
}