import React, { useEffect, useState } from "react";
import { listEmployees } from "../service/EmployeeService";
import { motion } from "framer-motion";

function UserPage() {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        listEmployees().then((res) => setEmployees(res.data));
    }, []);

    return (
        <div className="container py-4">
            <motion.div
                className="text-center mb-4"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
            >
                <h2 className="fw-bold text-primary">Meet Our Team</h2>
                <p className="text-muted">
                    Get to know our talented employees and their amazing work.
                </p>
                <img
                    src="/images/team.png"
                    alt="employee"
                    className="rounded-circle mx-auto mb-3"
                    style={{ width: "200px", height: "200px" }}
                />

            </motion.div>

            <div className="row g-4">
                {employees.map((emp) => (
                    <motion.div
                        key={emp.id}
                        className="col-md-4"
                        whileHover={{ scale: 1.03 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="card shadow-sm border-0 text-center p-3">
                            <img
                                src="/images/user.png"
                                alt="employee"
                                className="rounded-circle mx-auto mb-3"
                                style={{ width: "120px", height: "120px" }}
                            />

                            <h5 className="fw-bold text-dark">
                                {emp.firstName} {emp.lastName}
                            </h5>
                            <p className="text-muted">{emp.email}</p>
                            <p><b>Department:</b> {emp.department || "Engineering"}</p>
                            <p><b>Role:</b> {emp.jobTitle || "Software Engineer"}</p>
                            <p className="small text-muted">
                                {emp.description || "A dedicated professional driving innovation every day."}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

export default UserPage;
