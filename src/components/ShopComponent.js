import React, { Component} from 'react';
import { PRODUCTS } from '../shared/Products';
import RenderCard from './Cards';

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

// const RenderCard= ({item})=> {
//     return (
//         <div clasName=''>
//             <Card key={product.id}>
//                 <CardImg src={item.image} alt={item.name} />
//                 <CardBody>
//                     <CardTitle>{item.name}</CardTitle>
//                     <CardText>{item.description}</CardText>
//                 </CardBody>
//             </Card>
//         </div>
//     );
// }

// function RenderCard({item}){
//     return (
//         <div clasName=''>
//             <Card >
//                 <CardImg src={item.image} alt={item.name} />
//                  <CardBody>
//                      <CardTitle>{item.name}</CardTitle>
//                      <CardText>{item.description}</CardText>
//                  </CardBody>
//              </Card>
//         </div>
//     )
// }


   
       


class Shop extends Component {
    constructor(props) {
        super(props);

        this.state = {  
           products: PRODUCTS
        };
    }
    
    
    render(){
        let productPage = this.state.products.map(product => {
            return(
                <RenderCard key={product.id} product={product}/>
            )
        })
        return(
            <React.Fragment>
                <div id="header" class="container-fluid text-center">
                <ShopHeader />
                </div>
                <div class="container text-center">
                    {productPage}
                </div>       
            </React.Fragment>
        )
    }
}

export default Shop;