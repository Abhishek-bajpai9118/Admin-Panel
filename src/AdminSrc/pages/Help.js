import React from "react";

const Help = () => {
  return (
    <div className="p-8  min-h-screen">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-8">
           Help Section
        </h2>

        {/* Getting Started Section */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-gray-800">Getting Started</h3>
          <p className="text-gray-600 mt-2">
            Follow this guide to set up your admin account and get started with
            the platform. Learn how to configure your dashboard, manage users,
            and more.
          </p>
        </div>

        {/* FAQ Section */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-gray-800">FAQs</h3>
          <ul className="mt-4 space-y-4">
            <li>
              <a
                href="#"
                className="text-blue-600 hover:text-blue-800 hover:underline"
              >
                How to reset my password?
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-blue-600 hover:text-blue-800 hover:underline"
              >
                How to manage users and roles?
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-blue-600 hover:text-blue-800 hover:underline"
              >
                How to integrate with third-party services?
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Support Section */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-gray-800">Need Help?</h3>
          <p className="text-gray-600 mt-2">
            If you can't find an answer to your question, feel free to contact
            us at:
            <a
              href="mailto:support@example.com"
              className="text-blue-600 hover:text-blue-800 hover:underline"
            >
              support@example.com
            </a>
          </p>
        </div>

        {/* System Updates Section */}
        <div>
          <h3 className="text-2xl font-semibold text-gray-800">System Updates</h3>
          <p className="text-gray-600 mt-2">
            Stay up-to-date with the latest system changes, feature additions,
            and improvements to ensure smooth use of the admin panel.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Help;
