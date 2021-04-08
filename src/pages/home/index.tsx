import React from 'react';
import ProductCard from './components/productCard';
import ProductGrid from './components/productGrid';
import Logo from '../../logo.svg';
import Data from '../../data/abaixo-10-reais.json';

const Home = () => {


    type Product = {
        title: String,
        description?: String,
         price : number, 
         img ?: string 
        }

let productArray:Array<Product> = [];
const crudeJson = Data.items;

//juntar no array
for(let i = 0; i < crudeJson.length; i++){
    productArray.push({
        title: crudeJson[i].name,
        price: Number(crudeJson[i].price)/1000,
        description: JSON.stringify((Object.values(crudeJson[i].productCategories))),
        img: crudeJson[i].imageUrl
    })
}




console.log(productArray);
console.log(typeof productArray);

const IteradorProdutos = () => {
    return (
        <>

        {
         productArray.map((item, key) => 
         <ProductCard title={item.title} price={item.price} description={item.description} img={item.img} /> 
        )
        }

        </>
    )
}



return (
   <React.Fragment>

<ProductGrid>
    <IteradorProdutos />
        <ProductCard title={"Título"} price={1000} />
        <ProductCard title={"Título"} price={1000} />
        <ProductCard title={"Título"} price={1000} />
        <ProductCard title={"Título"} price={1000} />
    </ProductGrid>
   </React.Fragment>
)
}

export default Home;