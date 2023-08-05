import React from 'react';

const Navbar = () => {
  return (
    <>
      <nav className='navbar bg-primary navbar-expand-lg'>
        <div className='container-fluid'>
          <a className='navbar-brand' href='/' style={{ color: "white" }}>
            <img src='https://picsum.photos/40' className='rounded' alt='logo' />
          </a>
          <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
            <li className='nav-item'>
              <a className='nav-link active' aria-current='page' href='/' style={{ color: "white" }}>
                Home
              </a>
            </li>
          </ul>

        </div>
      </nav>
    </>
  );
};

export default Navbar;
