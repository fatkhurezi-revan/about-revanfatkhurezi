import { motion } from 'framer-motion';
import { FiArrowUpRight } from 'react-icons/fi';
import revtechLogo from '../assets/images/revtech-logo.png';

const BusinessCard = () => {
  return (
    <motion.section 
      whileHover={{ y: -4 }}
      className="w-full relative group"
    >
      <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-accent-purple rounded-3xl blur-md opacity-20 group-hover:opacity-40 transition duration-500"></div>
      <div className="glass-panel rounded-3xl p-8 md:p-10 flex flex-col items-center text-center gap-6 relative z-10 transition-all duration-500 hover:border-white/60 dark:hover:border-white/20">
        <div className="w-24 h-24 rounded-2xl bg-white dark:bg-dark-bg/50 border border-white/50 dark:border-dark-border flex-shrink-0 overflow-hidden shadow-lg flex items-center justify-center mt-2">
          <img 
            src={revtechLogo} 
            alt="RevTech Logo" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="flex flex-col items-center gap-2">
          <h3 className="text-xl font-bold text-on-surface dark:text-dark-on-surface">RevTech</h3>
          <div className="flex items-center justify-center gap-2">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span className="text-sm font-semibold tracking-wide text-emerald-600 dark:text-emerald-400 uppercase">
              Available for Projects
            </span>
          </div>
          <p className="text-sm text-on-surface-variant dark:text-dark-on-surface-variant leading-relaxed mt-4 max-w-lg">
            Bantu wujudkan kebutuhan digitalmu dengan solusi yang modern dan profesional!
          </p>
        </div>
        
        <button className="bg-primary hover:bg-primary-hover text-surface-white font-semibold py-3 px-6 rounded-full w-full flex items-center justify-center gap-2 transition-colors shadow-sm mt-2">
          <span>Get Started</span>
          <FiArrowUpRight className="text-lg" />
        </button>
      </div>
    </motion.section>
  );
};

export default BusinessCard;
