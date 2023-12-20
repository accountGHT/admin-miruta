import React from 'react'
import {Link} from 'react-router-dom'
import {Tab,Nav,Row,Col,OverlayTrigger,Tooltip} from 'react-bootstrap'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation} from 'swiper';

// Import Swiper styles
import 'swiper/swiper.scss';
import './swiper.css';
import 'swiper/components/navigation/navigation.scss';

// install Swiper modules
SwiperCore.use([Navigation]);


const index = (props) => {
    return(
        <>
            <Row>
                  <Col lg="12">
                    <div className="iq-card">
                        <div className="iq-card-body">
                           <Row>
                              <Col md="6" className="iq-item-product-left">
                                 <div className="iq-container">
                                    <div className="iq-product-cover">
                                       <img src="https://dummyimage.com/600x385/000/fff" alt="product" className="img-fluid w-100" />
                                    </div>
                                    <div className="iq-additional_slider">
                                       <Swiper
                                       navigation
                                       slidesPerView={3}
                                       spaceBetween={5}
                                       breakpoints={{
                                          "640": {
                                            "slidesPerView": 3,
                                            "spaceBetween": 20
                                          },
                                          "768": {
                                            "slidesPerView": 3,
                                            "spaceBetween":10
                                          },
                                       }}
                                       >
                                          <SwiperSlide><img src="https://dummyimage.com/600x385/000/fff" alt="product" className="img-fluid w-100" /></SwiperSlide>
                                          <SwiperSlide><img src="https://dummyimage.com/600x385/000/fff" alt="product" className="img-fluid w-100" /></SwiperSlide>
                                          <SwiperSlide><img src="https://dummyimage.com/600x385/000/fff" alt="product" className="img-fluid w-100" /></SwiperSlide>
                                          <SwiperSlide><img src="https://dummyimage.com/600x385/000/fff" alt="product" className="img-fluid w-100" /></SwiperSlide>
                                          <SwiperSlide><img src="https://dummyimage.com/600x385/000/fff" alt="product" className="img-fluid w-100" /></SwiperSlide>
                                          <SwiperSlide><img src="https://dummyimage.com/600x385/000/fff" alt="product" className="img-fluid w-100" /></SwiperSlide>
                                          <SwiperSlide><img src="https://dummyimage.com/600x385/000/fff" alt="product" className="img-fluid w-100" /></SwiperSlide>
                                       </Swiper>
                                    </div>
                                 </div>
                              </Col>
                              <Col md="6" className="iq-item-product-right">
                                 <div className="product-additional-details">
                                    <h3 className="productpage_title">Curabitur Dolor Nunc consectetur adipiscing</h3>
                                    <p>consectetur adipiscing</p>
                                    <div className="ratting">
                                       <ul className="ratting-item d-flex p-0 m-0">
                                          <li className="full"><i className="ri-star-fill"></i></li>
                                          <li className="full"><i className="ri-star-fill"></i></li>
                                          <li className="full"><i className="ri-star-fill"></i></li>
                                          <li className="half"><i className="ri-star-half-line"></i></li>
                                          <li className="blank"><i className="ri-star-line"></i></li>
                                       </ul>
                                    </div>
                                     <div className="product-descriptio">
                                       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at ante. Mauris eleifend, quam a vulputate dictum, massa quam dapibus leo, eget vulputate orci purus ut lorem. In fringilla mi in ligula.</p>
                                    </div>
                                    <div className="product-price">
                                       <div className="regular-price"><b> $100.00</b> <span className="offer-price ml-2">$150.00</span></div>
                                    </div>
                                    <div className="shipping">
                                       <p className="mb-0">Shipping Free: <span>$50</span></p>
                                    </div>
                                    <div className="stock">
                                       <p>Stock: <span>Available</span></p>
                                    </div>
                                    <div className="additional-product-action d-flex align-items-center">
                                       <div className="inline-flex btn-increment">
                                          <button type="button" className="btn-less"><i className="ri-subtract-fill"></i></button>
                                          <input type="number" min="1" max="10" defaultValue="1" className="increment" />
                                          <button type="button" className="btn-plus"><i className="ri-add-fill"></i></button>
                                       </div>
                                       <div className="product-action ml-2">
                                          <div className="add-to-cart"><Link to="/"  onClick={e => e.preventDefault()} > Add to Cart </Link></div>
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
                                    </div>
                                 </div>
                              </Col>
                              <Col sm="12" className="product-description-details">
                                 <div className="description-tabs">
                                    <Tab.Container defaultActiveKey="specifications">
                                       <Nav variant="tabs" className="justify-content-center">
                                          <Nav.Item>
                                             <Nav.Link eventKey="description">Description</Nav.Link>
                                          </Nav.Item>
                                          <Nav.Item>
                                             <Nav.Link eventKey="specifications">Specifications</Nav.Link>
                                          </Nav.Item>
                                          <Nav.Item>
                                             <Nav.Link eventKey="review">Review</Nav.Link>
                                          </Nav.Item>
                                       </Nav>
                                       <Tab.Content>
                                          <Tab.Pane eventKey="description">
                                             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pharetra nibh et urna tempus, id feugiat sapien iaculis. Morbi aliquam et nisl ut varius. Vivamus fringilla, nisl ac lacinia fermentum, nisl felis facilisis lectus, id condimentum turpis quam ac ipsum. Vivamus purus nisi, condimentum eget felis vel, finibus interdum odio. Pellentesque lacinia aliquam ipsum. Donec euismod ex in sodales faucibus. Proin eget lacus vitae eros vestibulum vehicula. Mauris tortor massa, fringilla ut metus quis, malesuada semper diam. Phasellus et iaculis ex, vitae maximus odio.</p>
                                          </Tab.Pane>
                                          <Tab.Pane eventKey="specifications">
                                             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pharetra nibh et urna tempus, id feugiat sapien iaculis. Morbi aliquam et nisl ut varius. Vivamus fringilla, nisl ac lacinia fermentum, nisl felis facilisis lectus, id condimentum turpis quam ac ipsum. Vivamus purus nisi, condimentum eget felis vel, finibus interdum odio. Pellentesque lacinia aliquam ipsum. Donec euismod ex in sodales faucibus. Proin eget lacus vitae eros vestibulum vehicula. Mauris tortor massa, fringilla ut metus quis, malesuada semper diam. Phasellus et iaculis ex, vitae maximus odio.</p>
                                          </Tab.Pane>
                                          <Tab.Pane eventKey="review">
                                             <p>In in mauris a sem ullamcorper maximus. In facilisis sapien vel consequat laoreet. Ut convallis elit vitae augue interdum dapibus. Vivamus nec urna quis ex congue consectetur. Sed egestas dapibus neque eu finibus. Fusce mollis congue augue, commodo ornare ante hendrerit vitae. Nunc luctus ac nunc quis facilisis. Nullam vitae gravida elit. Pellentesque maximus auctor gravida. Nulla imperdiet odio neque, non porta lacus feugiat sed. Curabitur eu lectus ut lectus convallis mattis sit amet sit amet lectus. Curabitur elit lorem, commodo a neque ac, feugiat tempor felis.</p>
                                          </Tab.Pane>
                                       </Tab.Content>
                                    </Tab.Container>
                                 </div>
                              </Col>
                              <Col  sm="12" className="mt-5 related-product">
                                 <div className="related-heading text-center mb-5">
                                    <h2>Related Products</h2>
                                 </div>
                                 <div className="related-product-block">
                                 <Swiper
                                       navigation
                                       spaceBetween={50}
                                       slidesPerView={1}
                                       breakpoints={{
                                          "640": {
                                            "slidesPerView": 2,
                                            "spaceBetween": 20
                                          },
                                          "768": {
                                            "slidesPerView": 3,
                                            "spaceBetween": 40
                                          }
                                        }}
                                       className="product_list"
                                       >
                                          <SwiperSlide>
                                             <div className="product-miniature w-100">
                                                <div className="thumbnail-container">
                                                   <Link to="/"  onClick={e => e.preventDefault()}><img src="https://dummyimage.com/384x250/000/fff" alt="product" className="img-fluid w-100" /> </Link>                                             
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
                                          </SwiperSlide>
                                          <SwiperSlide>
                                          <div className="product-miniature w-100">
                                             <div className="thumbnail-container">
                                                <Link to="/"  onClick={e => e.preventDefault()}><img src="https://dummyimage.com/384x250/000/fff" alt="product" className="img-fluid w-100" /> </Link>  
                                                <Link to="/"  onClick={e => e.preventDefault()} className="new">New</Link>
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
                                          </SwiperSlide>
                                          <SwiperSlide>
                                          <div className="product-miniature w-100">
                                             <div className="thumbnail-container">
                                                <Link to="/"  onClick={e => e.preventDefault()}><img src="https://dummyimage.com/384x250/000/fff" alt="product" className="img-fluid w-100" /> </Link>                                             
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
                                          </SwiperSlide>
                                          <SwiperSlide>
                                          <div className="product-miniature w-100">
                                             <div className="thumbnail-container">
                                                <Link to="/"  onClick={e => e.preventDefault()}><img src="https://dummyimage.com/384x250/000/fff" alt="product" className="img-fluid w-100" /> </Link> 
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
                                          </SwiperSlide>
                                          <SwiperSlide>
                                          <div className="product-miniature w-100">
                                             <div className="thumbnail-container">
                                                <Link to="/"  onClick={e => e.preventDefault()}><img src="https://dummyimage.com/384x250/000/fff" alt="product" className="img-fluid w-100" /> </Link>  
                                                <Link to="/"  onClick={e => e.preventDefault()} className="new">New</Link>
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
                                          </SwiperSlide>
                                          <SwiperSlide>
                                          <div className="product-miniature w-100">
                                             <div className="thumbnail-container">
                                                <Link to="/"  onClick={e => e.preventDefault()}><img src="https://dummyimage.com/384x250/000/fff" alt="product" className="img-fluid w-100" /> </Link>                                             
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
                                          </SwiperSlide>
                                          <SwiperSlide>
                                          <div className="product-miniature w-100">
                                             <div className="thumbnail-container">
                                                <Link to="/"  onClick={e => e.preventDefault()}><img src="https://dummyimage.com/384x250/000/fff" alt="product" className="img-fluid w-100" /> </Link>                                             
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
                                          </SwiperSlide>
                                          <SwiperSlide>
                                          <div className="product-miniature w-100">
                                             <div className="thumbnail-container">
                                                <Link to="/"  onClick={e => e.preventDefault()}><img src="https://dummyimage.com/384x250/000/fff" alt="product" className="img-fluid w-100" /> </Link>                                             
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
                                       </SwiperSlide>
                                          <SwiperSlide>
                                          <div className="product-miniature w-100">
                                             <div className="thumbnail-container">
                                                <Link to="/"  onClick={e => e.preventDefault()}><img src="https://dummyimage.com/384x250/000/fff" alt="product" className="img-fluid w-100" /> </Link>                                             
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
                                          </SwiperSlide>
                                       </Swiper>
                                 </div>
                              </Col>
                           </Row>
                        </div>
                     </div>
                  </Col>
               </Row>
        </>
    )
}
export default index