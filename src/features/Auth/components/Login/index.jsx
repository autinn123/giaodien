import React, { useState, useRef, useEffect } from 'react'
import { Link, NavLink, useHistory } from 'react-router-dom'
import { Button, Card, CardBody, Container, Form, FormGroup, Input, Label, Alert } from 'reactstrap';
import { login } from '../../../../actions/authAction'
import { useDispatch, useSelector } from 'react-redux';


export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const error = useSelector(state => state.error)
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated)
  const [msg, setMsg] = useState(null)
  const dispatch = useDispatch();

  const handleEmailChange = (e) => setEmail(e.target.value)
  const handlePassChange = (e) => setPassword(e.target.value)
  const handleSubmit = (e) => {
    e.preventDefault()
    const user = {
      email, password
    }

    dispatch(login(user))
  }
  useEffect(() => {
    if (error.id === 'LOGIN_FAIL') {
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
            <h2 className="text-center mb-4">Sign in</h2>
            {msg ? <Alert color="danger">{msg}</Alert> : null}
            <Form onSubmit={handleSubmit}>
              <FormGroup >
                <Label className="mb-2" for="email">Email</Label>
                <Input id="email" type="email" onChange={handleEmailChange} />
              </FormGroup>
              <FormGroup >
                <Label className="mb-2" for="password">Password</Label>
                <Input id="password" type="password" onChange={handlePassChange} />
              </FormGroup>
              <Button color="primary" className="w-100 mt-4" type="submit">Sign in</Button>
            </Form>
          </CardBody>
        </Card>
      </div>
    </Container>
  )
}


