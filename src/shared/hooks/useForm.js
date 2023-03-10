import { useState } from "react";

const useForm = ({ initialStateForm, onSubmit }) => {
  const [state, setState] = useState({ ...initialStateForm });

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setState(prevState => {
      return { ...prevState, [name]: value }
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit({ ...state });
    setState({ ...initialStateForm });
  };

  return { state, setState, handleChange, handleSubmit };
}


export default useForm;