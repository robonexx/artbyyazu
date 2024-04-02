'use client';
import SmoothTypewriter from '@/components/Animations/SmoothTypewriter';
import styles from './page.module.scss';
import StackedCards from '@/components/StackedCards';
import { TextReveal } from '@/components/Animations/TextReveal';
import Hero from '@/components/Hero';
import Dots from '@/components/backgrounds/Dots';
import ImageSlider from '@/components/ImageSlider';
import { Background } from '@/components/backgrounds/Background';
import BgEllipse from '@/components/backgrounds/BgEllipse';
import Bg from '@/components/backgrounds/Bg';

const text =
  'Yasmina Tanttu is an abstract painter who infuses her work with playful energy, love, and intention. Painting is her sanctuary, where she finds calm, relaxation, and creative expression. Each brushstroke is a deliberate offering of beauty and solace to the world, reflecting her belief in the power of art to uplift and inspire. In her studio, time seems to stand still as she creates, knowing she is exactly where she belongs—bringing dreams to life on canvas.';

export default function Home() {
  return (
    <main className={styles.main}>
      <Background />
      <section>
        <Hero />
      </section>
      {/*  <div className={styles.wrapper}>
        <TextReveal
          text={[
            'This is written on',
            'a typing machine. Tick tick',
            'tick tack tack...',
          ]}
          el='h1'
          style={{ fontSize: '72px !important' }}
        />
      </div>
      <div className={styles.wrapper}>
        <SmoothTypewriter text={text} tag='h1' />
      </div>
      <div className={styles.wrapper}>
        <TextReveal text='Hello you' el='h1' />
      </div> */}
      <section className={styles.section}>
        <div className={styles['section-dots']}>
          <Dots />
        </div>
        <StackedCards />
      </section>
      <section className={styles['section-slider']}>
        <ImageSlider />
      </section>
      <section className={styles['section-about']} id='about'>
        <div>
          <BgEllipse />
          <Bg />
          <div className={styles.text}>
            <SmoothTypewriter text={text} tag='p' />
          </div>
        </div>
      </section>
      <section className={styles['section-testimonials']}></section>
    </main>
  );
}
