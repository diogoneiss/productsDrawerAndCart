import React from 'react';
import * as StyledComponents from './cartGrid.styled';


type ComponentProps = {

 children ?: React.ReactNode
}

const ProductGrid:React.FC<ComponentProps> = ({children}) => {

return (
    <StyledComponents.WrapperContainer>
        <StyledComponents.CartItemRepeater>
        {children}
        </StyledComponents.CartItemRepeater>
        <StyledComponents.TotalWrapper>
        <StyledComponents.TotalSubWrapper>

        </StyledComponents.TotalSubWrapper>
        </StyledComponents.TotalWrapper>

        <StyledComponents.LastButton>
            Finalizar compra
        </StyledComponents.LastButton>

    </StyledComponents.WrapperContainer>

   
)
}

export default ProductGrid;