import React from 'react';

import {Wrapper,Header,Main,Footer,Content,MainContent,SideBar} from "./style";
import data from "./data.json";
import Products from "./components/Products";
import styles from "./index.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Row,Col,Container} from 'react-bootstrap';
import Filter from "./components/Filter";
import Cart from "./components/Cart";
class App extends React.Component {
  constructor(){
    super();
    this.state = {
      products:data.products,
      cartItems:localStorage.getItem("cartItems")?JSON.parse(localStorage.getItem("cartItems")):[],
      size:"",
      sort:"",
    }
  }
  createOrder = (order)=>{
    alert("Need to save the Order for "+order);
  }
  removeFromCart = (product) =>{
    const cartItems = this.state.cartItems.slice();
    this.setState({
      cartItems : cartItems.filter(x => x._id != product._id),
    })
    localStorage.setItem("cartItems",JSON.stringify( cartItems.filter(x => x._id != product._id)));
  }
  addToCart = (product)=>{
    const cartItems = this.state.cartItems.slice(); // extract all the elements from the array .
    let alreadyInCart = false;
    cartItems.forEach(Item =>{
      if(Item._id === product._id){
        Item.count++;
        alreadyInCart = true;
      }
    })
    if(!alreadyInCart){
      cartItems.push({...product,count:1})
    }
    this.setState({cartItems});
    localStorage.setItem("cartItems",JSON.stringify(cartItems));
  }
  sortProducts=(event)=>{
    const sort = event.target.value;
    this.setState(state => ({
      sort:sort,
      products:state.products.slice().sort((a,b)=>(
        sort === "lowest" ? ((a.price > b.price)?1:-1):
        sort==="highest"?((a.price < b.price)?1:-1):((a._id < b._id)?1:-1)
      ))
    }))
  }
  filterProducts = (event) =>{
    if(event.target.value === ""){
      this.setState({size:event.target.value,products:data.products});
    }else{
      this.setState({
        size:event.target.value,
        products:data.products.filter((product)=>
            product.availableSizes.indexOf(event.target.value)>=0
        )
      })
    }
  }
    render(){
      return (
        <Wrapper>
          <Header>
            <a style={{color:"white", textDecoration:"none"}} href="/">React Shopping Cart</a>
          </Header>
          <Filter 
            count={this.state.products.length}
            size={this.state.size}
            sort={this.state.sort}
            filterProducts = {this.filterProducts}
            sortProducts={this.sortProducts}
          />
          <Main>
            <div>
              <Row>
                <Col md={9} sm={12}>
                        <Products products={this.state.products} 
                        addToCart={this.addToCart}/>
                </Col>
                <Col md={3} sm={12}>
                        <Cart cartItems={this.state.cartItems} 
                          removeFromCart={this.removeFromCart}
                          createOrder={this.createOrder}
                        />
                </Col>
              </Row>
            </div>
          </Main>
          <Footer>
            All right is reserved.
          </Footer>
        </Wrapper>
      );
    }
}

export default App;
