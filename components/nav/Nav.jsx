import Logo from '../logo/Logo';
import './Nav.scss';

export default function Nav({ children, active }) {
  return (
    <nav className='nav'>
      <ul className={`menu ${active ? 'open' : ''}`}>
        <div className='nav-logo'>
          {' '}
          <Logo />
        </div>

        {children}
      </ul>
    </nav>
  );
}
