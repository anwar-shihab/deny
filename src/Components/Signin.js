import React, { Component } from 'react';


import '../images/deny_designs.svg';
import '../Styles/Signin.css'



class Signin extends Component {

  render() {
    return (
  
      <div className="main-container">
        <div className="container-fluid col-lg-4 offset-lg-4">
          <div className="row">
            <img className="col-lg-8 offset-lg-2 col-sm-4 col-md-4 offset-md-4" src='https://cdn.shopify.com/s/files/1/0068/2302/t/185/assets/deny_designs_logo.svg?v=2968452402992386186'></img>
          </div>

          <div className="row">
            <p className="title text-center col-lg-12 display-4">WHOLESALE LOGIN</p>
          </div>

          <form>
            <div className="form-container">
              <label className="mail" for='email'>EMAIL</label>
              <input className="inpts col-lg-12" type="email" placeholder="you@your-company.com" ></input>
              <label className="password" for='password'>PASSWORD</label>
              <input className="inpts col-lg-12" type="password"></input>
              <p className="forgot mt-3"><a href="#">FORGOT PASSWORD?</a></p>
              <button className="btn lets col-lg-4 offset-lg-4 col-sm-4" type="submit">LET'S GO!</button>
              <div classname="form-footer">
                <p className="text-center mt-5 partner">Not a Wholesale Partner?</p>
                <button className="btn col-lg-5 offset-lg-1 col-sm-4 offset-sm-1 mt-2 mb-5">KEEP BROWSING</button>
                <button className="btn col-lg-4 offset-lg-2 col-sm-4 offset-sm-2 mt-2 mb-5">APPLY HERE</button>
              </div>
            </div>
          </form>
        </div>

      </div>


    );
  }
}

export default Signin;
