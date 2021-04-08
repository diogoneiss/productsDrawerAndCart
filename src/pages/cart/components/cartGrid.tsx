import React from "react";
import * as StyledComponents from "./cartGrid.styled";

type ComponentProps = {
   children?: React.ReactNode;
};

const ProductGrid: React.FC<ComponentProps> = ({ children }) => {
   return (
      <StyledComponents.WrapperContainer>
         <StyledComponents.CartItemRepeater>{children}</StyledComponents.CartItemRepeater>
         <StyledComponents.TotalWrapper>
            <StyledComponents.TotalSubWrapper>
               <p>Total </p>
               <p>R$ 12,90</p>
            </StyledComponents.TotalSubWrapper>
            <p>Parabéns, sua compra tem frete grátis!</p>
         </StyledComponents.TotalWrapper>

         <StyledComponents.LastButton>Finalizar compra</StyledComponents.LastButton>
      </StyledComponents.WrapperContainer>
   );
};

export default ProductGrid;
