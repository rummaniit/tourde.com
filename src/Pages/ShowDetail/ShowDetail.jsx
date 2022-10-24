import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './ShowDetail.css'

const ShowDetail = () => {
    let hotel = useLoaderData()
    console.log(hotel);
    let { place_img, place_name, place_price, place_stay, details } = hotel
    console.log(details.food.breakfast);
    console.log(details.food);
    return (
        <div>
            <div className='showFull'>
                <div>
                    <img src={place_img} alt="" />
                </div>
                <div className='right_side'>
                    <h1>{place_name}</h1>
                    <div className='travel'>
                        <p>Package Price <h4>{place_price}</h4></p>
                        <p>Staying: <h4>{place_stay}</h4></p>
                    </div>
                    <div className="container">
                        <h1 className='foodTitle'>All Food Arrangements</h1>
                        <div className='foods'>
                            <div>
                                <h4>Breakfast foods:</h4>
                                {
                                    details.food.breakfast.map(bfd => <>
                                        <li>{bfd}</li>
                                    </>)
                                }
                            </div>
                            <div className='lunch'>
                                <h4>Lunch foods:</h4>
                                {
                                    details.food.lunch.map(lfd => <>
                                        <li>{lfd}</li>
                                    </>)
                                }
                            </div>
                            <div>
                                <h4>Dinner foods</h4>
                                {
                                    details.food.dinner.map(dfd => <>
                                        <li>{dfd}</li>
                                    </>)
                                }
                            </div>
                        </div>
                        <hr />
                        <h1>All Travel Arrangement</h1>
                        <div className='travel'>
                            <h5><li>Bus: {details.vehicle.bus}</li></h5>
                            <h5><li>Lanch: {details.vehicle.lanch}</li></h5>
                        </div>
                        <hr />
                        <div>
                            <h4>Hotel type: {details.hotel}</h4>
                        </div>
                    </div>
                    <button className='bookingBtn'>Book Now</button>
                </div>
            </div>
        </div>
    );
};

export default ShowDetail;