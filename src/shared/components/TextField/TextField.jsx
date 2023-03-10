import { useMemo } from 'react';
import { nanoid } from 'nanoid';

import css from './text-field.module.scss';

const TextField = ({ label, handleChange, ...props }) => {
    const id = useMemo(() => nanoid(), []);
    return (
      <div className={css.wrapper}>
        <label htmlFor={id} className={css.label}>{label}</label>
        <input id={id} className={css.input} onChange={handleChange} {...props} />
      </div>
    );
}

export default TextField;