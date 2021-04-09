import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../Store";
import CartGrid from "./components/messageCard";
import Logo from "../../logo.svg";
import Data from "../../data/abaixo-10-reais.json";
import { ProductType } from "../../types";
import Navbar from "../../components/navbar";

import styled from "styled-components";

const BackgroundColor = styled.div`
   background-color: lightcyan;
   padding: 2em;
`;

const Cart = () => {
   const SkeletonText = styled.p`
      margin: 5em 0;
      text-align: center;
   `;

   return (
      <React.Fragment>
         <Navbar linkPath="/" buttonText="Comprar novamente" showNumberOfItens={false} />
         <BackgroundColor>
            <CartGrid />
         </BackgroundColor>
      </React.Fragment>
   );
};

export default Cart;
