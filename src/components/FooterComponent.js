import React from 'react';
import { Link } from 'react-router-dom';

function Footer(props){
    return(
        // <<!-- footer -->
        <footer className="footer mt-5 text-center ">
          <div class="container">
              <div class="row">
                <div class="col-3 mt-4 d-none d-md-block">
                    <img className="footerIcon " src="/assets/images/MountainBeard.jpg" alt="" />
                </div>
                  <div class="col-4 col-md-3 mt-4">
                      <h5>Menu</h5>
                      <ul class="list-unstyled">
                          <li><Link to="/">Home</Link></li>
                          <li><Link to="/">About</Link></li>
                          <li><Link to="/">shop</Link></li>
                          <li><Link to="/">Sign up</Link></li>
                      </ul>
                  </div>
                  <div class="col-4 col-md-3 mt-4">
                      <h5>Social</h5>
                      <a class="btn btn-social-icon btn-instagram" href="http://instagram.com/"><i class="fa fa-instagram fa-lg"></i></a>{' '}
                      <a class="btn btn-social-icon btn-facebook" href="http://facebook.com/"><i class="fa fa-facebook fa-lg"></i></a>{' '}
                      <a class="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i class="fa fa-twitter fa-lg"></i></a>
                      {' '}
                      <a class="btn btn-social-icon btn-google" href="http://youtube.com/"><i class="fa fa-youtube fa-lg"></i></a>
                  </div>
                  <div class="col-4 col-md-3 mt-4">
                      <h5>products</h5>
                      <ul class="list-unstyled">
                          <li><Link to="#">Oils</Link></li>
                          <li><Link to="#">Kits</Link></li>
                          <li><Link to="#">Brushes</Link></li>
                          <li><Link to="#">Other</Link></li>
                      </ul>
                  </div>
              </div>
              <div class="row mb-5">
                  <div class="col">
                      <hr class=" hrStyle" />
                      <h5 class="footCompName">Mountain Giant</h5>
                  </div>
              </div>
          </div>
      </footer>
    )
}

export default Footer;