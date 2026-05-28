import { motion } from 'framer-motion';

const CallToAction = () => {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="w-full mt-4"
    >
      <div className="glass-panel rounded-3xl p-8 md:p-12 flex flex-col items-center text-center gap-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent-purple/10 rounded-full blur-3xl -ml-20 -mb-20 pointer-events-none"></div>
        
        <h3 className="text-2xl md:text-3xl font-bold text-on-surface dark:text-dark-on-surface relative z-10">
          Punya proyek web, tumpukan data, atau tugas yang mepet deadline?
        </h3>
        <p className="text-base text-on-surface-variant dark:text-dark-on-surface-variant max-w-lg relative z-10 leading-relaxed">
          Ceritakan apa kebutuhan atau masalahmu. Mari kita selesaikan semuanya dengan cepat, rapi, dan terstruktur.
        </p>
        <button className="bg-primary hover:bg-primary-hover text-surface-white font-semibold py-4 px-10 rounded-full flex items-center justify-center gap-2 transition-all shadow-[0_0_20px_rgba(59,130,246,0.4)] hover:shadow-[0_0_30px_rgba(59,130,246,0.6)] w-full sm:w-auto mt-4 relative z-10">
          <span>Diskusikan Sekarang</span>
        </button>
      </div>
    </motion.section>
  );
};

export default CallToAction;
