import { motion } from 'framer-motion';

const CallToAction = () => {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="w-full mt-4"
    >
      <div className="bg-surface-white dark:bg-dark-surface border border-border-subtle dark:border-dark-border rounded-3xl p-6 md:p-8 flex flex-col items-center text-center gap-5 shadow-ambient dark:shadow-ambient-dark transition-colors duration-300">
        <h3 className="text-xl font-bold text-on-surface dark:text-dark-on-surface">
          Punya ide, kebutuhan digital, atau tugas yang lagi bikin pusing?
        </h3>
        <p className="text-base text-on-surface-variant dark:text-dark-on-surface-variant max-w-md">
          Yuk diskusikan dan cari solusi terbaiknya bareng-bareng.
        </p>
        <button className="bg-primary hover:bg-primary-hover text-surface-white font-semibold py-3 px-8 rounded-full flex items-center justify-center gap-2 transition-colors shadow-sm w-full sm:w-auto mt-2">
          <span>Diskusikan Sekarang</span>
        </button>
      </div>
    </motion.section>
  );
};

export default CallToAction;
