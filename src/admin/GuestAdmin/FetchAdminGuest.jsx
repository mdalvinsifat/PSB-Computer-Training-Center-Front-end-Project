import React, { useState, useEffect } from "react";
import AdminNav from "../AdminNav";
import { API } from "../../Api/Constent";
import axios from "axios";

function FetchAdminGuest() {
  const [guests, setGuests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [navOpen, setNavOpen] = useState(false);
  const [lastUpdated, setLastUpdated] = useState(null);
  
  // Edit dialog state
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [editingGuest, setEditingGuest] = useState(null);
  const [editFormData, setEditFormData] = useState({
    name: "",
    course: "",
    address: "",
    phone: ""
  });
  const [saving, setSaving] = useState(false);

  const fetchGuests = async () => {
    setLoading(true);
    setError("");
    try {
      const response = await axios.get(`${API}/guest`);
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

  // Open edit dialog
  const openEditDialog = (guest) => {
    setEditingGuest(guest);
    setEditFormData({
      name: guest.name || "",
      course: guest.course || "",
      address: guest.address || "",
      phone: guest.phone || ""
    });
    setEditDialogOpen(true);
  };

  // Close edit dialog
  const closeEditDialog = () => {
    setEditDialogOpen(false);
    setEditingGuest(null);
    setEditFormData({
      name: "",
      course: "",
      address: "",
      phone: ""
    });
    setSaving(false);
  };

  // Handle edit form input changes
  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Save edited guest
  const saveEditedGuest = async () => {
    if (!editingGuest) return;

    setSaving(true);
    try {
      await axios.put(`${API}/guest/${editingGuest._id || editingGuest.id}`, editFormData);
      
      // Update local state
      setGuests(prevGuests => 
        prevGuests.map(guest => 
          guest._id === editingGuest._id || guest.id === editingGuest.id 
            ? { ...guest, ...editFormData }
            : guest
        )
      );
      
      closeEditDialog();
      alert("Guest updated successfully!");
    } catch (error) {
      console.error("Error updating guest:", error);
      alert("Failed to update guest. Please try again.");
    } finally {
      setSaving(false);
    }
  };

  // Delete guest handler
  const deleteGuest = async (guestId) => {
    if (!window.confirm("Are you sure you want to delete this guest?")) {
      return;
    }
    try {
      await axios.delete(`${API}/guest/${guestId}`);
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
                        Course
                      </th>
                      <th className="px-4 py-2 text-left border border-gray-300">
                        Address
                      </th>
                      <th className="px-4 py-2 text-left border border-gray-300">
                        Phone
                      </th>
                      <th className="px-4 py-2 text-left border border-gray-300">
                        Actions
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
                          {guest.course}
                        </td>
                        <td className="px-4 py-2 border border-gray-300">
                          {guest?.address}
                        </td>
                        <td className="px-4 py-2 border border-gray-300">
                          {guest?.phone}
                        </td>
                        <td className="px-4 py-2 border border-gray-300 space-x-2">
                          <button
                            onClick={() => openEditDialog(guest)}
                            className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
                          >
                            Edit
                          </button>
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

      {/* Edit Dialog/Modal */}
      {editDialogOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-md">
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-4">Edit Guest</h3>
              
              <form onSubmit={(e) => { e.preventDefault(); saveEditedGuest(); }}>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={editFormData.name}
                      onChange={handleEditChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Course
                    </label>
                    <input
                      type="text"
                      name="course"
                      value={editFormData.course}
                      onChange={handleEditChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Address
                    </label>
                    <input
                      type="text"
                      name="address"
                      value={editFormData.address}
                      onChange={handleEditChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Phone *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={editFormData.phone}
                      onChange={handleEditChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                </div>
                
                <div className="flex justify-end space-x-3 mt-6">
                  <button
                    type="button"
                    onClick={closeEditDialog}
                    className="px-4 py-2 text-gray-600 border border-gray-300 rounded hover:bg-gray-50"
                    disabled={saving}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={saving}
                    className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:bg-blue-400 flex items-center"
                  >
                    {saving ? (
                      <>
                        <svg className="animate-spin h-4 w-4 mr-2" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
                        </svg>
                        Saving...
                      </>
                    ) : (
                      "Save Changes"
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default FetchAdminGuest;