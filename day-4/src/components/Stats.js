import React from "react";
import "./stats.css";

const stats = [
  { id: 1, name: 'Total Transactions', value: '44 million' },
  { id: 2, name: 'Total Bills Paid', value: '25,000' },
  { id: 3, name: 'Users Registered', value: '10,000' },
  { id: 4, name: 'Total Revenue', value: '$119 million' },
];

const Stats = () => {
  return (
    <div className="stats-container">
      <div className="stats-header">
        <h2>Trusted by thousands of customers worldwide</h2>
      </div>
      <div className="stats-grid">
        {stats.map((stat) => (
          <div key={stat.id} className="stats-item">
            <div className="stat-name">{stat.name}</div>
            <div className="stat-value">{stat.value}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stats;
