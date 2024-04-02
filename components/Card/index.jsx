'use client';
import { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import styles from './card.module.scss';
import { useTransform, motion, useScroll } from 'framer-motion';
import SmoothTypewriter from '../Animations/SmoothTypewriter';

const Card = ({
  i,
  title,
  description,
  src,
  url,
  bg,
  progress,
  range,
  targetScale,
}) => {
  const [randomAngle, setRandomAngle] = useState(0);
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start'],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  // Generate a random angle between -3 and 3 degrees
  useEffect(() => {
    // Generate a random angle between -3 and 3 degrees
    const maxAngle = 1.5;
    let angle = Math.random() * maxAngle * 2 - maxAngle;

    // Adjust angle based on card index
    if (i % 2 === 0) {
      // Even-indexed card, tilt left
      angle = Math.abs(angle) * -1;
    } else {
      // Odd-indexed card, tilt right
      angle = Math.abs(angle);
    }

    setRandomAngle(angle);
  }, []);

  return (
    <div ref={container} className={styles.cardContainer}>
      <motion.div
        style={{
          background: bg,
          scale,
          top: `calc(-5vh + ${i * 5}px)`,
          rotate: randomAngle,
        }}
        className={styles.card}
      >
        <h2>{title}</h2>
        <div className={styles.body}>
          <div className={styles.imageContainer}>
            <motion.div className={styles.inner} style={{ scale: imageScale }}>
              <Image fill src={`${src}`} alt='image' />
            </motion.div>
          </div>
          <div className={styles.description}>
            <p>{description}</p>
           {/*  <span>
              <a href={url} target='_blank'>
                See more
              </a>
              <svg
                width='22'
                height='12'
                viewBox='0 0 22 12'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M21.5303 6.53033C21.8232 6.23744 21.8232 5.76256 21.5303 5.46967L16.7574 0.696699C16.4645 0.403806 15.9896 0.403806 15.6967 0.696699C15.4038 0.989592 15.4038 1.46447 15.6967 1.75736L19.9393 6L15.6967 10.2426C15.4038 10.5355 15.4038 11.0104 15.6967 11.3033C15.9896 11.5962 16.4645 11.5962 16.7574 11.3033L21.5303 6.53033ZM0 6.75L21 6.75V5.25L0 5.25L0 6.75Z'
                  fill='black'
                />
              </svg>
            </span> */}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Card;
