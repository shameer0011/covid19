import React, { Component } from 'react'
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default class Header extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-sm-12 col-md-12 " style={ { "position": "fixed", "width": "100%", "zIndex": "1" } }>

                    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                        <Navbar.Brand href="#home">Covid 19</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="mr-auto">
                                <Link to="/" className="nav-link">India </Link>
                                <Link to="/world" className="nav-link">World</Link>

                            </Nav>
                            <Nav>

                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>

                </div>
            </div>
        )
    }
}
