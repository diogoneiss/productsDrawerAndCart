import React, { useState } from "react";
import * as StyledComponents from "./cartItem.styled";
import Logo from "../../../logo.svg";
import { useDispatch } from "react-redux";
import { ProductType } from "../../../types";
import * as Actions from "../../../actions/cartActions";
import Price from "../../../components/priceFormatter";

const ProductCard: React.FC<ProductType> = (product, { key }) => {
   const dispatch = useDispatch();
   //quantidade local, já que não estou usando useSelector
   const [localQuantity, setLocalQuantity] = useState<number>(product.quantity);
   return (
      <StyledComponents.Card>
         <StyledComponents.UpperWrapper>
            <StyledComponents.ProductImage src={product.img || Logo} />

            <StyledComponents.MiddleWrapper>
               <StyledComponents.TitleText>{product.name || "Name"}</StyledComponents.TitleText>

               <StyledComponents.OldPriceText>
               <Price price={product.price} />
                 </StyledComponents.OldPriceText>

               <StyledComponents.NewPriceText><Price price={product.sellingPrice} /></StyledComponents.NewPriceText>
            </StyledComponents.MiddleWrapper>
         </StyledComponents.UpperWrapper>

         <StyledComponents.FinalRightWrapper>
            <StyledComponents.RightmostWrapper>
               <StyledComponents.QuantityWrapper>
                  <StyledComponents.QuantityBox id="quantity">{localQuantity}</StyledComponents.QuantityBox>
                  <StyledComponents.QuantityLabel>Qtd</StyledComponents.QuantityLabel>
               </StyledComponents.QuantityWrapper>

               <StyledComponents.QuantityWrapper>
                  <StyledComponents.StyledButton
                     onClick={() => {
                        dispatch(Actions.changeProductQuantity(product, +1));
                        setLocalQuantity(localQuantity + 1);
                     }}
                  >
                     {" + "}
                  </StyledComponents.StyledButton>
                  <StyledComponents.StyledButton
                     onClick={() => {
                        dispatch(Actions.changeProductQuantity(product, -1));
                        setLocalQuantity(localQuantity - 1);
                     }}
                  >
                     {" - "}
                  </StyledComponents.StyledButton>
               </StyledComponents.QuantityWrapper>
            </StyledComponents.RightmostWrapper>
            <StyledComponents.StyledButton onClick={() => dispatch(Actions.removeProductToCart(product))}>
               Remover
            </StyledComponents.StyledButton>
         </StyledComponents.FinalRightWrapper>
      </StyledComponents.Card>
   );
};

export default ProductCard;
