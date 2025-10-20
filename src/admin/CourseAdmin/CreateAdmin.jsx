import axios from 'axios';
import React, { useState } from 'react';
import { API } from '../../Api/Constent';
import AdminNav from '../AdminNav';

const CreateAdmin = () => {
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
    careerOpportunities: ''
  });
  const [navOpen, setNavOpen] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'image') {
      setFormData(prev => ({ ...prev, image: files[0] }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
    // Clear messages when user starts typing
    if (successMessage || errorMessage) {
      setSuccessMessage('');
      setErrorMessage('');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage('');
    setSuccessMessage('');

    try {
      // Validate required fields
      if (!formData.title || !formData.image || !formData.descriptions) {
        setErrorMessage('Please fill in all required fields (Title, Image, Description)');
        setIsLoading(false);
        return;
      }

      const data = new FormData();
      
      // Append all form data
      Object.keys(formData).forEach(key => {
        if (formData[key] !== null && formData[key] !== '') {
          data.append(key, formData[key]);
        }
      });

      console.log('Sending data to:', `${API}/course`);
      
      const response = await axios.post("http://localhost:3000/course", data, {
        headers: {
          'Content-Type': 'multipart/form-data'
        },
        timeout: 10000 // 10 second timeout
      });

      console.log('Course added successfully:', response.data);
      setSuccessMessage('Course created successfully!');

      // Reset form
      setFormData({
        title: '',
        image: null,
        duration: '',
        project: '',
        descriptions: '',
        rating: '',
        review: '',
        student: '',
        courseCurriculum: '',
        careerOpportunities: ''
      });

      // Clear file input
      const fileInput = document.querySelector('input[type="file"]');
      if (fileInput) fileInput.value = '';

    } catch (error) {
      console.error('Error uploading course:', error);
      
      if (error.response) {
        // Server responded with error status
        console.error('Server error response:', error.response.data);
        setErrorMessage(`Server Error: ${error.response.status} - ${error.response.data?.message || 'Please check server logs'}`);
      } else if (error.request) {
        // Request was made but no response received
        console.error('No response received:', error.request);
        setErrorMessage('Network Error: Unable to connect to server. Please check if the server is running.');
      } else {
        // Something else happened
        setErrorMessage(`Error: ${error.message}`);
      }
    } finally {
      setIsLoading(false);
    }
  };

  const resetForm = () => {
    setFormData({
      title: '',
      image: null,
      duration: '',
      project: '',
      descriptions: '',
      rating: '',
      review: '',
      student: '',
      courseCurriculum: '',
      careerOpportunities: ''
    });
    setErrorMessage('');
    setSuccessMessage('');
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      <AdminNav isOpen={navOpen} setIsOpen={setNavOpen} />
      
      {/* Main Content */}
      <div className="flex-1 lg:ml-64 p-4 lg:p-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-6 lg:p-8">
            {/* Header */}
            <div className="mb-8 text-center">
              <h2 className="text-3xl font-bold text-gray-800 mb-2">Create New Course</h2>
              <p className="text-gray-600">Fill out the form below to add a new course to the platform</p>
            </div>

            {/* Messages */}
            {successMessage && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <svg className="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-green-800">{successMessage}</p>
                  </div>
                </div>
              </div>
            )}

            {errorMessage && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-red-800">{errorMessage}</p>
                  </div>
                </div>
              </div>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Title */}
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Course Title <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    required
                    placeholder="Enter course title"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                  />
                </div>

                {/* Image Upload */}
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Course Image <span className="text-red-500">*</span>
                  </label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-gray-400 transition duration-200">
                    <input
                      type="file"
                      name="image"
                      accept="image/*"
                      onChange={handleChange}
                      required
                      className="hidden"
                      id="image-upload"
                    />
                    <label htmlFor="image-upload" className="cursor-pointer">
                      {formData.image ? (
                        <div className="flex items-center justify-center space-x-4">
                          <img
                            src={URL.createObjectURL(formData.image)}
                            alt="Preview"
                            className="h-20 w-20 object-cover rounded-lg"
                          />
                          <div className="text-left">
                            <p className="text-sm font-medium text-gray-700">{formData.image.name}</p>
                            <p className="text-xs text-gray-500">Click to change image</p>
                          </div>
                        </div>
                      ) : (
                        <div>
                          <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48">
                            <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                          <p className="mt-2 text-sm text-gray-600">Click to upload an image</p>
                          <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                        </div>
                      )}
                    </label>
                  </div>
                </div>

                {/* Duration & Project */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Duration <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="duration"
                    value={formData.duration}
                    onChange={handleChange}
                    required
                    placeholder="e.g., 3 months"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Projects</label>
                  <input
                    type="text"
                    name="project"
                    value={formData.project}
                    onChange={handleChange}
                    placeholder="Number of projects"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                {/* Rating & Students */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Rating</label>
                  <input
                    type="number"
                    name="rating"
                    value={formData.rating}
                    onChange={handleChange}
                    min="0"
                    max="5"
                    step="0.1"
                    placeholder="0.0 - 5.0"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Students</label>
                  <input
                    type="number"
                    name="student"
                    value={formData.student}
                    onChange={handleChange}
                    placeholder="Number of students"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                {/* Description */}
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Description <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="descriptions"
                    value={formData.descriptions}
                    onChange={handleChange}
                    required
                    placeholder="Detailed course description"
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  />
                </div>

                {/* Review */}
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Reviews</label>
                  <textarea
                    name="review"
                    value={formData.review}
                    onChange={handleChange}
                    placeholder="Course reviews or testimonials"
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  />
                </div>

                {/* Course Curriculum */}
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Course Curriculum</label>
                  <textarea
                    name="courseCurriculum"
                    value={formData.courseCurriculum}
                    onChange={handleChange}
                    placeholder="Detailed curriculum outline"
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  />
                </div>

                {/* Career Opportunities */}
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Career Opportunities</label>
                  <textarea
                    name="careerOpportunities"
                    value={formData.careerOpportunities}
                    onChange={handleChange}
                    placeholder="Career paths and opportunities after completion"
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  />
                </div>
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
                <button
                  type="submit"
                  disabled={isLoading}
                  className={`flex-1 max-w-md py-3 px-6 rounded-lg font-semibold transition duration-200 ${
                    isLoading 
                      ? 'bg-gray-400 cursor-not-allowed' 
                      : 'bg-blue-600 hover:bg-blue-700 transform hover:scale-105'
                  } text-white shadow-lg`}
                >
                  {isLoading ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Creating Course...
                    </span>
                  ) : (
                    'Create Course'
                  )}
                </button>
                
                <button
                  type="button"
                  onClick={resetForm}
                  className="flex-1 max-w-md py-3 px-6 border border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition duration-200"
                >
                  Reset Form
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateAdmin;