import './Navbar.css';
import { NavLink } from 'react-router-dom';
import logo from "../../assets/images/icons8-crud-64.png";
import navItems from './../../Data/Navbar/Navbars';

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-dark text-light">
                <div className="container-fluid">
                    <NavLink to={'/'} className="navbar-brand">
                        <img className="img-fluid"
                            style={{ width: '50px', height: '50px', borderRadius: '10px', backgroundColor: 'whitesmoke', padding: '4px' }}
                            src={logo}
                            alt="logo" />
                    </NavLink>
                    <button className="navbar-toggler bg-light text-dark" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
                        <form className="d-flex nav-er-items list-unstyled gap-5 fs-5" role="search">
                            <li className="nav-item">
                                <NavLink to={'/'} className="nav-link" aria-current="page"><b>Home</b></NavLink>
                            </li>
                            {
                                navItems.map((data) => (
                                    <li key={data.id} className="nav-item">
                                        <a to={data.link} className="nav-link"><b>{data.text}</b></a>
                                    </li>
                                ))
                            }
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
