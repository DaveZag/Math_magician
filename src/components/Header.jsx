import { NavLink } from 'react-router-dom';

const Header = () => {
  const links = [
    { id: 1, path: '/', title: 'Home' },
    { id: 2, path: '/calculator', title: 'Calculator' },
    { id: 3, path: '/quotes', title: 'Quotes' },
  ];

  return (
    <header className="header flex jc-sb ai-c">
      <div className="logo">
        <h1>
          <NavLink to="/">Math Magicians</NavLink>
        </h1>
      </div>

      <nav className="navbar">
        <ul className="nav-links flex">
          {links.map((link) => (
            <li key={link.id} className="nav-link">
              <NavLink to={link.path}>{link.title}</NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
