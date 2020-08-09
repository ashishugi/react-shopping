import React from "react";
// import Card from 'react-bootstrap/Card';
import {Button,Card,Img,ProductWrapper} from "../style";
import {Row,Col,Container} from 'react-bootstrap';

function Products(props){
    return (
        <ProductWrapper>
            <Container>
                <Row className="products">
                    {props.products.map((product)=>(
                        <Col md={3} sm={12}>
                            <Card style={{margin:"2%",border:"0px"}} key={product._id}>
                                    <Img variant="top" 
                                    src={product.image} alt={product.title}/>
                                    
                                <div style={{textAlign:"center"}}>
                                    <div>{product.title}</div>
                                    <div>
                                        <Row style={{padding:"13% 0", textAlign:"center"}}>
                                            <Col md={4} style={{ fontFamily: "Lucida Console, Courier, monospace"}} >
                                              ${product.price}
                                            </Col>
                                            <Col md={8} style={{paddingLeft:"2%"}}>
                                                <Button>Add to Cart</Button>
                                            </Col>
                                        </Row>
                                    </div>
                                </div>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </ProductWrapper>
    );
}

export default Products;
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