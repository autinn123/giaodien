import React from 'react'
import { NavLink } from 'react-router-dom'
import { Col, Container, Row } from 'reactstrap'
import './Header.scss'

export default function Header() {
    return (
        <header className="header">
            <Container>
                <Row className="justify-content-between">
                    <Col xs="auto">
                        <a
                            className="header__link header_title"
                            href="/">Home</a>
                    </Col>
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
                    
                   

                </Row>
            </Container>
        </header>
    )
}
