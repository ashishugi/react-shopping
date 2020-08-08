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
`
const Footer = styled.footer `
    background-color:#203040;
    padding:2% 7%;
    color:white;
    text-align:center;
`
const Content = styled.div`
    display:flex;
    flex-wrap:wrap;
`

const MainContent = styled.div`
    flex:3 60rem; 
`

const SideBar = styled.div`
    flex:1 20rem;
`
const Button = styled.button `
    background-color:yellow;
    border-radius:10px;
    padding-top:7%;
    padding-bottom:7%;
    border:1px solid yellow;
`
export { Wrapper,Button, Header, Main, Footer,Content,MainContent,
    SideBar };