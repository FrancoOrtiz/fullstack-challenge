import React from "react";
import { DataProvider } from "./context/dataContext";
import { AppRouter } from "./router/AppRouter";

export const App = () => {
  return (
    <DataProvider>
      <AppRouter />
    </DataProvider>
  );
};
