import React from 'react';
import { Link } from 'react-router-dom';



function AboutPage(){
    return(
    <React.Fragment>
    <section id="aboutBackground" className="py-5">
      <div className="container aboutOverlay">
        <div className="row text-center pt-5">
          <div className="col-12">
            <h1 className="display-4">About Mountain Giant</h1>
          </div>
        </div>
        <div className="row text-center align-items-center mt-5">
          <div className="col-sm-6">
              <h3>Our Mission</h3>
              <hr className="hrStyle" />
              <p className="aboutP">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate facere laboriosam eius saepe libero tempora necessitatibus, expedita obcaecati non impedit earum nobis inventore quasi sed maiores? Molestias similique officia temporibus culpa dolores et quas non tempora debitis error pariatur possimus distinctio dolor odio, magnam magni itaque adipisci eos eius doloribus..</p>
          </div>
          <div className="col-sm-6">
              <img className="img-fluid" src="/assets/images/jakob-owens-PrWMO0xpqyI-unsplash.jpg" alt="" />
          </div>
          <div className="col-sm-6 mt-3 order-4">
              <img className="img-fluid" src="/assets/images/supply-USghnHKesaM-unsplash.jpg" alt="" />
          </div>
          <div className="col-sm-6 mt-3 order-sm-4">
              <h3>Who We Are</h3>
              <hr className="hrStyle" />
              <p className="aboutP">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate facere laboriosam eius saepe libero tempora necessitatibus, expedita obcaecati non impedit earum nobis inventore quasi sed maiores? Molestias similique officia temporibus culpa dolores et quas non tempora debitis error pariatur possimus distinctio dolor odio, magnam magni itaque adipisci eos eius doloribus..</p>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-12">
            <h2 className="text-center text-light bg-dark m-0 py-2">Meet Our Team</h2>
          </div>
          <div class="col-12 pb-5">
            <table class="table table-striped table-dark table-responsive-md">
              <thead>
                <tr>
                  <th scope="col">The Team</th>
                  <th scope="col">First</th>
                  <th scope="col">Last</th>
                  <th scope="col">Handle</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Lead Guy</th>
                  <td>Big</td>
                  <td>Boss</td>
                  <td>@thisguy</td>
                </tr>
                <tr>
                  <th scope="row">Deligated</th>
                  <td>Jim</td>
                  <td>Bob</td>
                  <td>@Here</td>
                </tr>
                <tr>
                  <th scope="row">User Experience</th>
                  <td>Caring</td>
                  <td>Kathy</td>
                  <td>@Doingmybest</td>
                </tr>
                <tr>
                  <th scope="row">HR</th>
                  <td>Nosy</td>
                  <td>Nelly</td>
                  <td>@watchingyou</td>
                </tr>
                <tr>
                  <th scope="row">Worker Bee</th>
                  <td>Hard</td>
                  <td>Knock</td>
                  <td>@mylife</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
    </React.Fragment>
    )
}


function About(props){
    return(
        <React.Fragment>
            <div className="container-fluid">
                <AboutPage />
            </div>
        </React.Fragment>
    )
}

export default About;