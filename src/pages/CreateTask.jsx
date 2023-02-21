import React from 'react';
import { TodoForm } from '../components/TodoForm';
import { useNavigate } from 'react-router-dom';
import { addTask } from '../lib/pocketbase';
import { useInputContext } from '../context/InputContext';

export default function CreateTask() {
  const types = { placeholder1: 'title', placeholder2: 'description', type: 'text' };
  const { value } = useInputContext();
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (!value.title || !value.desc) {
      window.alert('please inter the value');
      return;
    }
    addTask(value.title, value.desc);
    navigate('/');
  };

  return (
    <>
      <TodoForm
        handleSubmit={handleSubmit}
        icon="save_as"
        text="save"
        types={types}
      />
    </>
  );
}
