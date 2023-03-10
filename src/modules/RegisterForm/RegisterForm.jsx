import useForm from 'shared/hooks/useForm';
import TextField from 'shared/components/TextField/TextField';
import Button from 'shared/components/Button/Button';

import initialState from './initialState';
import fields from './fields';

import css from './register-form.module.scss';

const RegisterForm = ({ onSubmit }) => {
    const { state, handleChange, handleSubmit } = useForm({ initialState, onSubmit });
    return (
      <form className={css.wrapper} onSubmit={handleSubmit}>
        <TextField
          value={state.name}
          handleChange={handleChange}
          {...fields.name}
        />
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

export default RegisterForm;