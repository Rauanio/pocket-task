import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { isUserValid, logout } from '../lib/pocketbase';

export default function RootLayout() {
  return (
    <div>
      <div className="flex my-8">
        <Link to="/" className="text-5xl">
          PocketTask
        </Link>
        <div className="ml-auto my-auto ">
          {!isUserValid ? (
            <>
              <Link to="/login">
                <button className="bg-green-500 text-white py-2 px-4 rounded-md">Log In</button>
              </Link>
              <Link to="/signup">
                <button className="border border-green-500 text-green-500 py-2 px-4 rounded-md ml-4">
                  Sign Up
                </button>
              </Link>
            </>
          ) : (
            <button onClick={logout} className="border border-green-500 text-green-500 py-2 px-4 rounded-md ml-4">
              Log out
            </button>
          )}
        </div>
      </div>
      <div className="container">
        <Outlet />
      </div>
    </div>
  );
}
