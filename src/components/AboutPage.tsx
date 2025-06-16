import React from 'react';
import { MapPin, Calendar, Heart, Code2, Database, Users } from 'lucide-react';

const AboutPage: React.FC = () => {
  const skills = [
    { name: 'JavaScript & React', level: 85, color: 'bg-blue-500' },
    { name: 'Python', level: 80, color: 'bg-green-500' },
    { name: 'SQL & Database Design', level: 75, color: 'bg-indigo-500' },
    { name: 'Java', level: 70, color: 'bg-red-500' },
    { name: 'Web Development', level: 85, color: 'bg-purple-500' },
    { name: 'Data Analysis', level: 65, color: 'bg-amber-500' },
  ];

  const values = [
    {
      icon: Code2,
      title: 'Problem Solving',
      description: 'I love breaking down complex problems into manageable pieces and finding elegant solutions.',
    },
    {
      icon: Database,
      title: 'Data-Driven Thinking',
      description: 'Making informed decisions based on data analysis and understanding business requirements.',
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Working effectively in teams and communicating technical concepts to diverse audiences.',
    },
  ];

  return (
    <div className="pt-24 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-slate-800 mb-4">About Me</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            A dedicated CIS student passionate about leveraging technology to solve real-world problems.
          </p>
        </div>

        {/* Personal Info */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <div className="space-y-8">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-semibold text-slate-800 mb-6">Personal Details</h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <MapPin className="text-blue-600" size={20} />
                  <span className="text-slate-600">Currently studying in the US</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Calendar className="text-blue-600" size={20} />
                  <span className="text-slate-600">Junior Senior - Expected graduation 2025</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Heart className="text-red-500" size={20} />
                  <span className="text-slate-600">Passionate about technology and innovation</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-semibold text-slate-800 mb-6">My Journey</h2>
              <div className="space-y-4 text-slate-600">
                <p>
                  As a Computer Information Systems student, I'm fascinated by the intersection 
                  of technology and business. My studies have given me a solid foundation in 
                  programming, database management, and systems analysis.
                </p>
                <p>
                  I'm particularly interested in full-stack development and data analytics, 
                  always looking for ways to apply what I learn in the classroom to real-world 
                  projects and challenges.
                </p>
                <p>
                  When I'm not coding or studying, I enjoy exploring new technologies, reading 
                  about industry trends, and working on personal projects that challenge me to 
                  grow as a developer.
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="sticky top-32">
              <img 
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="Student coding"
                className="w-full h-80 object-cover rounded-2xl shadow-lg"
              />
              <div className="mt-8 grid grid-cols-2 gap-4">
                <img 
                  src="https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=300" 
                  alt="Study workspace"
                  className="w-full h-32 object-cover rounded-xl"
                />
                <img 
                  src="https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=300" 
                  alt="Technology setup"
                  className="w-full h-32 object-cover rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Skills */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-slate-800 text-center mb-12">Technical Skills</h2>
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="grid md:grid-cols-2 gap-8">
              {skills.map((skill, index) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-slate-700">{skill.name}</span>
                    <span className="text-sm text-slate-500">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div 
                      className={`h-3 rounded-full ${skill.color} transition-all duration-1000 delay-${index * 100}`}
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Values */}
        <div>
          <h2 className="text-3xl font-bold text-slate-800 text-center mb-12">What Drives Me</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={value.title} className="group bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl mb-6 flex items-center justify-center">
                  <value.icon className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-3">{value.title}</h3>
                <p className="text-slate-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;