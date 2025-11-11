import React from "react";
import Table from "../layout/ReusableTable.jsx";
import { FiEye, FiTrash2 } from "react-icons/fi";
import StatusBadge from "../utils/StatusBadge.jsx";

export default function TableLeadScoring({ searchQuery, filters }) {
  const columns = [
    { header: "ID Lead", accessor: "id" },
    { header: "Leads", accessor: "name" },
    { header: "Probability", accessor: "probability" },
    { header: "Age", accessor: "age" },
    { header: "Job", accessor: "job" },
    {
      header: "Status",
      accessor: "status",
      render: (value) => <StatusBadge status={value} />,
    },
    { header: "Last Contacted", accessor: "lastContact" },
    {
      header: "Action",
      accessor: "action",
      render: () => (
        <div className="flex gap-3 text-lg text-gray-600">
          <FiEye className="cursor-pointer text-blue-500 hover:text-blue-700" />
          <FiTrash2 className="cursor-pointer text-red-500 hover:text-red-700" />
        </div>
      ),
    },
  ];

  const allData = [
    { id: "LD-01", name: "David Fahrreza", probability: "92%", age: 42, job: "Wirausaha", status: "Pending", lastContact: "10/10/2025" },
    { id: "LD-02", name: "Putri Utami Zahara", probability: "85%", age: 35, job: "PNS", status: "Converted", lastContact: "10/10/2025" },
    { id: "LD-03", name: "Andi Pratama", probability: "60%", age: 23, job: "Freelancer", status: "Failed", lastContact: "09/10/2025" },
  ];

  const filteredData = allData.filter((item) => {
    const matchesSearch =
      searchQuery === "" ||
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.id.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesScore =
      filters.score === "" ||
      (filters.score === "High" && parseInt(item.probability) >= 80) ||
      (filters.score === "Medium" && parseInt(item.probability) >= 50 && parseInt(item.probability) < 80) ||
      (filters.score === "Low" && parseInt(item.probability) < 50);

    const matchesAge =
      filters.age === "" ||
      (filters.age === "<25" && item.age < 25) ||
      (filters.age === "25-40" && item.age >= 25 && item.age <= 40) ||
      (filters.age === "40+" && item.age > 40);

    const matchesStatus =
      filters.status === "" || item.status === filters.status;

    const matchesJob =
      filters.job === "" || item.job === filters.job;

    return (
      matchesSearch &&
      matchesScore &&
      matchesAge &&
      matchesStatus &&
      matchesJob
    );
  });

  return <Table columns={columns} data={filteredData} />;
}
