import { useDispatch, useSelector } from "react-redux";

import { Navigate } from "react-router-dom";

import { logIn } from "redux/auth/auth-operations";

import { isUserLogin } from "redux/auth/auth-selectors";

import LoginForm from "modules/LoginForm/LoginForm";

import css from './login-page.module.scss';

const LoginPage = () => {

    const isLogin = useSelector(isUserLogin);

    const dispatch = useDispatch();

    const handleLogin = data => {
        dispatch(logIn(data));
    }

    if (isLogin) {
        return (<Navigate to="/contacts" />);
    }

    return (
        <div className={css.container}>
            <h1>Login page</h1>
            <LoginForm onSubmit={handleLogin}/>
        </div>
    )
}

export default LoginPage;