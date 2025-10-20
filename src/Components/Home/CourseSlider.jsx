import React, { useState, useEffect } from 'react';

const CourseSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const courses = [
    {
      id: 1,
      title: "Graphic Design",
      description: "Master Adobe Photoshop, Illustrator, and InDesign to create stunning visuals",
      image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80",
      cta: "Start Designing",
      color: "from-pink-500 to-purple-600",
      icon: "🎨"
    },
    {
      id: 2,
      title: "Web Development",
      description: "Learn HTML, CSS, JavaScript, React, and Node.js to build modern websites",
      image: "https://images.unsplash.com/photo-1581276879432-15e50529f34b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      cta: "Code Now",
      color: "from-blue-500 to-cyan-600",
      icon: "💻"
    },
    {
      id: 3,
      title: "Office Mastery",
      description: "Become proficient in Word, Excel, PowerPoint, and Office automation",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      cta: "Master Office",
      color: "from-green-500 to-teal-600",
      icon: "📊"
    },
    {
      id: 4,
      title: "Digital Marketing",
      description: "Learn SEO, SEM, Social Media Marketing, and Analytics to grow businesses",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1115&q=80",
      cta: "Market Like Pro",
      color: "from-amber-500 to-orange-600",
      icon: "📱"
    },
    {
      id: 5,
      title: "Video Editing",
      description: "Master Premiere Pro, After Effects, and DaVinci Resolve for professional videos",
      image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      cta: "Edit Videos",
      color: "from-red-500 to-rose-600",
      icon: "🎬"
    },
    {
      id: 6,
      title: "C++ & Algorithms",
      description: "Master data structures and algorithms with C++ programming language",
      image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      cta: "Learn Coding",
      color: "from-indigo-500 to-blue-600",
      icon: "🧠"
    },
    {
      id: 7,
      title: "Python & Django",
      description: "Build web applications with Python programming and Django framework",
      image: "https://images.unsplash.com/photo-1526318472351-c75fcf070305?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      cta: "Code Python",
      color: "from-emerald-500 to-green-600",
      icon: "🐍"
    },
    {
      id: 8,
      title: "SEO Optimization",
      description: "Learn search engine optimization techniques to rank websites higher",
      image: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      cta: "Optimize Now",
      color: "from-violet-500 to-purple-600",
      icon: "🔍"
    }
  ];

  // Auto slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === courses.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [courses.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const goToPrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? courses.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev === courses.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="w-full mx-auto">
      {/* Main Slider - Full Width */}
      <div className="relative h-96 md:h-[500px] lg:h-[600px] w-full overflow-hidden">
        {/* Slides */}
        {courses.map((course, index) => (
          <div
            key={course.id}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              index === currentSlide 
                ? 'opacity-100 transform translate-x-0' 
                : 'opacity-0 transform translate-x-full'
            }`}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40 z-10"></div>
            <img
              src={course.image}
              alt={course.title}
              className="w-full h-full object-cover"
            />
            
            {/* Content */}
            <div className="absolute inset-0 z-20 flex items-center">
              <div className="container mx-auto px-6 md:px-12 lg:px-24">
                <div className="max-w-2xl">
                  <div className="flex items-center mb-6">
                    <span className="text-4xl mr-3">{course.icon}</span>
                    <span className="px-4 py-2 text-sm font-semibold text-white bg-white/20 rounded-full backdrop-blur-sm">
                      Featured Course
                    </span>
                  </div>
                  
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                    {course.title}
                  </h2>
                  
                  <p className="text-xl md:text-2xl text-gray-100 mb-8 max-w-lg">
                    {course.description}
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                    <button className={`px-8 py-4 rounded-xl font-bold text-white bg-gradient-to-r ${course.color} hover:opacity-90 transition-all transform hover:scale-105 shadow-lg flex items-center`}>
                      {course.cta}
                      <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </button>
                    
                    <button className="px-8 py-4 rounded-xl font-bold text-white bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all border border-white/30 flex items-center">
                      View Details
                      <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
        
        {/* Navigation arrows */}
        <button
          onClick={goToPrev}
          className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-black/30 text-white p-4 rounded-full hover:bg-black/50 transition-all z-30 backdrop-blur-sm"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <button
          onClick={goToNext}
          className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-black/30 text-white p-4 rounded-full hover:bg-black/50 transition-all z-30 backdrop-blur-sm"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
        
        {/* Indicators with course names */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-4 z-30">
          {courses.map((course, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`px-4 py-2 rounded-full transition-all flex items-center ${
                index === currentSlide 
                  ? 'bg-white text-black font-bold shadow-lg' 
                  : 'bg-white/20 text-white backdrop-blur-sm hover:bg-white/30'
              }`}
            >
              <span className="mr-2">{course.icon}</span>
              <span className="hidden sm:inline">{course.title}</span>
              <span className="inline sm:hidden">{index + 1}</span>
            </button>
          ))}
        </div>
        
        {/* Progress bar */}
        <div className="absolute bottom-0 left-0 h-1 bg-white/30 w-full z-30">
          <div 
            className="h-full bg-white transition-all duration-5000 ease-linear" 
            style={{ width: `${(currentSlide + 1) * (100 / courses.length)}%` }}
          ></div>
        </div>
      </div>
      
      {/* Course grid at bottom */}
      <div className="bg-gradient-to-b from-gray-900 to-black py-12 px-6">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-white text-center mb-10">Explore All Courses</h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {courses.map((course, index) => (
              <div 
                key={course.id} 
                onClick={() => goToSlide(index)}
                className={`p-6 rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 hover:shadow-2xl transition-all cursor-pointer border-2 backdrop-blur-sm ${
                  index === currentSlide 
                    ? 'border-white shadow-2xl scale-105' 
                    : 'border-gray-700 hover:scale-105'
                }`}
              >
                <div className="flex flex-col items-center text-center">
                  <span className="text-4xl mb-4">{course.icon}</span>
                  <h3 className="font-bold text-white text-lg mb-2">{course.title}</h3>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">{course.description}</p>
                  <span className={`px-4 py-2 rounded-full text-white text-sm font-medium bg-gradient-to-r ${course.color}`}>
                    Enroll Now
                  </span>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <button className="px-8 py-4 bg-white text-black font-bold rounded-xl hover:bg-gray-100 transition-all transform hover:scale-105">
              View All Courses
              <svg className="w-5 h-5 ml-2 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseSlider;