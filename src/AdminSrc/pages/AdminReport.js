import React, { useState } from "react";

const AdminReport = () => {
  const [activeReport, setActiveReport] = useState("user");

  return (
    <div className="min-h-screen py-10 text-black">
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          {/* Report Header */}
          <div className="bg-gray-800 text-white p-6">
            <h2 className="text-3xl font-bold"> Reports</h2>
          </div>

          {/* Report Filters */}
          <div className="p-6 space-x-6 flex justify-start">
            <button
              onClick={() => setActiveReport("client")}
              className={`px-4 py-2 rounded-md text-white ${activeReport === "user" ? "bg-blue-600" : "bg-gray-600"}`}
            >
              Client Reports
            </button>
            <button
              onClick={() => setActiveReport("developer")}
              className={`px-4 py-2 rounded-md text-white ${activeReport === "user" ? "bg-blue-600" : "bg-gray-600"}`}
            >
              Developer Reports
            </button>
            <button
              onClick={() => setActiveReport("revenue")}
              className={`px-4 py-2 rounded-md text-white ${activeReport === "revenue" ? "bg-blue-600" : "bg-gray-600"}`}
            >
              Revenue Reports
            </button>
            <button
              onClick={() => setActiveReport("activity")}
              className={`px-4 py-2 rounded-md text-white ${activeReport === "activity" ? "bg-blue-600" : "bg-gray-600"}`}
            >
              Activity Reports
            </button>
          </div>

          {/* Report Content */}
          <div className="p-6">
            {activeReport === "client" && (
              <div>
                <h3 className="text-xl font-semibold text-gray-800">User Reports</h3>
                <p className="text-sm text-gray-600">Here you can view detailed reports about user activity, registration, and other details.</p>
                {/* Example of User Report Table */}
                <table className="min-w-full mt-4">
                  <thead>
                    <tr>
                      <th className="py-2 px-4 border">User ID</th>
                      <th className="py-2 px-4 border">Name</th>
                      <th className="py-2 px-4 border">Email</th>
                      <th className="py-2 px-4 border">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="py-2 px-4 border">1</td>
                      <td className="py-2 px-4 border">John Doe</td>
                      <td className="py-2 px-4 border">john@example.com</td>
                      <td className="py-2 px-4 border">Active</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border">2</td>
                      <td className="py-2 px-4 border">Jane Smith</td>
                      <td className="py-2 px-4 border">jane@example.com</td>
                      <td className="py-2 px-4 border">Inactive</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}

              {activeReport === "developer" && (
              <div>
                <h3 className="text-xl font-semibold text-gray-800">Developer Reports</h3>
                <p className="text-sm text-gray-600">Here you can view detailed reports about user activity, registration, and other details.</p>
                {/* Example of User Report Table */}
                <table className="min-w-full mt-4">
                  <thead>
                    <tr>
                      <th className="py-2 px-4 border">User ID</th>
                      <th className="py-2 px-4 border">Name</th>
                      <th className="py-2 px-4 border">Email</th>
                      <th className="py-2 px-4 border">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="py-2 px-4 border">1</td>
                      <td className="py-2 px-4 border">John Doe</td>
                      <td className="py-2 px-4 border">john@example.com</td>
                      <td className="py-2 px-4 border">Active</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border">2</td>
                      <td className="py-2 px-4 border">Jane Smith</td>
                      <td className="py-2 px-4 border">jane@example.com</td>
                      <td className="py-2 px-4 border">Inactive</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}


            {activeReport === "revenue" && (
              <div>
                <h3 className="text-xl font-semibold text-gray-800">Revenue Reports</h3>
                <p className="text-sm text-gray-600">View the total revenue generated from different clients and developers.</p>
                {/* Example of Revenue Report Table */}
                <table className="min-w-full mt-4">
                  <thead>
                    <tr>
                      <th className="py-2 px-4 border">Transaction ID</th>
                      <th className="py-2 px-4 border">Amount</th>
                      <th className="py-2 px-4 border">Date</th>
                      <th className="py-2 px-4 border">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="py-2 px-4 border">TXN001</td>
                      <td className="py-2 px-4 border">$500</td>
                      <td className="py-2 px-4 border">2024-11-20</td>
                      <td className="py-2 px-4 border">Completed</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border">TXN002</td>
                      <td className="py-2 px-4 border">$300</td>
                      <td className="py-2 px-4 border">2024-11-18</td>
                      <td className="py-2 px-4 border">Pending</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}

            {activeReport === "activity" && (
              <div>
                <h3 className="text-xl font-semibold text-gray-800">Activity Reports</h3>
                <p className="text-sm text-gray-600">View recent admin activities, changes made, and actions taken.</p>
                {/* Example of Activity Log */}
                <ul className="space-y-2 mt-4">
                  <li className="text-sm text-gray-600">Updated user profile (Admin) - 1 hour ago</li>
                  <li className="text-sm text-gray-600">Removed inactive user (Admin) - 3 hours ago</li>
                  <li className="text-sm text-gray-600">Reviewed revenue reports (Admin) - 1 day ago</li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminReport;
