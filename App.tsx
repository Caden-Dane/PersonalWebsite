import React, { useState } from 'react';
import Navigation from './components/Navigation';
import AnimatedBackground from './components/AnimatedBackground';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import ThoughtsPage from './components/ThoughtsPage';
import BooksPage from './components/BooksPage';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'about':
        return <AboutPage />;
      case 'thoughts':
        return <ThoughtsPage />;
      case 'books':
        return <BooksPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <AnimatedBackground />
      <Navigation currentPage={currentPage} onPageChange={setCurrentPage} />
      <main className="relative z-10">
        {renderPage()}
      </main>
    </div>
  );
}

export default App;