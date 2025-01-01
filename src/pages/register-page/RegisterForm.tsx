import { Button, TextField } from '@mui/material';
import React, { useState } from 'react';

interface RegisterFormProps {
  onSubmit: (username: string) => void;
}

const RegisterForm: React.FC<RegisterFormProps> = ({ onSubmit }) => {
    //only one field but prepared for scalable form
  const [formState, setFormState] = useState({username: ''});
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({ ...prevState, [name]: value }));
  }
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formState.username.trim()) {
        onSubmit(formState.username);
        setFormState({ username: '' });
    }
  };

  return (
    <form onSubmit={handleSubmit} className='form'>
        <TextField 
            id="username"
            name="username"
            label="Alias"
            color="secondary"
            variant="outlined"
            onChange={handleChange}
            value={formState.username}
            fullWidth
            required
        />
        <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
        >
            Send
        </Button>
    </form>
  );
};

export default RegisterForm;