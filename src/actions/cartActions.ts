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
const removeProductAction = (payload: ProductType) => {
   return {
      type: ACTION_TYPES.REMOVE_FROM_CART,
      payload,
   };
};
const editProductQuantity = (product: ProductType, change: number) => {
   return {
      type: ACTION_TYPES.CHANGE_QUANTITY,
      payload: { product: product, change: change },
   };
};
export const emptyCart = () => {
   return {
      type: ACTION_TYPES.EMPTY_CART,
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

export const removeProductToCart = (product: ProductType) => (
   dispatch: (arg0: { type: string; payload: ProductType }) => void,
) => {
   try {
      console.log("Removendo do carrinho: ");

      console.log(product);
      if (product.id === undefined || product.id === null) throw Error("Id do produto em branco.");

      dispatch(removeProductAction(product));
   } catch (e: any) {
      alert(e.message);
   }
};

export const changeProductQuantity = (product: ProductType, change: number) => (
   dispatch: (arg0: { type: string; payload: { product: ProductType; change: number } }) => void,
) => {
   try {
      console.log("Modificando no carrinho: ");

      console.log(product);
      if (product.id === undefined || product.id === null) throw Error("Id do produto em branco.");

      dispatch(editProductQuantity(product, change));
   } catch (e: any) {
      alert(e.message);
   }
};

export default addProductToCart;
