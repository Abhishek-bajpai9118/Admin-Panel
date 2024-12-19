import React, { useState } from "react";

const AdminMessages = () => {
  // Sample messages data
  const [messages, setMessages] = useState([
    { id: 1, user: "User1", message: "How can I update my profile?", replied: false, reply: "" },
    { id: 2, user: "User2", message: "Can you help me with my payment?", replied: false, reply: "" },
    { id: 3, user: "User3", message: "I need assistance with my account.", replied: false, reply: "" },
  ]);

  // Function to handle message reply
  const handleReply = (id, replyText) => {
    setMessages(
      messages.map((msg) =>
        msg.id === id ? { ...msg, replied: true, reply: replyText } : msg
      )
    );
  };

  return (
    <div className="min-h-screen p-8">
      <div className="container mx-auto bg-white shadow-md rounded-lg p-6">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Admin Messages</h1>

        {/* Message List Section */}
        <div className="space-y-6">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`p-4 rounded-lg shadow-md ${msg.replied ? "bg-green-100" : "bg-gray-50"}`}
            >
              <h3 className="text-lg font-semibold">{msg.user}</h3>
              <p className="text-sm text-gray-600">{msg.message}</p>

              {msg.replied && (
                <div className="mt-2 p-2 bg-blue-100 rounded-md text-sm text-blue-700">
                  <strong>Reply:</strong> {msg.reply}
                </div>
              )}

              {!msg.replied && (
                <div className="mt-4">
                  {/* Only show the reply textarea for the current message */}
                  <textarea
                    className="w-full p-2 border rounded-md"
                    placeholder="Write your reply..."
                    value={msg.reply}
                    onChange={(e) => {
                      const updatedMessages = messages.map((message) =>
                        message.id === msg.id ? { ...message, reply: e.target.value } : message
                      );
                      setMessages(updatedMessages);
                    }}
                  ></textarea>
                  <button
                    className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-md"
                    onClick={() => handleReply(msg.id, msg.reply)}
                  >
                    Reply
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminMessages;
