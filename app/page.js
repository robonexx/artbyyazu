'use client';
import styles from './page.module.scss';
import StackedCards from '@/components/StackedCards';
import { TextReveal } from '@/components/Animations/TextReveal';
import Hero from '@/components/Hero';
import Dots from '@/components/About/backgrounds/Dots';
import ImageSlider from '@/components/ImageSlider';
import { Background } from '@/components/About/backgrounds/Background';
import ImageBackground from '@/components/About/backgrounds/ImageBackground';
import About from '@/components/About';
import SideScrollText from '@/components/SideScollText';
import { useScroll, useTransform, motion } from 'framer-motion';
import GradientBg from '@/components/About/backgrounds/GraidentBg';

export default function Home() {
  const { scrollYProgress } = useScroll();
  const x = useTransform(scrollYProgress, [0, 1], [50, -1300]);
  return (
    <main className={styles.main}>
      <Background />
      <section>
        <Hero />
      </section>
      <div className={styles.textWrapper}>
        <motion.div style={{ x }} className={styles.scrolltext}>
          <SideScrollText />
        </motion.div>
      </div>
      <div className={styles['section-dots']}>
        <Dots />
      </div>
      <section>
        <StackedCards />
      </section>

      <section className={styles['section-slider']}>
        <h4 className={styles.handwriting}>
          <TextReveal
            tag='h4'
            text='Creativity is the bridge between imagination and reality, where dreams take shape and minds find solace'
          />
        </h4>
        <div className={styles['section-gradient']}>
          <GradientBg />
        </div>
        <ImageSlider />
      </section>
      <section className={styles['section-about']} id='about'>
        <About />
      </section>
      <section className={styles['section-testimonials']}></section>
    </main>
  );
}
