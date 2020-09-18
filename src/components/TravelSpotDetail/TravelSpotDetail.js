import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import { travelSpotcontext } from '../../App';

const travelSpotStyle = {
    paddingRight: '30px'
}

const TravelSpotDetail = () => {
    const [travelSpot] = useContext(travelSpotcontext);
    return (
        <div style = {travelSpotStyle}>
            <h1>{travelSpot.name}</h1>
            <p>{travelSpot.details}</p>
            <br></br>
            <Button variant="info">Book now &rarr;</Button>
        </div>
    );
};

export default TravelSpotDetail;