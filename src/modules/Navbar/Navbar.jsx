import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

import NavbarAuth from './NavbarAuth/NavbarAuth';
import NavbarUser from './NavbarUser/NavbarUser';
import css from './navbar.module.scss';
import items from './items';

import { isUserLogin } from 'redux/auth/auth-selectors';

const getFullName = ({ isActive }) => {
  return isActive ? `${css.link} ${css.active}` : `${css.link}`;
}

const Navbar = () => {
  const isLogin = useSelector(isUserLogin);
  const filteredItems = !isLogin ? items.filter(item => !item.private) : items;

    const elements = filteredItems.map(({ id, text, link }) => (
      <li key={id}>
        <NavLink className={getFullName} to={link}>
          {text}
        </NavLink>
      </li>
    ));

    return (
      <ul className={css.menu}>
        {elements}
        {!isLogin && <NavbarAuth />}
        {isLogin && <NavbarUser />}
      </ul>
    );
}

export default Navbar;