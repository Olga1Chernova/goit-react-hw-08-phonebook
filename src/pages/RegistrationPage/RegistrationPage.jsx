import { useDispatch, useSelector } from "react-redux";

import { Navigate } from "react-router-dom";

import { signUp } from "redux/auth/auth-operations";

import { isUserLogin } from "redux/auth/auth-selectors";

import RegisterForm from "modules/RegisterForm/RegisterForm";

import css from './registration-page.module.scss';

const RegistrationPage = () => {

    const isLogin = useSelector(isUserLogin);

    const dispatch = useDispatch();

    const handleSignup = data => {
        dispatch(signUp(data));
    }

    if (isLogin) {
        return (<Navigate to="/contacts" />);
    }

    return (
        <div className={css.container}>
            <h1>Registration page</h1>
            <RegisterForm onSubmit={handleSignup}/>
        </div>
    )
}

export default RegistrationPage;