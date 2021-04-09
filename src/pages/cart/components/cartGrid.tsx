import React from "react";
import * as StyledComponents from "./cartGrid.styled";

type ComponentProps = {
   children?: React.ReactNode;
};

const ProductGrid: React.FC<ComponentProps> = ({ children }) => {
   return (
      <StyledComponents.WrapperContainer>
          <StyledComponents.HeaderArea>
              Meu carrinho
          </StyledComponents.HeaderArea>
         <StyledComponents.CartItemRepeater>{children}</StyledComponents.CartItemRepeater>
         <StyledComponents.TotalWrapper>
            <StyledComponents.TotalSubWrapper>
               <StyledComponents.TotalText>Total </StyledComponents.TotalText>
               <StyledComponents.PriceText>R$ 12,90</StyledComponents.PriceText>
            </StyledComponents.TotalSubWrapper>
            <StyledComponents.ParabensBox>Parabéns, sua compra tem frete grátis!</StyledComponents.ParabensBox>
         </StyledComponents.TotalWrapper>

         <StyledComponents.LastButton>Finalizar compra</StyledComponents.LastButton>
      </StyledComponents.WrapperContainer>
   );
};

export default ProductGrid;
