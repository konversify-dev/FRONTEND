import React from "react";
import Navbar from "../../components/layout/Navbar.jsx";
import Button from "../../components/utils/Button";
import Header from "../../components/layout/Header.jsx"; 
import SummaryCard from "../../components/layout/SummaryCard.jsx";

// Import ikon lokal
import usersIcon from "../../assets/sales/users.png";
import chartIcon from "../../assets/sales/chart.png";
import phoneIcon from "../../assets/sales/phone.png";
import handshakeIcon from "../../assets/sales/handshake.png";

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

        {/* 🔸 Summary Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <SummaryCard
            title="Total Leads"
            value="1,248"
            iconSrc={usersIcon}
            altText="Users Icon"
          />
          <SummaryCard
            title="High Probability"
            value="328"
            iconSrc={chartIcon}
            altText="Chart Icon"
          />
          <SummaryCard
            title="Leads Contacted"
            value="856"
            iconSrc={phoneIcon}
            altText="Phone Icon"
          />
          <SummaryCard
            title="Converted Leads"
            value="8"
            iconSrc={handshakeIcon}
            altText="Handshake Icon"
          />
        </div>

        {/* Statistik cards */}
        {/* ... (bagian bawah tetap sama) */}
      </main>
    </div>
  );
}
