import { useDispatch } from "react-redux";

import { signUp } from "redux/auth/auth-operations";

import RegisterForm from "modules/RegisterForm/RegisterForm";

import css from './registration-page.module.scss';

const RegistrationPage = () => {

    const dispatch = useDispatch();

    const handleSignup = data => {
        dispatch(signUp(data));
    }
    return (
        <div className={css.container}>
            <h1>Registration page</h1>
            <RegisterForm onSubmit={handleSignup}/>
        </div>
    )
}

export default RegistrationPage;