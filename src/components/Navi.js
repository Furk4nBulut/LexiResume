import React from 'react';
import { Link } from 'react-router-dom';

function Navi() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom mb-4">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">LexiResume</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">CV Oluştur</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/preview">Önizleme</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/login">Giriş</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navi;
