import React, { useContext } from 'react';
import { travelSpotcontext } from '../../App';
import { fakeRoom } from '../../fakeData/fakeRoom';
import Map from '../Map/Map';
import SingleRoom from '../SingleRoom/SingleRoom';

const Room = () => {

    const [travelSpot, setTravelSpot] = useContext(travelSpotcontext);
    console.log(setTravelSpot);
    return (
        <div style={{marginTop:'200px', display:'flex',justifyContent:'space-between'}} className="container">
            <div style={{flex:"50%"}}>
            <h2 style={{marginBottom:'20px',textAlign:'center'}}>{travelSpot.name}</h2>
                {
                    fakeRoom.map(room => <SingleRoom room={room}></SingleRoom>)
                }
            </div>
            <div style={{flex:'50%'}}>
                <Map></Map>
            </div>
        </div>
    );
};

export default Room;