import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../Store";
import CartItem from "./components/cartItem";
import CartGrid from "./components/cartGrid";
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
   const cartArray = useSelector((state: RootState) => state.cartReducer.products);
   console.log(cartArray);

   //mapeia um card para cada item no array, usando desestruturação, já que sei o tipo de objeto
   const IteradorProdutos = () => {
      return <>{cartArray !== undefined && cartArray.map((item, key) => <CartItem {...item} key={key} />)}</>;
   };

   const SkeletonText = styled.p`
      margin: 5em 0;
      text-align: center;
   `;

   const DecideWhatToRender = () => {
      if (cartArray.length === 0) {
         return <SkeletonText>Carrinho vazio</SkeletonText>;
      }
      return <IteradorProdutos />;
   };

   return (
      <React.Fragment>
         <Navbar linkPath="/" buttonText="Voltar para produtos" showNumberOfItens={false} />
         <BackgroundColor>
            <CartGrid>
               <DecideWhatToRender />
            </CartGrid>
         </BackgroundColor>
      </React.Fragment>
   );
};

export default Cart;
