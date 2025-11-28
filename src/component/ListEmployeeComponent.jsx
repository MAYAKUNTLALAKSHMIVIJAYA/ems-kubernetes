import React, { useState, useEffect } from 'react';
import { listEmployees, deleteEmployee } from '../service/EmployeeService.js';
import { useNavigate } from 'react-router-dom';

function ListEmployeeComponent() {
  const navigate = useNavigate();
  const [employee, setEmployee] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    getAllEmployee();
  }, []);

  function getAllEmployee() {
    listEmployees()
      .then((response) => setEmployee(response.data))
      .catch((error) => console.error(error));
  }

  function addNewEmployee() {
    navigate('/add-employee');
  }

  function updateHandler(id) {
    navigate(`/update-employee/${id}`);
  }

  function deleteHandler(id) {
    deleteEmployee(id)
      .then(() => getAllEmployee())
      .catch((error) => console.error(error));
  }

  const filteredEmployees = employee.filter(
    (emp) =>
      emp.firstName.toLowerCase().includes(search.toLowerCase()) ||
      emp.lastName.toLowerCase().includes(search.toLowerCase()) ||
      emp.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container mt-4">
      <h3 className="text-center mb-3 fw-bold text-primary">Employee Dashboard</h3>
      <div className="d-flex justify-content-between mb-3">
        <input
          type="text"
          placeholder="🔍 Search by first name, last name, or email..."
          className="form-control w-50"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className="btn btn-danger" onClick={addNewEmployee}>
          + Add Employee
        </button>
      </div>

      <table className="table table-hover table-bordered shadow-sm">
        <thead className="table-info text-center">
          <tr>
            <th>Id</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {filteredEmployees.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.firstName}</td>
              <td>{item.lastName}</td>
              <td>{item.email}</td>
              <td>
                <button
                  className="btn btn-success btn-sm"
                  onClick={() => updateHandler(item.id)}
                >
                  Update
                </button>
              </td>
              <td>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => deleteHandler(item.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListEmployeeComponent;
