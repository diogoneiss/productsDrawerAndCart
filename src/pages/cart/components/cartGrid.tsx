import React from "react";
import * as StyledComponents from "./cartGrid.styled";
import { emptyCart } from "../../../actions/cartActions";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../../Redux/hooks";
import { useHistory } from "react-router";

type ComponentProps = {
   children?: React.ReactNode;
};

const ProductGrid: React.FC<ComponentProps> = ({ children }) => {
   const dispatch = useDispatch();
   const history = useHistory();
   const valorTotal = useAppSelector((state) => state.cartReducer.totalPrice);
   const formatedValue = valorTotal?.toPrecision(4);

   const ShowTotalValue = () => {
      if (valorTotal <= 0) {
         return <>R$ 0</>;
      }
      return <>R$ {formatedValue?.toString()?.replace(".", ",")}</>;
   };

   return (
      <StyledComponents.WrapperContainer>
         <StyledComponents.HeaderArea>Meu carrinho</StyledComponents.HeaderArea>
         <StyledComponents.CartItemRepeater>{children}</StyledComponents.CartItemRepeater>
         <StyledComponents.TotalWrapper>
            <StyledComponents.TotalSubWrapper>
               <StyledComponents.TotalText>Total </StyledComponents.TotalText>
               <StyledComponents.PriceText>
                  <ShowTotalValue />
               </StyledComponents.PriceText>
            </StyledComponents.TotalSubWrapper>
            {valorTotal > 12.0 && (
               <StyledComponents.ParabensBox>Parabéns, sua compra tem frete grátis!</StyledComponents.ParabensBox>
            )}
         </StyledComponents.TotalWrapper>

         <StyledComponents.LastButton
            onClick={() => {
               dispatch(emptyCart());
               history.push("/checkout");
            }}
         >
            Finalizar compra
         </StyledComponents.LastButton>
      </StyledComponents.WrapperContainer>
   );
};

export default ProductGrid;
