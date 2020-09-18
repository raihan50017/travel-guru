import React from 'react';
import { Button, Col, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const BookingForm = () => {
    return (
        <Form>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Origin</Form.Label>
                <Form.Control type="text" placeholder="Enter origin" />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
                <Form.Label>Destination</Form.Label>
                <Form.Control type="text" placeholder="Destination" />
            </Form.Group>
            <Form.Row>
                <Form.Group as={Col} controlId="from">
                    <Form.Label>From</Form.Label>
                    <Form.Control type="date" />
                </Form.Group>

                <Form.Group as={Col} controlId="to">
                    <Form.Label>To</Form.Label>
                    <Form.Control type="date" />
                </Form.Group>
            </Form.Row>
            <Link to='/room'>
                <Button variant="primary" type="submit">
                Start booking now 
            </Button>
            </Link>
        </Form>
    );
};

export default BookingForm;