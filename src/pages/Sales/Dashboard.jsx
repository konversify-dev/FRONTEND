import React from "react";
import Navbar from "../../components/layout/Navbar.jsx";
import Button from "../../components/utils/Button";
import Header from "../../components/layout/Header.jsx"; // 🔹 import baru

export default function Dashboard() {
  const handleAddLead = () => {
    console.log("Add Lead clicked!");
  };

  const campaignOptions = [
    { label: "Campaign 1", value: "campaign1" },
    { label: "Campaign 2", value: "campaign2" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 font-lato">
      {/* Navbar */}
      <Navbar />

      {/* Konten utama */}
      <main className="max-w-7xl mx-auto px-6 py-10">
        {/* Header + tombol kanan */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8">
          <Header
            title="Lead Scoring Dashboard"
            subtitle="Prioritize your potential customers effectively."
          />

          <div className="flex gap-3 mt-4 sm:mt-0">
            <Button
              text="Current campaign"
              variant="dropdown"
              options={campaignOptions}
            />
            <Button
              text="Add Lead"
              variant="primary"
              icon="plus"
              onClick={handleAddLead}
            />
          </div>
        </div>

        {/* Statistik cards */}
        {/* ... (bagian bawah tetap sama) */}
      </main>
    </div>
  );
}
