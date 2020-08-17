import React from "react";
import {Button,Row,Col} from 'react-bootstrap';
import {CartHeader,CartWrapper,CheckOutButton} from "../style";
import Form from 'react-bootstrap/Form'
export default class Cart extends React.Component{
    constructor(props){
        super(props);
        this.state={
            name:"",
            email:"",
            address:"",
            showCheckOut:false,
        }
    }
    handleInput= (e)=>{
        this.setState({[e.target.name]:e.target.value});
    }
    createOrder = (e)=>{
        e.preventDefault();
        const order = {
            name : this.state.name,
            email:this.state.email,
            address:this.state.address,
            cartItems:this.props.cartItems,
        }
        this.props.createOrder(order);
    }
    render(){
        const {cartItems} = this.props;
            return(
                <div style={{paddingRight:"1%"}}>
                    <div>
                        {cartItems.length === 0?<CartHeader>Cart Is Empty </CartHeader>
                        :
                        <CartHeader >
                            You Have {this.props.cartItems.length} Items in the Cart .
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
                                                        <Button variant="outline-dark" onClick={()=>this.props.removeFromCart(item)}>
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
                                        <CheckOutButton onClick={() => {this.setState({showCheckOut:true})}} >Proceed</CheckOutButton>
                                    </Col>
                            </Row>
                        </div>
                    }
                    </div>
                    {this.state.showCheckOut && (
                        <div style={{paddingTop:"10%"}}>
                            <Form onSubmit={this.createOrder} style={{width:"100%"}}>
                                <ul style={{listStyleType:"none"}}>
                                    <li>
                                        <label>Email</label><br/>
                                        <input 
                                        name="email"
                                        type="email" 
                                        placeholder="youremail@"
                                        required 
                                        onChange={this.handleInput}
                                        />
                                    </li>
                                    <li>
                                        <label>Name</label><br/>
                                        <input 
                                        name="name"
                                        type="text" 
                                        placeholder="name"
                                        required 
                                        onChange={this.handleInput}
                                        />
                                    </li>
                                    <li>
                                        <label>Address</label><br/>
                                        <input 
                                        name="address"
                                        type="text" 
                                        placeholder="address"
                                        required 
                                        onChange={this.handleInput}
                                        />
                                    </li>
                                    <li>
                                    <br/><br/>
                                        <Button style={{backgroundColor:"blue"}} type="submit">Check Out</Button>
                                    </li>
                                </ul>
                            </Form>
                        </div>
                    )}
                </div>
            );
    }
}


//.reducer(a,c) is a function which take two values a->stores the previous values and c = has the current value .
// it stores the value at every iteration of the array and perform some action with the current value and finally returns
//the answer.