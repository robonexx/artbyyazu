import React from 'react';
import './style.scss';

const GridLines = () => {
  return (
    <div className='grid-lines overflow-hidden'>
      {/* Horizontal lines */}
      <div className='lines'>
        {[6, 12, 18, 24, 30, 36, 42, 48, 54, 60, 66, 72, 78, 84, 90, 96].map(
          (left, index) => (
            <div
              className='line'
              key={index}
              style={{ left: `${left}%` }}
            ></div>
          )
        )}
      </div>
      {/* Vertical lines */}
      <div className='lines'>
        {[10, 20, 30, 40, 50, 60, 70, 80, 90].map((top, index) => (
          <div
            className='line-vertical'
            key={index}
            style={{ top: `${top}%` }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default GridLines;
