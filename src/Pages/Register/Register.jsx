import React, { useContext } from 'react';
import { Button, Form } from 'react-bootstrap';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Authprovider/Authprovider';

const Register = () => {
    let { createUser, users, errors, setErrors, verifyMail, updateProfileInfo } = useContext(AuthContext)
    console.log(createUser);
    let handleRegister = (e) => {
        e.preventDefault()
        let form = e.target
        let name = form.name.value
        let email = form.email.value
        let password = form.password.value
        let ConfirmPassword = form.ConfirmPassword.value
        let photoURL = form.photoURL.value
        if (password === ConfirmPassword) {
            createUser(email, password, name, photoURL)
                .then(result => {
                    const user = result.user
                    setErrors('')
                    console.log(user);
                    form.reset()
                    handleToast()
                    verifyMail()
                        .then(() => {

                        })
                    handleUpdateProfile(name, photoURL)

                }).catch(error => {
                    console.log(error.message);
                    setErrors(error.message)
                })
        }
    }
    let handleToast = () => {
        toast.success('Please Check Verification Mail', {
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
    let textDanger = {
        color: 'red'
    }
    let success = {
        color: 'green'
    }
    let handleUpdateProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }
        updateProfileInfo(profile)
            .then(result => {

            })
            .catch(error => {
                console.log(error.message);
            })
    }
    return (
        <div>
            <Form className='form' onSubmit={handleRegister}>
                <div>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Username</Form.Label>
                        <Form.Control name='name' type="text" placeholder="Enter name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>PhotoURL</Form.Label>
                        <Form.Control name='photoURL' type="text" placeholder="Enter PhotoURL" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control name='email' type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control name='password' type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control name='ConfirmPassword' type="password" placeholder="Confirm Password" />
                    </Form.Group>
                    {
                        users ? <p style={success}>Registration Successful</p> : ''
                    }
                    <br />

                    <Button onClick={handleToast} className='btn' variant="primary" type="submit">
                        Submit
                    </Button>
                    <br />
                    <small>Already have account?</small> <Link to='/login'>Sign In</Link>
                </div>
            </Form>
        </div>
    );
};

export default Register;