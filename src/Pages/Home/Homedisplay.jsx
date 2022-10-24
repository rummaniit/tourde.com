import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Homedisplay = ({ tourPlace }) => {
    let imgSize = {
        width: '250px',
        height: '200px'
    }
    let { place_id, place_img, place_name, place_price, place_stay, ratings } = tourPlace
    return (
        <div>
            <Card style={{
                backgroundColor: 'whitesmoke',
                padding: '20px',
                margin: '55px 20px 10px 20px',
                textAlign: 'center',
                borderRadius: '10px',
                lineHeight: '35px',
                borderShadow: '10px grey'
            }}>
                <Card.Img variant="top" src={place_img} style={imgSize} />
                <Card.Body>
                    <Card.Title ><h3>{place_name}</h3></Card.Title>
                    <h5>Taka: {place_price}</h5>
                    <Card.Text className='extra mb-5'>
                        <h5>Stay: {place_stay}</h5>
                        <h5>Ratings: {ratings}</h5>
                    </Card.Text>
                    <Link to={`/hotel/${place_id}`}>
                        <Button variant="primary" className='btn'>More Details</Button>
                    </Link>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Homedisplay;