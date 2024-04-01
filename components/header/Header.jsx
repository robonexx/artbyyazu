import { motion } from 'framer-motion';

// styles
import styles from './Header.module.scss';

export default function Header({ children }) {
  return (
    <header className={styles['header']}>
      {children}
      <motion.div
        className={styles['border-bottom']}
        initial={{ width: '0%' }}
        animate={{ width: '100%', ease: 'easeInOut' }}
        transition={{ duration: 1, delay: 0.3, ease: 'easeInOut' }}
      />
    </header>
  );
}
