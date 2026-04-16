import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../Layout/Layout';

const Course = () => {
    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [filter, setFilter] = useState('all');
    const navigate = useNavigate();

    useEffect(() => {
        fetchCourses();
    }, []);

    const fetchCourses = async () => {
        try {
            const response = await fetch('https://psb-computer-training-center-back-e-nine.vercel.app/course');
            if (!response.ok) throw new Error('Failed to fetch courses');
            const data = await response.json();
            setCourses(data);
        } catch (error) {
            setError('Error loading courses. Please try again later.');
        } finally {
            setLoading(false);
        }
    };

    const handleCardClick = (courseId) => {
        navigate(`/course/${courseId}`);
    };

    const renderStars = (rating) => {
        const fullStars = Math.floor(rating || 0);
        return (
            <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, index) => (
                    <span 
                        key={index} 
                        className={`text-lg ${index < fullStars ? 'text-yellow-400' : 'text-gray-300'}`}
                    >
                        ★
                    </span>
                ))}
                <span className="text-sm text-gray-600 ml-1">({rating || 0})</span>
            </div>
        );
    };

    // Filter courses based on category (you can extend this logic)
    const filteredCourses = courses.filter(course => {
        if (filter === 'all') return true;
        // Add your filtering logic here based on course properties
        return true;
    });

    if (loading) {
        return (
            <Layout>
                <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-blue-50">
                    <div className="text-center">
                        <div className="animate-spin rounded-full h-16 w-16 border-4 border-red-600 border-t-transparent mx-auto mb-4"></div>
                        <p className="text-gray-600 text-lg font-medium">Loading courses...</p>
                    </div>
                </div>
            </Layout>
        );
    }

    if (error) {
        return (
            <Layout>
                <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-blue-50">
                    <div className="text-center bg-white p-8 rounded-2xl shadow-lg">
                        <div className="text-6xl mb-4">😕</div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">Something went wrong</h3>
                        <p className="text-red-600 mb-6">{error}</p>
                        <button 
                            onClick={fetchCourses}
                            className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300"
                        >
                            Try Again
                        </button>
                    </div>
                </div>
            </Layout>
        );
    }

    return (
        <Layout>
            {/* Hero Section */}
            <div className="relative bg-gradient-to-r from-red-600 to-red-800 py-20">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="relative container mx-auto px-6 text-center text-white">
                    <h1 className="text-5xl md:text-6xl font-bold mb-4">Our Courses</h1>
                    <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
                        Discover comprehensive learning programs designed to boost your career
                    </p>
                    <div className="mt-8 flex justify-center">
                        <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
                            <span className="font-semibold">{courses.length}+ Professional Courses</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Courses Section */}
            <div className="bg-gradient-to-br from-gray-50 to-blue-50 py-16">
                <div className="container mx-auto px-6">
                    {/* Filter Tabs */}
                    <div className="flex justify-center mb-12">
                        <div className="bg-white rounded-full p-2 shadow-lg">
                            <button 
                                onClick={() => setFilter('all')}
                                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                                    filter === 'all' 
                                        ? 'bg-red-600 text-white shadow-md' 
                                        : 'text-gray-600 hover:text-red-600'
                                }`}
                            >
                                All Courses
                            </button>
                            {/* Add more filter buttons as needed */}
                            <button 
                                onClick={() => setFilter('popular')}
                                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                                    filter === 'popular' 
                                        ? 'bg-red-600 text-white shadow-md' 
                                        : 'text-gray-600 hover:text-red-600'
                                }`}
                            >
                                Popular
                            </button>
                        </div>
                    </div>

                    {/* Courses Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredCourses.map((course, index) => (
                            <div 
                                key={course._id}
                                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer overflow-hidden"
                                onClick={() => handleCardClick(course._id)}
                            >
                                {/* Course Image */}
                                <div className="relative overflow-hidden">
                                    <img 
                                        src={course.image} 
                                        alt={course.title}
                                        className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                                        onError={(e) => {
                                            e.target.src = `https://via.placeholder.com/400x250/ef4444/ffffff?text=${encodeURIComponent(course.title)}`;
                                        }}
                                    />
                                    <div className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                                        ⏱️ {course.duration}
                                    </div>
                                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                                        <div className="text-white font-semibold text-lg">{course.title}</div>
                                    </div>
                                </div>
                                
                                {/* Course Content */}
                                <div className="p-6">
                                    <div className="flex items-center justify-between mb-3">
                                        <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-semibold">
                                            {course.project || '5+'} Projects
                                        </span>
                                        {course.rating && renderStars(course.rating)}
                                    </div>
                                    
                                    <p className="text-gray-600 mb-4 line-clamp-2 leading-relaxed">
                                        {course.descriptions}
                                    </p>
                                    
                                    {/* Course Meta */}
                                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                                        <div className="flex items-center space-x-4">
                                            <div className="flex items-center space-x-1">
                                                <span className="text-red-500">👨‍🎓</span>
                                                <span>{course.student || '100+'}</span>
                                            </div>
                                            <div className="flex items-center space-x-1">
                                                <span className="text-red-500">⭐</span>
                                                <span>{course.rating || '4.5'}/5</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Action Button */}
                                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                                        <span className="text-red-600 font-semibold group-hover:text-red-700 transition-colors">
                                            View Details
                                        </span>
                                        <span className="text-red-600 transform group-hover:translate-x-1 transition-transform">
                                            →
                                        </span>
                                    </div>
                                </div>

                                {/* Hover Effect Border */}
                                <div className="absolute inset-0 border-2 border-transparent group-hover:border-red-600 rounded-2xl transition-all duration-300 pointer-events-none"></div>
                            </div>
                        ))}
                    </div>

                    {/* Empty State */}
                    {filteredCourses.length === 0 && (
                        <div className="text-center py-16">
                            <div className="text-8xl mb-6">📚</div>
                            <h3 className="text-3xl font-bold text-gray-900 mb-3">No courses found</h3>
                            <p className="text-gray-600 text-lg mb-6">We couldn't find any courses matching your criteria.</p>
                            <button 
                                onClick={() => setFilter('all')}
                                className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300"
                            >
                                View All Courses
                            </button>
                        </div>
                    )}

                    {/* Load More Button (if needed) */}
                    {filteredCourses.length > 0 && (
                        <div className="text-center mt-12">
                            <button className="bg-white text-red-600 border border-red-600 hover:bg-red-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                                Load More Courses
                            </button>
                        </div>
                    )}
                </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-gray-900 to-black text-white py-16">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-4xl font-bold mb-4">Ready to Start Your Journey?</h2>
                    <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                        Join thousands of students who have transformed their careers with our courses
                    </p>
                    <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105">
                        Explore All Courses
                    </button>
                </div>
            </div>
        </Layout>
    );
};

export default Course;