import './Nav.scss';

export default function Nav({ children, active }) {
  return (
    <nav className='nav'>
      <ul className={`menu ${active ? 'open' : ''}`}>{children}</ul>
    </nav>
  );
}
