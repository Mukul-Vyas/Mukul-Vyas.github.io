import React from "react";

const Header = () => {
  return (
    <nav>

    <NavContent/>

    </nav>
  )
};

const NavContent =()=>(
<>

<h2>Mukul.</h2>
<div>

    <a href="#home">Home</a>
    <a href="#work">Work</a>
    <a href="#timeline">Timeline</a>
    <a href="#services">Services</a>
    <a href="#testimonial">Testimonials</a>
    <a href="#contact">Contact</a>
</div>
<a href="mailto:mukulvyas2506@gmail.com"><button>Email</button></a>
</>

)

export default Header