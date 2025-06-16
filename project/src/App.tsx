import React, { useState } from 'react';
import Navigation from './components/Navigation';
import AnimatedBackground from './components/AnimatedBackground';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import ThoughtsPage from './components/ThoughtsPage';
import BooksPage from './components/BooksPage';
import BlogPost from './components/BlogPost';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [currentPostId, setCurrentPostId] = useState<number | null>(null);

  const renderPage = () => {
    if (currentPage === 'thoughts' && currentPostId) {
      return <BlogPost postId={currentPostId} onBack={() => setCurrentPostId(null)} />;
    }

    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'about':
        return <AboutPage />;
      case 'thoughts':
        return <ThoughtsPage onPostClick={setCurrentPostId} />;
      case 'books':
        return <BooksPage />;
      default:
        return <HomePage />;
    }
  };

  const handlePageChange = (page: string) => {
    setCurrentPage(page);
    setCurrentPostId(null); // Reset post selection when changing pages
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <AnimatedBackground />
      <Navigation currentPage={currentPage} onPageChange={handlePageChange} />
      <main className="relative z-10">
        {renderPage()}
      </main>
    </div>
  );
}

export default App;