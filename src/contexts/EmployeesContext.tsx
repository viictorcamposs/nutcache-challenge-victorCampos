import { ReactNode, createContext, useState, useEffect } from "react";
import { toast } from "react-toastify";

import { api } from "../services/api";

import { IEmployee, IEmployeeInputData } from "../types";

interface IEmployeeProviderProps {
  children: ReactNode;
}

export interface IEmployeeContextData {
  employees: IEmployee[];
  createEmployee(input: IEmployeeInputData): Promise<void>;
  removeEmployee(id: string): Promise<void>;
  updateEmployee(id: string, input: IEmployeeInputData): Promise<void>;
  getEmployee(id: string): Promise<IEmployee>;
}

export const EmployeeContext = createContext<IEmployeeContextData>(
  {} as IEmployeeContextData
);

export function EmployeeProvider({
  children,
}: IEmployeeProviderProps): JSX.Element {
  const [employees, setEmployees] = useState<IEmployee[]>([]);

  useEffect(() => {
    (async () => {
      const { data } = await api.get("/nutemployee");

      setEmployees(data);
    })();
  }, []);

  async function getEmployee(id: string): Promise<IEmployee> {
    const { data } = await api.get<IEmployee>(`/nutemployee/${id}`);

    return data;
  }

  async function createEmployee(input: IEmployeeInputData): Promise<void> {
    try {
      const { data } = await api.post<IEmployee>("/nutemployee", {
        ...input,
      });

      setEmployees((prevState) => [...prevState, data]);

      toast.success("Employee successfully registered.");
    } catch {
      toast.error("Error while we were trying to create employee");
    }
  }

  async function removeEmployee(id: string): Promise<void> {
    try {
      const { data } = await api.delete(`/nutemployee/${id}`);

      if (data) {
        const newEmployeesArr = employees.filter(
          (employee) => employee.id !== id
        );

        setEmployees(newEmployeesArr);
      }

      toast.success("Employee deleted successfully.");
    } catch {
      toast.error("Error while we were trying to delete employee");
    }
  }

  async function updateEmployee(
    id: string,
    input: IEmployeeInputData
  ): Promise<void> {
    try {
      const { data } = await api.put<IEmployee>(`/nutemployee/${id}`, {
        ...input,
      });

      if (data) {
        const newEmployeesArr = employees.filter(
          (employee) => employee.id !== id
        );

        setEmployees([...newEmployeesArr, data]);
      }

      toast.success("Employee successfully updated.");
    } catch {
      toast.error("Error while we were trying to update employee.");
    }
  }

  return (
    <EmployeeContext.Provider
      value={{
        employees,
        createEmployee,
        removeEmployee,
        updateEmployee,
        getEmployee,
      }}
    >
      {children}
    </EmployeeContext.Provider>
  );
}
