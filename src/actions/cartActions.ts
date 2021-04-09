import React, { Dispatch } from "react";
import { AnyAction } from "redux";
import thunk from "redux-thunk";
import { ACTION_TYPES } from "../reducers/cartReducer";
import { ProductType } from "../types";

const addProductAction = (payload: ProductType) => {
   return {
      type: ACTION_TYPES.ADD_TO_CART,
      payload,
   };
};

export const addProductToCart = (product: ProductType) => (
   dispatch: (arg0: { type: string; payload: ProductType }) => void,
) => {
   try {
      console.log("Adiconado ao carrinho: ");

      console.log(product);
      if (product.id === undefined || product.id === null) throw Error("Id do produto em branco.");

      dispatch(addProductAction(product));
   } catch (e: any) {
      alert(e.message);
   }
};

export default addProductToCart;
