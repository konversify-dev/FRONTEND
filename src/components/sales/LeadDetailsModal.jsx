import React from "react";
import StatusBadge from "../utils/StatusBadge";

export default function LeadDetailsModal({ lead, onStatusChange }) {
  if (!lead) return null;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Bagian kiri: Detail Lead */}
      <div>
        <h2 className="text-primary-light font-semibold text-md mb-2">Lead Details</h2>
        <div className="space-y-2 text-sm text-primary-darkest">
          <p><span className="font-semibold">Lead Name:</span> {lead.name}</p>
          <p><span className="font-semibold">Email:</span> {lead.email}</p>
          <p><span className="font-semibold">Phone Number:</span> {lead.phone}</p>
          <p><span className="font-semibold">Age:</span> {lead.age}</p>
          <p><span className="font-semibold">Job:</span> {lead.job}</p>
          <p><span className="font-semibold">City:</span> {lead.city}</p>
        </div>

        <div className="mt-6">
            <h3 className="text-primary-light font-semibold text-md mb-2">Campaign & Scoring Information</h3>
            <div className="space-y-2 text-sm text-primary-darkest">
                <p><span className="font-semibold">Probability:</span> {lead.probability}</p>
                
                {/* Dropdown Status */}
                <div className="flex items-center gap-2 mt-2">
                    <span className="font-semibold">Status:</span>
                    <select
                    value={lead.status}
                     onChange={(e) => onStatusChange(e.target.value)}
                    className="border border-gray-300 rounded-md px-2 py-1 text-sm focus:ring-2 focus:ring-primary-light focus:outline-none"
                    >
                    <option value="Pending">Pending</option>
                    <option value="Contacted">Contacted</option>
                    <option value="Converted">Converted</option>
                    <option value="Failed">Failed</option>
                    </select>
                    <StatusBadge status={lead.status} />
                </div>
                
                <p><span className="font-semibold">Last Contacted Date:</span> {lead.lastContact}</p>
            </div>

            </div>
      </div>

      {/* Bagian kanan: Logs / Message */}
      <div className="flex flex-col justify-between">
        <h2 className="text-primary-light font-semibold text-md mb-2">Logs/Message</h2>
        <textarea
          placeholder="Type message here..."
          className="w-full border border-gray-300 rounded-lg p-3 text-sm resize-none focus:ring-2 focus:ring-primary-light focus:outline-none"
          rows={8}
        ></textarea>
        <button className="self-end bg-blue-500 hover:bg-blue-600 text-sm text-white font-semibold px-4 py-2 rounded-lg mt-3">
          Post Message
        </button>
      </div>
    </div>
  );
}
