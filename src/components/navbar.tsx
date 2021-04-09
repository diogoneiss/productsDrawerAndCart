import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../Store";
import styled from "styled-components";
import { Link } from "react-router-dom";

const NavbarWrapper = styled.div`
   display: flex;
   flex-direction: row;
   justify-content: center;
   background-color: slateblue;
   margin: 0;
   padding: 2em;
   color: white;
   flex-wrap: wrap;
`;
const FlexBreak = styled.br`
   flex-basis: 100%;
   height: 0;
`;
const Button = styled.button`
   font-size: medium;
   background-color: white;
   border: 0;
   color: black;
   padding: 1em;
   border-radius: 0.2em;

   :hover {
      background-color: #f0f0f0;
   }
`;

type propTypes = {
   buttonText?: string;
   linkPath?: string;
   showNumberOfItens?: boolean | true;
};

const Navbar = (props: propTypes) => {
   const produtosArray = useSelector((state: RootState) => state.cartReducer.products);

   const ShownNumber = () => {
      if (props.showNumberOfItens === undefined || props.showNumberOfItens)
         return <span>({produtosArray.length} itens) </span>;
      else return null;
   };

   return (
      <>
         <NavbarWrapper>
            <Link style={{ textDecoration: "none" }} to={props.linkPath || "/carrinho"}>
               <Button>
                  {props.buttonText || "Ir para carrinho "}
                  <ShownNumber />
               </Button>
            </Link>
            <FlexBreak />
         </NavbarWrapper>
      </>
   );
};

export default Navbar;
