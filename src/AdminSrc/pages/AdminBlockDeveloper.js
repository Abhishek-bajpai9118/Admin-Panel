import React, { useState } from "react";

const DeveloperTable = () => {
  // Generate initial 10 sample developers
  const sampleDevelopers = [
    { id: 1, name: "Alice Johnson", email: "alice@devmail.com", skill: "React", status: "active" },
    { id: 2, name: "Bob Smith", email: "bob@devmail.com", skill: "Angular", status: "active" },
    { id: 3, name: "Charlie Brown", email: "charlie@devmail.com", skill: "Vue", status: "active" },
    { id: 4, name: "David Lee", email: "david@devmail.com", skill: "Node.js", status: "active" },
    { id: 5, name: "Eva Green", email: "eva@devmail.com", skill: "Python", status: "active" },
    { id: 6, name: "Frank White", email: "frank@devmail.com", skill: "Ruby", status: "active" },
    { id: 7, name: "Grace Hopper", email: "grace@devmail.com", skill: "C++", status: "active" },
    { id: 8, name: "Hank Miller", email: "hank@devmail.com", skill: "Java", status: "active" },
    { id: 9, name: "Ivy Adams", email: "ivy@devmail.com", skill: "Kotlin", status: "active" },
    { id: 10, name: "Jack Carter", email: "jack@devmail.com", skill: "Go", status: "active" },
  ];

  const [developers, setDevelopers] = useState(sampleDevelopers);

  // Function to toggle the block/unblock status
  const toggleStatus = (id) => {
    setDevelopers((prevDevelopers) =>
      prevDevelopers.map((dev) =>
        dev.id === id
          ? { ...dev, status: dev.status === "active" ? "blocked" : "active" }
          : dev
      )
    );
  };

  return (
    <div className="pt-24 -mt-[70px] p-2 ">
      <h2 className="flex justify-center items-center text-2xl font-bold mb-4 text-gray-700">Developer Management</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="border border-gray-300 px-4 py-2">ID</th>
              <th className="border border-gray-300 px-4 py-2">Name</th>
              <th className="border border-gray-300 px-4 py-2">Email</th>
              <th className="border border-gray-300 px-4 py-2">Skill</th>
              <th className="border border-gray-300 px-4 py-2">Status</th>
              <th className="border border-gray-300 px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {developers.map((dev) => (
              <tr
                key={dev.id}
                className={`${
                  dev.status === "blocked" ? "bg-red-100" : "bg-white"
                }`}
              >
                <td className="border border-gray-300 px-4 py-2">{dev.id}</td>
                <td className="border border-gray-300 px-4 py-2">{dev.name}</td>
                <td className="border border-gray-300 px-4 py-2">{dev.email}</td>
                <td className="border border-gray-300 px-4 py-2">{dev.skill}</td>
                <td className="border border-gray-300 px-4 py-2 capitalize">{dev.status}</td>
                <td className="border border-gray-300 px-4 py-2">
                  <button
                    onClick={() => toggleStatus(dev.id)}
                    className={`px-4 py-2 rounded text-white ${
                      dev.status === "active"
                        ? "bg-green-500 hover:bg-green-600"
                        : "bg-red-500 hover:bg-red-600"
                    }`}
                  >
                    {dev.status === "active" ? "Block" : "Unblock"}
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

export default DeveloperTable;
