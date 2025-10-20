import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Layout from '../Layout/Layout';

const CourseDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [course, setCourse] = useState(null);
    const [loading, setLoading] = useState(true);
    const [activeTab, setActiveTab] = useState('overview');

    useEffect(() => {
        fetchCourseDetails();
    }, [id]);

    const fetchCourseDetails = async () => {
        try {
            const response = await fetch(`http://localhost:3000/course/${id}`);
            if (!response.ok) throw new Error('Course not found');
            const data = await response.json();
            setCourse(data);
        } catch (error) {
            console.error('Error fetching course details:', error);
        } finally {
            setLoading(false);
        }
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
                <span className="text-gray-600 ml-2">({rating || 0}/5)</span>
            </div>
        );
    };

    if (loading) {
        return (
            <Layout>
                <div className="min-h-screen flex items-center justify-center bg-gray-50 mt-100">
                    <div className="text-center">
                        <div className="animate-spin rounded-full h-16 w-16 border-4 border-blue-600 border-t-transparent mx-auto mb-4"></div>
                        <p className="text-gray-600 text-lg">Loading course details...</p>
                    </div>
                </div>
            </Layout>
        );
    }

    if (!course) {
        return (
            <Layout>
                <div className="min-h-screen flex items-center justify-center bg-gray-50 mt-100">
                    <div className="text-center bg-white p-8 rounded-xl shadow-lg">
                        <div className="text-6xl mb-4">😕</div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-2">Course Not Found</h2>
                        <p className="text-gray-600 mb-6">The course you're looking for doesn't exist.</p>
                        <button 
                            onClick={() => navigate('/courses')}
                            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300"
                        >
                            Browse All Courses
                        </button>
                    </div>
                </div>
            </Layout>
        );
    }

    return (
        <Layout>
            {/* Hero Section with Full Width Image */}
            <div className="relative w-full h-96 bg-gradient-to-r from-blue-900 to-purple-900">
                <div className="absolute inset-0 bg-black/40"></div>
                <div className="relative container mx-auto px-6 h-full flex items-center">
                    <button 
                        onClick={() => navigate('/courses')}
                        className="absolute top-6 left-6 flex items-center space-x-2 text-white hover:text-gray-200 transition-colors duration-200"
                    >
                        <span className="text-2xl">←</span>
                        <span className="font-semibold">Back to Courses</span>
                    </button>
                    
                    <div className="text-white max-w-4xl">
                        <h1 className="text-5xl font-bold mb-4">{course.title}</h1>
                        <p className="text-xl mb-6 opacity-90">{course.descriptions}</p>
                        <div className="flex items-center space-x-6">
                            <div className="flex items-center space-x-2">
                                <span className="text-2xl">⭐</span>
                                {renderStars(course.rating)}
                            </div>
                            <div className="flex items-center space-x-2">
                                <span className="text-2xl">🎓</span>
                                <span className="font-semibold">{course.student || '0'} Students</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <span className="text-2xl">⏱️</span>
                                <span className="font-semibold">{course.duration}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-6 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                    {/* Left Sidebar - Course Info */}
                    <div className="lg:col-span-1">
                        <div className="bg-white rounded-xl shadow-lg sticky top-24 p-6">
                            <div className="text-center mb-6">
                                <img 
                                    src={course.image} 
                                    alt={course.title}
                                    className="w-full h-48 object-cover rounded-lg mb-4"
                                    onError={(e) => {
                                        e.target.src = `https://via.placeholder.com/300x200/4f46e5/ffffff?text=${encodeURIComponent(course.title)}`;
                                    }}
                                />
                                <button className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-semibold text-lg transition-colors duration-300 mb-4">
                                    Enroll Now
                                </button>
                                <p className="text-gray-600 text-sm">Join {course.student || '100+'} students</p>
                            </div>

                            <div className="space-y-4">
                                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                                    <span className="text-gray-600">Duration</span>
                                    <span className="font-semibold">{course.duration}</span>
                                </div>
                                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                                    <span className="text-gray-600">Projects</span>
                                    <span className="font-semibold">{course.project || '5+'}</span>
                                </div>
                                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                                    <span className="text-gray-600">Rating</span>
                                    <span className="font-semibold">{course.rating || '4.5'}/5</span>
                                </div>
                                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                                    <span className="text-gray-600">Students</span>
                                    <span className="font-semibold">{course.student || '100+'}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Content - Course Details */}
                    <div className="lg:col-span-3">
                        {/* Navigation Tabs */}
                        <div className="bg-white rounded-xl shadow-lg mb-8">
                            <div className="border-b border-gray-200">
                                <nav className="flex space-x-8 px-6">
                                    {['overview', 'curriculum', 'careers'].map((tab) => (
                                        <button
                                            key={tab}
                                            onClick={() => setActiveTab(tab)}
                                            className={`py-4 px-1 border-b-2 font-medium text-lg transition-all duration-200 ${
                                                activeTab === tab
                                                    ? 'border-red-500 text-red-600'
                                                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                            }`}
                                        >
                                            {tab === 'overview' && 'Course Overview'}
                                            {tab === 'curriculum' && 'Course Curriculum'}
                                            {tab === 'careers' && 'Career Opportunities'}
                                        </button>
                                    ))}
                                </nav>
                            </div>

                            {/* Tab Content */}
                            <div className="p-6">
                                {activeTab === 'overview' && (
                                    <div className="space-y-6">
                                        <div>
                                            <h3 className="text-2xl font-bold text-gray-900 mb-4">About This Course</h3>
                                            <p className="text-gray-700 leading-relaxed text-lg">{course.descriptions}</p>
                                        </div>
                                        
                                        {course.review && (
                                            <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                                                <h4 className="text-xl font-semibold text-gray-900 mb-3">Student Review</h4>
                                                <p className="text-gray-700 italic text-lg">"{course.review}"</p>
                                            </div>
                                        )}

                                        {/* Key Features */}
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                                            <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                                                <div className="text-3xl text-red-600">🎯</div>
                                                <div>
                                                    <h4 className="font-semibold text-gray-900">Practical Learning</h4>
                                                    <p className="text-gray-600">Hands-on projects and real-world scenarios</p>
                                                </div>
                                            </div>
                                            <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                                                <div className="text-3xl text-red-600">👨‍🏫</div>
                                                <div>
                                                    <h4 className="font-semibold text-gray-900">Expert Instructors</h4>
                                                    <p className="text-gray-600">Learn from industry professionals</p>
                                                </div>
                                            </div>
                                            <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                                                <div className="text-3xl text-red-600">📱</div>
                                                <div>
                                                    <h4 className="font-semibold text-gray-900">Flexible Schedule</h4>
                                                    <p className="text-gray-600">Learn at your own pace</p>
                                                </div>
                                            </div>
                                            <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                                                <div className="text-3xl text-red-600">💼</div>
                                                <div>
                                                    <h4 className="font-semibold text-gray-900">Career Support</h4>
                                                    <p className="text-gray-600">Job placement assistance</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {activeTab === 'curriculum' && course.courseCurriculum && (
                                    <div>
                                        <h3 className="text-2xl font-bold text-gray-900 mb-6">Course Curriculum</h3>
                                        <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                                            <div className="prose prose-lg max-w-none">
                                                {course.courseCurriculum.split('\n').map((line, index) => (
                                                    <div key={index} className="mb-3 flex items-start">
                                                        <span className="text-red-600 mr-3 mt-1">▶</span>
                                                        <span className="text-gray-700">{line}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {activeTab === 'careers' && course.careerOpportunities && (
                                    <div>
                                        <h3 className="text-2xl font-bold text-gray-900 mb-6">Career Opportunities</h3>
                                        <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                                            <p className="text-gray-700 leading-relaxed text-lg">
                                                {course.careerOpportunities}
                                            </p>
                                        </div>
                                        
                                        {/* Career Paths */}
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                                            <div className="text-center p-6 bg-white border border-gray-200 rounded-lg">
                                                <div className="text-4xl mb-4">💼</div>
                                                <h4 className="font-semibold text-gray-900 mb-2">Job Ready</h4>
                                                <p className="text-gray-600">Prepare for industry roles</p>
                                            </div>
                                            <div className="text-center p-6 bg-white border border-gray-200 rounded-lg">
                                                <div className="text-4xl mb-4">🚀</div>
                                                <h4 className="font-semibold text-gray-900 mb-2">Career Growth</h4>
                                                <p className="text-gray-600">Advance your career path</p>
                                            </div>
                                            <div className="text-center p-6 bg-white border border-gray-200 rounded-lg">
                                                <div className="text-4xl mb-4">🌍</div>
                                                <h4 className="font-semibold text-gray-900 mb-2">Global Opportunities</h4>
                                                <p className="text-gray-600">Work anywhere in the world</p>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Call to Action */}
                        <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-xl p-8 text-center text-white">
                            <h3 className="text-3xl font-bold mb-4">Ready to Start Your Learning Journey?</h3>
                            <p className="text-red-100 text-lg mb-6">
                                Join {course.student || 'hundreds of'} students who have transformed their careers with this course
                            </p>
                            <button className="bg-white text-red-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                                Enroll Now - Limited Seats Available!
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default CourseDetails;