import css from './navbar-user.module.scss';

const NavbarUser = () => {
    return (
        <div>
            <button className={css.button}>Log out</button>
        </div>
    )
}

export default NavbarUser;