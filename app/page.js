'use client';
import styles from './page.module.scss';
import StackedCards from '@/components/StackedCards';
import { TextReveal } from '@/components/Animations/TextReveal';
import Hero from '@/components/Hero';
import Dots from '@/components/backgrounds/Dots';
import ImageSlider from '@/components/ImageSlider';
import { Background } from '@/components/backgrounds/Background';
import ImageBackground from '@/components/backgrounds/ImageBackground';
import About from '@/components/About';
import SideScrollText from '@/components/SideScollText';
import { useScroll, useTransform, motion } from 'framer-motion';
import GradientBg from '@/components/backgrounds/GraidentBg';

export default function Home() {
  const { scrollYProgress } = useScroll();
  const x = useTransform(scrollYProgress, [0, 1], [50, -1000]);
  return (
    <main className={styles.main}>
      <Background />
      <section>
        <Hero />
      </section>
      <motion.div style={{ x }}>
        <SideScrollText />
      </motion.div>

      <section>
        <div className={styles['section-dots']}>
          <Dots />
        </div>
        <StackedCards />
      </section>

      <section className={styles['section-slider']}>
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
