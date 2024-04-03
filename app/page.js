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

export default function Home() {
  return (
    <main className={styles.main}>
      <Background />
      <section>
        <Hero />
      </section>

      <section>
        <div className={styles['section-dots']}>
          <Dots />
        </div>
        <StackedCards />
      </section>
      <section className={styles['section-slider']}>
        <div className={styles.wrapper}>
          <TextReveal text='Selected drawings' el='h2' />
        </div>
       {/*  <ImageBackground /> */}
        <ImageSlider />
      </section>
      <section className={styles['section-about']} id='about'>
        <About />
      </section>
      <section className={styles['section-testimonials']}></section>
    </main>
  );
}
