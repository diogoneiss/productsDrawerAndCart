import React from 'react';
import {useSelector} from 'react-redux';
import { RootState } from '../../Store'
import CartItem from './components/cartItem';
import CartGrid from './components/cartGrid';
import Logo from '../../logo.svg';
import Data from '../../data/abaixo-10-reais.json';
import HeadingText from './components/headingText';
import {ProductType} from '../../types'
import Navbar from '../../components/navbar';

const Cart = () => {




    const cartArray = useSelector((state:RootState) => state.cartReducer.products);
    console.log(cartArray);


//mapeia um card para cada item no array, usando desestruturação, já que sei o tipo de objeto
const IteradorProdutos = () => {
    return (
        <>

        {
         cartArray !== undefined && cartArray.map((item, key) => 
         <CartItem {...item} key={key} /> 
        )
        }

        </>
    )
}



return (
   <React.Fragment>
       <Navbar linkPath="/" buttonText="Voltar para produtos" showNumberOfItens={false} />
<HeadingText/>
<CartGrid>
    <IteradorProdutos />
       
    </CartGrid>
   </React.Fragment>
)
}

export default Cart;