import React from 'react';
import { MapPin, Calendar, Heart, Code2, Palette, Zap } from 'lucide-react';

const AboutPage: React.FC = () => {
  const skills = [
    { name: 'React & Next.js', level: 95, color: 'bg-blue-500' },
    { name: 'TypeScript', level: 90, color: 'bg-indigo-500' },
    { name: 'Node.js', level: 85, color: 'bg-green-500' },
    { name: 'UI/UX Design', level: 80, color: 'bg-purple-500' },
    { name: 'Three.js', level: 75, color: 'bg-amber-500' },
    { name: 'Python', level: 70, color: 'bg-emerald-500' },
  ];

  const values = [
    {
      icon: Code2,
      title: 'Clean Code',
      description: 'I believe in writing code that is not just functional, but readable, maintainable, and elegant.',
    },
    {
      icon: Palette,
      title: 'Design Thinking',
      description: 'Every project starts with understanding the user and crafting experiences that truly resonate.',
    },
    {
      icon: Zap,
      title: 'Continuous Learning',
      description: 'Technology evolves rapidly, and I stay curious and adaptable to embrace new challenges.',
    },
  ];

  return (
    <div className="pt-24 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-slate-800 mb-4">About Me</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            A passionate developer who loves creating digital experiences that make a difference.
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
                  <span className="text-slate-600">San Francisco, CA</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Calendar className="text-blue-600" size={20} />
                  <span className="text-slate-600">5+ years experience</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Heart className="text-red-500" size={20} />
                  <span className="text-slate-600">Passionate about sustainable tech</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-semibold text-slate-800 mb-6">My Story</h2>
              <div className="space-y-4 text-slate-600">
                <p>
                  My journey into development started during college when I discovered the magic of 
                  turning ideas into interactive experiences. What began as curiosity quickly became 
                  a passion for creating digital solutions that genuinely improve people's lives.
                </p>
                <p>
                  Over the years, I've had the privilege of working with startups and established 
                  companies, helping them bring their visions to life through thoughtful design 
                  and robust development.
                </p>
                <p>
                  When I'm not coding, you'll find me exploring hiking trails, experimenting with 
                  photography, or diving into a good book about emerging technologies and design philosophy.
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="sticky top-32">
              <img 
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="Working at desk"
                className="w-full h-80 object-cover rounded-2xl shadow-lg"
              />
              <div className="mt-8 grid grid-cols-2 gap-4">
                <img 
                  src="https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=300" 
                  alt="Creative workspace"
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
          <h2 className="text-3xl font-bold text-slate-800 text-center mb-12">Core Values</h2>
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