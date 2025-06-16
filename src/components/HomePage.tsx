import React from 'react';
import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react';

const HomePage: React.FC = () => {
  return (
    <div className="relative min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-bold text-slate-800 leading-tight">
                  CIS
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-amber-500">
                    {' '}Student
                  </span>
                </h1>
                <p className="text-xl text-slate-600 leading-relaxed">
                  Junior senior studying Computer Information Systems with a passion for technology, 
                  development, and creating innovative digital solutions. Currently exploring the 
                  intersection of business and technology to build meaningful applications.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <button className="group flex items-center space-x-2 bg-slate-800 text-white px-6 py-3 rounded-xl hover:bg-slate-700 transition-all duration-200 transform hover:scale-105">
                  <span>View My Projects</span>
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="flex items-center space-x-2 border-2 border-slate-300 text-slate-700 px-6 py-3 rounded-xl hover:border-slate-400 hover:bg-slate-50 transition-all duration-200">
                  <Download size={18} />
                  <span>Download Resume</span>
                </button>
              </div>

              <div className="flex space-x-6">
                <a href="#" className="text-slate-600 hover:text-blue-600 transition-colors transform hover:scale-110">
                  <Github size={24} />
                </a>
                <a href="#" className="text-slate-600 hover:text-blue-600 transition-colors transform hover:scale-110">
                  <Linkedin size={24} />
                </a>
                <a href="#" className="text-slate-600 hover:text-blue-600 transition-colors transform hover:scale-110">
                  <Mail size={24} />
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10 bg-white rounded-2xl shadow-2xl overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600" 
                  alt="Student working on computer"
                  className="w-full h-96 object-cover"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-full h-full bg-gradient-to-br from-blue-200 to-amber-200 rounded-2xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-white/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">What I'm Learning & Building</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Combining academic knowledge with hands-on experience to create impactful solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="group p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl mb-6 flex items-center justify-center">
                <span className="text-2xl">💻</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-3">Full-Stack Development</h3>
              <p className="text-slate-600">
                Building end-to-end applications using modern frameworks and technologies, from database design to user interfaces.
              </p>
            </div>

            <div className="group p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl mb-6 flex items-center justify-center">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-3">Data Analytics</h3>
              <p className="text-slate-600">
                Analyzing complex datasets to derive insights and support data-driven decision making in business contexts.
              </p>
            </div>

            <div className="group p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl mb-6 flex items-center justify-center">
                <span className="text-2xl">🔧</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-3">Systems Integration</h3>
              <p className="text-slate-600">
                Understanding how different technologies work together to create efficient, scalable business solutions.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;