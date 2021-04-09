import React from "react";
import { useHistory } from "react-router";
import styled from "styled-components";
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
   cursor: pointer;
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
   const history = useHistory();
   const ShownNumber = () => {
      if (props.showNumberOfItens === undefined || props.showNumberOfItens)
         return <span>({produtosArray.length} itens) </span>;
      else return null;
   };

   return (
      <NavbarWrapper>
         <Button onClick={() => history.push(props.linkPath || "/carrinho")}>
            {props.buttonText || "Ir para carrinho "}
            <ShownNumber />
         </Button>
      </NavbarWrapper>
   );
};

export default Navbar;
