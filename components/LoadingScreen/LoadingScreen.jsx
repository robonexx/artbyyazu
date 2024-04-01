import { useEffect, useRef } from 'react';
import anime from 'animejs';
import './LoadingScreen.css';

const LoadingScreen = () => {
  /*  const [isMounted, setIsMounted] = useState(false); */

  const curtainRef = useRef();

  const animate = () => {
    const curtainTimeline = anime.timeline({
      targets: '.open_curtain',
      duration: 2000,
      easing: 'easeOutSine',
    });
    curtainTimeline
      .add({
        targets: '.loading',
        opacity: [0, 1],
        width: ['0', '30vw'],
        duration: 1000,
        delay: 0,
        innerHTML: [0, 100 + '%'],
        round: 10,
      })
      .add({
        targets: '.loading',
        opacity: [1, 0],
        height: ['50px', '0'],
        duration: 300,
        delay: 200,
        innerHTML: [100, 0 + '%'],
        round: 10,
      })
      .add({
        targets: ['.left', '.right'],
        opacity: 1,
        width: ['50vw', '0vw'],
        duration: 1000,
        delay: 300,
      })
      .add({
        targets: '.open_curtain',
        delay: 300,
        opacity: 0,
        duration: 600,
      });
  };

  useEffect(() => {
    animate();
  });

  return (
    <div className='open_curtain' ref={curtainRef}>
      <h1 className='lca'>YAZU</h1>
      <h2>Art by Yasmina Tanttu</h2>
      <div className='left'></div>
      <div className='right'></div>
      <div className='loading'>
        <span></span>
      </div>
    </div>
  );
};

export default LoadingScreen;
