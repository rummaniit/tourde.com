import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import Homedisplay from './Homedisplay';
import './Home.css'
import { AuthContext } from '../../Authprovider/Authprovider';

const Home = () => {
    let tourPlaces = useLoaderData()
    // console.log(hotels);
    let { users } = useContext(AuthContext)
    console.log(users);
    return (
        <>
            {users ? <h1 className='text-white'>Welcome {users.displayName} to Tour De.com</h1> : ''}
            <div className='extra2'>
                {
                    tourPlaces.map(tourPlace => <Homedisplay
                        key={tourPlace.place_id}
                        tourPlace={tourPlace}
                    ></Homedisplay>)
                }
            </div></>
    );
};

export default Home;