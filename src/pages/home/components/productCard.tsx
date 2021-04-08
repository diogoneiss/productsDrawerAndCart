import React from 'react';
import * as StyledComponents from './productCard.styled';
import Logo from '../../../logo.svg';
import {useDispatch, useSelector} from 'react-redux';
import {ProductType} from '../../../types';
import addProductToCart from '../../../actions/cartActions';

const ProductCard:React.FC<ProductType> = ({title, id, description, price, img}) => {
const dispatch = useDispatch();
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

        <StyledComponents.AddToCartButton onClick={() => dispatch(addProductToCart({title, id, description, price, img})) }>
            Adicionar ao carrinho
        </StyledComponents.AddToCartButton>
        </StyledComponents.BottomWrapper>
    </StyledComponents.Card>
)
}

export default ProductCard;