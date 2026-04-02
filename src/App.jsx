import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import ConceptPage from './pages/ConceptPage';
import AboutPage from './pages/AboutPage';
import RelativesPage from './pages/RelativesPage';
import ContactPage from './pages/ContactPage';
import BookVisitPage from './pages/BookVisitPage';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/concept" element={<ConceptPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/for-relatives" element={<RelativesPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/book-visit" element={<BookVisitPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
