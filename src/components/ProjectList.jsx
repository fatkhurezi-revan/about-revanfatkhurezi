import { motion } from 'framer-motion';
import { FiArrowRight, FiCode, FiBriefcase } from 'react-icons/fi';
import revaiLogo from '../assets/images/revai-logo.png';

const ProjectList = () => {
  return (
    <section className="flex flex-col gap-4 w-full">
      <div className="flex flex-col gap-1 text-center">
        <h4 className="text-xs font-semibold text-outline dark:text-dark-on-surface-variant uppercase tracking-wider">
          EKSPLORASI & INOVASI
        </h4>
        <p className="text-sm text-on-surface-variant dark:text-dark-on-surface-variant">
          Kumpulan proyek independen dan eksperimen teknologi personal saya.
        </p>
      </div>

      <div className="mt-2 w-full">
        <motion.a 
          whileHover={{ y: -4, scale: 1.01 }}
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="block glass-panel rounded-2xl p-6 group flex flex-col gap-4 hover:border-primary/50 transition-all duration-300"
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
            <div className="text-outline dark:text-dark-on-surface-variant group-hover:text-primary dark:group-hover:text-primary transition-colors flex-shrink-0">
              <FiArrowRight className="w-5 h-5" />
            </div>
          </div>
          <p className="text-sm md:text-base text-on-surface-variant dark:text-dark-on-surface-variant leading-relaxed mt-1 w-full">
            AI assistant untuk membantu menemukan ide judul Akademik kamu!
          </p>
        </motion.a>
      </div>
    </section>
  );
};

export default ProjectList;
