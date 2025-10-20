import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { API } from '../../Api/Constent';

import { 
  HomeIcon, 
  UsersIcon, 
  ChartBarIcon, 
  Cog6ToothIcon, 

  Bars3Icon,
  XMarkIcon

} from '@heroicons/react/24/outline';

import { FaDiscourse } from "react-icons/fa";
import AdminNav from '../AdminNav';


const UpdateCourseAdmin = () => {
  const { id } = useParams(); // Get course ID from URL
  const navigate = useNavigate();
    const [navOpen, setNavOpen] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    image: null,
    duration: '',
    project: '',
    descriptions: '',
    rating: '',
    review: '',
    student: '',
    courseCurriculum: '',
    careerOpportunities: '',
    currentImageUrl: '' // To show the existing image
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // Fetch the current course data
  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const response = await axios.get(`${API}/course/${id}`);
        const course = response.data;
         
        setFormData({
          title: course.title || '',
          image: null,
          duration: course.duration || '',
          project: course.project || '',
          descriptions: course.descriptions || '',
          rating: course.rating || '',
          review: course.review || '',
          student: course.student || '',
          courseCurriculum: course.courseCurriculum || '',
          careerOpportunities: course.careerOpportunities || '',
          currentImageUrl: course.image || '' // Store the current image URL
        });
        
        setLoading(false);
      } catch (error) {
        console.error('Error fetching course:', error);
        setError('Failed to load course data');
        setLoading(false);
      }
    };

    fetchCourse();
  }, [id]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'image') {
      setFormData(prev => ({ ...prev, image: files[0] }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
   e.preventDefault();
  setError('');

  if (!formData.title.trim()) return setError('Title is required');
  if (!formData.duration.trim()) return setError('Duration is required');
  if (!formData.descriptions.trim()) return setError('Description is required');

    try {
      const data = new FormData();
      data.append('title', formData.title);
      if (formData.image) {
        data.append('image', formData.image); // Only append if a new file is selected
      }
      data.append('duration', formData.duration);
      data.append('project', formData.project);
      data.append('descriptions', formData.descriptions);
      data.append('rating', formData.rating);
      data.append('review', formData.review);
      data.append('student', formData.student);
      data.append('courseCurriculum', formData.courseCurriculum);
      data.append('careerOpportunities', formData.careerOpportunities);

    
        const response = await axios.put(`${API}/course/${id}`, data, {
    headers: { 'Content-Type': 'multipart/form-data' }
  });


      console.log('Course updated:', response.data);
      navigate('/admin/courses'); // Redirect to courses list after update

    } catch (error) {
      console.error('Error updating course:', error);
      setError('Failed to update course. Please try again.');
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="text-xl">Loading course data...</div>
      </div>
    );
  }

  return (
  <div className="flex min-h-screen bg-gray-100">
      <AdminNav isOpen={navOpen} setIsOpen={setNavOpen} />


    <div className="flex-1 lg:ml-64 p-4 lg:p-6">      <h2 className="text-2xl font-semibold mb-6 text-center">Update Course</h2>
      
      {error && (
        <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-md">
          {error}
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="space-y-5">

        {/* Title */}
        <div>
          <label className="block mb-1 font-medium text-gray-700">Title *</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            placeholder="Course title"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Image file upload */}
        <div>
          <label className="block mb-1 font-medium text-gray-700">Image</label>
          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={handleChange}
            className="w-full text-gray-700"
          />
          
          {/* Show current image */}
          {formData.currentImageUrl && !formData.image && (
            <div className="mt-3">
              <p className="text-sm text-gray-600 mb-1">Current Image:</p>
              <img
                src={formData.currentImageUrl}
                alt="Current course"
                className="max-h-40 object-contain"
              />
            </div>
          )}
          
          {/* Show new image preview if selected */}
          {formData.image && (
            <div className="mt-3">
              <p className="text-sm text-gray-600 mb-1">New Image Preview:</p>
              <img
                src={URL.createObjectURL(formData.image)}
                alt="Preview"
                className="max-h-40 object-contain"
              />
            </div>
          )}
        </div>

        {/* Duration */}
        <div>
          <label className="block mb-1 font-medium text-gray-700">Duration *</label>
          <input
            type="text"
            name="duration"
            value={formData.duration}
            onChange={handleChange}
            required
            placeholder="e.g., 3 months"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Project */}
        <div>
          <label className="block mb-1 font-medium text-gray-700">Project</label>
          <input
            type="text"
            name="project"
            value={formData.project}
            onChange={handleChange}
            placeholder="Project details"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Descriptions */}
        <div>
          <label className="block mb-1 font-medium text-gray-700">Descriptions *</label>
          <textarea
            name="descriptions"
            value={formData.descriptions}
            onChange={handleChange}
            required
            placeholder="Course description"
            rows={4}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
          />
        </div>

        {/* Rating */}
        <div>
          <label className="block mb-1 font-medium text-gray-700">Rating</label>
          <input
            type="number"
            name="rating"
            value={formData.rating}
            onChange={handleChange}
            min="0"
            max="5"
            step="0.1"
            placeholder="Rating (0-5)"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Review */}
        <div>
          <label className="block mb-1 font-medium text-gray-700">Review</label>
          <textarea
            name="review"
            value={formData.review}
            onChange={handleChange}
            rows={3}
            placeholder="Course review"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
          />
        </div>

        {/* Student */}
        <div>
          <label className="block mb-1 font-medium text-gray-700">Student</label>
          <input
            type="text"
            name="student"
            value={formData.student}
            onChange={handleChange}
            placeholder="Student info"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Course Curriculum */}
        <div>
          <label className="block mb-1 font-medium text-gray-700">Course Curriculum</label>
          <textarea
            name="courseCurriculum"
            value={formData.courseCurriculum}
            onChange={handleChange}
            rows={4}
            placeholder="Course curriculum details"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
          />
        </div>

        {/* Career Opportunities */}
        <div>
          <label className="block mb-1 font-medium text-gray-700">Career Opportunities</label>
          <textarea
            name="careerOpportunities"
            value={formData.careerOpportunities}
            onChange={handleChange}
            rows={4}
            placeholder="Career opportunities"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
          />
        </div>

        {/* Buttons */}
        <div className="flex space-x-4">
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="w-1/3 mt-6 py-3 bg-gray-500 text-white font-semibold rounded-md hover:bg-gray-600 transition"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="w-2/3 mt-6 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition"
          >
            Update Course
          </button>
        </div>
      </form>
    </div>


  </div>
  );
};

export default UpdateCourseAdmin;