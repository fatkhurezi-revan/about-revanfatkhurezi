import { motion } from 'framer-motion';
import { FiArrowUpRight } from 'react-icons/fi';
import revtechLogo from '../assets/images/revtech-logo.png';

const BusinessCard = () => {
  return (
    <motion.section 
      whileHover={{ y: -4 }}
      className="w-full relative group"
    >
      <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-accent-purple rounded-3xl blur opacity-0 group-hover:opacity-20 transition duration-300"></div>
      <div className="bg-surface-white dark:bg-dark-surface border border-border-subtle dark:border-dark-border rounded-3xl p-6 md:p-8 flex flex-col items-center text-center gap-6 shadow-ambient dark:shadow-ambient-dark relative z-10 transition-colors duration-300">
        <div className="w-20 h-20 rounded-2xl bg-surface-bright dark:bg-dark-bg border border-border-subtle dark:border-dark-border flex-shrink-0 overflow-hidden shadow-sm flex items-center justify-center mt-4">
          <img 
            src={revtechLogo} 
            alt="RevTech Logo" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="flex flex-col items-center gap-2">
          <h3 className="text-xl font-bold text-on-surface dark:text-dark-on-surface">RevTech</h3>
          <p className="text-sm font-medium text-outline dark:text-dark-on-surface-variant">🌟 Fast & Reliable | 🟢 Available for Hire</p>
          <p className="text-sm text-on-surface-variant dark:text-dark-on-surface-variant leading-relaxed mt-4 max-w-lg">
            Melayani pembuatan website kustom (undangan, portofolio, dll), pembersihan & analisis data, serta jasa pendampingan penyusunan tugas, presentasi, dan laporan akademik.
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
