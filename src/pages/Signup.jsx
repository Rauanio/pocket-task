import React from 'react';
import { useNavigate } from 'react-router-dom';
import { TodoForm } from '../components/TodoForm';
import { useInputContext } from '../context/InputContext';
import { signUp } from '../lib/pocketbase';

export default function Signup() {
  const types = { placeholder1: 'username', placeholder2: 'password', type: 'password' };
  const { value } = useInputContext();
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (!value.username || !value.password) {
      window.alert('please inter the value');
      return;
    }
    signUp(value.username, value.password);
    navigate('/');
  };

  return (
    <>
      <TodoForm
        handleSubmit={handleSubmit}
        title="Sign up"
        icon="login"
        text="continue"
        types={types}
      />
    </>
  );
}
