import React, { Component } from 'react';

import '../Styles/Products.css'



class Products extends Component {
  render() {
    return (
      // <Home/>

      // <Signup />

      <div className="container-fluid">
        <div class="row top-container">
          <div class="col-md-12">
            <nav class="navbar navbar-expand-lg navbar-light ">
              <img className="navbar-brand logo" src="https://cdn.shopify.com/s/files/1/0068/2302/t/185/assets/deny_designs_logo.svg?v=2968452402992386186" alt="logo">
              </img>
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation"> <span class="navbar-toggler-icon"></span> </button>
              <div class="collapse navbar-collapse" id="navbarColor02">
                <ul class="navbar-nav mr-auto">
                  <li class="nav-item "><a className="nav-link" href="#products">PRODUCTS</a></li>
                  <li class="nav-item"> <a className="nav-link" href="#collections">COLLECTIONS</a> </li>
                  <li class="nav-item"> <a className="nav-link" href="#our-story">OUR STORY</a></li>
                  <li class="nav-item"> <a className=" nav-link" href="#wholesale">WHOLESALE</a></li>
                </ul>
                <img className="icon-profile" src="../images/blk_search_icon.svg"></img>
                <img className="icon-profile" src="../images/blk_person_icon.svg"></img>
              </div>
            </nav>
          </div>
        </div>

        <div className="row pt-5">
          <div className="mt-4 col-lg-3 col-md-6 prod">
            <img className="col-lg-12" src='https://cdn.shopify.com/s/files/1/0068/2302/products/michele-payne-spring-woods-white-bg-black-rect.jpg?v=1629467880'>
            </img>
            <p className="product-name">SPRING WOODS</p>
            <label className="description">Framed Art Print<br />By Cuss Yeah Designs</label>
          </div>
          <div className="mt-4 col-lg-3 col-md-6 col-sm-6 prod">
            <img className="col-lg-12" src='https://cdn.shopify.com/s/files/1/0068/2302/products/sunshinecanteen-pink-and-yellow-serape-white-bg-black-rect_large.jpg?v=1629467229'></img>
            <p className="product-name">PINK AND YELLOW SERAPE</p>

            <label className="description">Framed Art Print<br />By Sunshilnecanteen</label>
          </div>
          <div className="mt-4 col-lg-3 col-md-6 col-sm-6 prod">
            <img className="col-lg-12" src='https://cdn.shopify.com/s/files/1/0068/2302/products/orara-studio-quote-set-boogie-white-bg-black-rect_large.jpg?v=1629467208'></img>
            <p className="product-name">QOUTE SET BOOGIE</p>
            <label className="description">Framed Art Print<br />Orara Studio</label>
          </div>
          <div className="mt-4 col-lg-3 col-md-6 col-sm-6 prod">
            <img className="col-lg-12" src='https://cdn.shopify.com/s/files/1/0068/2302/products/orara-studio-quote-set-sunshine-white-bg-black-rect_large.jpg?v=1629466994'></img>
            <p className="product-name">QOUTE SET SUNSHINE</p>
            <label className="description">Framed Art Print<br />Orara Studio</label>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-3 col-md-6  prod">
            <img className="col-lg-12" src='https://cdn.shopify.com/s/files/1/0068/2302/products/cuss-yeah-designs-multicolor-zebra-pattern-001-white-bg-black-rect_large.jpg?v=1629466157'></img>
            <p className="product-name">SPRING WOODS</p>
            <label className="description">Framed Art Print<br />By Cuss Yeah Designs</label>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 prod">
            <img className="col-lg-12" src='https://cdn.shopify.com/s/files/1/0068/2302/products/cuss-yeah-designs-multicolor-giraffe-pattern-001-white-bg-black-rect_large.jpg?v=1629387342'></img>
            <p className="product-name">PINK AND YELLOW SERAPE</p>

            <label className="description">Framed Art Print<br />By Sunshilnecanteen</label>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 prod">
            <img className="col-lg-12" src='https://cdn.shopify.com/s/files/1/0068/2302/products/sunshinecanteen-modern-checkerboard-white-bg-black-rect_large.jpg?v=1629387219'></img>
            <p className="product-name">QOUTE SET BOOGIE</p>
            <label className="description">Framed Art Print<br />Orara Studio</label>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 prod">
            <img className="col-lg-12" src='https://cdn.shopify.com/s/files/1/0068/2302/products/orara-studio-minimal-moon-white-bg-black-rect_large.jpg?v=1629386812'></img>
            <p className="product-name">QOUTE SET SUNSHINE</p>
            <label className="description">Framed Art Print<br />Orara Studio</label>
          </div>
        </div>
      </div>
    );
  }
}

export default Products;
