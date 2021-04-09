import React from "react";
import * as StyledComponents from "./cartGrid.styled";
import { emptyCart } from "../../../actions/cartActions";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../../Redux/hooks";
import { useHistory } from "react-router";
import Price from "../../../components/priceFormatter";

type ComponentProps = {
   children?: React.ReactNode;
};

const ProductGrid: React.FC<ComponentProps> = ({ children }) => {
   const dispatch = useDispatch();
   const history = useHistory();
   const valorTotal = useAppSelector((state) => state.cartReducer.totalPrice);



   return (
      <StyledComponents.WrapperContainer>
         <StyledComponents.HeaderArea>Meu carrinho</StyledComponents.HeaderArea>
         <StyledComponents.CartItemRepeater>{children}</StyledComponents.CartItemRepeater>
         <StyledComponents.TotalWrapper>
            <StyledComponents.TotalSubWrapper>
               <StyledComponents.TotalText>Total </StyledComponents.TotalText>
               <StyledComponents.PriceText>
               <Price price={valorTotal} />
               </StyledComponents.PriceText>
            </StyledComponents.TotalSubWrapper>
            {valorTotal > 10.0 && (
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
