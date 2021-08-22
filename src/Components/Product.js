import React, { Component } from 'react';


import '../images/deny_designs.svg';
import '../Styles/Product.css'



class Product extends Component {

  switchImage(val) {
    const item = document.getElementById('image1')

    if (val == 1) {
      item.src = "https://cdn.shopify.com/s/files/1/0068/2302/products/orara-studio-quote-set-boogie-white-bg-black-rect.jpg?v=1629467208";
    } else {
      item.src = 'https://cdn.shopify.com/s/files/1/0068/2302/products/orara-studio-quote-set-boogie-framed-lifestyle-black_dd1837bf-ff48-470f-81d7-46634e262ac6.jpg?v=1629467209'
    }
  }

  render() {
    return (
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


        <div className="row">
          <div className="col-lg-6 mt-5 text-center">
            <img id="image1" src="https://cdn.shopify.com/s/files/1/0068/2302/products/orara-studio-quote-set-boogie-white-bg-black-rect.jpg?v=1629467208"></img>
          </div>
          <div className="col-lg-4 offset-lg-1 mt-5 pt-5 text-center">
            <h2>FRAMED ART PRINT</h2>
            <label className="designer">QOUTE SET BOOGIE</label><label>&nbsp; BY &nbsp;</label><label className='designer'>ORARA STUDIO</label>
            <p><label className="designer">PRODUCT DETAILS</label></p>
            <div className="row">
              <div className="col-lg-6 offset-lg-3 col-md-4 offset-md-4 col-sm-4 offset-sm-4 mt-5 mb-4">
                <img className="thumbnail" src="https://cdn.shopify.com/s/files/1/0068/2302/products/orara-studio-quote-set-boogie-white-bg-black-rect_compact.jpg?v=1629467208"
                  value={1}
                  onClick={() => this.switchImage("1")}
                ></img>
                <img className="thumbnail" src="https://cdn.shopify.com/s/files/1/0068/2302/products/orara-studio-quote-set-boogie-framed-lifestyle-black_dd1837bf-ff48-470f-81d7-46634e262ac6_compact.jpg?v=1629467209"
                  value='2'
                  onClick={() => this.switchImage()}
                ></img>
              </div>
            </div>
            <div className="row mb-3 attributes">
              <div className='col-lg-3 col-sm-3'>STYLES</div>
              <select className="col-lg-6 offset-lg-3 col-sm-6" name="styles" id="styles">
                <option value="classic">Classic</option>
                <option value="modern">Modern</option>
              </select>
            </div>
            <div className="row mb-3 attributes">
              <div className='col-lg-3 col-sm-3'>FRAME</div>
              <select className="col-lg-6 offset-lg-3 col-sm-6" name="frame" id="frame">
                <option value="black">Black</option>
                <option value="white">White</option>
              </select>
            </div>
            <div className="row mb-3 attributes">
              <div className='col-lg-3 col-sm-3'>SIZE</div>
              <select className="col-lg-6 offset-lg-3 col-sm-6" name="size" id="size">
                <option value="8x10">8" X 10"</option>
                <option value="11x14">11" X 14"</option>
                <option value="13x19">13" X 19"</option>
                <option value="16x20">16" X 20"</option>
                <option value="18x24">18" X 24"</option>
                <option value="24x36">24" X 36"</option>
              </select>
            </div>
            <div className="container-2"></div>

            <div className="text-center mt-5 mb-5"><label>Deny Design is for wholesale customers only</label></div>
            <div className='justify-content-center mt-5 mb-5'><button className="btn">WHOLESALE LOGIN</button></div>
          </div>

        </div>
      </div>


    );
  }
}

export default Product;
