import React, { Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { Col, Container, NavItem, Row } from 'reactstrap'
import { logout } from '../../actions/authAction'
import Logout from '../../features/Auth/components/Logout'
import './Header.scss'

export default function Header() {
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated)
    const user = useSelector(state => state.auth.user)
    const dispatch = useDispatch();
    const handleClick = (e) => {
        dispatch(logout())
    }
    const authLinks = (
        <Col xs="auto">
            <NavLink exact className="header__link" to="#" >
               {user ? `Welcome ${user.name}` : ''}
            </NavLink>
            <NavLink exact onClick={handleClick}  className="header__link" to="#">
                    Logout
            </NavLink>
        </Col>
    )
    const guestLinks = (
        <Col xs="auto">
            <NavLink
                exact
                className="header__link"
                to="/login"
                activeClassName="header__link--active"
            >
                Login
                        </NavLink>
            <NavLink
                exact
                className="header__link"
                to="/signup"
                activeClassName="header__link--active"
            >
                Sign up
            </NavLink>
        </Col>
    )
    return (
        <header className="header">
            <Container>
                <Row className="justify-content-between">
                    <Col xs="auto">
                        <a
                            className="header__link header_title"
                            href="/">Home</a>
                    </Col>
                    {isAuthenticated ? authLinks: guestLinks}



                </Row>
            </Container>
        </header>
    )
}
