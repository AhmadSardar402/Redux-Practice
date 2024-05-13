import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navigationbar = () => {

    const cartProducts = useSelector(state => state.cart)
    return (
    <>
        <div className="row" style={{marginBottom: '20px'}}>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Navbar.Brand to='/' as={Link}>Redux Toolkit Practice</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link to='/' as = {Link}>Product</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link to='/cart' as = {Link}>My Bag {cartProducts.length}</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    </>
  )
}

export default Navigationbar
