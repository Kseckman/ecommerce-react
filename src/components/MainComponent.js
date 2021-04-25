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
     
        return (
            <div>
                <Header />
                    <Switch>
                        <Route path='/home' component={Home} />
                        <Route path='/About' component={About} />
                        <Route exact path='/Shop' render={() => <Shop products={this.props.products} /> } />
                        <Redirect to='/home' />
                    </Switch>
                <Footer />
            </div>
        );
    };
}

export default Main;