import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/icons8-crud-64.png";
import navItems from "./../../Data/Navbar/Navbars";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-gray-900 text-light p-4">
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo Section */}
                <NavLink to={'/'} className="flex items-center">
                    <img className="w-12 h-12 rounded-lg bg-gray-100 p-1" src={logo} alt="logo" />
                </NavLink>

                {/* Mobile Toggle Button */}
                <button
                    className="lg:hidden p-2 bg-gray-100 text-dark rounded focus:outline-none"
                    type="button"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle navigation"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                    </svg>
                </button>

                {/* Nav Items */}
                <div className={`${isOpen ? "block" : "hidden"} lg:flex lg:items-center lg:space-x-8`}>
                    <ul className="flex flex-col lg:flex-row lg:space-x-8 space-y-4 lg:space-y-0">
                        <li>
                            <NavLink to={'/'} className="text-white hover:text-gray-300 font-bold">Home</NavLink>
                        </li>
                        {navItems.map((data) => (
                            <li key={data.id}>
                                <NavLink to={data.link} className="text-white hover:text-gray-300 font-bold">
                                    {data.text}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
