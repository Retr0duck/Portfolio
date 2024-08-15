import react from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css';
import duck from '../assets/duck-toy-2-svgrepo-com.svg';
import book from '../assets/contact-book-svgrepo-com.svg';
import code from '../assets/code-svgrepo-com.svg'
import skills from '../assets/book-svgrepo-com.svg';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src={duck} alt="Icon" width="30" height="30" />
          Patricio Villarreal | Web Portfolio
        </Link>
        <ul className="navbar-nav ml-auto">
          <li>
            <Link className="nav-link" to="/Skills">
              <img src={skills} alt="Icon" width="30" height="30" />
              Skills
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/Projects">
              <img src={code} alt="Icon" width="30" height="30" />
              Projects
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/Contact">
              <img src={book} alt="Icon" width="30" height="30" />
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
