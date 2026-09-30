

import { useState } from "react";

import Header from "./components/Header";
import EmployeeForm from "./components/EmployeeForm";
import EmployeeList from "./components/EmployeeList";
import Footer from "./components/Footer";

import "./App.css";

function App() {

  // Employee data
  const [employees, setEmployees] = useState([
    {
      name: "Rahul Das",
      employeeId: "EMP001",
      department: "Agriculture",
      gender: "Male",
      phone: "9876543210",
      localAddress: "Kolkata",
      permanentAddress: "Medinipur"
    },
    {
      name: "Priya Sharma",
      employeeId: "EMP002",
      department: "Accounts",
      gender: "Female",
      phone: "9876543211",
      localAddress: "Howrah",
      permanentAddress: "Durgapur"
    },
    {
      name: "Amit Roy",
      employeeId: "EMP003",
      department: "Marketing",
      gender: "Male",
      phone: "9876543212",
      localAddress: "Kolkata",
      permanentAddress: "Siliguri"
    }
  ]);

  // Form state
  const [formData, setFormData] = useState({
    name: "",
    employeeId: "",
    department: "",
    gender: "",
    phone: "",
    localAddress: "",
    permanentAddress: ""
  });

  // Search state
  const [search, setSearch] = useState("");

  // Department filter
  const [departmentFilter, setDepartmentFilter] = useState("All");

  // Edit state
  const [editingId, setEditingId] = useState(null);


  // Handle input changes
  const handleChange = (event) => {

    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value
    });
  };


  // Add or Update employee
  const handleSubmit = (event) => {

    event.preventDefault();

    if (editingId) {

      // Update employee
      setEmployees(
        employees.map((employee) =>
          employee.employeeId === editingId
            ? formData
            : employee
        )
      );

      setEditingId(null);

    } else {

      // Add employee
      setEmployees([
        ...employees,
        formData
      ]);
    }

    // Clear form
    setFormData({
      name: "",
      employeeId: "",
      department: "",
      gender: "",
      phone: "",
      localAddress: "",
      permanentAddress: ""
    });
  };


  // Delete employee
  const handleDelete = (employeeId) => {

    const confirmDelete = window.confirm(
      "Are you sure you want to delete this employee?"
    );

    if (confirmDelete) {

      setEmployees(
        employees.filter(
          (employee) =>
            employee.employeeId !== employeeId
        )
      );
    }
  };


  // Edit employee
  const handleEdit = (employee) => {

    setFormData(employee);

    setEditingId(employee.employeeId);

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };


  // Cancel editing
  const cancelEdit = () => {

    setEditingId(null);

    setFormData({
      name: "",
      employeeId: "",
      department: "",
      gender: "",
      phone: "",
      localAddress: "",
      permanentAddress: ""
    });
  };


  // Search + Department Filter
  const filteredEmployees = employees.filter((employee) => {

    const searchText =
      search.toLowerCase();

    const matchesSearch =
      employee.name
        .toLowerCase()
        .includes(searchText) ||
      employee.employeeId
        .toLowerCase()
        .includes(searchText) ||
      employee.department
        .toLowerCase()
        .includes(searchText);

    const matchesDepartment =
      departmentFilter === "All" ||
      employee.department === departmentFilter;

    return matchesSearch && matchesDepartment;
  });


  return (
    <div>

      <Header />

      <main>

        <EmployeeForm
          formData={formData}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          editingId={editingId}
          cancelEdit={cancelEdit}
        />

        <section className="directory-section">

          <div className="directory-header">

            <h2>Employee Directory</h2>

            <h3>
              Total Employees: {employees.length}
            </h3>

          </div>


          {/* Search and Filter */}

          <div className="filters">

            <input
              type="text"
              placeholder="Search employee..."
              value={search}
              onChange={(event) =>
                setSearch(event.target.value)
              }
            />

            <select
              value={departmentFilter}
              onChange={(event) =>
                setDepartmentFilter(event.target.value)
              }
            >

              <option value="All">
                All Departments
              </option>

              <option value="Agriculture">
                Agriculture
              </option>

              <option value="Marketing">
                Marketing
              </option>

              <option value="Accounts">
                Accounts
              </option>

              <option value="Management">
                Management
              </option>

            </select>

          </div>


          <EmployeeList
            employees={filteredEmployees}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
          />

        </section>

      </main>

      <Footer />

    </div>
  );
}

export default App;