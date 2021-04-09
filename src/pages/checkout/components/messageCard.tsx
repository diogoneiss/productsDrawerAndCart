import React from "react";
import * as StyledComponents from "./messageCard.styled";
import { useHistory } from "react-router";

const ProductGrid: React.FC = () => {
   const history = useHistory();
   return (
      <StyledComponents.WrapperContainer>
         <StyledComponents.HeaderArea>Sucesso!</StyledComponents.HeaderArea>

         <StyledComponents.TextArea>Clique no botão abaixo para retornar ao grid de produtos</StyledComponents.TextArea>

         <StyledComponents.LastButton onClick={() => history.push("/")}>Voltar ao início</StyledComponents.LastButton>
      </StyledComponents.WrapperContainer>
   );
};

export default ProductGrid;
