import { useState } from "react";

import { useEmployees } from "../hooks/useEmployees";

import { EmployeesTable } from "../components/EmployeesTable";
import { EmployeeModal } from "../components/EmployeeModal";

import { Container, EmptyTable } from "../styles/pages/employees";

export function EmployeesPage(): JSX.Element {
  const { employees } = useEmployees();

  const [isAddEmployeeModalOpen, setIsAddEmployeeModalOpen] = useState(false);

  function handleAddEmployeeModal() {
    setIsAddEmployeeModalOpen((prevState) => !prevState);
  }

  if (!employees[0]) {
    return (
      <Container>
        <EmptyTable>
          <h2>You don't have registered employees.</h2>
          <button type="button" onClick={handleAddEmployeeModal}>
            Register new employee
          </button>
        </EmptyTable>

        {isAddEmployeeModalOpen && (
          <EmployeeModal onCloseModal={handleAddEmployeeModal} />
        )}
      </Container>
    );
  }

  return (
    <Container>
      <EmployeesTable />
    </Container>
  );
}
