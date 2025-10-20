import React from 'react';
import image from "../../Images/Seminar.jpg";

const JoinSeminer = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
                    {/* Text Content */}
                    <div className="flex-1 max-w-2xl">
                        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight mb-6">
                            Join Our <span className="text-indigo-600">Free Seminars</span>
                        </h1>
                        
                        <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                            Need guidance to choose a suitable course? Join our free seminars to consult with our experts. 
                            They will guide you to pick the course that matches your interest and discuss the career prospects.
                        </p>
                        
                        <div className="flex flex-col sm:flex-row gap-4 mb-10">
                            <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-8 rounded-lg shadow-md transition-all duration-300 transform hover:-translate-y-1">
                                Register for Free Seminar
                            </button>
                            <button className="border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-50 font-semibold py-3 px-8 rounded-lg transition-colors duration-300">
                                View Schedule
                            </button>
                        </div>
                        
                        {/* Features List */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="flex items-center">
                                <div className="bg-indigo-100 p-2 rounded-full mr-3">
                                    <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                </div>
                                <span className="text-gray-700">Expert Guidance</span>
                            </div>
                            <div className="flex items-center">
                                <div className="bg-indigo-100 p-2 rounded-full mr-3">
                                    <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                </div>
                                <span className="text-gray-700">Career Advice</span>
                            </div>
                            <div className="flex items-center">
                                <div className="bg-indigo-100 p-2 rounded-full mr-3">
                                    <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                </div>
                                <span className="text-gray-700">Free of Cost</span>
                            </div>
                            <div className="flex items-center">
                                <div className="bg-indigo-100 p-2 rounded-full mr-3">
                                    <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                </div>
                                <span className="text-gray-700">Interactive Q&A</span>
                            </div>
                        </div>
                    </div>
                    
                    {/* Image Content */}
                    <div className="flex-1">
                        <div className="relative">
                            <div className="absolute -inset-4">
                                <div className="w-full h-full max-w-lg mx-auto lg:mx-0 opacity-30 blur-lg bg-gradient-to-r from-indigo-400 to-purple-600 rounded-lg"></div>
                            </div>
                            <img 
                                src={image} 
                                alt="Educational Seminar" 
                                className="relative rounded-xl shadow-2xl w-full max-w-lg mx-auto lg:mx-0 transform hover:scale-105 transition-transform duration-700"
                            />
                            {/* Decorative elements */}
                            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-yellow-400 rounded-full opacity-20"></div>
                            <div className="absolute -top-6 -right-6 w-20 h-20 bg-indigo-400 rounded-full opacity-20"></div>
                        </div>
                        
                        {/* Stats */}
                        <div className="flex justify-center lg:justify-start gap-6 mt-10">
                            <div className="text-center">
                                <div className="text-2xl font-bold text-indigo-700">500+</div>
                                <div className="text-gray-600">Seminars Conducted</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-bold text-indigo-700">10K+</div>
                                <div className="text-gray-600">Participants</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-bold text-indigo-700">95%</div>
                                <div className="text-gray-600">Satisfaction Rate</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JoinSeminer;