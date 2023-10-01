import React, { useRef } from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
    const dotRef = useRef(null);
    const navRef = useRef(null);

    const handleMouseMove = (e) => {
        const dot = dotRef.current;
        const navRect = navRef.current.getBoundingClientRect(); // Get bounding box of nav
        dot.style.left = (e.clientX - navRect.left - 3) + 'px'; // Adjusted here
        dot.style.opacity = '1';
    };

    const handleMouseLeave = () => {
        const dot = dotRef.current;
        dot.style.opacity = '0';
    };

    return (
        <nav ref={navRef} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
            <ul className='navMenu'>
                <li><NavLink to="/" activeClassName="active">Home</NavLink></li>
                <li><NavLink to="/highscores" activeClassName="active">Scores</NavLink></li>
                <div className="dot" ref={dotRef}></div>
            </ul>
        </nav>
    );
}
