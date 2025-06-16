import React from 'react';
import { Calendar, Clock, ArrowRight, Tag } from 'lucide-react';

interface ThoughtsPageProps {
  onPostClick: (postId: number) => void;
}

const ThoughtsPage: React.FC<ThoughtsPageProps> = ({ onPostClick }) => {
  const posts = [
    {
      id: 1,
      title: 'Learning Full-Stack Development as a CIS Student',
      excerpt: 'My journey from classroom theory to building real applications. How academic knowledge translates to practical development skills and the challenges I\'ve faced along the way.',
      date: '2024-01-15',
      readTime: '6 min read',
      tags: ['Learning', 'Full-Stack', 'Student Life'],
      image: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=600',
      featured: true,
    },
    {
      id: 2,
      title: 'Why I Chose Computer Information Systems',
      excerpt: 'The decision between Computer Science and CIS, and why I believe CIS offers the perfect blend of technical skills and business understanding.',
      date: '2024-01-08',
      readTime: '4 min read',
      tags: ['Career', 'Education', 'CIS'],
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600',
      featured: false,
    },
    {
      id: 3,
      title: 'Building My First Database-Driven Application',
      excerpt: 'Lessons learned from designing and implementing a complete web application with user authentication, data persistence, and a clean UI.',
      date: '2023-12-22',
      readTime: '5 min read',
      tags: ['Projects', 'Database', 'Web Development'],
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600',
      featured: false,
    },
    {
      id: 4,
      title: 'The Importance of Soft Skills in Tech',
      excerpt: 'Why communication, teamwork, and problem-solving skills are just as important as coding ability in the technology industry.',
      date: '2023-12-10',
      readTime: '4 min read',
      tags: ['Soft Skills', 'Career Development', 'Technology'],
      image: 'https://images.pexels.com/photos/5849568/pexels-photo-5849568.jpeg?auto=compress&cs=tinysrgb&w=600',
      featured: false,
    },
  ];

  const featuredPost = posts.find(post => post.featured);
  const otherPosts = posts.filter(post => !post.featured);

  return (
    <div className="pt-24 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-slate-800 mb-4">My Thoughts</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Sharing my experiences as a CIS student, lessons learned, and insights about technology and career development.
          </p>
        </div>

        {/* Featured Post */}
        {featuredPost && (
          <div className="mb-16">
            <div 
              className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
              onClick={() => onPostClick(featuredPost.id)}
            >
              <div className="md:flex">
                <div className="md:w-1/2">
                  <img 
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-8">
                  <div className="flex items-center space-x-2 mb-4">
                    <span className="bg-amber-100 text-amber-800 text-xs font-semibold px-3 py-1 rounded-full">
                      Featured
                    </span>
                  </div>
                  <h2 className="text-2xl font-bold text-slate-800 mb-4 hover:text-blue-600 transition-colors">
                    {featuredPost.title}
                  </h2>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-slate-500">
                      <div className="flex items-center space-x-1">
                        <Calendar size={16} />
                        <span>{new Date(featuredPost.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock size={16} />
                        <span>{featuredPost.readTime}</span>
                      </div>
                    </div>
                    <button className="group flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium">
                      <span>Read More</span>
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {featuredPost.tags.map(tag => (
                      <span key={tag} className="flex items-center space-x-1 text-xs text-slate-600 bg-slate-100 px-2 py-1 rounded-full">
                        <Tag size={12} />
                        <span>{tag}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Other Posts */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {otherPosts.map(post => (
            <article 
              key={post.id} 
              className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
              onClick={() => onPostClick(post.id)}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-slate-800 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-slate-600 text-sm mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between text-xs text-slate-500 mb-4">
                  <div className="flex items-center space-x-1">
                    <Calendar size={14} />
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock size={14} />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-1 mb-4">
                  {post.tags.slice(0, 2).map(tag => (
                    <span key={tag} className="text-xs text-slate-600 bg-slate-100 px-2 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                  {post.tags.length > 2 && (
                    <span className="text-xs text-slate-500">+{post.tags.length - 2}</span>
                  )}
                </div>
                <button className="group flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium text-sm">
                  <span>Read Article</span>
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-20 bg-gradient-to-br from-blue-600 to-purple-700 rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">Stay Connected</h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Follow my journey as a CIS student and get updates on new projects, learning experiences, and career insights.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Your email address"
              className="flex-1 px-4 py-3 rounded-lg text-slate-800 placeholder-slate-500"
            />
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThoughtsPage;