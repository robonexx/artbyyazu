import { useContext } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { CursorContext } from '../Cursor/CursorProvider';

// styles
import './NavItem.scss';

export default function NavItem({ title, path, cls, id, i }) {
  const { setSize } = useContext(CursorContext);
  return (
    <motion.li
      className={cls}
      key={id}
      initial={{ opacity: 0, y: -100}}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: i * 0.2 }}
      onMouseEnter={() => {
        setSize('square');
      }}
      onMouseLeave={() => setSize('small')}
    >
      <Link className='nav_link' href={path}>
        {title}
      </Link>
    </motion.li>
  );
}
