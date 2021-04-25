import React, { Component } from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label } from 'reactstrap';
// import { Button, Navbar, Nav, Form, FormControl, InputGroup, Modal} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';




class Header extends Component {
    constructor(props){
        super(props)

        
        this.state = {
          isNavOpen: false,
          isModalOpen: false
        };
        this.toggleNav = this.toggleNav.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.handleLogin = this.HandleLogin.bind(this);
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    HandleLogin(event){
        alert(`Email: ${this.email.value} Password: ${this.password.value} `);
        this.toggleModal();
        event.preventDefault();
    }

    render(){
        return (
            <React.Fragment>
                {/* <Navbar expand="lg" bg="custom" color="dark">
                    <NavbarBrand href="#home"><img id="navLogo" className="img-fluid" fluid src="/assets/images/MountainBeard.jpg"  alt="MountainBeardLogo"/></NavbarBrand>
                    <NavbarToggler onClick={this.toggleNav} />
                    <Collapse isOpen={this.state.isNavOpen} navbar>
                        <Nav navbar className="form-inline my-2 my-lg-0">
                            <Form>
                                <FormGroup>
                                <Label for="examplePassword" hidden>Password</Label>
                                <Input type="password" name="password" id="examplePassword" placeholder="Password" />
                                </FormGroup>
                            </Form>                 
                        </Nav>
                        <Nav nav className="ml-auto navSpacing">
                        <NavItem>
                            <NavLink className="nav-link" to="/Home"><i className='fa fa-mountain fa-sm' /> {' '}Home</NavLink>
                        </NavItem>
                        <div className="navBoarder" />
                        <NavItem>
                            <NavLink className="nav-link" to="/About">About</NavLink>
                        </NavItem>
                        <div className="navBoarder" />
                        <NavItem>
                            <NavLink className="nav-link" to="/shop">Shop</NavLink>
                        </NavItem>
                        <div className="navBoarder" />
                        <NavItem>
                            <NavLink className="nav-link" onClick={this.toggleModal} href="#memes">
                                SignIn{' '}<i class="fas fa-user"></i>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link btn btn-outline-secondary btn-sm px-3" eventKey={2} href="#memes"><i className='fas fa-shopping-cart' />
                                {' '}Your Cart
                            </NavLink>
                        </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
                
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal} className='bg-dark text-light'>
                        Sign In
                    </ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleLogin}>
                            <FormGroup >
                                <Input type="email" id='email' name="email" placeholder="Enter email" innerRef={input => this.email = input} />   
                            </FormGroup>
                            <FormGroup controlId="formBasicPassword">
                                <Input type="password" id='password' name='password' placeholder="Password" innerRef={input => this.password = input} />
                            </FormGroup>
                            <Button color="secondary">
                                Close
                            </Button>
                            <Button color="dark" type='submit' value='submit'>
                                Save Changes
                            </Button>
                        </Form>
                    </ModalBody>
                </Modal> */}

                    <Navbar expand="lg" dark className='bg-custom'>
                   
                        <NavbarBrand  href="#home"><img id="navLogo" className="img-fluid" fluid src="/assets/images/MountainBeard.jpg"  alt="MountainBeardLogo"/>
                        </NavbarBrand>
                        <NavbarToggler onClick={this.toggleNav} />
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar >
                                <Form className="form-inline my-2 my-lg-0">
                                <FormGroup className="input-group">
                                    <Label for="search" hidden>search</Label>
                                    <Input type="search" name="search" id="search" placeholder="search" className=" py-2 border-right-0 border"/>
                                    <span class="input-group-append">
                                        <Button color="light"><i class="fa fa-search"></i></Button>
                                    </span>
                                </FormGroup>
                                </Form>
                            </Nav>
                            <Nav navbar className="ml-auto navSpacing">
                                <NavItem>
                                    <NavLink className="nav-link" to="/Home"><i className='fa fa-mountain fa-sm' /> {' '}Home
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/About">About</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/shop">Shop</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to='/' onClick={this.toggleModal} >
                                    SignIn{' '}<i class="fas fa-user"></i>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link btn btn-outline-secondary btn-sm px-3"  to="/memes"><i className='fas fa-shopping-cart' />
                                    {' '}Your Cart
                                    </NavLink>
                                </NavItem>
                            </Nav>
                            
                        </Collapse>
                    
                </Navbar>

                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}  className='bg-custom text-light'>Sign In</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleLogin}>
                            <FormGroup>
                                <Input type="email" id='email' name="email" placeholder="Enter email" innerRef={input => this.email = input} />   
                            </FormGroup>
                            <FormGroup>
                                <Input type="password" id='password' name='password' placeholder="Password" innerRef={input => this.password = input} />
                            </FormGroup>
                            <Button color="secondary" className='float-right'>
                                Close
                            </Button>
                            <Button color="dark" type='submit' value='submit' className='float-right'>
                                Save Changes
                            </Button>
                        </Form>
                    </ModalBody>
                </Modal>


            </React.Fragment>
        );
        }
    }


export default Header