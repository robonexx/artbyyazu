import { motion } from 'framer-motion';
import { useContext } from 'react';
import { CursorContext } from '../Cursor/CursorProvider';
// styles
import './MenuBtn.scss';

const wrapperVariant = {
  hidden: {
    opacity: '-100vw', //move out of the site
  },
  visible: {
    opacity: 0, // bring it back to nrmal
    transition: {
      delay: 0.5,
      when: 'beforeChildren', //use this instead of delay
      staggerChildren: 0.2, //apply stagger on the parent tag
    },
  },
};

const itemVariant = {
  hidden: {
    y: -10,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
    },
  },
};

const MenuBtn = ({ active, setActive }) => {
  const onClickHandler = () => {
    setActive(!active);
    console.log(active);
  };

  const { setSize } = useContext(CursorContext);

  return (
    <div className='hamburger_wrapper' onClick={() => onClickHandler()}>
      <motion.div
        className={`hamburger ${active ? 'active' : ''}`}
        id='hamburger'
        variants={wrapperVariant}
        initial='hidden'
        animate='visible'
        onMouseEnter={() => {
          setSize('menu_square');
        }}
        onMouseLeave={() => setSize('small')}
      >
        <motion.span variants={itemVariant}></motion.span>
        <motion.span variants={itemVariant}></motion.span>
        <motion.span variants={itemVariant}></motion.span>
      </motion.div>
    </div>
  );
};

export default MenuBtn;
