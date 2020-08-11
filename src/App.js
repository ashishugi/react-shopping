import React from 'react';

import {Wrapper,Header,Main,Footer,Content,MainContent,SideBar} from "./style";
import data from "./data.json";
import Products from "./components/Products";
import styles from "./index.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Row,Col,Container} from 'react-bootstrap';
import Filter from "./components/Filter";

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      products:data.products,
      size:"",
      sort:"",
    }
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
                        <Products products={this.state.products}/>
                </Col>
                <Col md={3} sm={12}>
                        this
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
