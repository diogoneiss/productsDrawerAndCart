import React from "react";

import MessageCard from "./components/messageCard";
import Navbar from "../../components/navbar";

import styled from "styled-components";

const BackgroundColor = styled.div`
   background-color: lightcyan;
   padding: 2em;
`;

const Cart = () => {
   return (
      <React.Fragment>
         <Navbar linkPath="/" buttonText="Comprar novamente" showNumberOfItens={false} />
         <BackgroundColor>
            <MessageCard />
         </BackgroundColor>
      </React.Fragment>
   );
};

export default Cart;
