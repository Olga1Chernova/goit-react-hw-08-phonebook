import { useDispatch } from "react-redux";

import { logIn } from "redux/auth/auth-operations";

import LoginForm from "modules/LoginForm/LoginForm";

import css from './login-page.module.scss';

const LoginPage = () => {

    

    const dispatch = useDispatch();

    const handleLogin = data => {
        dispatch(logIn(data));
    }

    

    return (
        <div className={css.container}>
            <h1>Login page</h1>
            <LoginForm onSubmit={handleLogin}/>
        </div>
    )
}

export default LoginPage;