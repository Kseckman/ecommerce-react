import React, {Component} from "react";

import { Modal, Button, Form, FormControl, InputGroup } from 'react-bootstrap';


class ModalComp extends Component {
    constructor(props){
        super(props)

        
        this.state = {
          sign: false,
          login: false
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

    onOpenModal = ()=> {
        this.setState({sign:true});
    }

    onOpenModalLogin = ()=>{
        this.setState({sign:true})
    }

    onCloseModal = ()=>{
        this.setState({sign:false})
    }

    onCloseModalclose = ()=>{
        this.setState({sign:false})
    }

    // HandleLogin(event){
    //     alert(`Username: ${this.email.value} Password: ${this.password.value}`);
    //     this.toggleModal();
    //     event.preventDefault();
    // }

  render(){
      const{ login, sign } = this.state;
      return (
        <React.Fragment>
        
        <Modal open={login} toggle={this.onCloseModalclose}>
            <Modal.Header closeButton className='bg-dark text-light' toggle={this.toggleModal}>
            <Modal.Title className='bg-dark'>Sign In</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={this.handleLogin}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Control type="email" placeholder="Enter email" innerRef={input => this.email = input}/>   
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Control type="password" placeholder="Password"  innerRef={input => this.password = input} />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
                Close
            </Button>
            <Button variant="dark" type="submit">
                Save Changes
            </Button>
            </Modal.Footer>
        </Modal>
        </React.Fragment>
      );
  }
  }

  export default ModalComp;
  
