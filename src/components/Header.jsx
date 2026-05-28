import { motion } from 'framer-motion';
import { FiInstagram, FiLinkedin, FiGithub } from 'react-icons/fi';
import { FaTiktok } from 'react-icons/fa';
import profileImg from '../assets/images/profile.jpg';

const Header = () => {
  return (
    <header className="flex flex-col items-center text-center gap-6">
      <motion.div 
        whileHover={{ scale: 1.05 }}
        className="relative group"
      >
        <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent-purple rounded-full blur opacity-25 group-hover:opacity-50 transition duration-300"></div>
        <img 
          src={profileImg} 
          alt="Revan Fatkhurezi" 
          className="relative w-32 h-32 rounded-full object-cover border-4 border-surface-white dark:border-dark-surface shadow-ambient"
        />
      </motion.div>
      
      <div className="flex flex-col items-center gap-2">
        <h1 className="text-2xl md:text-3xl font-bold text-on-surface dark:text-dark-on-surface tracking-tight">
          Revan Fatkhurezi
        </h1>
        <div className="flex flex-wrap justify-center gap-2 mt-1">
          {['Tech Freelancer', 'Data Analyst', 'Web Creator'].map((badge) => (
            <span 
              key={badge} 
              className="bg-primary/10 dark:bg-primary/20 text-primary dark:text-blue-300 px-3 py-1 rounded-full text-xs font-semibold border border-primary/20"
            >
              {badge}
            </span>
          ))}
        </div>
        <p className="text-base text-outline dark:text-dark-on-surface-variant max-w-lg mt-3 leading-relaxed">
          Tempat yang tepat untuk solusi digital!
        </p>
      </div>

      <div className="flex gap-4 mt-2">
        {[
          { icon: <FiInstagram className="w-5 h-5" />, href: "#" },
          { icon: <FiLinkedin className="w-5 h-5" />, href: "#" },
          { icon: <FaTiktok className="w-5 h-5" />, href: "#" },
          { icon: <FiGithub className="w-5 h-5" />, href: "#" }
        ].map((social, i) => (
          <motion.a 
            key={i}
            whileHover={{ y: -3 }}
            href={social.href}
            className="w-12 h-12 rounded-full bg-surface-white dark:bg-dark-surface border border-border-subtle dark:border-dark-border shadow-ambient flex items-center justify-center text-on-surface dark:text-dark-on-surface hover:text-primary dark:hover:text-primary hover:border-primary transition-colors"
          >
            {social.icon}
          </motion.a>
        ))}
      </div>
    </header>
  );
};

export default Header;
