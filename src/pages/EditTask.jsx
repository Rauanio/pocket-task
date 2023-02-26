import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { TodoForm } from '../components/TodoForm';
import { useInputContext } from '../context/InputContext';
import { editTask } from '../lib/pocketbase';

export default function EditTask() {
  const { value } = useInputContext();
  const { id } = useParams();
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (!value.title || !value.desc) {
      window.alert('please inter the value');
      return;
    }
    editTask(id, value.title, value.desc);
    navigate('/');
  };

  return (
    <>
      <h3 className='mb-3'>Edit Task</h3>
      <TodoForm handleSubmit={handleSubmit} />
    </>
  );
}
