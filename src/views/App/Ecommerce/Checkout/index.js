import React from 'react'
import {Link} from 'react-router-dom'
import {Button ,Row,Col} from 'react-bootstrap'
//img
import cart from '../../../../assets/images/booking/cart.png'

const index = (props) => {

   const address=() =>{
    document.getElementById('address').classList.add('show')
    document.getElementById('step2').classList.add('active')
    document.getElementById('cart').classList.remove('show')
   }
   const payment =() =>{
    document.getElementById('payment').classList.add('show');
    document.getElementById('address').classList.remove('show');
    document.getElementById('step3').classList.add('active');
   }
    return(
        <Row>
                  <Col sm="12">
                     <ul id="progressbar" className="text-center">
                         <li className="active step0" id="step1">Cart</li>
                         <li className="step0" id="step2">Address</li>
                         <li className="step0" id="step3">Payment</li>
                     </ul>
                     <div id="cart" className="card-block show b-0">
                         <Row>
                           <Col lg="8">
                              <div className="iq-card">
                                 <div className="iq-card-body">
                                    <div className="ckeckout-product-lists">
                                       <div className="d-flex align-items-center justify-content-between">
                                          <div className="d-flex align-items-center">
                                          <div className="ckeckout-product">
                                             <img src="https://dummyimage.com/180x180/000/fff" alt="" />
                                          </div>
                                          <div className=" ml-3 checkout-product-details">
                                             <h5>Curabitur Dolor Nunc consectetur adipiscing</h5>
                                             <p className="text-success">In stock</p>
                                             <p className="mb-0"><b>Quantity</b></p>
                                             <div className="input-box">
                                                <input type="number" min="1" max="10" defaultValue="1" className="increment" />
                                             </div>
                                             <p className="mb-0 mt-2">Delivery by, Thu Jan 30 </p>
                                             <p className="text-success">9% off 3 offers Available</p>
                                          </div>
                                       </div>
                                          <div className="checkout-amount-data text-center">
                                             <div className="price">
                                                <h5>$599.00</h5>
                                                <p className="shopping-info"><i className="ri-shopping-cart-2-line mr-2"></i>Free Shipping</p>
                                             </div>
                                             <div className="checkout-button">
                                                <Link to="/" onClick={e => e.preventDefault()}  type="submit" className="btn btn-light d-block"><i className="ri-close-line mr-1"></i>Remove</Link>
                                                <Link to="/" onClick={e => e.preventDefault()} type="submit" className="btn btn-primary d-block mt-2"><i className="ri-heart-line mr-1"></i>Wishlist</Link>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div className="iq-card">
                                 <div className="iq-card-body">
                                    <div className="ckeckout-product-lists">
                                       <div className="d-flex align-items-center justify-content-between">
                                          <div className="d-flex align-items-center">
                                          <div className="ckeckout-product">
                                             <img src="https://dummyimage.com/180x180/000/fff" alt="" />
                                          </div>
                                          <div className=" ml-3 checkout-product-details">
                                             <h5>Curabitur Dolor Nunc consectetur adipiscing</h5>
                                             <p className="text-success">In stock</p>
                                             <p className="mb-0"><b>Quantity</b></p>
                                             <div className="input-box">
                                                <input type="number" min="1" max="10" defaultValue="1" className="increment" />
                                             </div>
                                             <p className="mb-0 mt-2">Delivery by, Thu Jan 30 </p>
                                             <p className="text-success">9% off 3 offers Available</p>
                                          </div>
                                       </div>
                                          <div className="checkout-amount-data text-center">
                                             <div className="price">
                                                <h5>$599.00</h5>
                                                <p className="shopping-info"><i className="ri-shopping-cart-2-line mr-2"></i>Free Shipping</p>
                                             </div>
                                             <div className="checkout-button">
                                                <Link to="/" onClick={e => e.preventDefault()} type="submit" className="btn btn-light d-block"><i className="ri-close-line mr-1"></i>Remove</Link>
                                                <Link to="/" onClick={e => e.preventDefault()} type="submit" className="btn btn-primary d-block mt-2"><i className="ri-heart-line mr-1"></i>Wishlist</Link>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div className="iq-card">
                                 <div className="iq-card-body">
                                    <div className="ckeckout-product-lists">
                                       <div className="d-flex align-items-center justify-content-between">
                                          <div className="d-flex align-items-center">
                                          <div className="ckeckout-product">
                                             <img src="https://dummyimage.com/180x180/000/fff" alt="" />
                                          </div>
                                          <div className=" ml-3 checkout-product-details">
                                             <h5>Curabitur Dolor Nunc consectetur adipiscing</h5>
                                             <p className="text-success">In stock</p>
                                             <p className="mb-0"><b>Quantity</b></p>
                                             <div className="input-box">
                                                <input type="number" min="1" max="10" defaultValue="1" className="increment" />
                                             </div>
                                             <p className="mb-0 mt-2">Delivery by, Thu Jan 30 </p>
                                             <p className="text-success">9% off 3 offers Available</p>
                                          </div>
                                       </div>
                                          <div className="checkout-amount-data text-center">
                                             <div className="price">
                                                <h5>$599.00</h5>
                                                <p className="shopping-info"><i className="ri-shopping-cart-2-line mr-2"></i>Free Shipping</p>
                                             </div>
                                             <div className="checkout-button">
                                                <Link to="/" onClick={e => e.preventDefault()} type="submit" className="btn btn-light d-block"><i className="ri-close-line mr-1"></i>Remove</Link>
                                                <Link to="/" onClick={e => e.preventDefault()} type="submit" className="btn btn-primary d-block mt-2"><i className="ri-heart-line mr-1"></i>Wishlist</Link>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div className="iq-card">
                                 <div className="iq-card-body">
                                    <div className="ckeckout-product-lists">
                                       <div className="d-flex align-items-center justify-content-between">
                                          <div className="d-flex align-items-center">
                                          <div className="ckeckout-product">
                                             <img src="https://dummyimage.com/180x180/000/fff" alt="" />
                                          </div>
                                          <div className=" ml-3 checkout-product-details">
                                             <h5>Curabitur Dolor Nunc consectetur adipiscing</h5>
                                             <p className="text-success">In stock</p>
                                             <p className="mb-0"><b>Quantity</b></p>
                                             <div className="input-box">
                                                <input type="number" min="1" max="10" defaultValue="1" className="increment" />
                                             </div>
                                             <p className="mb-0 mt-2">Delivery by, Thu Jan 30 </p>
                                             <p className="text-success">9% off 3 offers Available</p>
                                          </div>
                                       </div>
                                          <div className="checkout-amount-data text-center">
                                             <div className="price">
                                                <h5>$599.00</h5>
                                                <p className="shopping-info"><i className="ri-shopping-cart-2-line mr-2"></i>Free Shipping</p>
                                             </div>
                                             <div className="checkout-button">
                                                <Link to="/" onClick={e => e.preventDefault()} type="submit" className="btn btn-light d-block"><i className="ri-close-line mr-1"></i>Remove</Link>
                                                <Link to="/" onClick={e => e.preventDefault()} type="submit" className="btn btn-primary d-block mt-2"><i className="ri-heart-line mr-1"></i>Wishlist</Link>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </Col>
                           <Col lg="4">
                              <div className="iq-card">
                                 <div className="iq-card-body">
                                    <p>Options</p>
                                    <div className="d-flex justify-content-between">
                                       <span>Coupons</span>
                                       <span><Link to="/" onClick={e => e.preventDefault()}><strong>Apply</strong></Link></span>
                                    </div>
                                    <hr />
                                    <p><b>Price Details</b></p>
                                    <div className="d-flex justify-content-between">
                                       <span>Total MRP</span>
                                       <span>$500</span>
                                    </div>
                                    <div className="d-flex justify-content-between">
                                       <span>Bag Discount</span>
                                       <span className="text-success">-15$</span>
                                    </div>
                                    <div className="d-flex justify-content-between">
                                       <span>Estimated Tax</span>
                                       <span>$10</span>
                                    </div>
                                    <div className="d-flex justify-content-between">
                                       <span>EMI Eligibility</span>
                                       <span><Link to="/" onClick={e => e.preventDefault()}>Details</Link></span>
                                    </div>
                                    <div className="d-flex justify-content-between">
                                       <span>Delivery Charges</span>
                                       <span className="text-success">Free</span>
                                    </div>
                                    <hr />
                                    <div className="d-flex justify-content-between">
                                       <span className="text-dark"><strong>Total</strong></span>
                                       <span className="text-dark"><strong>$450</strong></span>
                                    </div>
                                    <Button id="place-order" href="#"  onClick={address}  variant="primary d-block mt-1 next">Place order</Button>

                                 </div>
                              </div>
                           </Col>
                        </Row>
                     </div>
                     <div id="address" className="card-block b-0" >
                         <Row>
                           <Col lg="8">
                              <div className="iq-card">
                                 <div className="iq-card-header d-flex justify-content-between">
                                    <div className="iq-header-title">
                                       <h4 className="card-title">Add New Address</h4>
                                    </div>
                                 </div>
                                 <div className="iq-card-body">
                                    <form>
                                    <Row className="mt-3">
                                       <Col md="6">
                                           <div className="form-group">
                                              <label htmlFor="fname">Full Name: *</label> 
                                              <input type="text" className="form-control" name="fname" required="" />
                                            </div>
                                          </Col>
                                          <Col md="6">
                                            <div className="form-group"> 
                                              <label htmlFor="mno">Mobile Number: *</label> 
                                              <input type="text" className="form-control" name="mno" required="" />
                                             </div>
                                          </Col>
                                          <Col md="6">
                                             <div className="form-group"> 
                                              <label htmlFor="houseno">Flat, House No: *</label> 
                                              <input type="text" className="form-control" name="houseno" required="" />
                                             </div>
                                          </Col>
                                          <Col md="6">
                                             <div className="form-group"> 
                                              <label htmlFor="landmark">Landmark e.g. near apollo hospital:: *</label> 
                                              <input type="text" className="form-control" name="landmark" required="" />
                                             </div>
                                          </Col>
                                          <Col md="6">
                                             <div className="form-group"> 
                                              <label htmlFor="city">Town/City: *</label> 
                                              <input type="text" className="form-control" name="city" required="" />
                                             </div>
                                          </Col>
                                          <Col md="6">
                                             <div className="form-group"> 
                                              <label htmlFor="pincode">Pincode: *</label> 
                                              <input type="text" className="form-control" name="pincode" required="" />
                                             </div>
                                          </Col>
                                          <Col md="6">
                                             <div className="form-group"> 
                                              <label htmlFor="state">State: *</label> 
                                              <input type="text" className="form-control" name="state" required="" />
                                             </div>
                                          </Col>
                                          <Col md="6">
                                             <div className="form-group">
                                                <label htmlFor="addtype">Address Type</label>
                                                <select className="form-control" id="addtype" required="">
                                                   <option>Home</option>
                                                   <option>Office</option>
                                                </select>
                                             </div>
                                          </Col>
                                          <Col md="6">
                                             <button id="savenddeliver" type="submit" className="btn btn-primary">Save And Deliver Here</button>
                                          </Col>
                                    </Row>
                                 </form>
                                 </div>
                              </div>
                           </Col>
                           <Col lg="4">
                              <div className="iq-card">
                                 <div className="iq-card-body">
                                    <h4 className="mb-2">Nik John</h4>
                                    <div className="shipping-address">
                                       <p className="mb-0">9447 Glen Eagles Drive</p>
                                       <p>Lewis Center, OH 43035</p>
                                       <p>UTC-5: Eastern Standard Time (EST)</p>
                                       <p>202-555-0140</p>
                                    </div>
                                    <hr />
                                    <Button herf="#" onClick={payment} id="deliver-address" type="button" className="btn btn-primary d-block mt-1 next">Deliver To this Address</Button>

                                 </div>
                              </div>
                           </Col>
                        </Row>
                     </div>
                      <div id="payment" className="card-block b-0">
                         <Row>
                           <Col lg="8">
                              <div className="iq-card">
                                 <div className="iq-card-header d-flex justify-content-between">
                                    <div className="iq-header-title">
                                       <h4 className="card-title">Payment Options</h4>
                                    </div>
                                 </div>
                                 <div className="iq-card-body">
                                    <div className="d-flex justify-content-between align-items-center">
                                       <div className="d-flex justify-content-between align-items-center">
                                          <img src={cart} alt="" height="40" width="50"  />
                                          <span>US Unlocked Debit Card 12XX XXXX XXXX 0000</span>
                                       </div>
                                       <div>
                                       <span>Nik John</span>
                                       <span>28/2020</span>
                                    </div>
                                    </div>
                                    <form className="mt-3">
                                       <div className="d-flex align-items-center">
                                          <span>Enter CVV: </span>
                                          <div className="cvv-input ml-3 mr-3">
                                             <input type="text" className="form-control" required="" /> 
                                          </div>
                                          <button type="submit" className="btn btn-primary">Continue</button>
                                       </div>
                                    </form>
                                    <hr />
                                    <div className="card-lists">
                                       <div className="form-group">
                                             <div className="custom-control custom-radio">
                                                <input type="radio" id="credit" name="customRadio" className="custom-control-input" />
                                                <label className="custom-control-label" htmlFor="credit"> Credit / Debit / ATM Card</label>
                                             </div>
                                             <div className="custom-control custom-radio">
                                                <input type="radio" id="netbaking" name="customRadio" className="custom-control-input" />
                                                <label className="custom-control-label" htmlFor="netbaking"> Net Banking</label>
                                             </div>
                                             <div className="custom-control custom-radio">
                                                <input type="radio" id="emi" name="emi" className="custom-control-input" />
                                                <label className="custom-control-label" htmlFor="emi"> EMI (Easy Installment)</label>
                                             </div>
                                             <div className="custom-control custom-radio">
                                                <input type="radio" id="cod" name="cod" className="custom-control-input" />
                                                <label className="custom-control-label" htmlFor="cod"> Cash On Delivery</label>
                                             </div>
                                       </div>
                                    </div>
                                    <hr />
                                    <div className="add-card">
                                       <Link to="/" onClick={e => e.preventDefault()}><span><i className="ri-add-box-line mr-2 font-size-18"></i>Add Gift Card</span></Link>
                                    </div>
                                 </div>
                              </div>
                           </Col>
                           <Col lg="4">
                              <div className="iq-card">
                                 <div className="iq-card-body">
                                    <h4 className="mb-2">Price Details</h4>
                                    <div className="d-flex justify-content-between">
                                       <span>Price 3 Items</span>
                                       <span><strong>$1000.00</strong></span>
                                    </div>
                                    <div className="d-flex justify-content-between">
                                       <span>Delivery Charges</span>
                                       <span className="text-success">Free</span>
                                    </div>
                                    <hr />
                                    <div className="d-flex justify-content-between">
                                       <span>Amount Payable</span>
                                       <span><strong>$1000.00</strong></span>
                                    </div>
                                 </div>
                              </div>
                           </Col>
                        </Row>
                     </div>
                  </Col>
               </Row>
    )
}
export default index