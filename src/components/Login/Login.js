import React, { useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { userContext } from '../../App';
import { createUserWithEmailAndPassword, handleFbSignIn, handleGoogleSignIn, handleSignOut, initializeLoginFramework, signInWithEmailAndPassword } from './loginManager';
import googleIcon from '../../asset/Icon/google.png';
import { useHistory, useLocation } from 'react-router-dom';
import fbIcon from '../../asset/Icon/fb.png';

const loginStyle = {
    paddingTop: '150px'
}

initializeLoginFramework();

const Login = () => {

    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    const [newUser, setNewUser] = useState(false);
    const [user, setUser] = useState({
        isSignedIn: false,
        name: '',
        email: '',
        password: '',
        error: '',
        success: false
    })


    const googleSignIn = () => {
        handleGoogleSignIn()
            .then(res => {
                setLoggedInUser(res)
                history.replace(from)
            })
    }

    const fbSignIn = () => {
        handleFbSignIn()
            .then(res => {
                setLoggedInUser(res);
                history.replace(from);
            })
    }

    const handleBlur = (event) => {

        let isFormValid = true;

        if (event.target.name === 'email') {
            isFormValid = /\S+@\S+\.\S+/.test(event.target.value);
        }
        if (event.target.name === 'password') {
            const isPasswordValid = event.target.value.length > 6;
            const isPasswordHasNumber = /\d{1}/.test(event.target.value);
            isFormValid = isPasswordHasNumber && isPasswordValid;
        }
        if (isFormValid) {
            const newUser = { ...user };
            newUser[event.target.name] = event.target.value;
            setUser(newUser);
        }
    }

    const handleSubmit = (e) => {
        console.log(user.email, user.password);
        if (newUser && user.email && user.password) {
            createUserWithEmailAndPassword(user.name, user.email, user.password)
                .then(res => {
                    setLoggedInUser(res)
                    history.replace(from)
                })
        }
        if (!newUser && user.email && user.password) {
            signInWithEmailAndPassword(user.email, user.password)
                .then(res => {
                    setLoggedInUser(res)
                    history.replace(from)
                })
        }
        e.preventDefault();
    }


    return (
        <div className="container" style={loginStyle}>
            <Form onSubmit={handleSubmit}>
                {
                    newUser ? <h3>Create an account</h3> : <h3>Login</h3>
                }
                {
                    newUser && (<Form.Group controlId="fname">
                    <Form.Label>First name</Form.Label>
                    <Form.Control onBlur={handleBlur} name="fname" type="text" placeholder="First name" required />
                    </Form.Group>)
                }
                {
                    newUser && (<Form.Group controlId="lname">
                    <Form.Label>Last name</Form.Label>
                    <Form.Control onBlur={handleBlur} name="lname" type="text" placeholder="Last name" required />
                    </Form.Group>)
                }
                <Form.Group controlId="email">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onBlur={handleBlur} name="email" type="email" placeholder="Enter email" required />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                </Form.Text>
                </Form.Group>

                <Form.Group controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onBlur={handleBlur} name="password" type="password" placeholder="Password" required />
                </Form.Group>
                {
                    newUser && (<Form.Group controlId="confirmPassword">
                    <Form.Label>Confirm password</Form.Label>
                    <Form.Control onBlur={handleBlur} name="confirmPassword" type="password" placeholder="Confirm password" required />
                    </Form.Group>)
                }
                <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Remeber me" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    {newUser? 'Submit':'Login'}
                </Button>
                {
                    newUser ?<p>Alraedy have an account <a onClick={() => setNewUser(!newUser)} href="#login">Login</a></p>:<p>Don't have an account <a href="#create account" onClick={()=>setNewUser(!newUser)}>Create account</a></p>
                }
            </Form>
            <br></br>
            <Button onClick={googleSignIn} variant="secondary"><img style={{ height: '25px' }} src={googleIcon} alt="G"></img> Continue with google</Button>
            <Button onClick={fbSignIn} style={{ marginLeft: '20px' }} variant="secondary"><img style={{ height: '25px' }} src={fbIcon} alt="f"></img> Continue with facebook</Button>
        </div>
    );
};

export default Login;