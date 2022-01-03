import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { DropdownButton, Dropdown } from 'react-bootstrap'
const Appbar = () => {
    return (
        <div>
            <Navbar ollapseOnSelect expand="lg" bg="black" variant="dark" className="d-flex" fixed="top" >
                <Container >
                    <Navbar.Brand href="#home">

                        <span className="fw-bold text-danger fs-2" >Event Planner</span>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav className="me-2">
                            <Nav.Link as={Link} to="/">Home</Nav.Link>
                            <DropdownButton
                                variant="dark"
                                title="Packages"
                                id="input-group-dropdown-1"
                            >
                                <Dropdown.Item className='bg-dark' href="#"><Nav.Link as={Link} to="/packages" >Photoshoot</Nav.Link></Dropdown.Item>
                                <Dropdown.Item className='bg-dark' href="#"><Nav.Link as={Link} to="/packages" >Catering</Nav.Link></Dropdown.Item>
                                <Dropdown.Item className='bg-dark' href="#"><Nav.Link as={Link} to="/packages" >Flower</Nav.Link></Dropdown.Item>

                            </DropdownButton>
                            <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link>
                            <Nav.Link as={Link} to="/gallery">Gallery</Nav.Link>
                        </Nav>
                        <Navbar.Text className="me-2">
                            Signed in as: <a href="#login"></a>
                        </Navbar.Text>

                        <Navbar.Text>
                            {/* {
                                user.email ? <button onClick={handleLogOut} className=" btn btn-danger">Logout <i class="fas fa-sign-out-alt"></i></button> :
                                    <Nav.Link as={Link} to="/login" ><i class="fas fa-sign-in-alt"></i> Login</Nav.Link>
                            } */}
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>

            </Navbar>
        </div>
    );
};

export default Appbar;