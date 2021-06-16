import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import { Sidebar } from "./components/Sidebar";
import { Header } from "./components/Header";
import { Routes } from "./routes";

import { EmployeeProvider } from "./contexts/EmployeesContext";

import { GlobalStyles } from "./styles/global";

export const App = (): JSX.Element => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <ToastContainer autoClose={3000} />

      <Header />
      <Sidebar />

      <EmployeeProvider>
        <Routes />
      </EmployeeProvider>
    </BrowserRouter>
  );
};
