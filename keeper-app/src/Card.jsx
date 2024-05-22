import React from 'react';
import './Card.css';


function Card(props) {
    const cardStyle = {
        width: "200px",
        height:"200px",
        borderRadius: "50%",
        border: "4px solid #61dafb"
    }
    return (
        <div className='Card'>
            <h2>{props.name}</h2>
            <img src={props.img} style={cardStyle} alt="beyonce-img" />
            <p>{props.tel}</p>
            <p>{props.email}</p>
        </div>
    );
}

export default Card;