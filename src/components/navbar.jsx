import React from 'react';


const NavBar = ({totalCounters}) => {

        return ( 
            <nav className="navbar navbar-light bg-light ">
                <a href="{totalCounters}" className="navbar-brand text-center"><span className="badge badge-pill badge-success">{totalCounters }</span> Navbar</a>
            </nav>
         );
    
}
 
export default NavBar;
