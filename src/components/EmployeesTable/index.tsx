/* eslint-disable prettier/prettier */
import { useState } from "react";
import { RiAddFill } from "react-icons/ri";

import { useEmployees } from "../../hooks/useEmployees";

import { EmployeeModal } from "../EmployeeModal";
import { EmployeesTableRow } from "./EmployeesTableRow";

import {
  Table,
  AddNewEmployeeBtn,
  ConfirmDeleteModal
} from "./styles";

export function EmployeesTable(): JSX.Element {
  const { employees, removeEmployee } = useEmployees();

  const [isAddEmployeeModalOpen, setIsAddEmployeeModalOpen] = useState(false);
  const [isUpdateEmployeeModalOpen, setIsUpdateEmployeeModalOpen] = useState(false);
  const [isConfirmDeleteModalOpen, setIsConfirmDeleteModalOpen] = useState(false);
  const [employeeId, setEmployeeId] = useState("");

  function onOpenUpdateEmployeeModal(id: string) {
    setIsUpdateEmployeeModalOpen(true);
    setEmployeeId(id);
  };

  function onCloseUpdateEmployeeModal() {
    setIsUpdateEmployeeModalOpen(false);
    setEmployeeId("");
  }

  function onOpenConfirmDeleteModal(id: string) {
    setIsConfirmDeleteModalOpen(true);
    setEmployeeId(id);
  }

  function onCloseConfirmDeleteModal() {
    setIsConfirmDeleteModalOpen(false);
  }

  async function handleRemoveEmployee() {
    await removeEmployee(employeeId);

    setEmployeeId("");
    onCloseConfirmDeleteModal();
  }

  function handleAddEmployeeModal() {
    setIsAddEmployeeModalOpen((prevState) => !prevState);
  }

  return (
    <>
      <Table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Start Date</th>
            <th>Team</th>
            <th />
          </tr>
        </thead>

        <tbody>
          {employees.map((employee) => (
            <EmployeesTableRow
              key={employee.id}
              employee={employee}
              onOpenUpdateEmployeeModal={onOpenUpdateEmployeeModal}
              onOpenConfirmDeleteModal={onOpenConfirmDeleteModal}
            />
          ))}
        </tbody>
      </Table>

      <AddNewEmployeeBtn
        type="button"
        onClick={handleAddEmployeeModal}
      >
        <RiAddFill />
      </AddNewEmployeeBtn>

      {isAddEmployeeModalOpen && (
        <EmployeeModal onCloseModal={handleAddEmployeeModal} />
      )}

      {isUpdateEmployeeModalOpen && (
        <EmployeeModal
          employeeId={employeeId}
          onCloseModal={onCloseUpdateEmployeeModal}
        />
      )}

      {isConfirmDeleteModalOpen && (
        <ConfirmDeleteModal>
          <div>
            <h2>Confirm delete?</h2>
            <p>This action can not be undone.</p>

            <div>
              <button
                type="button"
                onClick={handleRemoveEmployee}
              >
                Confirm
              </button>
              <button
                type="button"
                onClick={onCloseConfirmDeleteModal}
              >
                Cancel
              </button>
            </div>
          </div>
        </ConfirmDeleteModal>
      )}
    </>
  );
}
