import React from 'react';
import { NavLink } from 'react-router-dom';
import './Footer.css';

function Footer() {
  const year = new Date().getFullYear();
  return (
    <div>
      <footer className='FooterBody'>
        <div className='Footer-Heading'>
          <NavLink
            className=' outline_text white project d-none d-lg-block FooterHeading'
            to='/'
          >
            Subzi
          </NavLink>
          <div className='ShortSet'>
            <h1>
              <span className='Short'>FB</span>
              <span className='Short'>|</span>
              <span className='Short'>TT</span>
              <span className='Short'>|</span>
              <span className='Short'>YT</span>
              <span className='Short'>|</span>
              <span className='Short'>IG</span>
            </h1>
            <div className="FooterMenu">
              <span className='ShortName'>Investors</span>
              <span className='ShortName'>Support</span>
              <span className='ShortName'>News</span>
            </div>
          </div>
        </div>
        <div className=''>
          <h1 className='copyright'>copyright satuday developer © {year}</h1>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
