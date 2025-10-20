import React from 'react';

const CardHome = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                        Explore Your <span className="text-blue-600">Career Paths</span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        Discover the right opportunity that matches your skills and career aspirations. 
                        We provide guidance and resources for all career stages.
                    </p>
                </div>
                
                {/* Cards Container */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    
                    {/* Job Card */}
                    <div className="relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-300"></div>
                        <div className="relative bg-white rounded-lg shadow-xl h-full overflow-hidden border border-gray-100 transition-all duration-300 group-hover:-translate-y-2">
                            <div className="p-6">
                                <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                                    <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-3">Job Opportunities</h3>
                                <p className="text-gray-600 mb-6">
                                    Find stable, long-term employment with competitive salaries, benefits, and opportunities for career growth in established companies.
                                </p>
                                <ul className="space-y-3 mb-8">
                                    <li className="flex items-center">
                                        <svg className="w-5 h-5 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                        </svg>
                                        <span className="text-gray-700">Competitive salary & benefits</span>
                                    </li>
                                    <li className="flex items-center">
                                        <svg className="w-5 h-5 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                        </svg>
                                        <span className="text-gray-700">Career advancement</span>
                                    </li>
                                    <li className="flex items-center">
                                        <svg className="w-5 h-5 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                        </svg>
                                        <span className="text-gray-700">Job security</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="px-6 pb-6">
                                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-300 flex items-center justify-center">
                                    Explore Jobs
                                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                    
                    {/* Internship Card */}
                    <div className="relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-300"></div>
                        <div className="relative bg-white rounded-lg shadow-xl h-full overflow-hidden border border-gray-100 transition-all duration-300 group-hover:-translate-y-2">
                            <div className="p-6">
                                <div className="w-14 h-14 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-3">Internship Programs</h3>
                                <p className="text-gray-600 mb-6">
                                    Gain valuable work experience, develop new skills, and build professional connections while still in school or after graduation.
                                </p>
                                <ul className="space-y-3 mb-8">
                                    <li className="flex items-center">
                                        <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                        </svg>
                                        <span className="text-gray-700">Hands-on experience</span>
                                    </li>
                                    <li className="flex items-center">
                                        <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                        </svg>
                                        <span className="text-gray-700">Skill development</span>
                                    </li>
                                    <li className="flex items-center">
                                        <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                        </svg>
                                        <span className="text-gray-700">Networking opportunities</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="px-6 pb-6">
                                <button className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-300 flex items-center justify-center">
                                    Find Internships
                                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                    
                    {/* Freelancing Card */}
                    <div className="relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-300"></div>
                        <div className="relative bg-white rounded-lg shadow-xl h-full overflow-hidden border border-gray-100 transition-all duration-300 group-hover:-translate-y-2">
                            <div className="p-6">
                                <div className="w-14 h-14 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                                    <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-3">Freelancing Projects</h3>
                                <p className="text-gray-600 mb-6">
                                    Work independently on diverse projects, set your own rates, and enjoy the flexibility of choosing when and where you work.
                                </p>
                                <ul className="space-y-3 mb-8">
                                    <li className="flex items-center">
                                        <svg className="w-5 h-5 text-purple-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                        </svg>
                                        <span className="text-gray-700">Flexible schedule</span>
                                    </li>
                                    <li className="flex items-center">
                                        <svg className="w-5 h-5 text-purple-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                        </svg>
                                        <span className="text-gray-700">Diverse projects</span>
                                    </li>
                                    <li className="flex items-center">
                                        <svg className="w-5 h-5 text-purple-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                        </svg>
                                        <span className="text-gray-700">Work from anywhere</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="px-6 pb-6">
                                <button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-300 flex items-center justify-center">
                                    Find Projects
                                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardHome;