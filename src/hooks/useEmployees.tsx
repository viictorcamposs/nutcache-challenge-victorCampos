import { useContext } from "react";

import {
  EmployeeContext,
  IEmployeeContextData,
} from "../contexts/EmployeesContext";

export function useEmployees(): IEmployeeContextData {
  const context = useContext(EmployeeContext);

  return context;
}
