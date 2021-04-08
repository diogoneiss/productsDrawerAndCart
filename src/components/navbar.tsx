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
`


const Navbar = () => {


  //  const quantidade = useSelector((state:RootState) => state);

    return (
        <>
        <NavbarWrapper>
            
                <button>Ir para carrinho</button>
                </NavbarWrapper>
        </>
    )
}

export default Navbar
