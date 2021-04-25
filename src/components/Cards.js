import React, { Component } from 'react';

import { Card, CardImg, CardText, CardBody, CardTitle, Button } from 'reactstrap';

class RenderCard extends Component{
    constructor(props){
        super(props)

    }

    render(){
        let {image, name, description} = this.props.product;
        return (
            <div clasName='row mt-4 card-container shop bx-shadow'>
                <div className='col-12 col-md-4' >
                    <Card clasName='card-container shop bx-shadow'>
                        <CardImg src={image} alt={name} />
                        <CardBody>
                            <CardTitle>{name}</CardTitle>
                            <CardText>{description}</CardText>
                        </CardBody>
                        <Button className='btn-dark'>Shop</Button>
                    </Card>
                </div>
            </div>
        )
    }
}

export default RenderCard;