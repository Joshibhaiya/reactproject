import React from 'react'
import '../../../src/App.css'
import {Link} from 'react-router-dom'

function Footer() {
  return (
    <>
    {/* forter is start */}
    <div className="container-fluid footer-1">
      <div className="row">
        <div className="col-md-4 footer-2">
            <h1>get in touch</h1>
            <p className='mb-4'>No dolore ipsum accusam no lorem. Invidunt sed clita kasd clita et et dolor sed dolor. Rebum tempor no vero est magna amet no</p>
            <p className='mb-2'>
            <i className="fa-solid fa-location-dot footer-3"></i>
            123 Street, New York, USA
            </p>
            <p className='mb-2'>
            <i className="fa-regular fa-envelope footer-3"></i>
            info@example.com
            </p>
            <p className='mb-0'>
            <i className="fa-solid fa-phone footer-3"></i>
            +012 345 67890
            </p>
        </div>
        <div className="col-md-8">
              <div className="row">
                <div className="col-md-4 mb-5">
                  <h1>Quick shop</h1>
                  <div className='d-flex flex-column justify-content-start footer-4'>
                    <a href=""><i className="fa-solid fa-greater-than"></i>
                      Home</a>
                    <a href="" className='footer-5'><i className="fa-solid fa-greater-than"></i>
                      our shop</a>
                    <a href="" className='footer-5'><i className="fa-solid fa-greater-than"></i>
                      shop details</a>
                    <a href="" className='footer-5'><i className="fa-solid fa-greater-than"></i>
                      shopping cart</a>
                    <a href="" className='footer-5'><i className="fa-solid fa-greater-than"></i>
                      checkout</a>
                    <a href="" className='footer-5'><i className="fa-solid fa-greater-than"></i>
                      Contact us</a>
                  </div>
                </div>
                <div className="col-md-4 mb-5">
                <h1>MY ACOUNT</h1>
                  <div className='d-flex flex-column justify-content-start footer-4'>
                    <a href="" className='footer-5'><i className="fa-solid fa-greater-than"></i>
                      Home</a>
                    <a href="" className='footer-5'><i className="fa-solid fa-greater-than"></i>
                      our shop</a>
                    <a href="" className='footer-5'><i className="fa-solid fa-greater-than"></i>
                      shop details</a>
                    <a href="" className='footer-5'><i className="fa-solid fa-greater-than"></i>
                      shopping cart</a>
                    <a href="" className='footer-5'><i className="fa-solid fa-greater-than"></i>
                      checkout</a>
                    <a href="" className='footer-5'><i className="fa-solid fa-greater-than"></i>
                      Contact us</a>
                  </div>
                </div>
                <div className="col-md-4 mb-5">
                  <h1>NEWS LETTER</h1>
                  <p className='footer12'>Duo stet temper ipsum sit dhb djdfn dfn djf sdsss</p>
                  <form className="form-inline footer11">
    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
  </form>
  <h6 className='footer-10'>FOLLOW US</h6>
  <div className='d-flex footer-7'>
    <a href="" className='footer8'><i className="fa-brands fa-square-whatsapp"></i></a>
    <a href="" className='footer8'><i className="fa-brands fa-square-instagram"></i></a>
    <a href="" className='footer8'><i className="fa-brands fa-square-facebook"></i></a>
    <a href="" className='footer8'><i className="fa-brands fa-square-twitter"></i></a>
    <a href="" className='footer8'><i className="fa-brands fa-linkedin"></i></a>
  </div>
                </div>
              </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Footer