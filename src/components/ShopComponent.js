import React from 'react';
import { Card, Button } from 'react-bootstrap';

function ShopHeader(){
    return (
        <React.Fragment>
                  {/* <!-- Products --> */}
            
                <div className="row stuff">
                <div className="col things">
                    <h1 className="display-4">Mountain Giant</h1>
                    <p className="lead">Product page</p>
                    <hr className="mb-4" />
                    <form className="form  my-lg-0">
                        <input className="form-control ml-sm-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-dark btn-lg px-4 my-2" type="submit">Search</button>
                    </form>
                </div>
                </div>
            
        </React.Fragment>
    )
}

// function RenderCard({item}) {
   
//     return (
//             <Card  style={{ width: '18rem' }}>
//                 <Card.Img variant="top" src={item.image} />
//                 <Card.Body>
//                     <Card.Title>{item.name}</Card.Title>
//                     <Card.Text>
//                     Some quick example text to build on the card title and make up the bulk of
//                     the card's content.
//                     </Card.Text>
//                     <Button variant="primary">Shop</Button>
//                 </Card.Body>
//             </Card>
//     );
// }


function Shop(props){
    return(
        <React.Fragment>
            <div id="header" class="container-fluid text-center">
            <ShopHeader />
                {/* <div class="row mt-5">
                    <div class="col">
                        <RenderCard item={props.products} />
                    </div>
                </div>     */}
            </div>
        </React.Fragment>
    )
}

export default Shop;