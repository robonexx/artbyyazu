import { useContext } from 'react';
import { motion } from 'framer-motion';
import './Logo.css';
import { CursorContext } from '../Cursor/CursorProvider';

const Logo = () => {
  const { setSize } = useContext(CursorContext);
  return (
    <div>
      <motion.h2
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 1, ease: 'easeIn' }}
        onMouseEnter={() => {
          setSize('square');
        }}
        onMouseLeave={() => setSize('small')}
      >
        Art by Yazu
      </motion.h2>
    </div>
  );
};

export default Logo;
