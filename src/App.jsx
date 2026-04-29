import React, { useEffect, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ProtectedRoute from './components/ProtectedRoute';

// Lazy load pages
const HomePage = lazy(() => import('./pages/HomePage'));
const ServicesPage = lazy(() => import('./pages/ServicesPage'));
const ConceptPage = lazy(() => import('./pages/ConceptPage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const RelativesPage = lazy(() => import('./pages/RelativesPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const BookVisitPage = lazy(() => import('./pages/BookVisitPage'));
const AdminDashboard = lazy(() => import('./pages/AdminDashboard'));
const AdminLoginPage = lazy(() => import('./pages/AdminLoginPage'));
const ImprintPage = lazy(() => import('./pages/ImprintPage'));
const PrivacyPolicyPage = lazy(() => import('./pages/PrivacyPolicyPage'));
const TermsPage = lazy(() => import('./pages/TermsPage'));
const ServiceDetailPage = lazy(() => import('./pages/ServiceDetailPage'));

const PageLoader = () => (
  <div className="flex items-center justify-center min-h-[60vh]">
    <div className="w-12 h-12 border-4 border-[#166E41]/20 border-t-[#166E41] rounded-full animate-spin"></div>
  </div>
);

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

// Layout wrapper for site content with Header and Footer
const SiteLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Suspense fallback={<PageLoader />}>
        <Routes>
          {/* Admin Routes - No Header/Footer */}
          <Route path="/admin/login" element={<AdminLoginPage />} />
          <Route 
            path="/admin" 
            element={
              <ProtectedRoute>
                <AdminDashboard />
              </ProtectedRoute>
            } 
          />

          {/* Public Routes - With Header/Footer */}
          <Route path="*" element={
            <SiteLayout>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/services/:serviceId" element={<ServiceDetailPage />} />
                <Route path="/concept" element={<ConceptPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/for-relatives" element={<RelativesPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/book-visit" element={<BookVisitPage />} />
                <Route path="/imprint" element={<ImprintPage />} />
                <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
                <Route path="/terms-conditions" element={<TermsPage />} />
              </Routes>
            </SiteLayout>
          } />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;

