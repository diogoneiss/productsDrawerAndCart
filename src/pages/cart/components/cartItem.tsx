import React from 'react';
import * as StyledComponents from './cartItem.styled';
import Logo from '../../../logo.svg';
import {useDispatch, useSelector} from 'react-redux';
import {ProductType} from '../../../types';
import addProductToCart from '../../../actions/cartActions';

const ProductCard:React.FC<ProductType> = (product, {key}) => {
const dispatch = useDispatch();
return (
    <StyledComponents.Card>
      

    <StyledComponents.UpperWrapper>
        <StyledComponents.ProductImage src={product.img || Logo}/>


        
        <StyledComponents.MiddleWrapper>
       
        <StyledComponents.TitleText>
            {product.name || "Name"}
        </StyledComponents.TitleText>
  
        <StyledComponents.OldPriceText>
            R${""+product.price}
        </StyledComponents.OldPriceText>

        <StyledComponents.NewPriceText>
            R${""+product.price}
        </StyledComponents.NewPriceText>
        </StyledComponents.MiddleWrapper>
    </StyledComponents.UpperWrapper>


    <StyledComponents.BottomWrapper>
        <p>Quantidade: {product.quantity}</p>
        <StyledComponents.IncreaseWrapper>
        <StyledComponents.StyledButton onClick={() => null  }>
           +
        </StyledComponents.StyledButton>
        <StyledComponents.StyledButton onClick={() => null  }>
           -
        </StyledComponents.StyledButton>
        </StyledComponents.IncreaseWrapper>
        <StyledComponents.StyledButton onClick={() => null }>
           Remover
        </StyledComponents.StyledButton>
    </StyledComponents.BottomWrapper>
   
    </StyledComponents.Card>
)
}

export default ProductCard;