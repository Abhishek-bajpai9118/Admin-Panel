import React, { useState } from "react";

const ClientTable = () => {
  // Sample client data
  const sampleClients = [
    { id: 1, name: "Alice Johnson", email: "alice@example.com", contact: "9876543210", status: "active" },
    { id: 2, name: "Bob Smith", email: "bob@example.com", contact: "8765432109", status: "active" },
    { id: 3, name: "Charlie Brown", email: "charlie@example.com", contact: "7654321098", status: "active" },
    { id: 4, name: "David Lee", email: "david@example.com", contact: "6543210987", status: "active" },
    { id: 5, name: "Eva Green", email: "eva@example.com", contact: "5432109876", status: "active" },
    { id: 6, name: "Frank White", email: "frank@example.com", contact: "4321098765", status: "active" },
    { id: 7, name: "Grace Hopper", email: "grace@example.com", contact: "3210987654", status: "active" },
    { id: 8, name: "Hank Miller", email: "hank@example.com", contact: "2109876543", status: "active" },
    { id: 9, name: "Ivy Adams", email: "ivy@example.com", contact: "1098765432", status: "active" },
    { id: 10, name: "Jack Carter", email: "jack@example.com", contact: "1987654321", status: "active" },
  ];

  const [clients, setClients] = useState(sampleClients);

  // Toggle block/unblock status
  const toggleStatus = (id) => {
    setClients((prevClients) =>
      prevClients.map((client) =>
        client.id === id
          ? { ...client, status: client.status === "active" ? "blocked" : "active" }
          : client
      )
    );
  };

  return (
    <div className="p-2 min-h-screen ">
      <h2 className="flex justify-center items-center text-2xl font-bold mb-4 text-gray-700">Client Management</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="border border-gray-300 px-4 py-2">ID</th>
              <th className="border border-gray-300 px-4 py-2">Name</th>
              <th className="border border-gray-300 px-4 py-2">Email</th>
              <th className="border border-gray-300 px-4 py-2">Contact</th>
              <th className="border border-gray-300 px-4 py-2">Status</th>
              <th className="border border-gray-300 px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {clients.map((client) => (
              <tr
                key={client.id}
                className={`${
                  client.status === "blocked" ? "bg-red-100" : "bg-white"
                }`}
              >
                <td className="border border-gray-300 px-4 py-2">{client.id}</td>
                <td className="border border-gray-300 px-4 py-2">{client.name}</td>
                <td className="border border-gray-300 px-4 py-2">{client.email}</td>
                <td className="border border-gray-300 px-4 py-2">{client.contact}</td>
                <td className="border border-gray-300 px-4 py-2 capitalize">
                  {client.status}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  <button
                    onClick={() => toggleStatus(client.id)}
                    className={`px-4 py-2 rounded text-white ${
                      client.status === "active"
                        ? "bg-green-500 hover:bg-green-600"
                        : "bg-red-500 hover:bg-red-600"
                    }`}
                  >
                    {client.status === "active" ? "Block" : "Unblock"}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ClientTable;
