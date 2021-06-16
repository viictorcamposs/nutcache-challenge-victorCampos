import { memo } from "react";
import { FaTrash } from "react-icons/fa";
import { MdSettings } from "react-icons/md";

import { IEmployee } from "../../types";
import formatDate from "../../utils/formatDate";

interface IEmployeesTableRow {
  employee: IEmployee;
  onOpenUpdateEmployeeModal(id: string): void;
  onOpenConfirmDeleteModal(id: string): void;
}

function EmployeesTableRowComponent({
  employee,
  onOpenUpdateEmployeeModal,
  onOpenConfirmDeleteModal,
}: IEmployeesTableRow): JSX.Element {
  return (
    <tr>
      <td>{employee.name}</td>
      <td>{employee.email}</td>
      <td>{formatDate(employee.startDate).format}</td>
      {employee.team ? (
        <td className={`team ${employee.team}`}>{employee.team}</td>
      ) : (
        <td />
      )}
      <td className="actions">
        <button
          type="button"
          onClick={() => onOpenUpdateEmployeeModal(employee.id)}
        >
          <MdSettings />
        </button>
        <button
          type="button"
          onClick={() => onOpenConfirmDeleteModal(employee.id)}
        >
          <FaTrash />
        </button>
      </td>
    </tr>
  );
}

export const EmployeesTableRow = memo(
  EmployeesTableRowComponent,
  (prevProps, nextProps) => {
    return Object.is(prevProps.employee, nextProps.employee);
  }
);
