import React from 'react';
import { TodoForm } from '../components/TodoForm';
import { useNavigate } from 'react-router-dom';
import { addTask } from '../lib/pocketbase';
import { useInputContext } from '../context/InputContext';

export default function CreateTask() {
  const { value } = useInputContext();
  const navigate = useNavigate();

  console.log(value);

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
      <h3 className="mb-3">Create Task</h3>
      <TodoForm handleSubmit={handleSubmit} />
    </>
  );
}
