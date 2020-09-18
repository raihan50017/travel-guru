import React, { useContext } from 'react';
import { Card } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { travelSpotcontext } from '../../App';
import './TravelSpot.css';

const TravelSpot = (props) => {
    const { img, name } = props.spot;

    const [travelSpot, setTravelSpot] = useContext(travelSpotcontext);
    const history  = useHistory();

    const handleBooking = (spot) =>{
        setTravelSpot(spot)
        history.push('/booking')
    }
    return (
        <Card onClick={() => handleBooking(props.spot)} className="spotStyle">
            <Card.Img variant="top" src={img} />
            <div className="cardOverlay"><h3>{name}</h3></div>
        </Card>
    );
};

export default TravelSpot;