import React from "react";
import { FiEye, FiEdit, FiTrash2 } from "react-icons/fi";
import ReusableTable from "../layout/ReusableTable.jsx";
import StatusBadge from "../utils/StatusBadge";

export default function TableLeadScoring() {
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
      id: "LD-01",
      name: "David Fahrreza",
      probability: "92%",
      age: 42,
      job: "Wirausaha",
      status: "Contacted",
      lastContact: "10/10/2025",
    },
    {
      id: "LD-01",
      name: "David Fahrreza",
      probability: "92%",
      age: 42,
      job: "Wirausaha",
      status: "Failed",
      lastContact: "10/10/2025",
    },
    {
      id: "LD-01",
      name: "David Fahrreza",
      probability: "92%",
      age: 42,
      job: "Wirausaha",
      status: "Converted",
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
    <div className="p-4">
      <ReusableTable columns={columns} data={data} />
    </div>
  );
}
