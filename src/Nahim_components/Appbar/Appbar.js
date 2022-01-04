import React from 'react';
import { Container, Dropdown, DropdownButton, Nav, Navbar } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logOut } from '../../componentsEmon/state/actions/userActions';
const Appbar = () => {
    const dispatch = useDispatch();
    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin ? userLogin : {};
    const navigate = useNavigate();
    const handleLogOut = () => {
        dispatch(logOut())
        navigate('/')
    }
    return (
        <div>
            <Navbar expand="lg" bg="black" variant="dark" className="d-flex" fixed="top" >
                <Container >
                    <Navbar.Brand href="#home">

                        <span className="fw-bold text-danger fs-2" >Event Planner</span>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav className="me-2">
                            <Nav.Link as={Link} to="/">Home</Nav.Link>
                            {/* <DropdownButton
                                variant="dark"
                                title="Packages"
                                id="input-group-dropdown-1"
                            >
                                <Dropdown.Item className='bg-dark' href="#"><Nav.Link as={Link} to="/packages" >Photoshoot</Nav.Link></Dropdown.Item>
                                <Dropdown.Item className='bg-dark' href="#"><Nav.Link as={Link} to="/packages" >Catering</Nav.Link></Dropdown.Item>
                                <Dropdown.Item className='bg-dark' href="#"><Nav.Link as={Link} to="/packages" >Flower</Nav.Link></Dropdown.Item>

                            </DropdownButton> */}
                            <Nav.Link as={Link} to="/programs">Packages</Nav.Link>
                            <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link>
                            <Nav.Link as={Link} to="/gallery">Gallery</Nav.Link>
                        </Nav>
                        {userInfo?.email && <Navbar.Text className="me-2">
                            Signed in as: {userInfo.name}
                        </Navbar.Text>}

                        <Navbar.Text>
                            {
                                userInfo?.email ? <button onClick={handleLogOut} className=" btn btn-danger">Logout <i className="fas fa-sign-out-alt"></i></button> :
                                    <Nav.Link as={Link} to="/login" ><i className="fas fa-sign-in-alt"></i> Login</Nav.Link>
                            }
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>

            </Navbar>
        </div>
    );
};

export default Appbar;