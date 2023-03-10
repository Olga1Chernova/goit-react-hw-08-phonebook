import useForm from 'shared/hooks/useForm';
import TextField from 'shared/components/TextField/TextField';
import Button from 'shared/components/Button/Button';

import initialStateForm from './initialStateForm';
import fields from './fields';

import css from './login-form.module.scss';

const LoginForm = ({ onSubmit }) => {
    const { state, handleChange, handleSubmit } = useForm({ initialStateForm, onSubmit });
    return (
      <form className={css.wrapper} onSubmit={handleSubmit}>
        <TextField
          value={state.email}
          handleChange={handleChange}
          {...fields.email}
        />
        <TextField
          value={state.password}
          handleChange={handleChange}
          {...fields.password}
        />
        <Button>Register</Button>
      </form>
    );
}

export default LoginForm;