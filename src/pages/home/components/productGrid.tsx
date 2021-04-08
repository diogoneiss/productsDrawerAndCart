import React from "react";
import * as StyledComponents from "./productGrid.styled";

type ComponentProps = {
   children?: React.ReactNode;
};

const ProductGrid: React.FC<ComponentProps> = ({ children }) => {
   return <StyledComponents.WrapperContainer>{children}</StyledComponents.WrapperContainer>;
};

export default ProductGrid;
