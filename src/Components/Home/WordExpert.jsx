
import images from "../../Images/word.jpg"; // Make sure to use the correct image path

const WordExpert = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
                    {/* Text Content */}
                    <div className="flex-1 max-w-2xl order-2 lg:order-1">
                        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight mb-6">
                            Shaping <span className="text-blue-600">World-Class IT Experts</span>
                        </h1>
                        
                        <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                           Princibal Skill Booster has been working with a vision to Princibal Skill Booster experts for the past 16 years. In a fast pacing world, where every sector relies on technology, you need to develop IT skills to secure a better future. With the utmost dedication, we have been able to make more than <span className="font-semibold text-blue-600">90,000 IT experts</span> who are currently working in different sectors.
                        </p>
                        
                        <div className="flex flex-col sm:flex-row gap-4 mb-10">
                            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg shadow-md transition-all duration-300 transform hover:-translate-y-1 flex items-center">
                                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                                </svg>
                                Browse Courses
                            </button>
                            <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold py-3 px-8 rounded-lg transition-colors duration-300 flex items-center">
                                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                </svg>
                                Learn More
                            </button>
                        </div>
                        
                        {/* Stats and Achievements */}
                        <div className="grid grid-cols-2 gap-6 mb-8">
                            <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-blue-500">
                                <div className="text-3xl font-bold text-blue-600">16+</div>
                                <div className="text-gray-600">Years of Excellence</div>
                            </div>
                            <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-blue-500">
                                <div className="text-3xl font-bold text-blue-600">90K+</div>
                                <div className="text-gray-600">IT Experts Trained</div>
                            </div>
                        </div>
                        
                        {/* Features List */}
                        <div className="space-y-3">
                            <div className="flex items-center">
                                <div className="bg-blue-100 p-2 rounded-full mr-3">
                                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                </div>
                                <span className="text-gray-700">Industry-Relevant Curriculum</span>
                            </div>
                            <div className="flex items-center">
                                <div className="bg-blue-100 p-2 rounded-full mr-3">
                                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                </div>
                                <span className="text-gray-700">Expert Instructors</span>
                            </div>
                            <div className="flex items-center">
                                <div className="bg-blue-100 p-2 rounded-full mr-3">
                                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                </div>
                                <span className="text-gray-700">Job Placement Support</span>
                            </div>
                        </div>
                    </div>
                    
                    {/* Image Content */}
                    <div className="flex-1 order-1 lg:order-2">
                        <div className="relative">
                            <div className="absolute -inset-4">
                                <div className="w-full h-full max-w-lg mx-auto lg:mx-0 opacity-30 blur-lg bg-gradient-to-r from-blue-400 to-purple-500 rounded-lg"></div>
                            </div>
                            <img 
                                src={images} 
                                alt="World-Class IT Experts" 
                                className="relative rounded-xl shadow-2xl w-full max-w-lg mx-auto lg:mx-0 transform hover:scale-105 transition-transform duration-700"
                            />
                            {/* Decorative elements */}
                            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-yellow-400 rounded-full opacity-20"></div>
                            <div className="absolute -top-6 -right-6 w-20 h-20 bg-blue-400 rounded-full opacity-20"></div>
                            
                            {/* Floating achievement badge */}
                            <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-xl shadow-lg">
                                <div className="flex items-center">
                                    <div className="bg-blue-100 p-2 rounded-full mr-3">
                                        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                        </svg>
                                    </div>
                                    <div>
                                        <div className="font-bold text-blue-700">16 Years</div>
                                        <div className="text-xs text-gray-500">Of Excellence</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WordExpert;