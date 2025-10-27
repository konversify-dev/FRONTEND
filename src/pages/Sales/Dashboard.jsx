import React, { useState } from "react";
import Navbar from "../../components/layout/Navbar.jsx";
import Button from "../../components/utils/Button";
import Header from "../../components/layout/Header.jsx"; 
import SummaryCard from "../../components/layout/SummaryCard.jsx";
import SearchFilterBar from "../../components/utils/SearchFilterBar";
import Table from "../../components/layout/Table.jsx";
import { FiEye, FiEdit2, FiTrash2 } from "react-icons/fi";

// Import ikon lokal
import usersIcon from "../../assets/sales/users.png";
import chartIcon from "../../assets/sales/chart.png";
import phoneIcon from "../../assets/sales/phone.png";
import handshakeIcon from "../../assets/sales/handshake.png";

export default function Dashboard() {
  const handleAddLead = () => {
    console.log("Add Lead clicked!");
  };

    //   Opsi untuk dropdown campaign
    const campaignOptions = [
        { label: "Campaign 1", value: "campaign1" },
        { label: "Campaign 2", value: "campaign2" },
    ];

    // State untuk search dan filter
    const [searchQuery, setSearchQuery] = useState("");
    const [filters, setFilters] = useState({
        score: "",
        age: "",
        status: "",
        job: "",
    });

    const handleSearchChange = (query) => setSearchQuery(query);
    const handleFilterChange = (id, value) =>
        setFilters((prev) => ({ ...prev, [id]: value }));

    const filterOptions = [
        { id: "score", placeholder: "All Scores", options: ["Low", "Medium", "High"] },
        { id: "age", placeholder: "All Ages", options: ["<25", "25-40", "40+"] },
        { id: "status", placeholder: "All Status", options: ["Pending", "Contacted", "Converted"] },
        { id: "job", placeholder: "All Jobs", options: ["Sales", "PNS", "Freelancer"] },
    ];
    console.log(searchQuery, filters);

    // TABEL DATA DAN KOLOM
    const columns = [
    { header: "ID Lead", accessor: "id" },
    { header: "Leads", accessor: "name" },
    { header: "Probability", accessor: "probability" },
    { header: "Age", accessor: "age" },
    { header: "Job", accessor: "job" },
    {
      header: "Status",
      accessor: "status",
      render: (value) => (
        <span
          className={`flex items-center gap-2 ${
            value === "Converted"
              ? "text-green-600"
              : value === "Pending"
              ? "text-yellow-500"
              : value === "Failed"
              ? "text-red-500"
              : "text-blue-500"
          }`}
        >
          <span
            className={`w-2 h-2 rounded-full ${
              value === "Converted"
                ? "bg-green-500"
                : value === "Pending"
                ? "bg-yellow-400"
                : value === "Failed"
                ? "bg-red-500"
                : "bg-blue-400"
            }`}
          ></span>
          {value}
        </span>
      ),
    },
    { header: "Last Contacted", accessor: "lastContact" },
    {
      header: "Action",
      accessor: "action",
      render: () => (
        <div className="flex gap-3 text-lg text-gray-600">
          <FiEye className="cursor-pointer hover:text-blue-500" />
          <FiEdit2 className="cursor-pointer hover:text-yellow-500" />
          <FiTrash2 className="cursor-pointer hover:text-red-500" />
        </div>
      ),
    },
  ];

  const data = [
    {
      id: "LD-01",
      name: "David Fahrreza",
      probability: "92%",
      age: 42,
      job: "Wirausaha",
      status: "Pending",
      lastContact: "10/10/2025",
    },
    {
      id: "LD-02",
      name: "Putri Utami Zahara",
      probability: "85%",
      age: 35,
      job: "PNS",
      status: "Converted",
      lastContact: "10/10/2025",
    },
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-4">
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

        {/* 🔍 Search + Filter Bar */}
        <SearchFilterBar
          filters={filterOptions}
          onSearchChange={handleSearchChange}
          onFilterChange={handleFilterChange}
        />

        {/* 📊 Table Data Leads */
        <div className="p-4">
            <Table columns={columns} data={data} />
        </div>}
      </main>
    </div>
  );
}
