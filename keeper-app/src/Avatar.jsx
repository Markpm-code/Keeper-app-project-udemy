import React from 'react';


function Avatar (props) {
    const cardStyle = {
        width: "200px",
        height: "200px",
        borderRadius: "50%",
        border: "4px solid #61dafb"
    }
    return (
        <img src={props.img} style={cardStyle} alt="avatar-img" />
    );
} 

export default Avatar;