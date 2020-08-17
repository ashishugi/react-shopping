import React from "react";
import {Button,Row,Col} from 'react-bootstrap';
import {CartHeader,CartWrapper,CheckOutButton} from "../style";
function Cart(props){
    const {cartItems} = props;
    return(
        <div style={{paddingRight:"1%"}}>
            <div>
                {cartItems.length === 0?<CartHeader>Cart Is Empty </CartHeader>
                :
                <CartHeader >
                    You Have {props.cartItems.length} Items in the Cart .
                </CartHeader>
                
                }
            
                <div>
                    <CartWrapper>
                        <ul>
                            {cartItems.map(item => (
                                    <Row key={item._id}>
                                        <Col >
                                            <img style={{maxWidth:"100%",maxHeight:"100px"}} src={item.image} alt={item.title}/>
                                        </Col>
                                        <Col style={{textAlign:"right"}} >
                                            {item.title}
                                            <div>
                                               $ {item.price} <strong>x</strong> {item.count}{ "   "}
                                                <Button variant="outline-dark" onClick={()=>props.removeFromCart(item)}>
                                                    Remove
                                                </Button>
                                            </div>
                                        </Col>
                                     </Row>
                            ))}
                        </ul>
                    </CartWrapper>
                </div>
               {cartItems.length === 0?""
               :
                   <div style={{border:"1px black solid",backgroundColor:"#f3e6e3",alignItems:"center"}}>
                        <Row style={{padding:"5%"}}>
                            <Col style={{fontSize:"20px"}}>
                              Total: <strong>$</strong> {cartItems.reduce((a,c) => a+c.price*c.count,0)}
                            </Col>
                            <Col>
                                <CheckOutButton >Proceed</CheckOutButton>
                            </Col>
                    </Row>
                   </div>
               }
            </div>
        </div>
    );
}

export default Cart;
//.reducer(a,c) is a function which take two values a->stores the previous values and c = has the current value .
// it stores the value at every iteration of the array and perform some action with the current value and finally returns
//the answer.