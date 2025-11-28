import React, { useEffect, useState } from "react";
import { listEmployees } from "../service/EmployeeService";
import { motion } from "framer-motion";

function AdminDashboard() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    listEmployees().then((res) => setEmployees(res.data));
  }, []);

  return (
    <div className="container py-4">
      <motion.h2
        className="text-center fw-bold text-primary mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Admin Panel – Employee Details
      </motion.h2>

      <p className="text-muted text-center mb-4">
        View complete employee information including job titles, salaries, and descriptions.
      </p>

      <div className="table-responsive shadow-sm rounded">
        <table className="table table-striped table-hover align-middle">
          <thead className="table-info text-center">
            <tr>
              <th>ID</th>
              <th>Full Name</th>
              <th>Email</th>
              <th>Department</th>
              <th>Job Title</th>
              <th>Salary</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((emp) => (
              <motion.tr
                key={emp.id}
                className="text-center"
                whileHover={{ scale: 1.01, backgroundColor: "#f6f9ff" }}
              >
                <td>{emp.id}</td>
                <td>{emp.firstName} {emp.lastName}</td>
                <td>{emp.email}</td>
                <td>{emp.department || "HR"}</td>
                <td>{emp.jobTitle || "Software Engineer"}</td>
                <td>{emp.salary || "₹60,000"}</td>
                <td>{emp.description || "Reliable and consistent performer."}</td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AdminDashboard;
