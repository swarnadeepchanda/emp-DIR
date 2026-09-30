

import EmployeeCard from "./EmployeeCard";

function EmployeeList({
  employees,
  handleDelete,
  handleEdit
}) {
  if (employees.length === 0) {
    return (
      <div className="no-employees">
        <h3>No employees found</h3>
        <p>Try changing your search or filter.</p>
      </div>
    );
  }

  return (
    <div className="employee-list">

      {employees.map((employee) => (
        <EmployeeCard
          key={employee.employeeId}
          employee={employee}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
        />
      ))}

    </div>
  );
}

export default EmployeeList;