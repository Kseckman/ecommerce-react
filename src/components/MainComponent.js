import React, { Component } from 'react'
import Header from './HeaderComponent'
import Footer from './FooterComponent'
import Home from './HomeComponent';
import About from './AboutComponent';
import Shop from './ShopComponent';
import { PRODUCTS } from '../shared/Products';
import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {  
           products: PRODUCTS
        };
    }

    render() {
        
        // const Shop = ()=>{
        //     return(
        //         <Shop
        //        products={this.State.products.filter(product => product.featured)[0]}
        //         />
        //     )
        // }

     
        return (
            <div>
                <Header />
                    <Switch>
                        <Route path='/home' component={Home} />
                        <Route path='/About' component={About} />
                        <Route path='/Shop' component={Shop} />
                        <Redirect to='/home' />
                    </Switch>
                <Footer />
            </div>
        );
    };
}

export default Main;