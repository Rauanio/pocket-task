import React from 'react';
import { useInputContext } from '../context/InputContext';

export const TodoForm = ({handleSubmit}) => {
  const { value, setValue } = useInputContext();

  return (
    <>
      <div className="flex flex-col">
        <input
          placeholder="title"
          className="text-input text-base mb-6"
          onChange={(e) => setValue({ ...value, title: e.target.value })}
        />
        <input
          type="text"
          placeholder="desc"
          className="text-input text-base"
          onChange={(e) => setValue({ ...value, desc: e.target.value })}
        />
      </div>
      <button
        onClick={handleSubmit}
        className="bg-green-500 text-white py-2 px-4 rounded-md text-base mt-5">
        <div className="flex my-auto">
          <span className="material-symbols-outlined -ml-2">save</span>
          <p className="ml-2">save</p>
        </div>
      </button>
    </>
  );
};
