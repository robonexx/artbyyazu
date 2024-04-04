import styles from './background.module.scss';
import { motion } from 'framer-motion';

export const Background = () => {
  return (
    <motion.div
      className={styles.background}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 3,
      }}
    ></motion.div>
  );
};
