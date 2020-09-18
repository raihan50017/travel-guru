import React from 'react';
import homeBg from '../../asset/Image/home-bg.png';
import BookingForm from '../BookingForm/BookingForm';
import TravelSpotDetail from '../TravelSpotDetail/TravelSpotDetail';

const bookPageStyle = {
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
const bookOverlay = {
    position: 'absolute',
    top: '0',
    left: '0',
    right: '0',
    bottom: '0',
    backgroundColor: 'rgba(0,0,0,.8)'
}


const Booking = () => {
    return (
        <div style={bookPageStyle}>
            <div className="container" style={{
                display: 'flex', color: 'white', position: 'relative', zIndex: '9'
            }}>
                <div style={{ flex: '50%', padding:'20px'}}>
                    <TravelSpotDetail></TravelSpotDetail>
                </div>
                <div style={{ flex: '50%', padding:'20px' }}>
                    <BookingForm></BookingForm>
                </div>
            </div>
            <div style={bookOverlay}></div>
        </div>
    );
};

export default Booking;