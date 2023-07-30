// components/Login.js
import Link from "next/link";
import React, { useState } from "react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Replace the following lines with actual login logic and authentication handling
    console.log("Username:", username);
    console.log("Password:", password);
    // You can add your authentication logic here, like sending the credentials to a server
    // and handling the login process accordingly
  };

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="w-96 mx-auto p-4 bg-white rounded shadow-xl border-2 border-gray-200">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-sm font-medium">
              Username:
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={handleUsernameChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium">
              Password:
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
          >
            Login
          </button>
          <p className="mt-2">
            New user?{" "}
            <Link
              href="/auth/signup"
              className="text-blue-500 hover:text-blue-600"
            >
              Create new Account
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
