import React from 'react';

const SingleRoom = (props) => {
    const {title, img, description, kitchen, price} = props.room;
    return (
        <div style={{display:'flex',justifyContent:'space-between',marginBottom:'30px'}}>
            <img style={{height:'200px'}} src={img} alt="room"></img>
            <div style={{paddingLeft:'10px'}}>
                <h4>{title}</h4>
                <p>{description}</p>
                <p>{kitchen}</p>
                <p>${price}/night</p>
            </div>
        </div>
    );
};

export default SingleRoom;