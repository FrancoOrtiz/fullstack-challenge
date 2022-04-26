import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/authContext";
import { Header } from "./Header";
import { Error } from "./Error";

export const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState();
  const { login, loginWithGoogle, resetPassword } = useAuth();
  const navigate = useNavigate();

  const handleChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(user.email, user.password);
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await loginWithGoogle();
      navigate("/");
    } catch (error) {
      setError(error.code);
    }
  };

  const handleForgot = async () => {
    if (!user.email) {
      setError("Ingrese su correo");
    } else {
      try {
        await resetPassword(user.email);
        setError("Te hemos enviado un correo para que recuperes tu contraseña");
      } catch (error) {
        setError(error.message);
      }
    }
  };

  const navRegister = () => {
    navigate("/register");
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
          <button className="w-44 h-14 bg-blue-500 font-bold text-white rounded-lg text-lg hover:bg-transparent border-2 border-blue-500 hover:text-blue-500 transition-all">
            Login
          </button>
          <button
            type="button"
            onClick={handleGoogleLogin}
            className="w-52 h-14 border-2 font-bold border-black rounded-lg text-lg mt-4 "
          >
            Login with Google
          </button>
        </div>
      </form>
      <div className="mt-4 flex w-full justify-between">
        <button
          type="button"
          className="text-blue-400 mt-4 hover:text-blue-600"
          onClick={navRegister}
        >
          No tienes un usuario? Clickea aqui
        </button>
        <button
          type="button"
          className="text-blue-400 mt-4 hover:text-blue-600"
          onClick={handleForgot}
        >
          Olvidaste tu contraseña?
        </button>
      </div>
    </div>
  );
};
