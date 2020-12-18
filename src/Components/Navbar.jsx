import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <div>
      <div className='container-fluid nav_bg header'>
        <div className='row'>
          <div className='col-10 mx-auto'>
            <nav className='navbar '>
              <nav className='navbar navbar-expand-lg'>
                <div className='container-fluid'>
                  <div className='header-heading'>
                    <NavLink
                      className=' outline_text white project d-none d-lg-block heading'
                      to='/'
                    >
                      Subzi
                    </NavLink>
                  </div>
                  <button
                    className='navbar-toggler'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#navbarSupportedContent'
                    aria-controls='navbarSupportedContent'
                    aria-expanded='false'
                    aria-label='Toggle navigation'
                  >
                    <span className='navbar-toggler-icon'></span>
                  </button>
                  {/* className='collapse navbar-collapse'
                    id='navbarSupportedContent' */}
                  <div>
                    <ul className='menuItems'>
                      <li className='items'>
                        <NavLink className='links' to='/Games'>
                          Games
                        </NavLink>
                      </li>
                      <li className='items'>
                        <NavLink className='links' to='/Gallary'>
                          Gallary
                        </NavLink>
                      </li>
                      <li className='items'>
                        <NavLink className='links' to='#'>
                          Media
                        </NavLink>
                      </li>
                      <li className='items'>
                        <NavLink className='links' to='#'>
                          Careers
                        </NavLink>
                      </li>
                      <li className='items'>
                        <NavLink className='links' to='#'>
                          Contact
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
