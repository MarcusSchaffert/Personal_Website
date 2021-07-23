import React from 'react'
import Navigation from './Navigation';
import '../Components/headerNavFooter.css';

import{Link} from "react-router-dom"
function Header() {
    //<Navigation/>
  return (
    <div>
        <header className="header-style">
            <h3 className='logo'>MS</h3>
            <ul className='navigation-style'>
                <li  className='navigation-items'><Link to='/' className='link-style'>Home</Link></li>
                <li  className='navigation-items'><Link to='/blog' className='link-style'>Blog</Link></li>
                <li className='navigation-items'><Link to='/about' className='link-style'>About</Link></li>
                <li className='navigation-items'><Link to='/mlp' className='link-style'>ML</Link></li>
                <li className='navigation-items'><Link to='/contact' className='link-style'>Contact</Link></li>
                <li className='navigation-items'><Link to='/test' className='link-style'>Test</Link></li>
            </ul>
        </header>

    </div>
  );
}

export default Header;