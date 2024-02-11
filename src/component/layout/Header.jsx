import React from 'react'
import '../../../src/App.css'
import {Link} from 'react-router-dom'

function Header() {
  return (
    <>
            {/* -------------- hero header sectin - */}
            <div className="container-fluid upernav">
                <div className='container subheader'>
                    <div className="row"></div>
                    <div className="col-md-6 contact-sub">

                        <Link to="#" className='con'>About</Link>
                        <Link to="#" className='con'>Contact</Link>
                        <Link to="#" className='con'>Help</Link>
                        <Link to="#" className='con'>FaQs</Link>
                    </div>
                    <div className="col-md-6 drop-down">
                        <div className="dropdown">
                            <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                My Acoount
                            </button>
                            <ul className="dropdown-menu">
                                <li><Link className="dropdown-item" to="#">Sign in</Link></li>
                                <li><Link className="dropdown-item" to="#">sign up</Link></li>
                            </ul>
                        </div>
                        <div className="dropdown">
                            <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                USD
                            </button>
                            <ul className="dropdown-menu">
                                <li><Link className="dropdown-item" to="#">EUR</Link></li>
                                <li><Link className="dropdown-item" to="#">GBP</Link></li>
                                <li><Link className="dropdown-item" to="#">CAD</Link></li>
                            </ul>
                        </div>
                        <div className="dropdown">
                            <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                EN
                            </button>
                            <ul className="dropdown-menu">
                                <li><Link className="dropdown-item" to="#">FR</Link></li>
                                <li><Link className="dropdown-item" to="#">AR</Link></li>
                                <li><Link className="dropdown-item" to="#">RU</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div>
                </div>
            </div>
            {/* --------    herosection uper part end    ------- */}
            {/* ----middle section is tart----- */}
            <div className="container-fluid meddle-clouor" >
                <div className="row content-middle">
                    <div className="col-md-4 middle-cols">
                        <img src="/src/assets/logo.png" alt="" width={300} height={65} />
                    </div>
                    <div className="col-md-4 middle-cols">
                        <form action="">
                            <div className='input-group'>
                                <input type="text" className='form-control' placeholder='search for products' />

                            </div>
                        </form>


                    </div>
                    <div className="col-md-4 middle-cols-1">
                        <p className='m-0'>Customer services</p>
                        <h5 className='m-0'>+012 245 4789</h5>
                    </div>
                </div>
            </div>
            {/* ----middle section is end */}
            {/* end part is start */}
            <div className="container-fluid">
                <div className="row">
                    <nav className="navbar navbar-expand-lg navigation ">
                        <div className="container-fluid">
                            <ul className="hio">
                                <li className="nav-item dropdown">
                                    <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        CATEGORIES
                                    </Link>
                                    <ul className="dropdown-menu">
                                        <li><Link className="dropdown-item" to="#">Dresses</Link></li>
                                        <li><Link className="dropdown-item" to="#">Shirts</Link></li>
                                        <li><Link className="dropdown-item" to="#">Jeans</Link></li>
                                        <li><Link className="dropdown-item" to="#">Dresses</Link></li>
                                        <li><Link className="dropdown-item" to="#">Shirts</Link></li>
                                        <li><Link className="dropdown-item" to="#">Jeans</Link></li>
                                        <li><Link className="dropdown-item" to="#">Dresses</Link></li>
                                        <li><Link className="dropdown-item" to="#">Shirts</Link></li>
                                        <li><Link className="dropdown-item" to="#">Jeans</Link></li>
                                    </ul>
                                </li>
                            </ul>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                            <Link className="nav-link active" aria-current="page" to="/">HOME</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/Shop">SHOP</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/ShopDetails">SHOP DETAILS</Link>
                                        </li>
                                        <div className="dropdown">
  <button className="btn  dropdown-toggle dddddd" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Pages
  </button>
  <ul className="dropdown-menu">
    <li><Link className="dropdown-item" to="/ShoppingCart">Shopping Cart</Link></li>
    <li><Link className="dropdown-item" to="/Checkout">Checkout</Link></li>
  </ul>
</div>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/Contact">CONTACT</Link>
                                        </li>
                                </ul>
                                <Link to=""><i className="fa-solid fa-heart iii"></i></Link>
                                        
                                        
                                        <Link to=""><i className="fa-solid fa-cart-shopping iii"></i></Link>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
            {/* end part is end */}
            

        </>
  )
}

export default Header