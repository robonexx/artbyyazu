import React from 'react';
import styles from './SideScrollText.module.scss';

const SideScrollText = ({
  text = 'Art is part of the heart',
}) => {
  return (
    <h2 className={styles.sidescroll}>
      {text}
    </h2>
  );
};

export default SideScrollText;
