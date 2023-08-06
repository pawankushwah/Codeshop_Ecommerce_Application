// components/Login.js
import Link from "next/link";
import React, { useState } from "react";

const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  })
  const [errors, setErrors] = useState({
    error:"",
  });
  const [isLengthValid, setIsLengthValid] = useState(false);
  const [hasUppercase, setHasUppercase] = useState(false);
  const [hasLowercase, setHasLowercase] = useState(false);
  const [hasSymbol, setHasSymbol] = useState(false);
  const [isUsernameAvailable, setIsUsernameAvailable] = useState(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));

    if (name === "password") {
      validatePassword(value);
    }
  };

  const validatePassword = (password) => {
    setIsLengthValid(password.length >= 6 && password.length <= 15);
    setHasUppercase(/[A-Z]/.test(password));
    setHasLowercase(/[a-z]/.test(password));
    setHasSymbol(/[@#$&*!]/.test(password));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Replace the following lines with actual login logic and authentication handling
    let isIncorrectPassword = false;
    !isLengthValid && !hasLowercase && !hasUppercase && !hasSymbol && (
      setErrors("Incorrect username or password ")
    ) && (isIncorrectPassword = true)

    fetch("/api/auth/login", {
      body: JSON.stringify(formData),
      method: "POST",
    }).then((response) => {
      response.json().then((jsonData) => {
        console.log(jsonData);
        if (jsonData.login && jsonData.userId) {
          localStorage.setItem("userId",jsonData.userId)
          localStorage.setItem("token",jsonData.token)
          jsonData.refreshToken && localStorage.setItem("refreshToken", jsonData.refreshToken);
          location.href = jsonData.url;
        }
        else setErrors(jsonData.error);
      });
    });
    // You can add your authentication logic here, like sending the credentials to a server
    // and handling the login process accordingly
  };

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="w-96 mx-auto p-4 bg-white rounded shadow-xl border-2 border-gray-200">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        
        {errors.error && (
            <p className="text-red-500 text-sm mt-1">{errors.error}</p>
          )}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-sm font-medium">
              Username:
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
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
              name="password"
              value={formData.password}
              onChange={handleChange}
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
