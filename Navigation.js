import React from "react";
import { Outlet, Link } from 'react-router-dom';
import{} from './nav.css';
function Navigation() {
    return (
        <> 
         <div className="nav-logo">
        <nav>
           <Link to="/login" className="login-link"></Link>
        </nav>
        </div>
            <Outlet />
        </>
    );
}
export default Navigation;