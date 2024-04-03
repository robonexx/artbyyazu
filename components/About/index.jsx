import React from 'react';
import styles from './About.module.scss';
import SmoothTypewriter from '@/components/Animations/SmoothTypewriter';

const text =
  'Yasmina Tanttu is an abstract painter who infuses her work with playful energy, love, and intention. Painting is her sanctuary, where she finds calm, relaxation, and creative expression. Each brushstroke is a deliberate offering of beauty and solace to the world, reflecting her belief in the power of art to uplift and inspire. In her studio, time seems to stand still as she creates, knowing she is exactly where she belongs—bringing dreams to life on canvas.';

const About = () => {
  return (
    <div className={styles.about}>
      <div className={styles.wrapper}>
        <div className={styles.text}>
          <SmoothTypewriter text={text} tag='p' />
        </div>
      </div>
    </div>
  );
};

export default About;
