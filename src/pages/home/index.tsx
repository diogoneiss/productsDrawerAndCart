import React from 'react';
import ProductCard from './components/productCard';
import ProductGrid from './components/productGrid';
import Logo from '../../logo.svg';
import Data from '../../data/abaixo-10-reais.json';
import HeadingText from './components/headingText';
import {ProductType} from '../../types'
const Home = () => {




let productArray:Array<ProductType> = [];
const crudeJson = Data.items;

//juntar no array
for(let i = 0; i < crudeJson.length; i++){
    //coloco 1 de quantidade pq não faz sentido colocar a mesma do json, já que estou fazendo o grid de produtos
    productArray.push({
        title: crudeJson[i].name,
        price: Number(crudeJson[i].price)/100,
        description: JSON.stringify((Object.values(crudeJson[i].productCategories))),
        img: crudeJson[i].imageUrl,
        id: crudeJson[i].id,
        quantity: 1
    })
}

//mapeia um card para cada item no array, usando desestruturação, já que sei o tipo de objeto
const IteradorProdutos = () => {
    return (
        <>

        {
         productArray.map((item, key) => 
         <ProductCard {...item} /> 
        )
        }

        </>
    )
}



return (
   <React.Fragment>
<HeadingText/>
<ProductGrid>
    <IteradorProdutos />
        <ProductCard title={"Título"} price={1000}  id={"1"} quantity={1} />
        <ProductCard title={"Título"} price={1000}  id={"1"}  quantity={1}  />
        <ProductCard title={"Título"} price={1000}  id={"1"}   quantity={1}  />
        <ProductCard title={"Título"} price={1000} id={"1"}  quantity={1}  />
    </ProductGrid>
   </React.Fragment>
)
}

export default Home;