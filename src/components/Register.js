import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/authContext";
import { Error } from "./Error";
import { Header } from "./Header";

export const Register = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState();
  const { signup } = useAuth();
  const navigate = useNavigate();

  const handleChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signup(user.email, user.password);
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };
  const navLogin = () => {
    navigate("/login");
  };

  return (
    <div className="mt-32 w-4/5 lg:w-2/4 m-auto">
      {error && <Error message={error} />}

      <form
        onSubmit={handleSubmit}
        className=" pt-10 pb-6 flex flex-col text-center gap-6 bg-white rounded-xl shadow-lg shadow-slate-400"
      >
        <Header></Header>
        <div className="w-4/5 m-auto flex flex-col gap-1 my-0">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            placeholder="youremail@company.ltd"
            className="border-solid border-2 rounded-md border-gray-500 h-10 pl-2 w-2/3 lg:w-1/2 m-auto"
            onChange={handleChange}
          />
        </div>

        <div className="w-4/5 m-auto flex flex-col gap-1 my-0">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="******"
            className="border-solid border-2 rounded-md border-gray-500 h-10 pl-2 w-2/3 lg:w-1/2 m-auto"
            onChange={handleChange}
          />
        </div>

        <div className="w-full flex-col items-center flex pt-6 mt-6 border-solid border-t-2 border-gray-200">
          <button className="w-44 h-14 font-bold bg-blue-500 text-white rounded-lg text-lg hover:bg-transparent border-2 border-blue-500 hover:text-blue-500 transition-all">
            Register
          </button>
        </div>
      </form>
      <button
        type="button"
        className="text-blue-400 mt-6 hover:text-blue-600"
        onClick={navLogin}
      >
        Ya tienes un usuario? Clickea aqui
      </button>
    </div>
  );
};
