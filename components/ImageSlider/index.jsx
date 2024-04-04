// ImageSlider.js
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { wrap } from 'popmotion';
import styles from './ImageSlider.module.scss';
import CardWithImage from '../CardWithImage';

export const backgroundsData = [
  'linear-gradient(to right, #20002c, #cbb4d4)',
  'linear-gradient(to right, #159957, #155799)',
  'linear-gradient(to right, #3a1c71, #d76d77, #ffaf7b)',
  'linear-gradient(to right, #2c3e50, #4ca1af)',
  'linear-gradient(to right, #e44d26, #f16529)',
  'linear-gradient(to right, #5614b0, #dbd65c)',
  'linear-gradient(to right, #4da0b0, #d39d38)',
];

const images = [
  '/images/draw1.jpg',
  '/images/draw2.jpg',
  '/images/draw3.jpg',
  '/images/draw4.jpg',
  '/images/draw5.jpg',
  '/images/draw6.jpg',
  '/images/draw7.jpg',
];

const ImageSlider = () => {
  const [[page, direction], setPage] = useState([0, 0]);
  const imageIndex = wrap(0, images.length, page);
  const bgIndex = wrap(0, backgroundsData.length, page);
  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };
  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset, velocity) => Math.abs(offset) * velocity;
  return (
    <div className={styles['image-slide-wrapper']}>
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          className={styles.img}
          key={page}
          src={images[imageIndex]}
          custom={direction}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          drag='x'
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);
            if (swipe < -swipeConfidenceThreshold) {
              paginate(1);
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1);
            }
          }}
        >
          <CardWithImage
            key={`p_${page}`}
            i={page}
            src={images[imageIndex]}
            bg={backgroundsData[bgIndex]}
          />
        </motion.div>
      </AnimatePresence>
      <div className={styles.next} onClick={() => paginate(1)}>
        {'‣'}
      </div>
      <div className={styles.prev} onClick={() => paginate(-1)}>
        {'‣'}
      </div>
    </div>
  );
};
export default ImageSlider;
