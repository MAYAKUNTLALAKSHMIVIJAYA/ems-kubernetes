import React from 'react';
import '../style/header.css';
import { BriefcaseBusiness } from 'lucide-react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark bg-gradient shadow-sm sticky-top"
      style={{ background: "linear-gradient(90deg,#004aad,#5de0e6)" }}
    >
      <div className="container d-flex justify-content-between align-items-center">
        <a className="navbar-brand d-flex align-items-center gap-2" href="/">
          <BriefcaseBusiness size={26} />
          <span className="fw-semibold fs-5">Employee Management System</span>
        </a>
        <div>
          <Link to="/" className="btn btn-light btn-sm me-2">Admin</Link>
          <Link to="/user" className="btn btn-warning btn-sm">User</Link>
        </div>
      </div>
    </nav>
  );
}

export default Header;
