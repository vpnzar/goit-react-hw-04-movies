import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';

const Navigation = () => {
  return (
    <nav>
      <ul className={s.navList}>
        <li>
          <NavLink
            exact
            to="/"
            className={s.navLink}
            activeClassName={s.activeNavLink}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/movies"
            className={s.navLink}
            activeClassName={s.activeNavLink}
          >
            Movies
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
export default Navigation;
