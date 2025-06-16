import React from 'react';
import { Star, Calendar, BookOpen, ExternalLink, Heart } from 'lucide-react';

const BooksPage: React.FC = () => {
  const books = [
    {
      id: 1,
      title: "Atomic Habits",
      author: "James Clear",
      rating: 5,
      status: "completed",
      dateRead: "2024-01-10",
      image: "https://images.pexels.com/photos/46274/pexels-photo-46274.jpeg?auto=compress&cs=tinysrgb&w=300",
      review: "A masterclass in habit formation. Clear's approach to breaking down complex behavioral change into simple, actionable steps is brilliant. The '1% better every day' philosophy has genuinely transformed how I approach personal and professional growth.",
      tags: ["Self-Improvement", "Psychology", "Productivity"],
      favorite: true,
    },
    {
      id: 2,
      title: "The Design of Everyday Things",
      author: "Don Norman",
      rating: 5,
      status: "completed",
      dateRead: "2023-12-15",
      image: "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=300",
      review: "Essential reading for anyone involved in creating user experiences. Norman's insights into human psychology and design principles are timeless and incredibly relevant to digital product development.",
      tags: ["Design", "UX/UI", "Psychology"],
      favorite: true,
    },
    {
      id: 3,
      title: "Clean Code",
      author: "Robert C. Martin",
      rating: 4,
      status: "completed",
      dateRead: "2023-11-20",
      image: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=300",
      review: "While some examples feel dated, the core principles of writing maintainable, readable code are invaluable. Every developer should read this at least once in their career.",
      tags: ["Programming", "Software Engineering", "Best Practices"],
      favorite: false,
    },
    {
      id: 4,
      title: "Thinking, Fast and Slow",
      author: "Daniel Kahneman",
      rating: 4,
      status: "currently-reading",
      dateStarted: "2024-01-05",
      image: "https://images.pexels.com/photos/1029141/pexels-photo-1029141.jpeg?auto=compress&cs=tinysrgb&w=300",
      review: "Fascinating exploration of cognitive biases and decision-making processes. Particularly relevant for understanding user behavior in product design.",
      tags: ["Psychology", "Behavioral Economics", "Decision Making"],
      favorite: false,
    },
    {
      id: 5,
      title: "The Pragmatic Programmer",
      author: "Andrew Hunt & David Thomas",
      rating: 5,
      status: "completed",
      dateRead: "2023-10-08",
      image: "https://images.pexels.com/photos/159832/justice-scales-books-law-159832.jpeg?auto=compress&cs=tinysrgb&w=300",
      review: "Timeless advice that goes beyond coding to encompass the entire software development lifecycle. The principles here have shaped my approach to problem-solving and career development.",
      tags: ["Programming", "Career Development", "Software Engineering"],
      favorite: true,
    },
    {
      id: 6,
      title: "Don't Make Me Think",
      author: "Steve Krug",
      rating: 4,
      status: "to-read",
      image: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=300",
      review: "",
      tags: ["Web Usability", "UX Design", "User Research"],
      favorite: false,
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-100 text-green-800';
      case 'currently-reading': return 'bg-blue-100 text-blue-800';
      case 'to-read': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'completed': return 'Completed';
      case 'currently-reading': return 'Currently Reading';
      case 'to-read': return 'To Read';
      default: return status;
    }
  };

  const completedBooks = books.filter(book => book.status === 'completed');
  const currentlyReading = books.filter(book => book.status === 'currently-reading');
  const toRead = books.filter(book => book.status === 'to-read');

  return (
    <div className="pt-24 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-slate-800 mb-4">My Reading Journey</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Books that have shaped my thinking, influenced my work, and expanded my perspective on technology, design, and life.
          </p>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <div className="bg-gradient-to-br from-green-500 to-green-600 text-white rounded-2xl p-6 text-center">
            <div className="text-3xl font-bold mb-2">{completedBooks.length}</div>
            <div className="text-green-100">Books Completed</div>
          </div>
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-2xl p-6 text-center">
            <div className="text-3xl font-bold mb-2">{currentlyReading.length}</div>
            <div className="text-blue-100">Currently Reading</div>
          </div>
          <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white rounded-2xl p-6 text-center">
            <div className="text-3xl font-bold mb-2">{books.filter(b => b.favorite).length}</div>
            <div className="text-purple-100">Favorites</div>
          </div>
        </div>

        {/* Currently Reading */}
        {currentlyReading.length > 0 && (
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-slate-800 mb-8 flex items-center space-x-2">
              <BookOpen className="text-blue-600" />
              <span>Currently Reading</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {currentlyReading.map(book => (
                <div key={book.id} className="bg-white rounded-2xl shadow-lg p-6 border-l-4 border-blue-500">
                  <div className="flex space-x-4">
                    <img 
                      src={book.image}
                      alt={book.title}
                      className="w-20 h-28 object-cover rounded-lg shadow-md"
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold text-slate-800 mb-1">{book.title}</h3>
                      <p className="text-slate-600 text-sm mb-2">by {book.author}</p>
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(book.status)}`}>
                        {getStatusText(book.status)}
                      </span>
                      {book.review && (
                        <p className="text-slate-600 text-sm mt-3 italic">"{book.review}"</p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Completed Books */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-slate-800 mb-8">Completed Books</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {completedBooks.map(book => (
              <div key={book.id} className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="p-6">
                  <div className="flex space-x-4 mb-4">
                    <div className="relative">
                      <img 
                        src={book.image}
                        alt={book.title}
                        className="w-24 h-32 object-cover rounded-lg shadow-md"
                      />
                      {book.favorite && (
                        <div className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1">
                          <Heart size={12} fill="currentColor" />
                        </div>
                      )}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-slate-800 mb-1 group-hover:text-blue-600 transition-colors">
                        {book.title}
                      </h3>
                      <p className="text-slate-600 mb-2">by {book.author}</p>
                      <div className="flex items-center space-x-3 mb-2">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i}
                              size={16}
                              className={i < book.rating ? 'text-amber-400 fill-current' : 'text-gray-300'}
                            />
                          ))}
                        </div>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(book.status)}`}>
                          {getStatusText(book.status)}
                        </span>
                      </div>
                      <div className="flex items-center space-x-1 text-xs text-slate-500 mb-3">
                        <Calendar size={12} />
                        <span>Completed {new Date(book.dateRead).toLocaleDateString()}</span>
                      </div>
                    </div>
                  </div>
                  
                  {book.review && (
                    <div className="bg-slate-50 rounded-lg p-4 mb-4">
                      <p className="text-slate-700 text-sm italic leading-relaxed">
                        "{book.review}"
                      </p>
                    </div>
                  )}
                  
                  <div className="flex flex-wrap gap-2">
                    {book.tags.map(tag => (
                      <span key={tag} className="text-xs text-slate-600 bg-slate-100 px-2 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Reading List */}
        <div>
          <h2 className="text-2xl font-bold text-slate-800 mb-8">Reading List</h2>
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="space-y-4">
              {toRead.map(book => (
                <div key={book.id} className="flex items-center space-x-4 p-4 rounded-lg hover:bg-slate-50 transition-colors">
                  <img 
                    src={book.image}
                    alt={book.title}
                    className="w-12 h-16 object-cover rounded shadow-sm"
                  />
                  <div className="flex-1">
                    <h4 className="font-medium text-slate-800">{book.title}</h4>
                    <p className="text-slate-600 text-sm">by {book.author}</p>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {book.tags.slice(0, 2).map(tag => (
                      <span key={tag} className="text-xs text-slate-600 bg-slate-100 px-2 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <button className="text-blue-600 hover:text-blue-700 p-2">
                    <ExternalLink size={16} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Reading Goals */}
        <div className="mt-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">2024 Reading Goal</h3>
          <div className="mb-4">
            <div className="text-4xl font-bold">{completedBooks.length}/24</div>
            <div className="text-amber-100">Books Completed</div>
          </div>
          <div className="w-full bg-amber-400/30 rounded-full h-3 mb-4">
            <div 
              className="bg-white h-3 rounded-full transition-all duration-500"
              style={{ width: `${(completedBooks.length / 24) * 100}%` }}
            ></div>
          </div>
          <p className="text-amber-100">
            {Math.round((completedBooks.length / 24) * 100)}% of my yearly reading goal completed
          </p>
        </div>
      </div>
    </div>
  );
};

export default BooksPage;