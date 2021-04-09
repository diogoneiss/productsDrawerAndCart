import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../Redux/Store";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useAppSelector } from "../Redux/hooks";

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
   const produtosArray = useAppSelector((state) => state.cartReducer.products);

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
         </NavbarWrapper>
      </>
   );
};

export default Navbar;
