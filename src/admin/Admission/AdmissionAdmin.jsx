import React, { useState, useEffect } from "react";
import AdminNav from "../AdminNav";
import { API } from "../../Api/Constent";
import axios from "axios";

function AdmissionAdmin() {
  const [guests, setGuests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [navOpen, setNavOpen] = useState(false);
  const [lastUpdated, setLastUpdated] = useState(null);
  

  const fetchGuests = async () => {
    setLoading(true);
    setError("");
    try {
      const response = await axios.get(`${API}/admission`);
      setGuests(response.data.data);
      setLastUpdated(new Date());
      setLoading(false);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching guests:", error);
      setError("Failed to load guest data");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchGuests();
  }, []);



  // Delete guest handler
  const deleteGuest = async (guestId) => {
    if (!window.confirm("Are you sure you want to delete this guest?")) {
      return;
    }
    try {
      await axios.delete(`${API}/admission/${guestId}`);
      // Refresh guest list after deletion
      fetchGuests();
    } catch (error) {
      console.error("Error deleting guest:", error);
      alert("Failed to delete guest. Please try again.");
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <AdminNav isOpen={navOpen} setIsOpen={setNavOpen} />

      <div className="flex-1 p-6">
        <div className="max-w-4xl mx-auto mt-10 p-6 bg-white rounded shadow-md">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold">Guest List</h2>
            <button
              onClick={fetchGuests}
              disabled={loading}
              className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 disabled:bg-gray-400 flex items-center"
            >
              {loading ? (
                <>
                  <svg
                    className="animate-spin h-5 w-5 mr-2 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v8H4z"
                    ></path>
                  </svg>
                  Refreshing...
                </>
              ) : (
                "Refresh Data"
              )}
            </button>
          </div>

          {lastUpdated && (
            <p className="text-sm text-gray-500 mb-4">
              Last updated: {lastUpdated.toLocaleString()}
            </p>
          )}

          {loading && (
            <div className="text-center py-4">
              <p>Loading guests...</p>
            </div>
          )}

          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
              {error}
            </div>
          )}

          {!loading && !error && (
            <div className="overflow-x-auto">
              {guests.length === 0 ? (
                <p className="text-center py-4">No guests found.</p>
              ) : (
                <table className="min-w-full table-auto border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-200">
                      <th className="px-4 py-2 text-left border border-gray-300">
                        Name
                      </th>
                      <th className="px-4 py-2 text-left border border-gray-300">
                        Address
                      </th>
                      <th className="px-4 py-2 text-left border border-gray-300">
                        Phone
                      </th>
                      <th className="px-4 py-2 text-left border border-gray-300">
                        description
                      </th>
                      <th className="px-4 py-2 text-left border border-gray-300">
                        email
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {guests?.map((guest) => (
                      <tr key={guest._id || guest.id} className="border-b">
                        <td className="px-4 py-2 border border-gray-300">
                          {guest.name}
                        </td>
                        <td className="px-4 py-2 border border-gray-300">
                          {guest.address}
                        </td>
                        <td className="px-4 py-2 border border-gray-300">
                          {guest?.phone}
                        </td>
                        <td className="px-4 py-2 border border-gray-300">
                          {guest?.description}
                        </td>
                        <td className="px-4 py-2 border border-gray-300">
                          {guest?.email}
                        </td>
                        <td className="px-4 py-2 border border-gray-300 space-x-2">
                          <button
                            onClick={() => deleteGuest(guest._id || guest.id)}
                            className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          )}
        </div>
      </div>

    
    </div>
  );
}

export default AdmissionAdmin;