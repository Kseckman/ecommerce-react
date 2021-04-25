import React from 'react';
import { Div } from 'react-bootstrap';

function Jumbotron(props){
    return(
        <div id="header" className="container-fluid text-center">
        <div className="row stuff">
        <div className="col things">
            <h1 className="display-4">Mountain Giant</h1>
            <p className="lead">For the distinguished gentelman</p>
            <hr className="mb-4" />
            <p>Bringing you refinement balanced with a rugged edge</p>
            <p className="lead">
            <a href="shop" className="btn btn-dark btn-lg px-4" href="#" role="button">Shop Now</a>
            </p>
        </div>
        </div>
       </div>
    )
}

// function Flicity(props){
//     return(
//         <React.Fragment>
//              {/* <!-- Flickity HTML init --> */}
//             <div className="row mt-5">
//                 <div className="col">
//                 <h1 className="text-center mb-3">Featured Items</h1>
//                 </div>
//             </div>
//             <div className="carousel"
//              data-flickity='{ "wrapAround": true }'>
//                 <div id="cell1" className="carousel-cell cell">
//                 <div className="overlay">
//                     <h5>Premier Oil</h5>
//                     <p>Woody scent with a clean finish</p>
//                 </div>
//                 </div>
//                 <div id="cell2" className="carousel-cell cell">
//                 <div className="overlay">
//                     <h5>blades</h5>
//                     <p>Old fassioned line care</p>
//                 </div>
//                 </div>
//                 <div id="cell3" className="carousel-cell cell">
//                 <div className="overlay">
//                     <h5>Balm and conditioner</h5>
//                     <p>Strengthen and nourish</p>
//                 </div>
//                 </div>
//                 <div id="cell4" className="carousel-cell cell">
//                 <div className="overlay">
//                     <h5>Styling tools</h5>
//                     <p>Look your best</p>
//                 </div>
//                 </div>
//                 <div id="cell5" className="carousel-cell cell">
//                 <div className="overlay">
//                     <h5>Clippers</h5>
//                     <p>Keep it sharp</p>
//                 </div>
//                 </div>
//             </div>
//         </React.Fragment>
//     )
// }

function Carousel(){
    return(
        <React.Fragment>
             {/* <!-- Experience items --> */}
            <div className="row mt-5">
                <div className="col-3 d-none d-lg-block iconArrow px-0">
                    <img className="img-fluid poly" src="/assets/images/MountainBeard.jpg" alt="" />
                </div>
                    <div className="col-12 col-lg-6">
                        <h1 className="text-center mb-3">Top Reviews</h1>
                    <div id="carouselIndicators" className="carousel mx-auto slide" data-ride="carousel">
                        <ol className="carousel-indicators">
                            <li data-target="#carouselIndicators" data-slide-to="0" className="active"></li>
                            <li data-target="#carouselIndicators" data-slide-to="1"></li>
                            <li data-target="#carouselIndicators" data-slide-to="2"></li>
                        </ol>
                        <div className="carousel-inner bx-shadow">
                            <div className="carousel-item active">
                            <img className="d-block w-100" src="/assets/images/daniel-bernard-kmxvl3HlTqw-unsplash.jpg" alt="First slide" />
                            <div className="carousel-caption">
                                <h5>Beard review Guy</h5>
                                <p>Fantastic selection of Oils</p>
                            </div>
                            </div>
                            <div className="carousel-item">
                            <img className="d-block w-100" src="/assets/images/hivan-arvizu-soyhivan-kdm6BWNuTh0-unsplash.jpg" alt="Second slide" />
                            <div className="carousel-caption">
                                <h5>Facial Hair Magazine</h5>
                                <p>Mountain Giant makes waves</p>
                            </div>
                            </div>
                            <div className="carousel-item">
                            <img className="d-block w-100" src="/assets/images/jakob-owens-PrWMO0xpqyI-unsplash.jpg" alt="Third slide" />
                            <div className="carousel-caption">
                                <h5>Another Guy</h5>
                                <p>Their stuffs ok</p>
                            </div>
                            </div>
                        </div>
                        <a className="carousel-control-prev" href="#carouselIndicators" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carouselIndicators" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                        </div>
                    </div>
                    <div className="col-3 d-none d-lg-block iconArrow px-0">
                        <img className="img-fluid poly2" src="/assets/images/MountainBeard.jpg" alt="" />
                    </div>
                </div>

                <div className="row mt-5 my-0 img">
                <div id="imgback" className="col px-0">
                    <div className="col imgover">
                    <h3>Some words</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At ipsum, facere dolore error pariatur quo placeat exercitationem quis vero cumque?</p>
                    </div>
                </div>
                </div>
        </React.Fragment>
    )
}

function BottomImage(props){
    return(
       <div className='row mt-5 my-0'>
           <div id="bottomImg" class="col"></div>
       </div>
    )
}

function Subscribe(){
    return(
        <React.Fragment>
            {/* !-- subscribe --> */}
                <div className="row my-5 align-items-center sub">
                <div className="col-lg-6 text-center text-md-left">
                    <h3>Join the Club</h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit, ad!</p>
                </div>
                <div className="col-lg-6">
                    <form className="form">
                        <div className="form-group">
                        <label for="#clubEmail" className="">Enter your Email Adress for All the perks</label>
                        <div className="input-group">
                            <input type="email" className="form-control py-2" id="clubEmail" aria-describedby="emailHelp" placeholder="Enter email" />
                            <span className="input-group-append">
                            <button type="submit" className="btn btn-dark px-4">Submit</button>
                            </span>
                        </div>
                        </div>
                    </form>
                </div> 
                </div>   
        </React.Fragment>
    )
}


function Catagory() {
    return (
        <div className="row mt-5 catagory">
            <div className="col text-center">
                <h2 mb-3>Shop By Catagory</h2>
                <div className="row mt-4">
                    <div className="col-sm-12 col-lg-4 crop1">
                    <a href="shop.html"><img className="img-fluid cat1 bx-shadow" src="/assets/images\apothecary-87-WN1P9aSLfa4-unsplash.jpg" alt="Responsive image"/></a>
                    <h5>Kits</h5>
                    </div>
                    <div className="col-sm-6 col-lg-4 crop">
                    <a href="shop.html"><img className="img-fluid bx-shadow" src="/assets/images/christin-hume-0MoF-Fe0w0A-unsplash.jpg" alt="Responsive image"/></a>
                    <h5>Oils</h5>
                        <a href=""><img className="img-fluid bx-shadow" src="/assets/images/supply-USghnHKesaM-unsplash.jpg" alt="Responsive image"/></a>
                        <h5>beard care</h5>
                    </div>
                    <div className="col-sm-6 col-lg-4">
                    <div className="crop">
                        <a href="shop.html"><img className="img-fluid bx-shadow" src="/assets/images/shari-sirotnak-oM5YoMhTf8E-unsplash.jpg" alt="Responsive image"/></a>
                        <h5>Brushes</h5>
                    </div>
                    <div className="crop">
                        <a href="shop.html"><img className="img-fluid bx-shadow" src="/assets/images/josh-sorenson-FvKpUZCbZ-s-unsplash.jpg" alt="Responsive image"/></a>
                        <h5>Blades</h5>
                    </div>
                    </div>   
                </div>
            </div>
        </div>
    );
}


function Home(props){
    return(
        <React.Fragment>
            <Jumbotron />
            <div className='container-fluid'>
                <Carousel/>
                <Catagory />
                <BottomImage/>
                <Subscribe />
            </div>

        </React.Fragment>
    )

}

export default Home;