import React from 'react';
import { useInputContext } from '../context/InputContext';

export const TodoForm = ({ handleSubmit, title, icon, text, types }) => {
  const { value, setValue } = useInputContext();

  return (
    <>
      <div className="flex flex-col">
        <h2 className="mb-5">{title}</h2>
        <input
          placeholder={types.placeholder1}
          className="text-input text-base mb-6"
          onChange={(e) => setValue({ ...value, username: e.target.value })}
        />
        <input
          type={types.type}
          placeholder={types.placeholder2}
          className="text-input text-base"
          onChange={(e) => setValue({ ...value, password: e.target.value })}
        />
      </div>
      <button
        onClick={handleSubmit}
        className="bg-green-500 text-white py-2 px-4 rounded-md text-base mt-5">
        <div className="flex my-auto">
          <span className="material-symbols-outlined -ml-2">{icon}</span>
          <p className="ml-2">{text}</p>
        </div>
      </button>
    </>
  );
};
