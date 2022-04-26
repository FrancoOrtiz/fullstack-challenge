import React from "react";
import { Routes, Route } from "react-router-dom";
import { Search } from "../components/Search";
import { Login } from "../components/Login";
import { Register } from "../components/Register";
import { AuthProvider } from "../context/authContext";
import { PrivateRoute } from "./PrivateRoute";

export const AppRouter = () => {
  return (
    <AuthProvider>
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Search />
            </PrivateRoute>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </AuthProvider>
  );
};
