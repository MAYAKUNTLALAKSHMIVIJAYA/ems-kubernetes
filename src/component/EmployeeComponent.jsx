import React, { useState, useEffect } from 'react';
import { savedEmployee, updateDataEmployee, editEmployee } from '../service/EmployeeService';
import '../style/employeeform.css';
import { useNavigate, useParams } from 'react-router-dom';

function EmployeeComponent() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      editEmployee(id).then((response) => {
        setFirstName(response.data.firstName);
        setLastName(response.data.lastName);
        setEmail(response.data.email);
      });
    }
  }, [id]);

  function saveEmployee(e) {
    e.preventDefault();
    const employee = { firstName, lastName, email };
    if (!firstName || !lastName || !email) return;

    if (id) {
      updateDataEmployee(id, employee)
        .then(() => navigate('/'))
        .catch((error) => console.error(error));
    } else {
      savedEmployee(employee)
        .then(() => navigate('/'))
        .catch((error) => console.error(error));
    }
  }

  return (
    <div className="container mt-5">
      <div className="card shadow-sm p-4">
        <h4 className="text-center mb-3 text-primary fw-bold">
          {id ? "Update Employee" : "Add Employee"}
        </h4>
        <form>
          <div className="form-group mb-3">
            <input
              type="text"
              placeholder="Enter First Name"
              value={firstName}
              className="form-control"
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="form-group mb-3">
            <input
              type="text"
              placeholder="Enter Last Name"
              value={lastName}
              className="form-control"
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className="form-group mb-3">
            <input
              type="email"
              placeholder="Enter Email"
              value={email}
              className="form-control"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="text-center">
            <button className="btn btn-success px-4" onClick={saveEmployee}>
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EmployeeComponent;
