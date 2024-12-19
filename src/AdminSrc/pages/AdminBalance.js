import React, { useState } from 'react';
import { Bar, Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const AdminMyBalance = () => {
  // State for income, expenses, and net balance
  const [income, setIncome] = useState([5000, 4000, 5500, 4800, 6000, 6500]);
  const [expenses, setExpenses] = useState([3000, 2000, 4000, 3500, 5000, 4500]);
  const [netBalance, setNetBalance] = useState(
    income.map((inc, index) => inc - expenses[index])
  );

  // Update income or expenses and recalculate net balance
  const updateIncome = (value, index) => {
    const updatedIncome = [...income];
    updatedIncome[index] = value;
    setIncome(updatedIncome);
    setNetBalance(updatedIncome.map((inc, idx) => inc - expenses[idx]));
  };

  const updateExpenses = (value, index) => {
    const updatedExpenses = [...expenses];
    updatedExpenses[index] = value;
    setExpenses(updatedExpenses);
    setNetBalance(income.map((inc, idx) => inc - updatedExpenses[idx]));
  };

  // Chart Data
  const barData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Expenses',
        data: expenses,
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Income',
        data: income,
        backgroundColor: 'rgba(75, 192, 192, 0.5)',
      },
    ],
  };

  const lineData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Net Balance',
        data: netBalance,
        borderColor: 'rgba(54, 162, 235, 0.8)',
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
      },
    ],
  };

  const barOptions = {
    responsive: true,
    plugins: {
      legend: { position: 'top' },
      title: { display: true, text: 'Monthly Income vs Expenses' },
    },
  };

  const lineOptions = {
    responsive: true,
    plugins: {
      legend: { position: 'top' },
      title: { display: true, text: 'Monthly Net Balance' },
    },
  };

  return (
    <div className="min-h-screen p-8 ">
      <div className="container mx-auto bg-white shadow-md rounded-lg p-6">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">My Balance</h1>

        {/* Balance Overview Section */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
          <div className="bg-green-500 text-white p-6 rounded-lg shadow-lg">
            <h2 className="text-lg font-medium">Total Income</h2>
            <p className="text-2xl font-bold">
              ₹{income.reduce((total, num) => total + num, 0)}
            </p>
          </div>
          <div className="bg-red-500 text-white p-6 rounded-lg shadow-lg">
            <h2 className="text-lg font-medium">Total Expenses</h2>
            <p className="text-2xl font-bold">
              ₹{expenses.reduce((total, num) => total + num, 0)}
            </p>
          </div>
          <div className="bg-blue-500 text-white p-6 rounded-lg shadow-lg">
            <h2 className="text-lg font-medium">Net Balance</h2>
            <p className="text-2xl font-bold">
              ₹{netBalance.reduce((total, num) => total + num, 0)}
            </p>
          </div>
        </div>

        {/* Graphs Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Bar Chart */}
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <Bar data={barData} options={barOptions} />
          </div>

          {/* Line Chart */}
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <Line data={lineData} options={lineOptions} />
          </div>
        </div>

        {/* Input Section for Updating Data */}
        <div className="mt-8 bg-gray-50 p-6 shadow-lg rounded-lg">
          <h2 className="text-xl font-bold mb-4">Update Monthly Data</h2>
          {income.map((_, index) => (
            <div
              key={index}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4"
            >
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Month {index + 1} Income
                </label>
                <input
                  type="number"
                  value={income[index]}
                  onChange={(e) => updateIncome(Number(e.target.value), index)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Month {index + 1} Expenses
                </label>
                <input
                  type="number"
                  value={expenses[index]}
                  onChange={(e) =>
                    updateExpenses(Number(e.target.value), index)
                  }
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminMyBalance;
