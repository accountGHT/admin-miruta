import React from 'react'
import {Link} from 'react-router-dom'
import {Card, OverlayTrigger, Tooltip,Row,Col} from 'react-bootstrap'
const index = (props) => {
    return(
        <>
         <Row>
                  <Col md="12">
                     <Card className="iq-card">
                        <Card.Body className="iq-card-body">
                           <div id="js-product-list">
                              <div className="Products">
                                 <ul className="product_list gridcount grid row">
                                    <li className="product_item col-xs-12 col-sm-6 col-md-6 col-lg-4">
                                       <div className="product-miniature">
                                          <div className="thumbnail-container">
                                             <Link to="/" onClick={ e => e.preventDefault()}><img src="https://dummyimage.com/384x250/000/fff" alt="product" className="img-fluid" /> </Link>                                             
                                          </div>
                                          <div className="product-description">
                                             <h4>Lorem ipsum dolor sit</h4>
                                             <p className="mb-0">Proin sed risus mattis</p>
                                             <div className="ratting">
                                                <ul className="ratting-item d-flex p-0 m-0">
                                                   <li className="full"><i className="ri-star-fill"></i></li>
                                                   <li className="full"><i className="ri-star-fill"></i></li>
                                                   <li className="full"><i className="ri-star-fill"></i></li>
                                                   <li className="half"><i className="ri-star-half-line"></i></li>
                                                   <li className="blank"><i className="ri-star-line"></i></li>
                                                </ul>
                                             </div>
                                             <div className="d-flex flex-wrap justify-content-between align-items-center">
                                                    <div className="product-action">
                                                        <div className="add-to-cart">
                                                      <OverlayTrigger
                                                            key='top'
                                                            placement='top'
                                                            overlay={
                                                            <Tooltip id="tooltip-cart">
                                                               Add to Cart
                                                            </Tooltip>
                                                            }
                                                         >
                                                            <Link to="/" onClick={ e => e.preventDefault()}><i className="ri-shopping-cart-2-line"></i></Link>
                                                         </OverlayTrigger>
                                                   </div>
                                                        <div className="wishlist">
                                                      <OverlayTrigger
                                                         key='top'
                                                         placement='top'
                                                         overlay={
                                                         <Tooltip id="tooltip-top">
                                                            Wishlist
                                                         </Tooltip>
                                                         }
                                                      >
                                                         <Link to="/" onClick={ e => e.preventDefault()}> <i className="ri-heart-line"></i> </Link>
                                                      </OverlayTrigger>
                                                   </div>
                                                    </div>
                                                    <div className="product-price">
                                                    <div className="regular-price"><b> $100.00</b> <span className="offer-price ml-2">$150.00</span></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="product_item col-xs-12 col-sm-6 col-md-6 col-lg-4">
                                       <div className="product-miniature">
                                          <div className="thumbnail-container">
                                             <Link to="/" onClick={ e => e.preventDefault()}><img src="https://dummyimage.com/384x250/000/fff" alt="product" className="img-fluid" /> </Link>  
                                             <Link to="/" onClick={e => e.preventDefault()} className="new">New</Link>
                                          </div>
                                          <div className="product-description">
                                             <h4>consectetur adipiscing elit</h4>
                                             <p className="mb-0">Proin sed risus mattis</p>
                                             <div className="ratting">
                                                <ul className="ratting-item d-flex p-0 m-0">
                                                   <li className="full"><i className="ri-star-fill"></i></li>
                                                   <li className="full"><i className="ri-star-fill"></i></li>
                                                   <li className="full"><i className="ri-star-fill"></i></li>
                                                   <li className="full"><i className="ri-star-fill"></i></li>
                                                   <li className="blank"><i className="ri-star-line"></i></li>
                                                </ul>
                                             </div>
                                             <div className="d-flex flex-wrap justify-content-between align-items-center">
                                                <div className="product-action">
                                                   <div className="add-to-cart">
                                                      <OverlayTrigger
                                                            key='top'
                                                            placement='top'
                                                            overlay={
                                                            <Tooltip id="tooltip-cart">
                                                               Add to Cart
                                                            </Tooltip>
                                                            }
                                                         >
                                                            <Link to="/" onClick={ e => e.preventDefault()}><i className="ri-shopping-cart-2-line"></i></Link>
                                                         </OverlayTrigger>
                                                   </div>
                                                   <div className="wishlist">
                                                      <OverlayTrigger
                                                         key='top'
                                                         placement='top'
                                                         overlay={
                                                         <Tooltip id="tooltip-top">
                                                            Wishlist
                                                         </Tooltip>
                                                         }
                                                      >
                                                         <Link to="/" onClick={ e => e.preventDefault()}> <i className="ri-heart-line"></i> </Link>
                                                      </OverlayTrigger>
                                                   </div>
                                                </div>
                                                <div className="product-price">
                                                   <div className="regular-price"><b> $99.00</b> <span className="offer-price ml-2">$50.00</span></div>
                                                </div>
                                          </div>
                                       </div>
                                       </div>
                                    </li>
                                    <li className="product_item col-xs-12 col-sm-6 col-md-6 col-lg-4">
                                       <div className="product-miniature">
                                          <div className="thumbnail-container">
                                             <Link to="/" onClick={ e => e.preventDefault()}><img src="https://dummyimage.com/384x250/000/fff" alt="product" className="img-fluid" /> </Link>                                             
                                          </div>
                                          <div className="product-description">
                                             <h4>Sed dictum orci vel</h4>
                                             <p className="mb-0">Proin sed risus mattis</p>
                                             <div className="ratting">
                                                <ul className="ratting-item d-flex p-0 m-0">
                                                   <li className="full"><i className="ri-star-fill"></i></li>
                                                   <li className="full"><i className="ri-star-fill"></i></li>
                                                   <li className="full"><i className="ri-star-fill"></i></li>
                                                   <li className="full"><i className="ri-star-fill"></i></li>
                                                   <li className="half"><i className="ri-star-half-line"></i></li>
                                                </ul>
                                             </div>
                                             <div className="d-flex flex-wrap justify-content-between align-items-center">
                                                <div className="product-action">
                                                   <div className="add-to-cart">
                                                      <OverlayTrigger
                                                            key='top'
                                                            placement='top'
                                                            overlay={
                                                            <Tooltip id="tooltip-cart">
                                                               Add to Cart
                                                            </Tooltip>
                                                            }
                                                         >
                                                            <Link to="/" onClick={ e => e.preventDefault()}><i className="ri-shopping-cart-2-line"></i></Link>
                                                         </OverlayTrigger>
                                                   </div>
                                                   <div className="wishlist">
                                                      <OverlayTrigger
                                                         key='top'
                                                         placement='top'
                                                         overlay={
                                                         <Tooltip id="tooltip-top">
                                                            Wishlist
                                                         </Tooltip>
                                                         }
                                                      >
                                                         <Link to="/" onClick={ e => e.preventDefault()}> <i className="ri-heart-line"></i> </Link>
                                                      </OverlayTrigger>
                                                   </div>
                                                </div>
                                                <div className="product-price">
                                                   <div className="regular-price"><b> $199.00</b> <span className="offer-price ml-2">$15.00</span></div>
                                                </div>
                                          </div>
                                       </div>
                                       </div>
                                    </li><li className="product_item col-xs-12 col-sm-6 col-md-6 col-lg-4">
                                       <div className="product-miniature">
                                          <div className="thumbnail-container">
                                             <Link to="/" onClick={ e => e.preventDefault()}><img src="https://dummyimage.com/384x250/000/fff" alt="product" className="img-fluid" /> </Link> 
                                          </div>
                                          <div className="product-description">
                                             <h4>neque venenatis</h4>
                                             <p className="mb-0">Proin sed risus mattis</p>
                                             <div className="ratting">
                                                <ul className="ratting-item d-flex p-0 m-0">
                                                   <li className="full"><i className="ri-star-fill"></i></li>
                                                   <li className="full"><i className="ri-star-fill"></i></li>
                                                   <li className="full"><i className="ri-star-fill"></i></li>
                                                   <li className="half"><i className="ri-star-half-line"></i></li>
                                                   <li className="blank"><i className="ri-star-line"></i></li>
                                                </ul>
                                             </div>
                                             <div className="d-flex flex-wrap justify-content-between align-items-center">
                                                <div className="product-action">
                                                   <div className="add-to-cart">
                                                      <OverlayTrigger
                                                            key='top'
                                                            placement='top'
                                                            overlay={
                                                            <Tooltip id="tooltip-cart">
                                                               Add to Cart
                                                            </Tooltip>
                                                            }
                                                         >
                                                            <Link to="/" onClick={ e => e.preventDefault()}><i className="ri-shopping-cart-2-line"></i></Link>
                                                         </OverlayTrigger>
                                                   </div>
                                                   <div className="wishlist">
                                                      <OverlayTrigger
                                                         key='top'
                                                         placement='top'
                                                         overlay={
                                                         <Tooltip id="tooltip-top">
                                                            Wishlist
                                                         </Tooltip>
                                                         }
                                                      >
                                                         <Link to="/" onClick={ e => e.preventDefault()}> <i className="ri-heart-line"></i> </Link>
                                                      </OverlayTrigger>
                                                   </div>
                                                </div>
                                                <div className="product-price">
                                                   <div className="regular-price"><b> $1000.00</b> <span className="offer-price ml-2">$500.00</span></div>
                                                </div>
                                          </div>
                                       </div>
                                       </div>
                                    </li><li className="product_item col-xs-12 col-sm-6 col-md-6 col-lg-4">
                                       <div className="product-miniature">
                                          <div className="thumbnail-container">
                                             <Link to="/" onClick={ e => e.preventDefault()}><img src="https://dummyimage.com/384x250/000/fff" alt="product" className="img-fluid" /> </Link>  
                                             <Link to="/" onClick={e => e.preventDefault()} className="new">New</Link>
                                          </div>
                                          <div className="product-description">
                                             <h4>Proin at diam sit amet</h4>
                                             <p className="mb-0">Proin sed risus mattis</p>
                                             <div className="ratting">
                                                <ul className="ratting-item d-flex p-0 m-0">
                                                   <li className="full"><i className="ri-star-fill"></i></li>
                                                   <li className="full"><i className="ri-star-fill"></i></li>
                                                   <li className="full"><i className="ri-star-fill"></i></li>
                                                   <li className="blank"><i className="ri-star-line"></i></li>
                                                   <li className="blank"><i className="ri-star-line"></i></li>
                                                </ul>
                                             </div>
                                             <div className="d-flex flex-wrap justify-content-between align-items-center">
                                                <div className="product-action">
                                                   <div className="add-to-cart">
                                                      <OverlayTrigger
                                                            key='top'
                                                            placement='top'
                                                            overlay={
                                                            <Tooltip id="tooltip-cart">
                                                               Add to Cart
                                                            </Tooltip>
                                                            }
                                                         >
                                                            <Link to="/" onClick={ e => e.preventDefault()}><i className="ri-shopping-cart-2-line"></i></Link>
                                                         </OverlayTrigger>
                                                   </div>
                                                   <div className="wishlist">
                                                      <OverlayTrigger
                                                         key='top'
                                                         placement='top'
                                                         overlay={
                                                         <Tooltip id="tooltip-top">
                                                            Wishlist
                                                         </Tooltip>
                                                         }
                                                      >
                                                         <Link to="/" onClick={ e => e.preventDefault()}> <i className="ri-heart-line"></i> </Link>
                                                      </OverlayTrigger>
                                                   </div>
                                                </div>
                                                <div className="product-price">
                                                   <div className="regular-price"><b> $150.00</b> <span className="offer-price ml-2">$50.00</span></div>
                                                </div>
                                          </div>
                                       </div>
                                       </div>
                                    </li><li className="product_item col-xs-12 col-sm-6 col-md-6 col-lg-4">
                                       <div className="product-miniature">
                                          <div className="thumbnail-container">
                                             <Link to="/" onClick={ e => e.preventDefault()}><img src="https://dummyimage.com/384x250/000/fff" alt="product" className="img-fluid" /> </Link>                                             
                                          </div>
                                          <div className="product-description">
                                             <h4>augue rhoncus ornare</h4>
                                             <p className="mb-0">Proin sed risus mattis</p>
                                             <div className="ratting">
                                                <ul className="ratting-item d-flex p-0 m-0">
                                                   <li className="full"><i className="ri-star-fill"></i></li>
                                                   <li className="full"><i className="ri-star-fill"></i></li>
                                                   <li className="full"><i className="ri-star-fill"></i></li>
                                                   <li className="half"><i className="ri-star-half-line"></i></li>
                                                   <li className="blank"><i className="ri-star-line"></i></li>
                                                </ul>
                                             </div>
                                             <div className="d-flex flex-wrap justify-content-between align-items-center">
                                                <div className="product-action">
                                                   <div className="add-to-cart">
                                                      <OverlayTrigger
                                                            key='top'
                                                            placement='top'
                                                            overlay={
                                                            <Tooltip id="tooltip-cart">
                                                               Add to Cart
                                                            </Tooltip>
                                                            }
                                                         >
                                                            <Link to="/" onClick={ e => e.preventDefault()}><i className="ri-shopping-cart-2-line"></i></Link>
                                                         </OverlayTrigger>
                                                   </div>
                                                   <div className="wishlist">
                                                      <OverlayTrigger
                                                         key='top'
                                                         placement='top'
                                                         overlay={
                                                         <Tooltip id="tooltip-top">
                                                            Wishlist
                                                         </Tooltip>
                                                         }
                                                      >
                                                         <Link to="/" onClick={ e => e.preventDefault()}> <i className="ri-heart-line"></i> </Link>
                                                      </OverlayTrigger>
                                                   </div>
                                                </div>
                                                <div className="product-price">
                                                   <div className="regular-price"><b> $599.00</b> <span className="offer-price ml-2">$99.00</span></div>
                                                </div>
                                          </div>
                                       </div>
                                       </div>
                                    </li><li className="product_item col-xs-12 col-sm-6 col-md-6 col-lg-4">
                                       <div className="product-miniature">
                                          <div className="thumbnail-container">
                                             <Link to="/" onClick={ e => e.preventDefault()}><img src="https://dummyimage.com/384x250/000/fff" alt="product" className="img-fluid" /> </Link>                                             
                                          </div>
                                          <div className="product-description">
                                             <h4>Nulla venenatis mi sed</h4>
                                             <p className="mb-0">Proin sed risus mattis</p>
                                             <div className="ratting">
                                                <ul className="ratting-item d-flex p-0 m-0">
                                                   <li className="full"><i className="ri-star-fill"></i></li>
                                                   <li className="full"><i className="ri-star-fill"></i></li>
                                                   <li className="full"><i className="ri-star-fill"></i></li>
                                                   <li className="full"><i className="ri-star-fill"></i></li>
                                                   <li className="full"><i className="ri-star-fill"></i></li>
                                                </ul>
                                             </div>
                                             <div className="d-flex flex-wrap justify-content-between align-items-center">
                                                <div className="product-action">
                                                   <div className="add-to-cart">
                                                      <OverlayTrigger
                                                            key='top'
                                                            placement='top'
                                                            overlay={
                                                            <Tooltip id="tooltip-cart">
                                                               Add to Cart
                                                            </Tooltip>
                                                            }
                                                         >
                                                            <Link to="/" onClick={ e => e.preventDefault()}><i className="ri-shopping-cart-2-line"></i></Link>
                                                         </OverlayTrigger>
                                                   </div>
                                                   <div className="wishlist">
                                                      <OverlayTrigger
                                                         key='top'
                                                         placement='top'
                                                         overlay={
                                                         <Tooltip id="tooltip-top">
                                                            Wishlist
                                                         </Tooltip>
                                                         }
                                                      >
                                                         <Link to="/" onClick={ e => e.preventDefault()}> <i className="ri-heart-line"></i> </Link>
                                                      </OverlayTrigger>
                                                   </div>
                                                </div>
                                                <div className="product-price">
                                                   <div className="regular-price"><b> $199.00</b> <span className="offer-price ml-2">$50.00</span></div>
                                                </div>
                                          </div>
                                       </div>
                                       </div>
                                    </li><li className="product_item col-xs-12 col-sm-6 col-md-6 col-lg-4">
                                       <div className="product-miniature">
                                          <div className="thumbnail-container">
                                             <Link to="/" onClick={ e => e.preventDefault()}><img src="https://dummyimage.com/384x250/000/fff" alt="product" className="img-fluid" /> </Link>                                             
                                          </div>
                                          <div className="product-description">
                                             <h4>Etiam interdum nisi et</h4>
                                             <p className="mb-0">Proin sed risus mattis</p>
                                             <div className="ratting">
                                                <ul className="ratting-item d-flex p-0 m-0">
                                                   <li className="full"><i className="ri-star-fill"></i></li>
                                                   <li className="full"><i className="ri-star-fill"></i></li>
                                                   <li className="full"><i className="ri-star-fill"></i></li>
                                                   <li className="full"><i className="ri-star-fill"></i></li>
                                                   <li className="half"><i className="ri-star-half-line"></i></li>
                                                </ul>
                                             </div>
                                             <div className="d-flex flex-wrap justify-content-between align-items-center">
                                                <div className="product-action">
                                                   <div className="add-to-cart">
                                                      <OverlayTrigger
                                                            key='top'
                                                            placement='top'
                                                            overlay={
                                                            <Tooltip id="tooltip-cart">
                                                               Add to Cart
                                                            </Tooltip>
                                                            }
                                                         >
                                                            <Link to="/" onClick={ e => e.preventDefault()}><i className="ri-shopping-cart-2-line"></i></Link>
                                                         </OverlayTrigger>
                                                   </div>
                                                   <div className="wishlist">
                                                      <OverlayTrigger
                                                         key='top'
                                                         placement='top'
                                                         overlay={
                                                         <Tooltip id="tooltip-top">
                                                            Wishlist
                                                         </Tooltip>
                                                         }
                                                      >
                                                         <Link to="/" onClick={ e => e.preventDefault()}> <i className="ri-heart-line"></i> </Link>
                                                      </OverlayTrigger>
                                                   </div>
                                                </div>
                                                <div className="product-price">
                                                   <div className="regular-price"><b> $100.00</b> <span className="offer-price ml-2">$150.00</span></div>
                                                </div>
                                          </div>
                                       </div>
                                       </div>
                                    </li><li className="product_item col-xs-12 col-sm-6 col-md-6 col-lg-4">
                                       <div className="product-miniature">
                                          <div className="thumbnail-container">
                                             <Link to="/" onClick={ e => e.preventDefault()}><img src="https://dummyimage.com/384x250/000/fff" alt="product" className="img-fluid" /> </Link>                                             
                                          </div>
                                          <div className="product-description">
                                             <h4>dignissim orci quis</h4>
                                             <p className="mb-0">Proin sed risus mattis</p>
                                             <div className="ratting">
                                                <ul className="ratting-item d-flex p-0 m-0">
                                                   <li className="full"><i className="ri-star-fill"></i></li>
                                                   <li className="full"><i className="ri-star-fill"></i></li>
                                                   <li className="full"><i className="ri-star-fill"></i></li>
                                                   <li className="half"><i className="ri-star-half-line"></i></li>
                                                   <li className="blank"><i className="ri-star-line"></i></li>
                                                </ul>
                                             </div>
                                             <div className="d-flex flex-wrap justify-content-between align-items-center">
                                                <div className="product-action">
                                                   <div className="add-to-cart">
                                                      <OverlayTrigger
                                                            key='top'
                                                            placement='top'
                                                            overlay={
                                                            <Tooltip id="tooltip-cart">
                                                               Add to Cart
                                                            </Tooltip>
                                                            }
                                                         >
                                                            <Link to="/" onClick={ e => e.preventDefault()}><i className="ri-shopping-cart-2-line"></i></Link>
                                                         </OverlayTrigger>
                                                   </div>
                                                   <div className="wishlist">
                                                      <OverlayTrigger
                                                         key='top'
                                                         placement='top'
                                                         overlay={
                                                         <Tooltip id="tooltip-top">
                                                            Wishlist
                                                         </Tooltip>
                                                         }
                                                      >
                                                         <Link to="/" onClick={ e => e.preventDefault()}> <i className="ri-heart-line"></i> </Link>
                                                      </OverlayTrigger>
                                                   </div>
                                                </div>
                                                <div className="product-price">
                                                   <div className="regular-price"><b> $100.00</b> <span className="offer-price ml-2">$150.00</span></div>
                                                </div>
                                          </div>
                                       </div>
                                       </div>
                                    </li>
                                 </ul>
                              </div>
                           </div>
                        </Card.Body>
                     </Card>
                  </Col>
               </Row>
        </>
    )
}
export default index