import React from 'react';

import {Wrapper,Header,Main,Footer,Content,MainContent,SideBar} from "./style";
import data from "./data.json";
import Products from "./components/Products";
import styles from "./index.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Row,Col,Container} from 'react-bootstrap';


class App extends React.Component {
  constructor(){
    super();
    this.state = {
      products:data.products,
      size:"",
      sort:"",                                                                                                                                                                                                                                                                                                      
    }
  }
    render(){
      return (
        <Wrapper>
          <Header>
            <a style={{color:"white", textDecoration:"none"}} href="/">React Shopping Cart</a>
          </Header>
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
