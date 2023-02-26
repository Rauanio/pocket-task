import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthForm } from '../components/AuthForm';
import { useInputContext } from '../context/InputContext';
import { login } from '../lib/pocketbase';

export default function Login() {
  const types = { placeholder1: 'username', placeholder2: 'password', type: 'password' };
  const { value } = useInputContext();
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (!value.username || !value.password) {
      window.alert('please inter the value');
      return;
    }
    login(value.username, value.password);
    navigate('/');
  };

  return (
    <AuthForm
      handleSubmit={handleSubmit}
      title="Login"
      icon="login"
      text="continue"
      types={types}
    />
  );
}
