import React from 'react';
import * as StyledComponents from './productCard.styled';
import Logo from '../../../logo.svg';

type ComponentProps = {
title: String,

description?: String,
 price : number, 
 img ?: string
}

const ProductCard:React.FC<ComponentProps> = ({title, description, price, img}) => {

return (
    <StyledComponents.Card>
        <StyledComponents.UpperWrapper>
        <StyledComponents.ProductImage src={img || Logo}/>

        <StyledComponents.TitleText>
            {title}
        </StyledComponents.TitleText>
        </StyledComponents.UpperWrapper>

{
    /*
        <StyledComponents.DescriptionText>
            {description || "Descrição"}
        </StyledComponents.DescriptionText>
        */
}
    <StyledComponents.BottomWrapper>
        <StyledComponents.PriceText>
            R${""+price}
        </StyledComponents.PriceText>

        <StyledComponents.AddToCartButton>
            Adicionar ao carrinho
        </StyledComponents.AddToCartButton>
        </StyledComponents.BottomWrapper>
    </StyledComponents.Card>
)
}

export default ProductCard;