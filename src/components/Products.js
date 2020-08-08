import React from "react";
import Card from 'react-bootstrap/Card';
import {Button} from "../style";

function Products(props){
    return (
        
        <div>
            <ul className="products">
                {props.products.map((product)=>(
                    <Card style={{margin:"2%",border:"0px"}} key={product._id}>
                            <img variant="top" style={{height:"200px" , width:"200px",objectFit:"cover"}}
                             src={product.image} alt={product.title}/>
                            
                        <Card.Body>
                            <Card.Title>{product.title}</Card.Title>
                            <Card.Text>
                                    <div>{product.price}</div>
                                    <Button variant="primary" >Add to Cart</Button>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                ))}
            </ul>
        </div>
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