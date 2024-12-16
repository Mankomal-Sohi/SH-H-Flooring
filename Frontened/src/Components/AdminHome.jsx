import { useState, useEffect } from "react";

const AdminHome = () => {
  const [users, setUsers] = useState([]);
  const [estimates, setEstimates] = useState([]);
  const [info, setInfo] = useState([]);
  const [selectedTab, setSelectedTab] = useState("users"); // Default to users tab

  // Fetch users data
  const fetchUsers = async () => {
    const response = await fetch(
      "https://sh-h-flooring-backened.vercel.app/admin/contact"
    );
    const data = await response.json();
    setUsers(data);
  };

  // Fetch estimates data
  const fetchEstimates = async () => {
    const response = await fetch(
      "https://sh-h-flooring-backened.vercel.app/admin/estimates"
    );
    const data = await response.json();
    setEstimates(data);
  };

  // Fetch info data
  const fetchInfo = async () => {
    const response = await fetch(
      "https://sh-h-flooring-backened.vercel.app/admin/info"
    );
    const data = await response.json();
    setInfo(data);
  };

  // Trigger fetch based on selected tab
  useEffect(() => {
    if (selectedTab === "users") {
      fetchUsers();
    } else if (selectedTab === "estimates") {
      fetchEstimates();
    } else if (selectedTab === "info") {
      fetchInfo();
    }
  }, [selectedTab]);

  return (
    <div className="bg-gray-50 min-h-screen p-6">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
        Admin Dashboard
      </h1>

      <div className="mb-4 flex justify-center space-x-4">
        {/* Tab buttons to switch between sections */}
        <button
          onClick={() => setSelectedTab("users")}
          className={`py-2 px-6 rounded-md text-sm font-semibold ${
            selectedTab === "users"
              ? "bg-green-500 text-white"
              : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-100"
          }`}
        >
          Users
        </button>
        <button
          onClick={() => setSelectedTab("estimates")}
          className={`py-2 px-6 rounded-md text-sm font-semibold ${
            selectedTab === "estimates"
              ? "bg-green-500 text-white"
              : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-100"
          }`}
        >
          Estimates
        </button>
        <button
          onClick={() => setSelectedTab("info")}
          className={`py-2 px-6 rounded-md text-sm font-semibold ${
            selectedTab === "info"
              ? "bg-green-500 text-white"
              : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-100"
          }`}
        >
          Info
        </button>
      </div>

      <div className="mt-6">
        {/* Displaying content based on selected tab */}
        {selectedTab === "users" && (
          <div className="overflow-x-auto bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-700 p-4">Users</h2>
            <table className="min-w-full text-sm text-left text-gray-500">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-2 text-gray-700">First Name</th>
                  <th className="px-4 py-2 text-gray-700">Last Name</th>
                  <th className="px-4 py-2 text-gray-700">Email</th>
                  <th className="px-4 py-2 text-gray-700">Phone Number</th>
                  <th className="px-4 py-2 text-gray-700">Postal Code</th>
                  <th className="px-4 py-2 text-gray-700">Comments</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user._id} className="border-t hover:bg-gray-50">
                    <td className="px-4 py-2">{user.FirstName}</td>
                    <td className="px-4 py-2">{user.LastName}</td>
                    <td className="px-4 py-2">{user.email}</td>
                    <td className="px-4 py-2">{user.PhoneNumber}</td>
                    <td className="px-4 py-2">{user.PostalCode}</td>
                    <td className="px-4 py-2">{user.Comments}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {selectedTab === "estimates" && (
          <div className="overflow-x-auto bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-700 p-4">
              Estimates
            </h2>
            <table className="min-w-full text-sm text-left text-gray-500">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-2 text-gray-700">First Name</th>
                  <th className="px-4 py-2 text-gray-700">Last Name</th>
                  <th className="px-4 py-2 text-gray-700">Email Address</th>
                  <th className="px-4 py-2 text-gray-700">Country</th>
                  <th className="px-4 py-2 text-gray-700">Preferred Date</th>
                  <th className="px-4 py-2 text-gray-700">Preferred Time</th>
                  <th className="px-4 py-2 text-gray-700">
                    Products Interested
                  </th>
                  <th className="px-4 py-2 text-gray-700">Comments</th>
                  <th className="px-4 py-2 text-gray-700">Keep Updated</th>
                </tr>
              </thead>
              <tbody>
                {estimates.map((estimate) => (
                  <tr key={estimate._id} className="border-t hover:bg-gray-50">
                    <td className="px-4 py-2">{estimate.firstName}</td>
                    <td className="px-4 py-2">{estimate.lastName}</td>
                    <td className="px-4 py-2">{estimate.emailAddress}</td>
                    <td className="px-4 py-2">{estimate.country}</td>
                    <td className="px-4 py-2">
                      {new Date(estimate.prefferedDate).toLocaleDateString()}
                    </td>
                    <td className="px-4 py-2">{estimate.prefferedTime}</td>
                    <td className="px-4 py-2">
                      {estimate.productsInterested.join(", ")}
                    </td>
                    <td className="px-4 py-2">{estimate.comments}</td>
                    <td className="px-4 py-2">
                      {estimate.keepUpdated ? "Yes" : "No"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {selectedTab === "info" && (
          <div className="overflow-x-auto bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-700 p-4">Info</h2>
            <table className="min-w-full text-sm text-left text-gray-500">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-2 text-gray-700">First Name</th>
                  <th className="px-4 py-2 text-gray-700">Last Name</th>
                  <th className="px-4 py-2 text-gray-700">Email Address</th>
                  <th className="px-4 py-2 text-gray-700">Phone Number</th>
                  <th className="px-4 py-2 text-gray-700">Postal Code</th>
                  <th className="px-4 py-2 text-gray-700">Comments</th>
                </tr>
              </thead>
              <tbody>
                {info.map((entry) => (
                  <tr key={entry._id} className="border-t hover:bg-gray-50">
                    <td className="px-4 py-2">{entry.firstName}</td>
                    <td className="px-4 py-2">{entry.lastName}</td>
                    <td className="px-4 py-2">{entry.emailAddress}</td>
                    <td className="px-4 py-2">{entry.PhoneNumber}</td>
                    <td className="px-4 py-2">{entry.postalCode}</td>
                    <td className="px-4 py-2">{entry.Comments}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminHome;
