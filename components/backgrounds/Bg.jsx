import React from 'react';
import styles from './Bg.module.scss';

const Bg = () => {
  return (
    <div className={styles['svg-wrapper']}>
      <div className={styles['svg-1']}>
        <svg
          width='968'
          height='665'
          viewBox='0 0 968 665'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M967.135 320.135C967.135 503.769 516.135 665 332.5 665C148.865 665 0 516.135 0 332.5C0 148.865 148.865 0 332.5 0C516.135 0 967.135 136.5 967.135 320.135Z'
            fill='url(#paint0_linear_643_13)'
          />
          <defs>
            <linearGradient
              id='paint0_linear_643_13'
              x1='483.567'
              y1='0'
              x2='483.567'
              y2='665'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#C3BBF7' />
              <stop offset='1' stop-color='#241E48' />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className={styles['svg-2']}>
        <svg
          width='690'
          height='819'
          viewBox='0 0 690 819'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M796 503.559C857 843.059 571.151 865.059 371.5 865.059C171.849 865.059 50.2949 699.102 9.99991 503.559C-71.4999 108.059 392 856.059 406 281.559C420 -292.941 729.055 130.97 796 503.559Z'
            fill='url(#paint0_linear_643_16)'
          />
          <defs>
            <linearGradient
              id='paint0_linear_643_16'
              x1='534'
              y1='-24.5'
              x2='539'
              y2='832.5'
              gradientUnits='userSpaceOnUse'
            >
              <stop offset='0.0323464' stopColor='#FCE1E1' />
              <stop offset='0.525' stopColor='#F3DFDF' />
              <stop offset='1' stopColor='#64C3C9' />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
};

export default Bg;
