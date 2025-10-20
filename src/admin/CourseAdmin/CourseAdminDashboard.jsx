import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { 
  HomeIcon, 
  UsersIcon, 
  ChartBarIcon, 
  Cog6ToothIcon, 
  ArrowRightOnRectangleIcon,
  Bars3Icon,
  XMarkIcon
} from '@heroicons/react/24/outline';
import { FaDiscourse } from "react-icons/fa";
import { API } from '../../Api/Constent';
import AdminNav from '../AdminNav';



const CourseAdminDashboard = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [deleteConfirm, setDeleteConfirm] = useState(null);
  const [navOpen, setNavOpen] = useState(false);

  // Fetch all courses
  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      const response = await axios.get(`${API}/course`);
      setCourses(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching courses:', error);
      setError('Failed to load courses');
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API}/course/${id}`);
      // Remove the course from the local state
      setCourses(courses.filter(course => course._id !== id));
      setDeleteConfirm(null);
    } catch (error) {
      console.error('Error deleting course:', error);
      setError('Failed to delete course');
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-xl">Loading courses...</div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-gray-100">
      <AdminNav isOpen={navOpen} setIsOpen={setNavOpen} />
      
      {/* Main Content */}
      <div className="flex-1 lg:ml-64 p-4 lg:p-6">
        <div className="bg-white rounded-lg shadow-md p-4 lg:p-6">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-6 gap-4">
            <h1 className="text-2xl lg:text-3xl font-bold text-gray-800">Course Management</h1>
            <a 
              href="/admin/courses/create" 
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition w-full lg:w-auto text-center"
            >
              Add New Course
            </a>
          </div>

          {error && (
            <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-md">
              {error}
            </div>
          )}

          {courses.length === 0 ? (
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <p className="text-gray-600">No courses found. Create your first course!</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white rounded-lg overflow-hidden">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Course
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden sm:table-cell">
                      Duration
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden md:table-cell">
                      Rating
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden lg:table-cell">
                      Students
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {courses.map((course) => (
                    <tr key={course._id} className="hover:bg-gray-50">
                      <td className="px-4 py-4">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10">
                            <img
                              className="h-10 w-10 rounded-md object-cover"
                              src={course.image}
                              alt={course.title}
                            />
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">
                              {course.title}
                            </div>
                            <div className="text-sm text-gray-500 line-clamp-1 max-w-xs">
                              {course.descriptions}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-500 hidden sm:table-cell">
                        {course.duration}
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-500 hidden md:table-cell">
                        <div className="flex items-center">
                          <span className="text-yellow-500 mr-1">★</span>
                          {course.rating || 'N/A'}
                        </div>
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-500 hidden lg:table-cell">
                        {course.student || '0'}
                      </td>
                      <td className="px-4 py-4 text-sm font-medium">
                        <div className="flex flex-col sm:flex-row sm:space-x-2 space-y-2 sm:space-y-0">
                          <a
                            href={`/admin/courses/update/${course._id}`}
                            className="text-indigo-600 hover:text-indigo-900 bg-indigo-50 px-3 py-1 rounded-md text-center"
                          >
                            Edit
                          </a>
                          <button
                            onClick={() => setDeleteConfirm(course._id)}
                            className="text-red-600 hover:text-red-900 bg-red-50 px-3 py-1 rounded-md"
                          >
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* Delete Confirmation Modal */}
          {deleteConfirm && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
              <div className="bg-white rounded-lg max-w-md w-full p-6">
                <h3 className="text-lg font-medium text-gray-900 mb-4">Confirm Deletion</h3>
                <p className="text-gray-600 mb-6">
                  Are you sure you want to delete this course? This action cannot be undone.
                </p>
                <div className="flex justify-end space-x-4">
                  <button
                    onClick={() => setDeleteConfirm(null)}
                    className="px-4 py-2 text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={() => handleDelete(deleteConfirm)}
                    className="px-4 py-2 text-white bg-red-600 rounded-md hover:bg-red-700"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CourseAdminDashboard;