import React from "react";
import * as StyledComponents from "./cartGrid.styled";
import {emptyCart} from '../../../actions/cartActions';
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../app/store";
type ComponentProps = {
   children?: React.ReactNode;
};

const ProductGrid: React.FC<ComponentProps> = ({ children }) => {
    const dispatch = useDispatch();
    const valorTotal:number = useSelector((state:RootState) => state.cartReducer.totalPrice);
    const formatedValue = valorTotal?.toPrecision(4);
   return (
      <StyledComponents.WrapperContainer>
          <StyledComponents.HeaderArea>
              Meu carrinho
          </StyledComponents.HeaderArea>
         <StyledComponents.CartItemRepeater>{children }</StyledComponents.CartItemRepeater>
         <StyledComponents.TotalWrapper>
            <StyledComponents.TotalSubWrapper>
               <StyledComponents.TotalText>Total </StyledComponents.TotalText>
               <StyledComponents.PriceText>R$ {formatedValue?.toString()?.replace(".", ",") || "0,00"}</StyledComponents.PriceText>
            </StyledComponents.TotalSubWrapper>
          { valorTotal > 12.00 &&  <StyledComponents.ParabensBox>Parabéns, sua compra tem frete grátis!</StyledComponents.ParabensBox> }
         </StyledComponents.TotalWrapper>

         <StyledComponents.LastButton onClick={() => dispatch(emptyCart())}>Finalizar compra</StyledComponents.LastButton>
      </StyledComponents.WrapperContainer>
   );
};

export default ProductGrid;
