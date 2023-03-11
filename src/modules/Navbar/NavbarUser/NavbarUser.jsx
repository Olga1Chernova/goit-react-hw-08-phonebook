import { useSelector, useDispatch } from 'react-redux';

import { logOut } from 'redux/auth/auth-operations';

import { getUser } from 'redux/auth/auth-selectors';

import css from './navbar-user.module.scss';

const NavbarUser = () => {
  const { name } = useSelector(getUser);
  const dispatch = useDispatch();

  const onLogOut = () => {
    dispatch(logOut());
  }

    return (
      <div className={css.wrapper}>
        <span className={css.username}>{name}</span>,{' '}
        <button onClick={onLogOut} className={css.button}>Log out</button>
      </div>
    );
}

export default NavbarUser;