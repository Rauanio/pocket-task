import React from 'react';
import { Link } from 'react-router-dom';
import { useInputContext } from '../context/InputContext';
import { getTasks } from '../lib/pocketbase';
import { Tasks } from './Tasks';
import PocketBase from 'pocketbase';

export const Todo = () => {
  const url = `${import.meta.env.VITE_POCKETBASE}`;
  const client = new PocketBase(url);
  const [tasks, setTasks] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const { value } = useInputContext();
  const userName = client.authStore.model.username;

  console.log(value);

  React.useEffect(() => {
    setIsLoading(true);
    getTasks().then((res) => {
      setTasks(res);
      setIsLoading(false);
    });
  }, []);

  return (
    <>
      <div className="mb-10 ">
        Authorized : <span className="font-semibold">{userName}</span>
      </div>
      {isLoading ? <h1 className="mb-5 text-center">...Loading</h1> : <Tasks tasks={tasks} />}
      <Link to="/create">
        <button className="bg-green-500 text-white py-2 px-4 rounded-md text-base">
          <div className="flex my-auto">
            <span className="material-symbols-outlined -ml-2">add</span>
            <p className="ml-2">create</p>
          </div>
        </button>
      </Link>
    </>
  );
};
