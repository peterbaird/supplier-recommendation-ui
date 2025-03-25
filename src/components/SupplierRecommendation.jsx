import React, { useEffect, useState } from "react";

export default function SupplierRecommendation() {
  const [suppliers, setSuppliers] = useState([]);

  useEffect(() => {
    fetch("https://supplier-recommendation-api.onrender.com/recommendations")
      .then(res => res.json())
      .then(data => setSuppliers(data));
  }, []);

  const flaggedSupplier = {
    name: "Supplier X",
    riskScore: 85,
    tierNRisk: 90,
    selfAssessment: 30,
    geopoliticalStability: 40,
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>AI Supplier Recommendation</h1>
      <div style={{ background: '#ffe5e5', padding: 15, marginBottom: 20 }}>
        <h2>Flagged Supplier: {flaggedSupplier.name}</h2>
        <p>Risk Score: {flaggedSupplier.riskScore}</p>
        <p>Tier-N Risk Exposure: {flaggedSupplier.tierNRisk}</p>
        <p>Self-Assessment Score: {flaggedSupplier.selfAssessment}</p>
        <p>Geopolitical Stability: {flaggedSupplier.geopoliticalStability}</p>
      </div>

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Supplier</th>
            <th>Recommendation Score</th>
          </tr>
        </thead>
        <tbody>
          {suppliers.map((supplier, index) => (
            <tr key={index}>
              <td>{supplier.Supplier}</td>
              <td>{supplier["Recommendation Score"].toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
