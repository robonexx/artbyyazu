'use client';

import { createContext, useState } from 'react';

export const CursorContext = createContext({
  size: 'small',
  setSize: () => {},
});

const CursorProvider = (props) => {
  const [size, setSize] = useState('small');

  const updateSize = (newSize) => {
    setSize(newSize);
  };

  const contextValue = {
    size,
    setSize: updateSize,
  };

  return (
    <CursorContext.Provider value={contextValue}>
      {props.children}
    </CursorContext.Provider>
  );
};

export default CursorProvider;
