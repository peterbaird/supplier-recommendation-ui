import React, { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

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
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">AI Supplier Recommendation</h1>

      <Card className="mb-6 p-4 bg-red-100">
        <CardContent>
          <h2 className="text-xl font-semibold">Flagged Supplier: {flaggedSupplier.name}</h2>
          <p>Risk Score: {flaggedSupplier.riskScore}</p>
          <p>Tier-N Risk Exposure: {flaggedSupplier.tierNRisk}</p>
          <p>Self-Assessment Score: {flaggedSupplier.selfAssessment}</p>
          <p>Geopolitical Stability: {flaggedSupplier.geopoliticalStability}</p>
        </CardContent>
      </Card>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Supplier</TableHead>
            <TableHead>Recommendation Score</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {suppliers.map((supplier, index) => (
            <TableRow key={index}>
              <TableCell>{supplier.Supplier}</TableCell>
              <TableCell>{supplier["Recommendation Score"].toFixed(2)}</TableCell>
              <TableCell><Button variant="outline">Compare</Button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
