import React from 'react'
import {useSelector} from 'react-redux';
import { RootState } from '../Store'
import styled from 'styled-components';
import {Link} from 'react-router-dom';

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

type propTypes = {
buttonText?: string,
linkPath?: string,
showNumberOfItens?: boolean | true,
}

const Navbar = (props: propTypes) => {


    const produtosArray = useSelector((state:RootState) => state.cartReducer.products);
 
    const ShownNumber = () => {
        if(props.showNumberOfItens === undefined || props.showNumberOfItens)
            return (<span>({produtosArray.length} itens) </span> )
        else
            return null
    }

    return (
        <>
        <NavbarWrapper>
            
                <button><Link to={props.linkPath || "/carrinho"}>
                    
                 {props.buttonText || "Ir para carrinho "} 
                 <ShownNumber />
                 </Link></button>
                <FlexBreak />
               
                </NavbarWrapper>
        </>
    )
}

export default Navbar
