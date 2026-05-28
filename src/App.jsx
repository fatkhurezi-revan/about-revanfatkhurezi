import { useState, useEffect } from 'react';
import Header from './components/Header';
import BusinessCard from './components/BusinessCard';
import ProjectList from './components/ProjectList';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';
import { FiMoon, FiSun } from 'react-icons/fi';
import { motion } from 'framer-motion';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen relative transition-colors duration-500 bg-surface-bright dark:bg-dark-bg overflow-hidden">
      
      {/* Background Elements */}
      <div className="fixed inset-0 z-0 bg-grid-pattern opacity-50 pointer-events-none"></div>
      
      {/* Radial Gradient Glows */}
      <div className="fixed top-[-20%] left-[-10%] w-[50%] h-[50%] bg-primary/10 dark:bg-primary/5 rounded-full blur-[160px] pointer-events-none z-0"></div>
      <div className="fixed bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-accent-purple/10 dark:bg-accent-purple/5 rounded-full blur-[160px] pointer-events-none z-0"></div>

      <div className="relative z-10 py-16 md:py-24 flex flex-col items-center">
        {/* Theme Toggle */}
        <button 
          onClick={() => setDarkMode(!darkMode)}
          className="fixed top-6 right-6 z-50 p-3 rounded-full glass-button shadow-sm text-on-surface dark:text-dark-on-surface"
          aria-label="Toggle Dark Mode"
        >
          {darkMode ? <FiSun className="w-5 h-5" /> : <FiMoon className="w-5 h-5" />}
        </button>

        <motion.main 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-2xl mx-auto px-6 w-full flex flex-col gap-12"
        >
          <Header />
          <BusinessCard />
          <ProjectList />
          <CallToAction />
        </motion.main>
        
        <Footer />
      </div>
    </div>
  );
}

export default App;
