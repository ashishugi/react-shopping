import React from 'react';

import {Wrapper,Header,Main,Footer,Content,MainContent,SideBar} from "./style";
import data from "./data.json";
import {Row,Col} from 'react-bootstrap';
import Products from "./components/Products";
import styles from "./index.css";


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
            <Content>
              <MainContent>
                <Products products={this.state.products}/>
              </MainContent>
              <SideBar>
                this
              </SideBar>            
            </Content>
          </Main>
          <Footer>
            All right is reserved.
          </Footer>
        </Wrapper>
      );
    }
}

export default App;
