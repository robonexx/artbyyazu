'use client';
import SmoothTypewriter from '@/components/Animations/SmoothTypewriter';
import styles from './page.module.scss';
import StackedCards from '@/components/StackedCards';
import { TextReveal } from '@/components/Animations/TextReveal';
import Hero from '@/components/Hero';

const text =
  'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum dolorem et eveniet itaque est qui officia quasi cum soluta nostrum libero, quisquam, velit explicabo autem ab amet nesciunt quis. Sapiente obcaecati illum delectus consequuntur omnis nemo laborum modi id vero';

export default function Home() {
  return (
    <main className={styles.main}>
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

      <StackedCards />
    </main>
  );
}
