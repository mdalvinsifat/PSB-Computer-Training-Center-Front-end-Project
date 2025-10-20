import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { API } from '../../Api/Constent';
import AdminNav from '../AdminNav';

const UserDetelis = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [updating, setUpdating] = useState(false);
 const [navOpen, setNavOpen] = useState(false);
    const fetchUsers = async () => {
        try {
            const response = await axios.get(`${API}/auth/get`);
            setUsers(response.data.users);
            setLoading(false);
        } catch (error) {
            console.error("Error fetching users:", error);
            setLoading(false);
        }
    };

    const handleRoleChange = async (userId, newRole) => {
        setUpdating(true);
        try {
            await axios.put(`${API}/auth/${userId}`, { role: newRole });
            // Update local state
            setUsers((prevUsers) =>
                prevUsers.map((user) =>
                    user._id === userId ? { ...user, role: newRole } : user
                )
            );
        } catch (error) {
            console.error("Error updating role:", error);
        } finally {
            setUpdating(false);
        }
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    if (loading) return <p className="p-4 text-gray-600">Loading users...</p>;

    return (
    

      <div className="flex min-h-screen bg-gray-100">
      <AdminNav isOpen={navOpen} setIsOpen={setNavOpen} />

                <div className="p-6 w-full">
            <h2 className="text-2xl font-bold mb-4">User Management</h2>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white rounded shadow">
                    <thead className="bg-gray-800 text-white">
                        <tr>
                            <th className="text-left py-2 px-4">#</th>
                            <th className="text-left py-2 px-4">Email</th>
                            <th className="text-left py-2 px-4">Phone</th>
                            <th className="text-left py-2 px-4">Role</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => (
                            <tr key={user._id} className="border-b hover:bg-gray-50">
                                <td className="py-2 px-4">{index + 1}</td>
                                <td className="py-2 px-4">{user.email}</td>
                                <td className="py-2 px-4">{user.phone}</td>
                                <td className="py-2 px-4">
                                    <select
                                        className="border border-gray-300 rounded px-2 py-1"
                                        value={user.role}
                                        onChange={(e) =>
                                            handleRoleChange(user._id, e.target.value)
                                        }
                                        disabled={updating}
                                    >
                                        <option value="default">Default</option>
                                        <option value="admin">Admin</option>
                                        <option value="moderator">Moderator</option>
                                        <option value="student">Student</option>
                                    </select>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {updating && <p className="text-sm text-blue-500 mt-2">Updating role...</p>}
        </div>
        </div>
    );
};

export default UserDetelis;
