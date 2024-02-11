import React from 'react'
import '../../src/App.css'

export default function Home() {
  return (
    <>
    {/* banner is start */}
      <div className="container-fluid main-banner">
        <div className="row">
          <div className="col-md-8">
          <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner inner-part">
                <div className="carousel-item active">
                  <img src="/src/assets/carousel-1.jpg" className="d-block w-100" alt="First Slide" />
                  <div className="carousel-caption">
                    <h1 className="content-culsor">MENS FASHION</h1>
                    <p className="content-ppp">THE GREATE MENS WEAR GREAT FASHION</p>
                    <button className='btn btn-outline-warning'>Shop now</button>
                  </div>
                </div>
                <div className="carousel-item">
                  <img src="/src/assets/carousel-2.jpg" className="d-block w-100" alt="Second Slide" />
                  <div className="carousel-caption">
                    <h1 className="content-culsor">WOMENS FASHION</h1>
                    <p className="content-ppp">THE GREATE WOMENS WEAR GREAT FASHION</p>
                    <button className='btn btn-outline-warning'>Shop now</button>
                  </div>
                </div>
                <div className="carousel-item">
                  <img src="/src/assets/carousel-3.jpg" className="d-block w-100" alt="Second Slide" />
                  <div className="carousel-caption">
                    <h1 className="content-culsor">CHILD FASHION</h1>
                    <p className="content-ppp">THE GREATE CHILD WEAR GREAT FASHION</p>
                    <button className='btn btn-outline-warning'>Shop now</button>
                  </div>
                </div>
                {/* <!-- Add more carousel items as needed --> */}
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>

              {/* <!-- Indicators --> */}
              <ol className="carousel-indicators">
                <li data-bs-target="#carouselExample" data-bs-slide-to="0" className="active"></li>
                <li data-bs-target="#carouselExample" data-bs-slide-to="1"></li>
                <li data-bs-target="#carouselExample" data-bs-slide-to="2"></li>
                {/* <!-- Add more indicators as needed --> */}
              </ol>
            </div>


          </div>
          <div className="col-md-4">
            <div className='side'>
            <img src="/src/assets/offer-1.jpg" className='img-side' alt="" />
            <div className='overlay-text'>
              <h3>save 20%</h3>
              <h1>Special Offer</h1>
              <button className='btn btn-outline-warning'> Shop Now </button>
            </div>
            </div>
            <div className='side'>
            <img src="/src/assets/offer-2.jpg" className='img-side' alt="" />
            <div className='overlay-text'>
            <h3>save 20%</h3>
              <h1>Special Offer</h1>
              <button className='btn btn-outline-warning'> Shop Now </button>
            </div>
            </div>
          </div>
        </div>
      </div>
      {/* banner is end */}
      {/* features is start */}
      <div className="container-fluid featues-section">
        <div className="row fea-ppaa">
          <div className="col-md-3">
              <div className='innerfeatures'>
                <h1><i className="fa-solid fa-check"></i></h1>
                <h1>Quality Product</h1>
              </div>
          </div>
          <div className="col-md-3">
          <div className='innerfeatures'>
                <h1><i className="fa-solid fa-truck"></i></h1>
                <h1>Free Shipping</h1>
              </div>
          </div>
          <div className="col-md-3">
          <div className='innerfeatures'>
                <h1><i className="fa-solid fa-right-left"></i></h1>
                <h1>14-day Return</h1>
              </div>
          </div>
          <div className="col-md-3">
          <div className='innerfeatures'>
                <h1><i className="fa-solid fa-phone"></i></h1>
                <h1>24/7 Support</h1>
              </div>
          </div>
        </div>
      </div>
      {/* features is end  */}
      {/* Categories is start */}
      <div className="container-fluid">
        <h1 className='h-center'>
          <hr />
          <span>CATEGORIES</span>
          <hr />
        </h1>
        <div className="row">
          <div className="col-md-3">
            <a href="" className='categoires-1'>
              <div className='d-flex mb-4 align-items-center'>
                  <div className='overflow-hidden'>
                    <img src="/src/assets/cat-1.jpg" className='img-cat' alt="" />
                  </div>
                  <div className=''>
                          <h6>Category name</h6>
                          <small>100 products</small>
                  </div>
              </div>
            </a>
          </div> 
          <div className="col-md-3">
            <a href="" className='categoires-1'>
              <div className='d-flex mb-4 align-items-center'>
                  <div className='overflow-hidden'>
                    <img src="/src/assets/cat-2.jpg" className='img-cat' alt="" />
                  </div>
                  <div className=''>
                          <h6>Category name</h6>
                          <small>100 products</small>
                  </div>
              </div>
            </a>
          </div> 
          <div className="col-md-3">
            <a href="" className='categoires-1'>
              <div className='d-flex mb-4 align-items-center'>
                  <div className='overflow-hidden'>
                    <img src="/src/assets/cat-3.jpg" className='img-cat' alt="" />
                  </div>
                  <div className=''>
                          <h6>Category name</h6>
                          <small>100 products</small>
                  </div>
              </div>
            </a>
          </div> 
          <div className="col-md-3">
            <a href="" className='categoires-1'>
              <div className='d-flex mb-4 align-items-center'>
                  <div className='overflow-hidden'>
                    <img src="/src/assets/cat-4.jpg" className='img-cat' alt="" />
                  </div>
                  <div className=''>
                          <h6>Category name</h6>
                          <small>100 products</small>
                  </div>
              </div>
            </a>
          </div> 
          <div className="col-md-3">
            <a href="" className='categoires-1'>
              <div className='d-flex mb-4 align-items-center'>
                  <div className='overflow-hidden'>
                    <img src="/src/assets/cat-3.jpg" className='img-cat' alt="" />
                  </div>
                  <div className=''>
                          <h6>Category name</h6>
                          <small>100 products</small>
                  </div>
              </div>
            </a>
          </div> 
          <div className="col-md-3">
            <a href="" className='categoires-1'>
              <div className='d-flex mb-4 align-items-center'>
                  <div className='overflow-hidden'>
                    <img src="/src/assets/cat-4.jpg" className='img-cat' alt="" />
                  </div>
                  <div className=''>
                          <h6>Category name</h6>
                          <small>100 products</small>
                  </div>
              </div>
            </a>
          </div>
          <div className="col-md-3">
            <a href="" className='categoires-1'>
              <div className='d-flex mb-4 align-items-center'>
                  <div className='overflow-hidden'>
                    <img src="/src/assets/cat-1.jpg" className='img-cat' alt="" />
                  </div>
                  <div className=''>
                          <h6>Category name</h6>
                          <small>100 products</small>
                  </div>
              </div>
            </a>
          </div> 
          <div className="col-md-3">
            <a href="" className='categoires-1'>
              <div className='d-flex mb-4 align-items-center'>
                  <div className='overflow-hidden'>
                    <img src="/src/assets/cat-2.jpg" className='img-cat' alt="" />
                  </div>
                  <div className=''>
                          <h6>Category name</h6>
                          <small>100 products</small>
                  </div>
              </div>
            </a>
          </div>
          <div className="col-md-3">
            <a href="" className='categoires-1'>
              <div className='d-flex mb-4 align-items-center'>
                  <div className='overflow-hidden'>
                    <img src="/src/assets/cat-1.jpg" className='img-cat' alt="" />
                  </div>
                  <div className=''>
                          <h6>Category name</h6>
                          <small>100 products</small>
                  </div>
              </div>
            </a>
          </div> 
          <div className="col-md-3">
            <a href="" className='categoires-1'>
              <div className='d-flex mb-4 align-items-center'>
                  <div className='overflow-hidden'>
                    <img src="/src/assets/cat-2.jpg" className='img-cat' alt="" />
                  </div>
                  <div className=''>
                          <h6>Category name</h6>
                          <small>100 products</small>
                  </div>
              </div>
            </a>
          </div> 
          <div className="col-md-3">
            <a href="" className='categoires-1'>
              <div className='d-flex mb-4 align-items-center'>
                  <div className='overflow-hidden'>
                    <img src="/src/assets/cat-3.jpg" className='img-cat' alt="" />
                  </div>
                  <div className=''>
                          <h6>Category name</h6>
                          <small>100 products</small>
                  </div>
              </div>
            </a>
          </div> 
          <div className="col-md-3">
            <a href="" className='categoires-1'>
              <div className='d-flex mb-4 align-items-center'>
                  <div className='overflow-hidden'>
                    <img src="/src/assets/cat-4.jpg" className='img-cat' alt="" />
                  </div>
                  <div className=''>
                          <h6>Category name</h6>
                          <small>100 products</small>
                  </div>
              </div>
            </a>
          </div> 
        </div>
      </div>
      {/* categepries is end  */}
      {/* featuresd product is start */}
      <div className="container-fluid">
      <h1 className='h-center'>
          <hr />
          <span>FEATURED PRODUCT</span>
          <hr />
        </h1>
        <div className="row paading-product">
          <div className="col-md-3 product-des">
          <div className="col">
            <div className="card h-100 card-bc">
                <img src="/src/assets/product-1.jpg" className="card-img-top " alt="Product 1"/>
                <div className="card-body">
                    <h5 className="card-title"><a href="#" className="btn btn-outline-warning">Product Name Goes Here</a></h5>
                    <p className="card-text">$19.99</p>
                    {/* <!-- Star Rating --> */}
                    <div className="rating">
                        <span className="star">&#9733;</span>
                        <span className="star">&#9733;</span>
                        <span className="star">&#9733;</span>
                        <span className="star">&#9733;</span>
                        <span className="star">&#9734;</span>
                    </div>
                    
                </div>
            </div>
        </div>
          </div>
          <div className="col-md-3 product-des">
          <div className="col">
            <div className="card h-100 card-bc">
                <img src="/src/assets/product-2.jpg" className="card-img-top " alt="Product 1"/>
                <div className="card-body">
                    <h5 className="card-title"><a href="#" className="btn btn-outline-warning">Product Name Goes Here</a></h5>
                    <p className="card-text">$19.99</p>
                    {/* <!-- Star Rating --> */}
                    <div className="rating">
                        <span className="star">&#9733;</span>
                        <span className="star">&#9733;</span>
                        <span className="star">&#9733;</span>
                        <span className="star">&#9733;</span>
                        <span className="star">&#9734;</span>
                    </div>
                    
                </div>
            </div>
        </div>
          </div>
          <div className="col-md-3 product-des">
          <div className="col">
            <div className="card h-100 card-bc">
                <img src="/src/assets/product-3.jpg" className="card-img-top " alt="Product 1"/>
                <div className="card-body">
                    <h5 className="card-title"><a href="#" className="btn btn-outline-warning">Product Name Goes Here</a></h5>
                    <p className="card-text">$19.99</p>
                    {/* <!-- Star Rating --> */}
                    <div className="rating">
                        <span className="star">&#9733;</span>
                        <span className="star">&#9733;</span>
                        <span className="star">&#9733;</span>
                        <span className="star">&#9733;</span>
                        <span className="star">&#9734;</span>
                    </div>
                    
                </div>
            </div>
        </div>
          </div>
          <div className="col-md-3 product-des">
          <div className="col">
            <div className="card h-100 card-bc">
                <img src="/src/assets/product-4.jpg" className="card-img-top " alt="Product 1"/>
                <div className="card-body">
                    <h5 className="card-title"><a href="#" className="btn btn-outline-warning">Product Name Goes Here</a></h5>
                    <p className="card-text">$19.99</p>
                    {/* <!-- Star Rating --> */}
                    <div className="rating">
                        <span className="star">&#9733;</span>
                        <span className="star">&#9733;</span>
                        <span className="star">&#9733;</span>
                        <span className="star">&#9733;</span>
                        <span className="star">&#9734;</span>
                    </div>
                    
                </div>
            </div>
        </div>
          </div>
          <div className="col-md-3 product-des">
          <div className="col">
            <div className="card h-100 card-bc">
                <img src="/src/assets/product-5.jpg" className="card-img-top " alt="Product 1"/>
                <div className="card-body">
                    <h5 className="card-title"><a href="#" className="btn btn-outline-warning">Product Name Goes Here</a></h5>
                    <p className="card-text">$19.99</p>
                    {/* <!-- Star Rating --> */}
                    <div className="rating">
                        <span className="star">&#9733;</span>
                        <span className="star">&#9733;</span>
                        <span className="star">&#9733;</span>
                        <span className="star">&#9733;</span>
                        <span className="star">&#9734;</span>
                    </div>
                    
                </div>
            </div>
        </div>
          </div>
          <div className="col-md-3 product-des">
          <div className="col">
            <div className="card h-100 card-bc">
                <img src="/src/assets/product-6.jpg" className="card-img-top " alt="Product 1"/>
                <div className="card-body">
                    <h5 className="card-title"><a href="#" className="btn btn-outline-warning">Product Name Goes Here</a></h5>
                    <p className="card-text">$19.99</p>
                    {/* <!-- Star Rating --> */}
                    <div className="rating">
                        <span className="star">&#9733;</span>
                        <span className="star">&#9733;</span>
                        <span className="star">&#9733;</span>
                        <span className="star">&#9733;</span>
                        <span className="star">&#9734;</span>
                    </div>
                    
                </div>
            </div>
        </div>
          </div>
          <div className="col-md-3 product-des">
          <div className="col">
            <div className="card h-100 card-bc">
                <img src="/src/assets/product-7.jpg" className="card-img-top " alt="Product 1"/>
                <div className="card-body">
                    <h5 className="card-title"><a href="#" className="btn btn-outline-warning">Product Name Goes Here</a></h5>
                    <p className="card-text">$19.99</p>
                    {/* <!-- Star Rating --> */}
                    <div className="rating">
                        <span className="star">&#9733;</span>
                        <span className="star">&#9733;</span>
                        <span className="star">&#9733;</span>
                        <span className="star">&#9733;</span>
                        <span className="star">&#9734;</span>
                    </div>
                    
                </div>
            </div>
        </div>
          </div>
          <div className="col-md-3 product-des">
          <div className="col">
            <div className="card h-100 card-bc">
                <img src="/src/assets/product-8.jpg" className="card-img-top " alt="Product 1"/>
                <div className="card-body">
                    <h5 className="card-title"><a href="#" className="btn btn-outline-warning">Product Name Goes Here</a></h5>
                    <p className="card-text">$19.99</p>
                    {/* <!-- Star Rating --> */}
                    <div className="rating">
                        <span className="star">&#9733;</span>
                        <span className="star">&#9733;</span>
                        <span className="star">&#9733;</span>
                        <span className="star">&#9733;</span>
                        <span className="star">&#9734;</span>
                    </div>
                    
                </div>
            </div>
        </div>
          </div>
        </div>
      </div>
      {/* featured product is end Know */}
      {/* offer is start */}
      <div className="container-fluid">
        <div className="row offers-123">
          <div className="col-md-6">
          <div className='side2'>
            <img src="/src/assets/offer-1.jpg" className='img-side' alt="" />
            <div className='overlay-text'>
              <h3>save 20%</h3>
              <h3>Special Offer</h3>
              <button className='btn btn-outline-warning'> Shop Now </button>
            </div>
            </div>
          </div>
          <div className="col-md-6">
          <div className='side2'>
            <img src="/src/assets/offer-2.jpg" className='img-side' alt="" />
            <div className='overlay-text'>
            <h3>save 20%</h3>
              <h3>Special Offer</h3>
              <button className='btn btn-outline-warning'> Shop Now </button>
            </div>
            </div>
          </div>
        </div>
      </div>
      {/* offer is end */}
      {/* recents produsts start */}
      <div className="container-fluid">
      <h1 className='h-center'>
          <hr />
          <span>RECENT PRODUCT</span>
          <hr />
        </h1>
        <div className="row paading-product">
          <div className="col-md-3 product-des">
          <div className="col">
            <div className="card h-100 card-bc">
                <img src="/src/assets/product-1.jpg" className="card-img-top " alt="Product 1"/>
                <div className="card-body">
                    <h5 className="card-title"><a href="#" className="btn btn-outline-warning">Product Name Goes Here</a></h5>
                    <p className="card-text">$19.99</p>
                    {/* <!-- Star Rating --> */}
                    <div className="rating">
                        <span className="star">&#9733;</span>
                        <span className="star">&#9733;</span>
                        <span className="star">&#9733;</span>
                        <span className="star">&#9733;</span>
                        <span className="star">&#9734;</span>
                    </div>
                    
                </div>
            </div>
        </div>
          </div>
          <div className="col-md-3 product-des">
          <div className="col">
            <div className="card h-100 card-bc">
                <img src="/src/assets/product-2.jpg" className="card-img-top " alt="Product 1"/>
                <div className="card-body">
                    <h5 className="card-title"><a href="#" className="btn btn-outline-warning">Product Name Goes Here</a></h5>
                    <p className="card-text">$19.99</p>
                    {/* <!-- Star Rating --> */}
                    <div className="rating">
                        <span className="star">&#9733;</span>
                        <span className="star">&#9733;</span>
                        <span className="star">&#9733;</span>
                        <span className="star">&#9733;</span>
                        <span className="star">&#9734;</span>
                    </div>
                    
                </div>
            </div>
        </div>
          </div>
          <div className="col-md-3 product-des">
          <div className="col">
            <div className="card h-100 card-bc">
                <img src="/src/assets/product-3.jpg" className="card-img-top " alt="Product 1"/>
                <div className="card-body">
                    <h5 className="card-title"><a href="#" className="btn btn-outline-warning">Product Name Goes Here</a></h5>
                    <p className="card-text">$19.99</p>
                    {/* <!-- Star Rating --> */}
                    <div className="rating">
                        <span className="star">&#9733;</span>
                        <span className="star">&#9733;</span>
                        <span className="star">&#9733;</span>
                        <span className="star">&#9733;</span>
                        <span className="star">&#9734;</span>
                    </div>
                    
                </div>
            </div>
        </div>
          </div>
          <div className="col-md-3 product-des">
          <div className="col">
            <div className="card h-100 card-bc">
                <img src="/src/assets/product-4.jpg" className="card-img-top " alt="Product 1"/>
                <div className="card-body">
                    <h5 className="card-title"><a href="#" className="btn btn-outline-warning">Product Name Goes Here</a></h5>
                    <p className="card-text">$19.99</p>
                    {/* <!-- Star Rating --> */}
                    <div className="rating">
                        <span className="star">&#9733;</span>
                        <span className="star">&#9733;</span>
                        <span className="star">&#9733;</span>
                        <span className="star">&#9733;</span>
                        <span className="star">&#9734;</span>
                    </div>
                    
                </div>
            </div>
        </div>
          </div>
          <div className="col-md-3 product-des">
          <div className="col">
            <div className="card h-100 card-bc">
                <img src="/src/assets/product-5.jpg" className="card-img-top " alt="Product 1"/>
                <div className="card-body">
                    <h5 className="card-title"><a href="#" className="btn btn-outline-warning">Product Name Goes Here</a></h5>
                    <p className="card-text">$19.99</p>
                    {/* <!-- Star Rating --> */}
                    <div className="rating">
                        <span className="star">&#9733;</span>
                        <span className="star">&#9733;</span>
                        <span className="star">&#9733;</span>
                        <span className="star">&#9733;</span>
                        <span className="star">&#9734;</span>
                    </div>
                    
                </div>
            </div>
        </div>
          </div>
          <div className="col-md-3 product-des">
          <div className="col">
            <div className="card h-100 card-bc">
                <img src="/src/assets/product-6.jpg" className="card-img-top " alt="Product 1"/>
                <div className="card-body">
                    <h5 className="card-title"><a href="#" className="btn btn-outline-warning">Product Name Goes Here</a></h5>
                    <p className="card-text">$19.99</p>
                    {/* <!-- Star Rating --> */}
                    <div className="rating">
                        <span className="star">&#9733;</span>
                        <span className="star">&#9733;</span>
                        <span className="star">&#9733;</span>
                        <span className="star">&#9733;</span>
                        <span className="star">&#9734;</span>
                    </div>
                    
                </div>
            </div>
        </div>
          </div>
          <div className="col-md-3 product-des">
          <div className="col">
            <div className="card h-100 card-bc">
                <img src="/src/assets/product-7.jpg" className="card-img-top " alt="Product 1"/>
                <div className="card-body">
                    <h5 className="card-title"><a href="#" className="btn btn-outline-warning">Product Name Goes Here</a></h5>
                    <p className="card-text">$19.99</p>
                    {/* <!-- Star Rating --> */}
                    <div className="rating">
                        <span className="star">&#9733;</span>
                        <span className="star">&#9733;</span>
                        <span className="star">&#9733;</span>
                        <span className="star">&#9733;</span>
                        <span className="star">&#9734;</span>
                    </div>
                    
                </div>
            </div>
        </div>
          </div>
          <div className="col-md-3 product-des">
          <div className="col">
            <div className="card h-100 card-bc">
                <img src="/src/assets/product-8.jpg" className="card-img-top " alt="Product 1"/>
                <div className="card-body">
                    <h5 className="card-title"><a href="#" className="btn btn-outline-warning">Product Name Goes Here</a></h5>
                    <p className="card-text">$19.99</p>
                    {/* <!-- Star Rating --> */}
                    <div className="rating">
                        <span className="star">&#9733;</span>
                        <span className="star">&#9733;</span>
                        <span className="star">&#9733;</span>
                        <span className="star">&#9733;</span>
                        <span className="star">&#9734;</span>
                    </div>
                    
                </div>
            </div>
        </div>
          </div>
        </div>
      </div>
      {/* recent product is end */}
      {/* vendor is start */}
      <div className="container-fluid">
        <div className="row vender">
          <div className="col-md-2">
            <img src="/src/assets/vendor-3.jpg" alt="" />
          </div>
          <div className="col-md-2">
            <img src="/src/assets/vendor-4.jpg" alt="" />
          </div>
          <div className="col-md-2">
            <img src="/src/assets/vendor-5.jpg" alt="" />
          </div>
          <div className="col-md-2">
            <img src="/src/assets/vendor-7.jpg" alt="" />
          </div>
          <div className="col-md-2">
            <img src="/src/assets/vendor-6.jpg" alt="" />
          </div>
          <div className="col-md-2">
            <img src="/src/assets/vendor-8.jpg" alt="" />
          </div>
          
        </div>
      </div>
      {/* vendor is end  */}

    </>
  )
}
