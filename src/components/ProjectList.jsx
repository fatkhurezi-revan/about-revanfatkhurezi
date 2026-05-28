import { motion } from 'framer-motion';
import { FiArrowRight, FiCode, FiBriefcase } from 'react-icons/fi';
import revaiLogo from '../assets/images/revai-logo.png';

const ProjectList = () => {
  return (
    <section className="flex flex-col gap-4 w-full">
      <h4 className="text-xs font-semibold text-outline dark:text-dark-on-surface-variant uppercase tracking-wider text-center md:text-left">
        JELAJAHI KARYA & BISNIS SAYA
      </h4>
      
      <div className="flex gap-3 overflow-x-auto no-scrollbar pb-4 pt-2">
        <button className="bg-primary/10 dark:bg-primary/20 text-primary dark:text-blue-300 font-semibold text-sm px-6 py-3 rounded-full border border-primary/30 whitespace-nowrap flex items-center gap-2 transition-all shadow-[0_0_15px_rgba(59,130,246,0.2)]">
          <FiCode className="w-4 h-4" /> My Projects
        </button>
        <button className="glass-button text-on-surface-variant dark:text-dark-on-surface font-semibold text-sm px-6 py-3 rounded-full whitespace-nowrap flex items-center gap-2 shadow-sm">
          <FiBriefcase className="w-4 h-4" /> My Business
        </button>
      </div>

      <div className="mt-2 w-full">
        <motion.a 
          whileHover={{ y: -4, scale: 1.01 }}
          href="#"
          className="block glass-panel rounded-2xl p-6 relative group flex flex-col gap-4 hover:border-primary/50 transition-all duration-300"
        >
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-surface-bright dark:bg-dark-bg border border-border-subtle dark:border-dark-border flex items-center justify-center text-primary flex-shrink-0 transition-colors duration-300 group-hover:bg-primary/10 group-hover:border-primary/20 overflow-hidden">
                <img src={revaiLogo} alt="RevAI Logo" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-lg font-semibold text-on-surface dark:text-dark-on-surface">
                JudulAI
              </h3>
            </div>
          </div>
          <p className="text-sm text-on-surface-variant dark:text-dark-on-surface-variant leading-relaxed mt-1 w-full pr-10">
            AI assistant untuk membantu menemukan ide judul Akademik kamu!
          </p>
          <div className="absolute bottom-5 right-5 text-outline dark:text-dark-on-surface-variant group-hover:text-primary dark:group-hover:text-primary transition-colors">
            <FiArrowRight className="w-5 h-5" />
          </div>
        </motion.a>
      </div>
    </section>
  );
};

export default ProjectList;
