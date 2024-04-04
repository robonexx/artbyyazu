import React from 'react';
import Image from 'next/image';

const ImageBackground = () => {
  return (
    <div
      style={{
        width: '100%',
        height: '100svh',
        position: 'absolute',
        zIndex: '2',
      }}
    >
      <Image src='/images/frame_1.png' fill />
    </div>
  );
};

export default ImageBackground;
