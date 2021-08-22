import React, { Component } from 'react';
import "../Styles/Signup.css"


class Signup extends Component {
    render() {
      return (
  
        <div className="container-fluid">
          <div className="top-container row">
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
                </div>
              </nav>
            </div>
          </div>
  
          <div className="row pt-5">
            <div className="col-lg-3 offset-lg-8 offset-md-8 req mt-4"><label>*</label>indicates a required field</div>
          </div>
  
          <form>
            <div className="form-group row justify-content-end">
              <div class="col-lg-4">
                <label for="first name" className="required-field">FIRST NAME</label>
                <input class="form-control" />
              </div>
              <div class="col-lg-4">
                <label for="last name" className="required-field">LAST NAME</label>
                <input class="form-control" />
              </div>
            </div>
            <div className="form-group row  justify-content-end">
              <div class="col-lg-offset-4 col-lg-4">
                <label for="phone" className="required-field">PHONE</label>
                <input class="form-control" />
              </div>
              <div class="col-lg-4">
                <label for="mobile" className="required-field">MOBILE PHONE</label>
                <input class="form-control" />
              </div>
            </div>
            <div className="form-group row  justify-content-center">
              <div class="col-lg-4">
                <label for="email" className="required-field">EMAIL</label>
                <input class="form-control" />
              </div>
            </div>
          </form>
          <div className="row">
          <div className="brdr col-lg-8 offset-lg-4 "></div>
          </div>
          <form>
            <div className="form-group company row  justify-content-end form-start">
              <div class="col-lg-4 col-lg-offset-4">
                <label for="company name" className="required-field">COMPANY NAME</label>
                <input class="form-control" />
              </div>
              <div class="col-lg-4">
                <label for="company website" className="required-field">COMPANY WEBSITE</label>
                <input class="form-control" />
              </div>
            </div>
            <div className="form-group row justify-content-end">
              <div class="col-lg-offset-4 col-lg-4">
                <label for="company address" className="required-field">COMPANY ADDRESS</label>
                <input class="form-control" />
              </div>
              <div class="col-lg-4">
                <label for="address2" className="required-field">ADDRESS 2</label>
                <input class="form-control" />
              </div>
            </div>
            <div className="form-group row justify-content-end">
              <div class="col-lg-offset-4 col-lg-4">
                <label for="city" className="required-field">CITY</label>
                <input class="form-control" />
              </div>
              <div class="col-lg-4">
                <label for="state" className="required-field">STATE</label>
                <input class="form-control" />
              </div>
            </div>
          </form>
  
        </div>
      );
    }
  }
  
  export default Signup;
