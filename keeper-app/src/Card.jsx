import React from 'react';
import './Card.css';
import Avatar from './Avatar';


function Card(props) {
    
    return (
        <div className="card">
            <div className="top">
                <h2 className="name">{props.name}</h2>
                {/* <img src={props.img} style={cardStyle} alt="beyonce-img" /> */}
            <Avatar img={props.img} />
            </div>
            <div className='bottom'>
            <p className='info'>{props.tel}</p>
            <p className='info'>{props.email}</p>
            </div>
        </div>
    );
}

export default Card;