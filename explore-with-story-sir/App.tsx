import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Stories from './pages/Stories';
import StoryDetail from './pages/StoryDetail';
import About from './pages/About';
import Contact from './pages/Contact';
import { ROUTES } from './constants';

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col font-sans bg-page text-text-primary">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path={ROUTES.HOME} element={<Home />} />
            <Route path={ROUTES.STORIES} element={<Stories />} />
            <Route path={ROUTES.STORY} element={<StoryDetail />} />
            <Route path={ROUTES.ABOUT} element={<About />} />
            <Route path={ROUTES.CONTACT} element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;