

function EmployeeForm({
  formData,
  handleChange,
  handleSubmit,
  editingId,
  cancelEdit
}) {
  return (
    <section className="form-section">
      <h2>{editingId ? "Edit Employee" : "Add Employee"}</h2>

      <form onSubmit={handleSubmit}>
        <div className="form-grid">

          <input
            type="text"
            name="name"
            placeholder="Employee Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="employeeId"
            placeholder="Employee ID"
            value={formData.employeeId}
            onChange={handleChange}
            required
          />

          <select
            name="department"
            value={formData.department}
            onChange={handleChange}
            required
          >
            <option value="">Select Department</option>
            <option value="Agriculture">Agriculture</option>
            <option value="Marketing">Marketing</option>
            <option value="Accounts">Accounts</option>
            <option value="Management">Management</option>
          </select>

          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            required
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="localAddress"
            placeholder="Local Address"
            value={formData.localAddress}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="permanentAddress"
            placeholder="Permanent Address"
            value={formData.permanentAddress}
            onChange={handleChange}
            required
          />

        </div>

        <div className="form-buttons">
          <button type="submit">
            {editingId ? "Update Employee" : "Add Employee"}
          </button>

          {editingId && (
            <button
              type="button"
              className="cancel-button"
              onClick={cancelEdit}
            >
              Cancel
            </button>
          )}
        </div>
      </form>
    </section>
  );
}

export default EmployeeForm;