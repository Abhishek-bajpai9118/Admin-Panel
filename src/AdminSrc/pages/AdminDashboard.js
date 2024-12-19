import React from "react";
import { Link } from "react-router-dom";
import { IoHomeOutline } from "react-icons/io5";
import { Bar, Line, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';

const dataClients = {
  labels: ['January', 'February', 'March', 'April', 'May'],
  datasets: [
    {
      label: 'Client Growth',
      data: [10, 20, 30, 40, 50],
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
      borderColor: 'rgba(54, 162, 235, 1)',
      borderWidth: 1,
    },
  ],
};

const dataPie = {
  labels: ['Active', 'Inactive'],
  datasets: [
    {
      data: [70, 30], // Example data
      backgroundColor: ['#36A2EB', '#FF6384'],
      hoverOffset: 4,
    },
  ],
};

const dataLine = {
  labels: ['January', 'February', 'March', 'April', 'May'],
  datasets: [
    {
      label: 'Payments Over Time',
      data: [150, 200, 250, 300, 350],
      borderColor: 'rgba(75, 192, 192, 1)',
      tension: 0.1,
    },
  ],
};

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement);


const Dashboard = () => {
  const clients = [
    { id: 1, name: "Alice Johnson", email: "alice@example.com", status: "Active" },
    { id: 2, name: "Bob Smith", email: "bob@example.com", status: "Inactive" },
    { id: 3, name: "Charlie Brown", email: "charlie@example.com", status: "Active" },
  ];

  const developers = [
    { id: 1, name: "John Doe", specification: "Frontend Developer", status: "Active" },
    { id: 2, name: "Jane Smith", specification: "Backend Developer", status: "Inactive" },
    { id: 3, name: "Samuel Green", specification: "Fullstack Developer", status: "Active" },
  ];

  const payments = [
    { id: 1, date: "2024-03-01 14:30", amount: "$120.00", status: "Completed" },
    { id: 2, date: "2024-03-02 10:15", amount: "$250.00", status: "Pending" },
    { id: 3, date: "2024-03-03 16:45", amount: "$80.00", status: "Failed" },
  ];

  return (
    <div className="min-h-screen w-full p-8 overflow-x-hidden text-black">
      {/* Header Section */}
      <header className="flex items-center justify-between bg-slate-100 text-black lg:py-4 lg:px-6 sm:gap-4 rounded-lg shadow-lg mb-6">
      <h1 className="lg:text-3xl sm:text-xl font-bold tracking-wide flex gap-2 pl-8 lg:pl-1">
  <IoHomeOutline className="mt-0.5" />
  <span className="hidden sm:block lg:visible">Dashboard</span>
</h1>

        <div className="flex space-x-4">
          <button className="bg-green-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-green-600">
            <Link to="./Clientregistration">Add Client</Link>
          </button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600">
            <Link to="./Developerregistration">Add Developer</Link>
          </button>
        </div>
      </header>

      {/* Overview Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-8 text-black">
        {[ 
          { title: "Total Users", count: 120 },
          { title: "Developers", count: 40 },
          { title: "Clients", count: 80 },
          { title: "Projects", count: 50 },
          { title: "Visitors", count: 3000 },
        ].map(({ title, count }) => (
          <div key={title} className="bg-white shadow-md rounded-lg p-4 text-center">
            <h3 className="text-lg font-semibold">{title}</h3>
            <p className="text-3xl font-bold text-blue-600">{count}</p>
          </div>
        ))}
      </div>

      {/* Graphs Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        <div className="bg-white shadow-md rounded-lg p-4">
          <h2 className="text-xl font-semibold mb-4">Client Growth (Bar Chart)</h2>
          <Bar data={dataClients} />
        </div>

        <div className="bg-white shadow-md rounded-lg p-4">
          <h2 className="text-xl font-semibold mb-4">Client Status (Pie Chart)</h2>
          <Pie data={dataPie} />
        </div>

        <div className="bg-white shadow-md rounded-lg p-4">
          <h2 className="text-xl font-semibold mb-4">Payments Over Time (Line Chart)</h2>
          <Line data={dataLine} />
        </div>
      </div>

      {/* Data Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {/* Client Data Table */}
        <div className="bg-white shadow-md rounded-lg p-4">
          <h2 className="text-xl font-semibold mb-4">Client Data</h2>
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b">
                <th className="p-2 font-medium text-gray-700">ID</th>
                <th className="p-2 font-medium text-gray-700">Name</th>
                <th className="p-2 font-medium text-gray-700">Email</th>
                <th className="p-2 font-medium text-gray-700">Status</th>
              </tr>
            </thead>
            <tbody>
              {clients.map((client) => (
                <tr key={client.id} className="border-b">
                  <td className="p-2">{client.id}</td>
                  <td className="p-2">{client.name}</td>
                  <td className="p-2">{client.email}</td>
                  <td className="p-2">{client.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Developer Data Table */}
        <div className="bg-white shadow-md rounded-lg p-4">
          <h2 className="text-xl font-semibold mb-4">Developer Data</h2>
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b">
                <th className="p-2 font-medium text-gray-700">ID</th>
                <th className="p-2 font-medium text-gray-700">Name</th>
                <th className="p-2 font-medium text-gray-700">Specification</th>
                <th className="p-2 font-medium text-gray-700">Status</th>
              </tr>
            </thead>
            <tbody>
              {developers.map((developer) => (
                <tr key={developer.id} className="border-b">
                  <td className="p-2">{developer.id}</td>
                  <td className="p-2">{developer.name}</td>
                  <td className="p-2">{developer.specification}</td>
                  <td className="p-2">{developer.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Payment Data Table */}
      <div className="bg-white shadow-md rounded-lg p-4">
        <h2 className="text-xl font-semibold mb-4">Payment Data</h2>
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b">
              <th className="p-2 font-medium text-gray-700">Payment ID</th>
              <th className="p-2 font-medium text-gray-700">Date & Time</th>
              <th className="p-2 font-medium text-gray-700">Amount</th>
              <th className="p-2 font-medium text-gray-700">Status</th>
            </tr>
          </thead>
          <tbody>
            {payments.map((payment) => (
              <tr key={payment.id} className="border-b">
                <td className="p-2">{payment.id}</td>
                <td className="p-2">{payment.date}</td>
                <td className="p-2">{payment.amount}</td>
                <td className="p-2">{payment.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
