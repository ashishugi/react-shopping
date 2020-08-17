import React from "react";
// import Card from 'react-bootstrap/Card';
import Fade from "react-reveal/Fade";
import Modal from "react-modal";
import {Button,Card,Img,ProductWrapper} from "../style";
import {Row,Col,Container} from 'react-bootstrap';
import { Zoom } from "react-reveal";

export default class Products extends React.Component{
    constructor(props){
        super(props);
        this.state={
            product:null,
        };
    }
    openModal = (product)=>{
        this.setState({product});
    }
    closeModal = ()=>{
        this.setState({product:null});
    }
    render(){
        const {product} = this.state;
            return (
                <ProductWrapper>
                    <Container>
                        <Fade bottom cascade>
                            <Row className="products">
                                    {this.props.products.map((product)=>(
                                        <Col md={3} sm={12}>
                                            <Card style={{margin:"2%",border:"0px"}} key={product._id}>
                                                    <a href={"#"+product._id} 
                                                    onClick={()=> this.openModal(product)}>
                                                        <Img variant="top" 
                                                        src={product.image} alt={product.title}/>
                                                    </a>
                                                <div style={{textAlign:"center"}}>
                                                    <div>{product.title}</div>
                                                    <div>
                                                        <Row style={{padding:"13% 0", textAlign:"center"}}>
                                                            <Col md={4} style={{ fontFamily: "Lucida Console, Courier, monospace"}} >
                                                            ${product.price}
                                                            </Col>
                                                            <Col md={8} style={{paddingLeft:"2%"}}>
                                                                <Button onClick={()=> this.props.addToCart(product)}>Add to Cart</Button>
                                                            </Col>
                                                        </Row>
                                                    </div>
                                                </div>
                                            </Card>
                                        </Col>
                                    ))}
                            </Row>
                        </Fade>   
                        {product && (
                            <Modal
                                isOpen={true}
                            >
                                <Zoom>
                                    <button variant="warning" onClick={this.closeModal}>Close</button>
                                    <div>
                                        <Row>
                                            <Col md={6}>
                                                        <Img variant="top" style={{height:"100%"}}
                                                        src={product.image} alt={product.title}/>
                                            </Col>
                                            <Col md={6}>
                                                <strong style={{fontSize:"25px"}}>{product.title}</strong>
                                                <br/>
                                                {product.description}
                                            </Col>
                                        </Row>
                                    </div>
                                </Zoom>
                            </Modal>
                        )}             
                    </Container>
                </ProductWrapper>
            );
    }
}
{/* <div>
            <ul className="products">
                {props.products.map((product)=>(
                    <li key={product._id}>
                        {console.log(product.image)}
                        <div className="product">
                            <a href={"#"+product._id}/>
                            <img src={product.image} alt={product.title}/>
                            <p>{product.title}</p>
                        </div>
                        <div className="product-price">
                            <div>{product.price}</div>
                            <button className="button">Add to Cart</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div> */}

        