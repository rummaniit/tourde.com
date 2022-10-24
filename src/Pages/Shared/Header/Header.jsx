import React, { useContext } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../../Authprovider/Authprovider';
import './Header.css'

const Header = () => {
    let { users, logOut } = useContext(AuthContext)
    let handleLogout = () => {
        logOut().then(() => {

        }).catch(error => {
            console.log(error.message);
        })
    }
    return (
        <div>
            <Navbar bg="light" variant="light">
                <Container className='header'>
                    <div className='title'>
                        <Link to='/' className='titleLink'><h1>Tour De.com</h1></Link>
                    </div>
                    <Nav className="me-auto">
                        <NavLink className='headerLink text-2xl' to='/'>Home</NavLink>
                        {
                            users ? <NavLink className='headerLink text-2xl' onClick={handleLogout} >Log Out</NavLink> :
                                <NavLink className='headerLink text-2xl' to='/login' >Login</NavLink>
                        }

                        <NavLink className='headerLink text-2xl' to='/register'>Register</NavLink>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;