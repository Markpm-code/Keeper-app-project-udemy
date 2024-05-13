import React from 'react';


const currentYear = new Date().getFullYear();
function Footer () {
    return (
        <div className="App">
            <p>Copyright &copy; {currentYear}</p>
        </div>
    );
} 

export default Footer;