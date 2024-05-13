import React from 'react';
import './Footer.css';


const currentYear = new Date().getFullYear();
function Footer () {
    return (
        <div className="Footer">
            <p>Copyright &copy; {currentYear}</p>
        </div>
    );
} 

export default Footer;