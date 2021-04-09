import React from "react";
import * as StyledComponents from "./messageCard.styled";
import Link from "../../../components/Link";
type ComponentProps = {
   children?: React.ReactNode;
};

const ProductGrid: React.FC<ComponentProps> = ({ children }) => {
   return (
      <StyledComponents.WrapperContainer>
         <StyledComponents.HeaderArea>Sucesso!</StyledComponents.HeaderArea>

         <StyledComponents.TextArea>Clique no botão abaixo para retornar ao grid de produtos</StyledComponents.TextArea>

         <StyledComponents.LastButton>
            {" "}
            <Link destination="/"> Voltar ao início</Link>
         </StyledComponents.LastButton>
      </StyledComponents.WrapperContainer>
   );
};

export default ProductGrid;
