import React from 'react';
import { Link } from 'react-router-dom';
import { checkTask, removeTask } from '../lib/pocketbase';

export const Tasks = ({ tasks }) => {
  const [completed, setCompleted] = React.useState(false);
  return (
    <>
      {tasks.map((t) => (
        <div key={t.id}>
          <div className="flex">
            <input
              className="h-6 w-6 my-auto"
              type="checkbox"
              name="completed"
              defaultChecked={t.completed}
              onChange={() => {
                setCompleted(!completed);
                checkTask(t.id, t.title, completed);
              }}
            />
            <h3 className="ml-4 text-3xl">{t.title}</h3>
            <div className="ml-auto">
              <Link to={`/edit/${t.id}`}>
                <button
                  className="ml-4 bg-gray-600 rounded-md text-white
             px-2 hover:bg-gray-500">
                  <span className="material-symbols-outlined">edit</span>
                </button>
              </Link>
              <button
                onClick={() => removeTask(t.id)}
                className="ml-4 bg-red-600 rounded-md text-white
             px-2 hover:bg-red-500">
                <span className="material-symbols-outlined">delete</span>
              </button>
            </div>
          </div>
          <p className="text-gray-400 text-2xl my-3">{t.description}</p>
          <hr className="border border-gray-400 mb-7" />
        </div>
      ))}
    </>
  );
};
