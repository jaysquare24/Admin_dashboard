export const StatCards = ({ icon, title, value }) => {
  return (
    <div className="stat-card">
      <div className="stat-title">
        {icon}  <h4>{title}</h4>
      </div>
      <p className="stat-value">{value}</p>
    </div>
    )
}