import React from 'react';
import GoogleTranslate from '../components/GoogleTranslate';

const AdminSetting = () => {
  return (
    <div className="min-h-screen  p-8">
      <div className="container mx-auto px-4 py-6 bg-white rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">Admin Settings</h1>

        {/* User Management Section */}
        <section className="mb-8">
          <h2 className="text-3xl font-semibold text-gray-700 mb-6">User Management</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <button className="w-full py-3 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-700 transition duration-300">Add User</button>
            <button className="w-full py-3 bg-yellow-500 text-white rounded-md shadow-md hover:bg-yellow-600 transition duration-300">Edit User</button>
            <button className="w-full py-3 bg-red-600 text-white rounded-md shadow-md hover:bg-red-700 transition duration-300">Delete User</button>
          </div>
          <div className="mt-6">
            <h3 className="text-2xl font-semibold text-gray-700">Role Management</h3>
            <button className="mt-2 px-6 py-3 bg-green-600 text-white rounded-md shadow-md hover:bg-green-700 transition duration-300">Manage Roles</button>
          </div>
          <div className="mt-6">
            <h3 className="text-2xl font-semibold text-gray-700">Password Management</h3>
            <button className="mt-2 px-6 py-3 bg-indigo-600 text-white rounded-md shadow-md hover:bg-indigo-700 transition duration-300">Reset Password</button>
          </div>
        </section>

        {/* System Configuration Section */}
        <section className="mb-8">
          <h2 className="text-3xl font-semibold text-gray-700 mb-6">System Configuration</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center items-center">
          
            <button className=""><GoogleTranslate/> Change Language</button>
            <button className="max-h-12 w-full py-3 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 transition duration-300">Date/Time Settings</button>
            <button className="max-h-12 w-full py-3 bg-gray-600 text-white rounded-md shadow-md hover:bg-gray-700 transition duration-300">Update Branding</button>
          </div>
        </section>

        {/* Security Settings Section */}
        <section className="mb-8">
          <h2 className="text-3xl font-semibold text-gray-700 mb-6">Security Settings</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <button className="w-full py-3 bg-orange-600 text-white rounded-md shadow-md hover:bg-orange-700 transition duration-300">Enable 2FA</button>
            <button className="w-full py-3 bg-red-600 text-white rounded-md shadow-md hover:bg-red-700 transition duration-300">View Access Logs</button>
            <button className="w-full py-3 bg-teal-600 text-white rounded-md shadow-md hover:bg-teal-700 transition duration-300">IP Whitelisting</button>
          </div>
        </section>

        {/* Notification Settings Section */}
        <section className="mb-8">
          <h2 className="text-3xl font-semibold text-gray-700 mb-6">Notification Settings</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <button className="w-full py-3 bg-blue-700 text-white rounded-md shadow-md hover:bg-blue-800 transition duration-300">Email Configuration</button>
            <button className="w-full py-3 bg-pink-600 text-white rounded-md shadow-md hover:bg-pink-700 transition duration-300">Push Notifications</button>
          </div>
        </section>

        {/* Payment Configuration Section */}
        <section className="mb-8">
          <h2 className="text-3xl font-semibold text-gray-700 mb-6">Payment Configuration</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <button className="w-full py-3 bg-green-600 text-white rounded-md shadow-md hover:bg-green-700 transition duration-300">Payment Gateway Setup</button>
            <button className="w-full py-3 bg-teal-500 text-white rounded-md shadow-md hover:bg-teal-600 transition duration-300">Tax Settings</button>
          </div>
        </section>

        {/* System Health & Monitoring Section */}
        <section className="mb-8">
          <h2 className="text-3xl font-semibold text-gray-700 mb-6">System Health & Monitoring</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <button className="w-full py-3 bg-indigo-700 text-white rounded-md shadow-md hover:bg-indigo-800 transition duration-300">Server Status</button>
            <button className="w-full py-3 bg-yellow-600 text-white rounded-md shadow-md hover:bg-yellow-700 transition duration-300">Performance Monitoring</button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AdminSetting;
