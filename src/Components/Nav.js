// import React, { useEffect, useState } from 'react'
// // import logo from '../Assets/imgpsh_fullsize_anim.png'
// import { FaSearch } from 'react-icons/fa';
// import { FaEnvelope } from 'react-icons/fa6';





// function Header() {

//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 20) { // Adjust the scroll threshold as needed
//         setScrolled(true);
//       } else {
//         setScrolled(false);
//       }
//     };

//     window.addEventListener('scroll', handleScroll);

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);
  
//   return (
//     <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
//     <div className='container'>
//       <div className="navbar-logo">
//         {/* <img src={logo} alt="Logo" /> */}
//         <h4>Rfq</h4>
//       </div>
//       <ul className="navbar-nav">
//         <li className="nav-item"><a href="#home">Home</a></li>
//         <li className="nav-item"><a href="#about">About</a></li>
//         <li className="nav-item"><a href="#services">Services</a></li>
//         <li className="nav-item"><a href="#portfolio">Packages</a></li>
//         <li className="nav-item"><a href="#contact">Contact</a></li>
//       </ul>
//       <div className="navbar-icons">
//             <button>Contact Us</button>
//       </div>
//     </div>
//   </nav>

//   )
// }

// export default Header

import React, { useEffect, useState } from 'react';
import { FaEnvelope, FaSearch, FaBars } from 'react-icons/fa';
// import './header.css';
import './Nav.css'


function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className='container'>
        <div className="navbar-logo">
          <img src='https://www.chesshouse.com/cdn/shop/files/chesshouse-full-logo-white_8084e40a-89b2-4281-bba3-6093cfdae545.png?v=1614296791&width=450' alt="Logo" />
        </div>
        <ul className={`navbar-nav ${menuOpen ? 'show' : ''}`}>
          <li className="nav-item"><a href="#home">Home</a></li>
          <li className="nav-item"><a href="#product">Product</a></li>
          <li className="nav-item"><a href="#feature">Feature</a></li>
          <li className="nav-item"><a href="#vision">Vision</a></li>
          <li className="nav-item"><a href="#about">About</a></li>
        </ul>
        <div className="navbar-icons">
        <button>Contact Us</button>
        </div>
        <FaBars className="menu-icon" onClick={handleMenuClick} />
      </div>
    </nav>
  );
}

export default Header;
