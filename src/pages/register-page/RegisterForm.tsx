import { Button, TextField } from '@mui/material';
import React, { useState } from 'react';

interface RegisterFormProps {
  onSubmit: (username: string) => void;
}

const RegisterForm: React.FC<RegisterFormProps> = ({ onSubmit }) => {
  const [username, setUsername] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (username.trim()) {
      onSubmit(username);
      setUsername('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className='form'>
        <TextField 
            id="username"
            label="Alias"
            color="secondary"
            variant="outlined"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
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