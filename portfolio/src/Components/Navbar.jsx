// eslint-disable-next-line no-unused-vars
import react from 'react';
import logo from '../assets/duck-toy-2-svgrepo-com.svg';


function Navbar(){

    return(
        <>
        <nav className="navbar bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
      <img src={logo} alt="Logo" width="30" height="30" className="d-inline-block align-text-top" />
      Patricio Villarreal
    </a>
    <a className="navbar-brand" href="#">
      <img src={logo} alt="Logo" width="30" height="30" className="d-inline-block align-text-top" />
    </a>
    <a className="navbar-brand" href="#">
      <img src={logo} alt="Logo" width="30" height="30" className="d-inline-block align-text-top" />
      Patricio Villarreal
    </a>
 
  </div>
</nav>

        </>
    )
}
export default Navbar;