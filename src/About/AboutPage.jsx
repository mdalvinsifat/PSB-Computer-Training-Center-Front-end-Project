import React from 'react';
import Layout from '../Components/Layout/Layout';

const AboutPage = () => {
  return (
   <Layout>
     <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About TechLearn Academy</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Empowering students with cutting-edge computer skills for the digital age
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Mission</h2>
              <p className="text-gray-600 text-lg mb-4">
                At TechLearn Academy, we believe that everyone should have access to quality computer education 
                regardless of their background. Our mission is to bridge the digital skills gap by providing 
                comprehensive, practical, and industry-relevant courses.
              </p>
              <p className="text-gray-600 text-lg">
                We've helped over 10,000 students transform their careers and achieve their professional goals 
                in the technology sector.
              </p>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="relative">
                <div className="w-64 h-64 bg-blue-100 rounded-full absolute -top-4 -left-4 z-0"></div>
                <img 
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80" 
                  alt="Students learning together" 
                  className="rounded-lg shadow-xl w-full max-w-md relative z-10"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-800 text-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">Our Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="p-6">
              <div className="text-4xl font-bold mb-2 text-blue-400">10,000+</div>
              <p className="text-gray-300">Students Trained</p>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold mb-2 text-green-400">95%</div>
              <p className="text-gray-300">Completion Rate</p>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold mb-2 text-yellow-400">15</div>
              <p className="text-gray-300">Expert Instructors</p>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold mb-2 text-purple-400">8</div>
              <p className="text-gray-300">Years of Excellence</p>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-4">Our Courses</h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
            We offer a comprehensive range of computer courses designed to meet industry demands
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Graphic Design", icon: "🎨", color: "bg-pink-500" },
              { name: "Web Development", icon: "💻", color: "bg-blue-500" },
              { name: "Office Applications", icon: "📊", color: "bg-green-500" },
              { name: "Digital Marketing", icon: "📱", color: "bg-amber-500" },
              { name: "Video Editing", icon: "🎬", color: "bg-red-500" },
              { name: "C++ & Algorithms", icon: "🧠", color: "bg-indigo-500" },
              { name: "Python & Django", icon: "🐍", color: "bg-emerald-500" },
              { name: "SEO Optimization", icon: "🔍", color: "bg-purple-500" }
            ].map((course, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className={`w-16 h-16 ${course.color} rounded-full flex items-center justify-center text-2xl text-white mb-4`}>
                  {course.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800">{course.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-4">Meet Our Instructors</h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
            Our team of industry professionals brings real-world experience to the classroom
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "Sarah Johnson", role: "Web Development Expert", exp: "12 years", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" },
              { name: "Michael Chen", role: "Data Structures Specialist", exp: "9 years", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" },
              { name: "Emma Rodriguez", role: "Graphic Design Professional", exp: "10 years", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=761&q=80" }
            ].map((instructor, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden">
                <img src={instructor.image} alt={instructor.name} className="w-full h-64 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800">{instructor.name}</h3>
                  <p className="text-blue-600 mb-2">{instructor.role}</p>
                  <p className="text-gray-600">{instructor.exp} of experience</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-4">What Our Students Say</h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
            Hear from our successful alumni who have transformed their careers with our courses
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Alex Turner", course: "Web Development", text: "The web development course completely changed my career path. I went from zero coding knowledge to landing a front-end developer job in just 6 months!", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" },
              { name: "Priya Sharma", course: "Data Science", text: "The instructors are amazing! They don't just teach theory but provide real-world projects that helped me build a strong portfolio.", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80" },
              { name: "James Wilson", course: "Digital Marketing", text: "I was able to start my own digital marketing agency after completing the course. The practical knowledge I gained was invaluable.", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md">
                <div className="flex items-center mb-4">
                  <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full object-cover mr-4" />
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-blue-600 text-sm">{testimonial.course}</p>
                  </div>
                </div>
                <p className="text-gray-600">"{testimonial.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your Journey?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of students who have transformed their careers with our courses
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-blue-600 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors">
              Browse Courses
            </button>
            <button className="border-2 border-white text-white font-bold py-3 px-8 rounded-lg hover:bg-white hover:text-blue-600 transition-colors">
              Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">TechLearn Academy</h3>
              <p className="text-gray-400">
                Providing quality computer education since 2015
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Home</a></li>
                <li><a href="#" className="hover:text-white">Courses</a></li>
                <li><a href="#" className="hover:text-white">About Us</a></li>
                <li><a href="#" className="hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact Info</h4>
              <address className="not-italic text-gray-400">
                <p>123 Education Street</p>
                <p>Tech City, TC 12345</p>
                <p>Email: info@techlearn.com</p>
                <p>Phone: (123) 456-7890</p>
              </address>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  <span className="sr-only">Facebook</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <span className="sr-only">Instagram</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>© 2023 TechLearn Academy. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
   </Layout>
  );
};

export default AboutPage;