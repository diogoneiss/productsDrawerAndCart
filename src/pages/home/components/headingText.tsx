import React from "react";
import styled from "styled-components";
// import { Container } from './styles';

const StyledText = styled.div`
   text-align: center;
`;

const HeadingText: React.FC = () => {
   return (
      <>
         <StyledText>
            <h1>Carrinho de compras</h1>
            <h3>Selecione o que deseja</h3>
         </StyledText>
      </>
   );
};

export default HeadingText;
