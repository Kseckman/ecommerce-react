import React, { Component } from 'react';

import { Card, CardImg, CardText, CardBody, CardTitle, Button } from 'reactstrap';

class RenderCard extends Component{
    constructor(props){
        super(props)

    }

    render(){
        let {image, name, description} = this.props.product;
        return (
                <div className=' card-container bx-shadow'>
                    <Card>
                        <CardImg  src={image} alt={name} />
                        <CardBody>
                            <CardTitle>{name}</CardTitle>
                            <CardText>{description}</CardText>
                        </CardBody>
                        <Button className='btn-dark'>Shop</Button>
                    </Card>
                </div>
        )
    }
}

export default RenderCard;