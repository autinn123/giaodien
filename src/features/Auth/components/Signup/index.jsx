import React, { useState, useRef, useEffect } from 'react'
import { Button, Card, CardBody, Container, Form, FormGroup, Input, Label, Alert } from 'reactstrap';
import { register } from '../../../../actions/authAction'
import { useDispatch, useSelector } from 'react-redux';


export default function Signup() {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [passwordCon, setPasswordCon] = useState('');
    const error = useSelector(state => state.error)
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated)
    const [msg, setMsg] = useState(null)
    const [valid, setValid] = useState(false)
    const dispatch = useDispatch();

    const handleNameChange = (e) => setName(e.target.value)
    const handleEmailChange = (e) => setEmail(e.target.value)
    const handlePassChange = (e) => setPassword(e.target.value)
    const handlePassConChange = (e) => setPasswordCon(e.target.value)

    const handleSubmit = (e) => {
        e.preventDefault()
        if (password !== passwordCon) {
            setMsg('Password is not matched')
        }
        else {
            const user = {
                name, email, password
            }

            dispatch(register(user))
        }
    }
    useEffect(() => {
        if (error.id === 'REGISTER_FAIL') {
            setMsg(error.msg.msg);
        } else {
            setMsg(null);
        }
    }, [error, isAuthenticated])
    return (
        <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: "100vh" }} >
            <div className="w-100" style={{ maxWidth: '400px' }}>
                <Card>
                    <CardBody>
                        <h2 className="text-center mb-4">Sign up</h2>
                        {msg ? <Alert color="danger">{msg}</Alert> : null}
                        <Form onSubmit={handleSubmit}>
                            <FormGroup >
                                <Label className="mb-2" for="name">Name</Label>
                                <Input id="name" type="text" onChange={handleNameChange} invalid={valid} />
                            </FormGroup>
                            <FormGroup >
                                <Label className="mb-2" for="email">Email</Label>
                                <Input id="email" type="email" onChange={handleEmailChange} />
                            </FormGroup>
                            <FormGroup >
                                <Label className="mb-2" for="password">Password</Label>
                                <Input id="password" type="password" onChange={handlePassChange} />
                            </FormGroup>
                            <FormGroup >
                                <Label className="mb-2" for="passwordCon">Password</Label>
                                <Input id="passwordCon" type="password" onChange={handlePassConChange} />
                            </FormGroup>
                            <Button color="primary" className="w-100 mt-4" type="submit">Sign up</Button>
                        </Form>
                    </CardBody>
                </Card>
            </div>
        </Container>
    )
}