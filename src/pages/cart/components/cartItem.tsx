import React from "react";
import * as StyledComponents from "./cartItem.styled";
import Logo from "../../../logo.svg";
import { useDispatch, useSelector } from "react-redux";
import { ProductType } from "../../../types";
import addProductToCart from "../../../actions/cartActions";

const ProductCard: React.FC<ProductType> = (product, { key }) => {
   const dispatch = useDispatch();
   return (
      <StyledComponents.Card>
         <StyledComponents.UpperWrapper>
            <StyledComponents.ProductImage src={product.img || Logo} />

            <StyledComponents.MiddleWrapper>
               <StyledComponents.TitleText>{product.name || "Name"}</StyledComponents.TitleText>

               <StyledComponents.OldPriceText>R${"" + product.price}</StyledComponents.OldPriceText>

               <StyledComponents.NewPriceText>R${"" + product.price}</StyledComponents.NewPriceText>
            </StyledComponents.MiddleWrapper>
         </StyledComponents.UpperWrapper>
    

         <StyledComponents.FinalRightWrapper>
         <StyledComponents.RightmostWrapper>

         <StyledComponents.QuantityWrapper>
         <StyledComponents.QuantityBox type="number" id="quantity" name="quantity" value={product.quantity} max="2" readOnly />
         <StyledComponents.QuantityLabel htmlFor="quantity">Qtd</StyledComponents.QuantityLabel>
         </StyledComponents.QuantityWrapper>

            <StyledComponents.QuantityWrapper>
               <StyledComponents.StyledButton onClick={() => null}>+</StyledComponents.StyledButton>
               <StyledComponents.StyledButton onClick={() => null}>-</StyledComponents.StyledButton>
            </StyledComponents.QuantityWrapper>
          
         </StyledComponents.RightmostWrapper>
         <StyledComponents.StyledButton onClick={() => null}>Remover</StyledComponents.StyledButton>
         </StyledComponents.FinalRightWrapper>
      </StyledComponents.Card>
   );
};

export default ProductCard;
