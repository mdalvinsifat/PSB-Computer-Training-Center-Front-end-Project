import React, { useState } from 'react';

const CourseSelection = () => {
  const [activeTab, setActiveTab] = useState('students');

  // Data for different user categories
  const userCategories = {
    students: {
      title: "Students",
      icon: "🎓",
      description: "Students who are preparing for their future careers",
      data: [
        { name: "High School Students", percentage: 25, count: 1250, trend: "up" },
        { name: "College/University Students", percentage: 45, count: 2250, trend: "up" },
        { name: "Graduate Students", percentage: 20, count: 1000, trend: "stable" },
        { name: "Vocational Students", percentage: 10, count: 500, trend: "up" }
      ],
      reasons: [
        "Career preparation",
        "Skill development",
        "Academic requirements",
        "Personal interest"
      ],
      popularCourses: ["Web Development", "Programming C C++", "Digital Marketing", "Graphic Design"]
    },
    professionals: {
      title: "Working Professionals",
      icon: "💼",
      description: "Employed individuals seeking career advancement",
      data: [
        { name: "IT Professionals", percentage: 35, count: 1750, trend: "up" },
        { name: "Healthcare Workers", percentage: 20, count: 1000, trend: "up" },
        { name: "Educators", percentage: 15, count: 750, trend: "stable" },
        { name: "Business Professionals", percentage: 30, count: 1500, trend: "up" }
      ],
      reasons: [
        "Career advancement",
        "Skill updating",
        "Career change",
        "Professional certification"
      ],
      popularCourses: ["Web Development", "Digital Marketing", "Graphic Design", "SEO"]
    },
    unemployed: {
      title: "Unemployed Individuals",
      icon: "🔍",
      description: "People seeking employment who need marketable skills",
      data: [
        { name: "Recent Graduates", percentage: 40, count: 800, trend: "up" },
        { name: "Career Changers", percentage: 25, count: 500, trend: "up" },
        { name: "Laid Off Workers", percentage: 20, count: 400, trend: "up" },
        { name: "Long-term Unemployed", percentage: 15, count: 300, trend: "stable" }
      ],
      reasons: [
        "Job readiness",
        "Skill gaps",
        "Industry changes",
        "Employment requirements"
      ],
      popularCourses: ["Job Interview Prep", "Resume Writing", "Basic IT Skills", "Soft Skills"]
    },
    retirees: {
      title: "Retirees",
      icon: "🌴",
      description: "Retired individuals pursuing interests and part-time work",
      data: [
        { name: "Early Retirees", percentage: 50, count: 500, trend: "up" },
        { name: "Traditional Retirees", percentage: 30, count: 300, trend: "stable" },
        { name: "Returning to Work", percentage: 15, count: 150, trend: "up" },
        { name: "Hobbyists", percentage: 5, count: 50, trend: "stable" }
      ],
      reasons: [
        "Personal enrichment",
        "Part-time work",
        "Staying mentally active",
        "Pursuing passions"
      ],
      popularCourses: ["Graphic Design", "Digital Marketing", "Web Development", "SEO"]
    }
  };

  const currentCategory = userCategories[activeTab];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Who Chooses Our Courses?
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the diverse range of individuals who benefit from our educational programs
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.entries(userCategories).map(([key, category]) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`flex items-center px-6 py-3 rounded-full transition-all duration-300 ${
                activeTab === key 
                  ? 'bg-indigo-600 text-white shadow-lg' 
                  : 'bg-white text-gray-700 hover:bg-indigo-50 shadow-md'
              }`}
            >
              <span className="text-2xl mr-2">{category.icon}</span>
              <span className="font-semibold">{category.title}</span>
            </button>
          ))}
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="md:flex">
            {/* Left Panel - Statistics */}
            <div className="md:w-2/3 p-8">
              <div className="flex items-center mb-6">
                <span className="text-4xl mr-4">{currentCategory.icon}</span>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">{currentCategory.title}</h2>
                  <p className="text-gray-600">{currentCategory.description}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {currentCategory.data.map((item, index) => (
                  <div key={index} className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="font-semibold text-gray-800">{item.name}</h3>
                      <span className={`flex items-center text-sm ${
                        item.trend === 'up' ? 'text-green-600' : 'text-blue-600'
                      }`}>
                        {item.trend === 'up' ? '↗ Increasing' : '→ Stable'}
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5 mb-2">
                      <div 
                        className="bg-indigo-600 h-2.5 rounded-full" 
                        style={{ width: `${item.percentage}%` }}
                      ></div>
                    </div>
                    <div className="flex justify-between text-sm text-gray-600">
                      <span>{item.percentage}%</span>
                      <span>{item.count.toLocaleString()} learners</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Reasons Section */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Primary Reasons for Enrollment</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {currentCategory.reasons.map((reason, index) => (
                    <div key={index} className="flex items-center bg-indigo-50 p-3 rounded-lg">
                      <div className="flex-shrink-0 w-8 h-8 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center mr-3">
                        {index + 1}
                      </div>
                      <span className="text-gray-800">{reason}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Panel - Popular Courses */}
            <div className="md:w-1/3 bg-indigo-50 p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Most Popular Courses</h3>
              <div className="space-y-4">
                {currentCategory.popularCourses.map((course, index) => (
                  <div key={index} className="bg-white p-4 rounded-lg shadow-sm border border-indigo-100">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-semibold text-gray-900">{course}</h4>
                        <p className="text-sm text-gray-600 mt-1">1,240 enrolled</p>
                      </div>
                      <span className="flex items-center text-sm font-medium text-green-600">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        94%
                      </span>
                    </div>
                    <div className="mt-3 w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-green-500 h-2 rounded-full" 
                        style={{ width: `${90 - (index * 10)}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Summary Card */}
              <div className="mt-8 bg-indigo-100 p-5 rounded-lg">
                <h4 className="font-semibold text-indigo-900 mb-2">Key Insight</h4>
                <p className="text-indigo-800 text-sm">
                  {activeTab === 'students' && "Students primarily seek courses that provide practical skills for immediate employment."}
                  {activeTab === 'professionals' && "Professionals look for advanced certifications and specialized skills for career advancement."}
                  {activeTab === 'unemployed' && "Unemployed individuals focus on skills with high employability and quick returns."}
                  {activeTab === 'retirees' && "Retirees prefer courses that offer personal enrichment and flexible learning options."}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 font-bold mr-3">
                  JD
                </div>
                <div>
                  <h4 className="font-semibold">Fatema chowdhury </h4>
                  <p className="text-sm text-gray-600">Former Retail Manager</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                "After being unemployed for 6 months, the web development course gave me the skills I needed to land a job in just 3 months!"
              </p>
              <div className="flex text-yellow-400">
                {"★".repeat(5)}
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-bold mr-3">
                  MS
                </div>
                <div>
                  <h4 className="font-semibold">Rakib Hossain</h4>
                  <p className="text-sm text-gray-600">College Student</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                "The data science course complemented my degree perfectly and helped me secure an internship at a major tech company."
              </p>
              <div className="flex text-yellow-400">
                {"★".repeat(5)}
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 font-bold mr-3">
                  RB
                </div>
                <div>
                  <h4 className="font-semibold">Jhumma Islam</h4>
                  <p className="text-sm text-gray-600">Retired Engineer</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                "In retirement, I've enjoyed learning digital photography. It's opened up a creative outlet and even a small side business."
              </p>
              <div className="flex text-yellow-400">
                {"★".repeat(5)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseSelection;