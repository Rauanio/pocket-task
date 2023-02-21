import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { TodoForm } from '../components/TodoForm';
import { useInputContext } from '../context/InputContext';
import { editTask } from '../lib/pocketbase';

export default function EditTask() {
  const types = { placeholder1: 'title', placeholder2: 'description', type: 'text' };
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
      <TodoForm
        handleSubmit={handleSubmit}
        icon="save_as"
        text="save"        
        types={types} 
      />
    </>
  );
}
