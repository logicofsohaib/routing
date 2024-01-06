import React, { useState } from 'react';
import { useRouter } from 'next/router';

const LoginForm = () => {
  const Router= useRouter();
  const [user, setUser] = useState({
    name: '',
    email: '',
  });

  const handleInputChange = (e:any) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };
  const showData = () => {
    // Displaying data directly in the JSX
    return (
      <div>
        <p>Name: {user.name}</p>
        <p>Email: {user.email}</p>
      </div>
    );
  };
  const handleSubmit = (e:any) => {
    e.preventDefault();
    // Perform login logic with user.name and user.email
    console.log('Login logic here:', user.name, user.email);
    // Reset the form after submission if needed
    setUser({
      name: '',
      email: '',
        


    });
     Router.push({pathname:'./jgr', query: user })


  };




  return (
    <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-md w-96">
      <h1 className="text-2xl font-semibold mb-4">Login</h1>

      {/* Name Input */}
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={user.name}
          onChange={handleInputChange}
          className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          placeholder="Enter your name"
        />
      </div>

      {/* Email Input */}
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={user.email}
          onChange={handleInputChange}
          className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          placeholder="Enter your email"
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
      >
        Login
      </button>

{showData()}

    </form>
              
              

  );
};

export default LoginForm;
