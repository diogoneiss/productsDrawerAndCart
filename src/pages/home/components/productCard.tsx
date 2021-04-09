import React from "react";
import * as StyledComponents from "./productCard.styled";
import Logo from "../../../logo.svg";
import { useDispatch } from "react-redux";
import { ProductType } from "../../../types";
import addProductToCart from "../../../actions/cartActions";

const ProductCard: React.FC<ProductType> = (product) => {
   const dispatch = useDispatch();

   return (
      <StyledComponents.Card>
         <StyledComponents.UpperWrapper>
            <StyledComponents.ProductImage src={product.img || Logo} />

            <StyledComponents.TitleText>{product.name}</StyledComponents.TitleText>
         </StyledComponents.UpperWrapper>

         {/*
        <StyledComponents.DescriptionText>
            {description || "Descrição"}
        </StyledComponents.DescriptionText>
        */}
         <StyledComponents.BottomWrapper>
            <StyledComponents.PriceText>R${"" + product.price}</StyledComponents.PriceText>

            <StyledComponents.AddToCartButton onClick={() => dispatch(addProductToCart(product))}>
               Adicionar ao carrinho
            </StyledComponents.AddToCartButton>
         </StyledComponents.BottomWrapper>
      </StyledComponents.Card>
   );
};

export default ProductCard;
