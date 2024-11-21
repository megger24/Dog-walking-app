
import { useState } from 'react';
import { connect } from 'react-redux'
import * as actions from '../redux/actions'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as regular from '@fortawesome/free-regular-svg-icons'
import * as brands from '@fortawesome/free-brands-svg-icons'
import authAPI from '../API/authAPI'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


const Checkout = (props) => {
    const [show, setShow] = useState(false);

    const handleClose = () => {
        console.log("handleClose")
        setShow(false);
    }
    const handleShow = () => setShow(true);

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(props)
        let newCart = {
            cart: props.cart,
            cardname: props.cart.cardname,
            cardnumber: props.cart.cardnumber,
            expmonth: props.cart.expmonth,
            expyear: props.cart.expyear,
            cvv: props.cart.cvv
        }
        authAPI.addCart(newCart)
        setShow(false)
    }

    return (
        <>
            <div className="row">

                <div className="col-75">
                    <div className="container">
                        <form onSubmit={handleSubmit}>

                            <div className="row">
                                <div className="col-50">
                                    <h3>Billing Address</h3>
                                    <label for="fname"><i> <FontAwesomeIcon icon={regular.faFaceLaugh} /></i> Full Name</label>
                                    <input type="text" id="fname" name="firstname" placeholder="John M. Doe" />
                                    <label for="email"><i> <FontAwesomeIcon icon={brands.faGoogle} /></i> Email</label>
                                    <input type="text" id="email" name="email" placeholder="john@example.com" />
                                    <label for="adr"><i> <FontAwesomeIcon icon={regular.faHospital} /></i>  Address</label>
                                    <input type="text" id="adr" name="address" placeholder="542 W. 15th Street" />
                                    <label for="city"><i> <FontAwesomeIcon icon={regular.faAddressCard} /></i> City</label>
                                    <input type="text" id="city" name="city" placeholder="New York" />

                                    <div className="row">
                                        <div className="col-50">
                                            <label for="state">State</label>
                                            <input type="text" id="state" name="state" placeholder="NY" />
                                        </div>
                                        <div className="col-50">
                                            <label for="zip">Zip</label>
                                            <input type="text" id="zip" name="zip" placeholder="10001" />
                                        </div>
                                    </div>
                                </div>

                                <div className="col-50">
                                    <h3>Payment</h3>
                                    <label for="fname">Accepted Cards</label>
                                    <div className="icon-container">
                                        <i><FontAwesomeIcon icon={brands.faCcVisa} /> </i>
                                        <i><FontAwesomeIcon icon={brands.faCcAmex} /> </i>
                                        <i><FontAwesomeIcon icon={brands.faPaypal} /> </i>
                                        <i ><FontAwesomeIcon icon={brands.faCcMastercard} /> </i>
                                    </div>
                                    <label for="cname">Name on Card</label>
                                    <input
                                        type="text"
                                        value={props.cardname}
                                        onChange={props.handleCartInput}
                                        id="cname"
                                        name="cardname"
                                        placeholder="John More Doe" />
                                    <label for="ccnum">Credit card number</label>
                                    <input
                                        type="text"
                                        value={props.cardnumber}
                                        onChange={props.handleCartInput}
                                        id="ccnum"
                                        name="cardnumber"
                                        placeholder="1111-2222-3333-4444" />
                                    <label for="expmonth">Exp Month</label>
                                    <input
                                        type="text"
                                        value={props.expmonth}
                                        onChange={props.handleCartInput}
                                        id="expmonth"
                                        name="expmonth"
                                        placeholder="September" />

                                    <div className="row">
                                        <div className="col-50">
                                            <label for="expyear">Exp Year</label>
                                            <input
                                                value={props.expyear}
                                                onChange={props.handleCartInput}
                                                type="text"
                                                id="expyear"
                                                name="expyear"
                                                placeholder="2018" />
                                        </div>
                                        <div className="col-50">
                                            <label for="cvv">CVV</label>
                                            <input
                                                value={props.cvv}
                                                onChange={props.handleCartInput}
                                                type="text"
                                                id="cvv"
                                                name="cvv"
                                                placeholder="352" />
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <label>
                                <input type="checkbox" checked="checked" name="sameadr" /> Shipping address same as billing
                            </label>

                            <button type="button" value="Continue to checkout" className="btn" onClick={handleShow} >Continue To Checkout</button>
                            <Modal show={show} onHide={handleClose}>
                                <Modal.Header closeButton>
                                    <Modal.Title>Thank You For Your Payment</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>Confirm Payment!</Modal.Body>
                                <Modal.Footer>
                                    <Button variant="secondary" onClick={handleSubmit}>
                                        Place Payment
                                    </Button>
                                    <Button variant="primary" onClick={handleClose}>
                                        Close
                                    </Button>
                                </Modal.Footer>
                            </Modal>
                        </form>
                    </div>
                </div>
                <div className="col-25">
                    <div className="container">
                        <h4>Cart
                            <span className="price" style={{ color: "black" }}>
                                <i className="fa fa-shopping-cart"></i>
                                <b></b>
                            </span>
                        </h4>
                        {props.cart.map(item => <div><p>{item.item}<span className="price">${item.price}</span></p>   <hr />
                            <p>Total <span class="price" style={{ color: "black" }}><b>${item.price}</b></span></p></div>)}
                        <button onClick={() => props.clearCart()}>Clear Cart</button>


                    </div>
                </div>


            </div>

        </>



    )

}
const mapStateToProps = (state) => {
    return {
        cart: state.cart.cart,
        cardname: state.cart.cardname,
        cardnumber: state.cart.cardnumber,
        expmonth: state.cart.expmonth,
        expyear: state.cart.expyear,
        cvv: state.cart.cvv
    }
}
const mapDistpatchToProps = (dispatch) => {
    return {
        clearCart: () => dispatch(actions.clearCart()),
        handleCartInput: (e) => dispatch(actions.handleCartInput(e.target)),
        handleInput: (e) => dispatch(actions.handleInput(e.target))
    }
}
export default connect(mapStateToProps, mapDistpatchToProps)(Checkout)