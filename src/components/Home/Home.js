import React, { useContext } from 'react';
import { CardDeck } from 'react-bootstrap';
import { travelSpotcontext } from '../../App';
import homeBg from '../../asset/Image/home-bg.png';
import { fakeTravelSpot } from '../../fakeData/fakeTravelSpot';
import TravelSpot from '../TravelSpot/TravelSpot';
import TravelSpotDetail from '../TravelSpotDetail/TravelSpotDetail';

const homePageStyle = {
    height: '700px',
    backgroundImage: `url(${homeBg})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
}
const overlayStyle = {
    position: 'absolute',
    top: '0',
    left: '0',
    right: '0',
    bottom: '0',
    backgroundColor: 'rgba(0,0,0,.8)'
}
const Home = () => {
    const [travelSpot, setTravelSpot] = useContext(travelSpotcontext);
    return (
        <div style={homePageStyle}>
            <div style={{ color: 'white', position: 'relative', zIndex: '9' }}>
                <div style={{ display: 'flex' }} className="container">
                    <div style={{ flex: '50%' }}>
                        <TravelSpotDetail></TravelSpotDetail>
                    </div>
                    <div>
                        <CardDeck>
                            {
                                fakeTravelSpot.map(spot => {
                                    setTravelSpot(spot);
                                    return <TravelSpot spot={spot} key={spot.id}></TravelSpot>
                                })
                            }
                        </CardDeck>
                    </div>
                </div>
            </div>
            <div style={overlayStyle}></div>
        </div>
    );
};

export default Home;