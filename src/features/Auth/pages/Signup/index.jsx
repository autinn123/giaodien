import React, { useState, useRef, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { Button, Card, CardBody, Container, Form, FormGroup, Input, Label, Alert } from 'reactstrap';
import { register } from '../../../../actions/authAction'
import { useDispatch, useSelector } from 'react-redux';
import { clearError } from '../../../../actions/errorAction';
import SignupForm from '../../components/SignUpForm';


export default function Signup() {
    const error = useSelector(state => state.error)
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated)
    const [msg, setMsg] = useState(null)
    const [msgSucc, setMsgSuccc] = useState(null)
    const dispatch = useDispatch();
    const history = useHistory()

    

    const handleSubmit = (value) => {

        const user = {
            username: value.username, email: value.email, password: value.password
        }
        dispatch(clearError())
        dispatch(register(user))

    }
    useEffect(() => {
        if (error.id === 'REGISTER_FAIL') {
            setMsg(error.msg.msg);
        } else {
            if(isAuthenticated) {
                setMsgSuccc('Sign up successfully')
            }
        }
    }, [error, isAuthenticated])
    return (
        <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: "100vh" }} >
            <div className="w-100" style={{ maxWidth: '400px' }}>
                <Card>
                    <CardBody>
                        <h2 className="text-center mb-4">Sign up</h2>
                        {msg ? <Alert color="danger">{msg}</Alert> : null}
                        {msgSucc ? <Alert color="success">{msgSucc}</Alert> : null}
                        <SignupForm onSubmit={handleSubmit} />
                    </CardBody>
                </Card>
                <div className="w-100 text-center mt-2">
                    Already have an account? <Link to="/login">Log In</Link>
                </div>
            </div>
        </Container>
    )
}