import { useSelector } from 'react-redux';

import { getUser } from 'redux/auth/auth-selectors';

import css from './navbar-user.module.scss';

const NavbarUser = () => {
    const { name } = useSelector(getUser);

    return (
      <div className={css.wrapper}>
        <span className={css.username}>{name}</span>,{' '}
        <button className={css.button}>Log out</button>
      </div>
    );
}

export default NavbarUser;