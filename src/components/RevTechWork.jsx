import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiLayout, FiMail, FiDatabase, FiBookOpen, FiArrowRight } from 'react-icons/fi';

const RevTechWork = () => {
  const [activeTab, setActiveTab] = useState('website');

  const categories = [
    { id: 'website', label: 'Website', icon: <FiLayout className="w-4 h-4" /> },
    { id: 'invitation', label: 'Digital Invitations', icon: <FiMail className="w-4 h-4" /> },
    { id: 'data', label: 'Data Processing', icon: <FiDatabase className="w-4 h-4" /> },
    { id: 'academic', label: 'Academic', icon: <FiBookOpen className="w-4 h-4" /> },
  ];

  const content = {
    website: {
      title: 'Custom Website Development',
      desc: 'Pembuatan website profesional untuk portofolio, company profile, dan e-commerce dengan desain modern dan performa tinggi.',
    },
    invitation: {
      title: 'Premium Digital Invitations',
      desc: 'Undangan digital interaktif untuk pernikahan, acara, dan event spesial dengan desain elegan dan fitur lengkap.',
    },
    data: {
      title: 'Data Processing & Analytics',
      desc: 'Layanan pembersihan, analisis, dan visualisasi data yang rumit menjadi wawasan yang mudah dipahami.',
    },
    academic: {
      title: 'Academic Assistance',
      desc: 'Pendampingan penyusunan tugas, laporan, dan presentasi akademik agar lebih terstruktur dan rapi.',
    }
  };

  return (
    <section className="flex flex-col gap-6 w-full mt-4">
      <h4 className="text-xs font-semibold text-outline dark:text-dark-on-surface-variant uppercase tracking-wider text-center md:text-left">
        REVTECH'S WORK
      </h4>
      
      <div className="flex gap-3 overflow-x-auto no-scrollbar pb-2 pt-2">
        {categories.map((cat) => (
          <button 
            key={cat.id}
            onClick={() => setActiveTab(cat.id)}
            className={`font-semibold text-sm px-5 py-2.5 rounded-full whitespace-nowrap flex items-center gap-2 transition-all ${
              activeTab === cat.id 
                ? 'bg-primary/10 dark:bg-primary/20 text-primary dark:text-blue-300 border border-primary/30 shadow-[0_0_15px_rgba(59,130,246,0.2)]' 
                : 'glass-button text-on-surface-variant dark:text-dark-on-surface shadow-sm'
            }`}
          >
            {cat.icon} {cat.label}
          </button>
        ))}
      </div>

      <div className="w-full min-h-[160px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="w-full"
          >
            <a 
              href="#"
              className="block glass-panel rounded-2xl p-6 relative group flex flex-col gap-4 hover:border-primary/50 transition-all duration-300"
            >
              <div className="flex items-center justify-between w-full">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-surface-bright dark:bg-dark-bg border border-border-subtle dark:border-dark-border flex items-center justify-center text-primary flex-shrink-0 transition-colors duration-300 group-hover:bg-primary/10 group-hover:border-primary/20">
                    {categories.find(c => c.id === activeTab)?.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-on-surface dark:text-dark-on-surface">
                    {content[activeTab].title}
                  </h3>
                </div>
              </div>
              <p className="text-sm text-on-surface-variant dark:text-dark-on-surface-variant leading-relaxed mt-1 w-full pr-10">
                {content[activeTab].desc}
              </p>
              <div className="absolute bottom-5 right-5 text-outline dark:text-dark-on-surface-variant group-hover:text-primary dark:group-hover:text-primary transition-colors">
                <FiArrowRight className="w-5 h-5" />
              </div>
            </a>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default RevTechWork;
