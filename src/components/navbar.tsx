import React from 'react'
import {useSelector} from 'react-redux';
import { RootState } from '../Store'
import styled from 'styled-components';


const NavbarWrapper = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
background-color: blueviolet;
margin: 0;
padding: 2em;
color: white;
flex-wrap: wrap;
`
const FlexBreak = styled.br`
flex-basis: 100%;
  height: 0;
`


const Navbar = () => {


    const produtosArray = useSelector((state:RootState) => state.cartReducer.products);

    return (
        <>
        <NavbarWrapper>
            
                <button>Ir para carrinho ({produtosArray.length} itens)</button>
                <FlexBreak />
               
                </NavbarWrapper>
        </>
    )
}

export default Navbar
