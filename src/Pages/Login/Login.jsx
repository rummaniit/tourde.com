import React, { useContext } from 'react';
import { Button, Form } from 'react-bootstrap';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Authprovider/Authprovider';
import './Login.css'

const Login = () => {
    let { users, loginUser, errors, setErrors, setLoading } = useContext(AuthContext)
    let location = useLocation()
    let from = location.state?.from?.pathname || '/'
    let navigate = useNavigate()
    let handleLogin = (e) => {
        e.preventDefault()
        let form = e.target
        let email = form.email.value
        let password = form.password.value
        console.log(email, password);
        loginUser(email, password)
            .then(result => {
                let user = result.user
                setErrors('')
                if (users.emailVerified) {
                    navigate(from, { replace: true })
                }
                else {
                    toast.success('Please Verify Your Mail First', {
                        style: {
                            border: '1px solid #713200',
                            padding: '16px',
                            color: '#713200',
                        },
                        iconTheme: {
                            primary: '#713200',
                            secondary: '#FFFAEE',
                        },
                    });
                }
                console.log(user);
            }).catch(error => {
                setErrors(error.message);
            }).finally(setLoading(false))
    }
    return (
        <div>
            <Form className='form' onSubmit={handleLogin}>
                <div>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control name='email' type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control name='password' type="password" placeholder="Password" />
                    </Form.Group>
                    {
                        users ? <small className='success'>Login Successful</small> : <small className='bug'>{errors}</small>
                    }
                    <br />
                    <Button className='btn' variant="primary" type="submit">
                        Submit
                    </Button>
                    <br />
                    <small>Not a member</small> <Link to='/register'>Sign Up</Link>
                </div>
            </Form>
        </div>
    );
};

export default Login;