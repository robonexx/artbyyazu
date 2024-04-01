'use client';

import { useEffect, useRef } from 'react';
import HoverEffect from 'hover-effect';
import styles from './hero.module.scss';
import { motion } from 'framer-motion';

const Hero = () => {
  const container = useRef();
  useEffect(() => {
    new HoverEffect({
      parent: container.current,
      intensity: 0.3,
      image1: '/images/a.jpeg',
      image2: '/images/b.jpeg',
      displacementImage: '/images/distortion.png',
    });
  }, [container]);
  return (
    <motion.div className={styles.hero}>
      <motion.div
        className={styles['container']}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, ease: 'easeInOut' }}
        transition={{ duration: 0.6, delay: 0.4, ease: 'easeInOut' }}
      >
        <div className={styles['item']}>
          <div className={styles['item-header']}>
            <div
              className={styles['item-header-heading']}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0, ease: 'easeInOut' }}
              transition={{ duration: 0.4, delay: 0.5, ease: 'easeInOut' }}
            >
              Selected arts
            </div>
            <div className={styles['item-header-heading2']}>
              {new Date().getFullYear()}
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 480, ease: 'easeInOut' }}
            transition={{ duration: 0.6, delay: 1.6, ease: 'easeInOut' }}
          >
            <div className={styles['item-image']} ref={container}></div>
          </motion.div>
          <div className={styles['item-footer']}>
            <motion.div
              className={styles['item-footer-quote']}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0, ease: 'easeInOut' }}
              transition={{ duration: 0.4, delay: 0.7, ease: 'easeInOut' }}
            >
              Yasmina Tanttu
            </motion.div>
          </div>
        </div>
      </motion.div>
      <motion.span
        className={styles['border-left']}
        initial={{ height: '0%' }}
        animate={{ delay: 1, height: '100%', ease: 'easeInOut' }}
        transition={{ duration: 1.6, delay: 0.3, ease: 'easeInOut' }}
      ></motion.span>
      <motion.span
        className={styles['border-right']}
        initial={{ height: '0%', rotate: 180 }}
        animate={{ delay: 1.2, height: '100%', ease: 'easeInOut' }}
        transition={{ duration: 1.6, delay: 0.3, ease: 'easeInOut' }}
      ></motion.span>
      <motion.span
        className={styles['border-bt']}
        initial={{ width: '0%' }}
        animate={{ delay: 1.4, width: '100%', ease: 'easeInOut' }}
        transition={{ duration: 1.6, delay: 0.3, ease: 'easeInOut' }}
      ></motion.span>
    </motion.div>
  );
};

export default Hero;
