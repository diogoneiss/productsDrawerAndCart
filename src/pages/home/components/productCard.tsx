import React from "react";
import * as StyledComponents from "./productCard.styled";
import Logo from "../../../logo.svg";
import { useDispatch, useSelector } from "react-redux";
import { ProductType } from "../../../types";
import addProductToCart from "../../../actions/cartActions";

type ComponentType = {
   product: ProductType;
   key: String;
};

const ProductCard: React.FC<ComponentType> = ({ product, key }) => {
   const dispatch = useDispatch();

   const chaveUnica = key;

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
