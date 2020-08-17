import styled from "styled-components";


const Wrapper = styled.div `
    
`
const Header = styled.header `
    background-color:#203040;
    padding:2% 7%;
    color:white;
    text-decoration:none;
`
const Main = styled.main `
    height:100%;
    width:100%;
    padding:1%;
`
const Footer = styled.footer `
    background-color:#203040;
    padding:2% 7%;
    color:white;
    text-align:center;
`
const Content = styled.div `
    display:flex;
    flex-wrap:wrap;
`

const MainContent = styled.div `
    flex:3 60rem; 
`

const SideBar = styled.div `
    flex:1 20rem;
`
const Button = styled.button `
    background-color:blue;
    color:white;
    padding-top:3%;
    padding-bottom:3%;
    border:0px;
    font-family: "Lucida Console", Courier, monospace;
    transition:width 3s ease;
    font-size:15px;
    height:100%;
    width:100%;
`
const Img = styled.img `
    height:250px;
    width:100%;
`
const Card = styled.div `
    /* background-image: linear-gradient(bottom, red, red 70%, transparent 70%, transparent 100%); */
    height:100%;
    width:100%;
    &:hover{
        background-color:red;
        color:white;
        font-weight:550;
        box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.5);
        border:1px solid red;
        transition:0.3s;

    }
    &:hover ${Button}{
        background-color:#cdb30c;
        color:black;
    }

`
const ProductWrapper = styled.div `
    padding:4% 3%;
`
const FilterWrapper = styled.div `
    padding:1% 3%;
`
const FilterResult = styled.div `
    margin-left:2%;
    margin-right:2%;
`
const FilterSort = styled.div `
    margin-left:2%;
    margin-right:2%;
`
const FilterSize = styled.div `
    margin-left:2%;
    margin-right:2%;
`
const CartHeader = styled.div `
    border-bottom:.1rem #c0c0c0 solid;
    flex-wrap:wrap-reverse;
`
const CartWrapper = styled.div `
    padding-top:5%;
`
const CheckOutButton = styled.button `
    background-color:blue;
    color:white;
    border:0px;
    padding:10% 11%;
    font-weight:700;
    &:hover{
        background-color:orange;
    }
`
export {
    CheckOutButton,
    CartWrapper,
    CartHeader,
    Wrapper,
    FilterResult,
    FilterSort,
    FilterSize,
    FilterWrapper,
    ProductWrapper,
    Card,
    Img,
    Button,
    Header,
    Main,
    Footer,
    Content,
    MainContent,
    SideBar
};