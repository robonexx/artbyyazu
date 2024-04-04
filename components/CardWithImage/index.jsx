'use client';
import { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import styles from './cardWithImage.module.scss';
import { motion } from 'framer-motion';

const CardWithImage = ({
  i,
  src,
  bg,
}) => {
  const [randomAngle, setRandomAngle] = useState(0);
  const container = useRef(null);

  useEffect(() => {
    const maxAngle = 1.5;
    let angle = Math.random() * maxAngle * 2 - maxAngle;

    if (i % 2 === 0) {
      angle = Math.abs(angle) * -1;
    } else {
      angle = Math.abs(angle);
    }

    setRandomAngle(angle);
  }, []);

  return (
    <div ref={container} className={styles.cardContainer}>
      <motion.div
        style={{
          background: bg,
          top: `calc(-5vh + ${i * 5}px)`,
          rotate: randomAngle,
        }}
        className={styles.card}
      >
          <div className={styles.imageContainer}>
            <motion.div className={styles.inner}>
              <Image fill src={`${src}`} alt='image' />
            </motion.div>
          </div>
      </motion.div>
    </div>
  );
};

export default CardWithImage;
