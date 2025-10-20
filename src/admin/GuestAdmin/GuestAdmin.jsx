import React, { useState } from "react";
import AdminNav from "../AdminNav";
import { API } from "../../Api/Constent";

function GuestAdmin() {
  const [formData, setFormData] = useState({
    name: "",
    course: "",
    address: "",
    phone: "",
  });
  const [navOpen, setNavOpen] = useState(false);
  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`${API}/guest`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        alert("Guest created successfully!");
        setFormData({ name: "", course: "", address: "", phone: "" });
      } else {
        alert("Failed to create guest.");
      }
    } catch (error) {
      alert("Error occurred.");
      console.error(error);
    }
  };

  return (

      <div className="flex min-h-screen bg-gray-100">
      <AdminNav isOpen={navOpen} setIsOpen={setNavOpen} />


    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded shadow-md">
      <h2 className="text-2xl font-semibold mb-6 text-center">Guest Form</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded"
          required
        />
        <input
          type="text"
          name="course"
          placeholder="Course"
          value={formData.course}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded"
        />
        <input
          type="text"
          name="address"
          placeholder="Address"
          value={formData.address}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded"
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded"
          required
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Submit
        </button>
      </form>
    </div>


       </div>



  );
}

export default GuestAdmin;
