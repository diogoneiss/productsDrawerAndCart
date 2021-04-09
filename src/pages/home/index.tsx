import React from "react";
import ProductCard from "./components/productCard";
import ProductGrid from "./components/productGrid";
import Logo from "../../logo.svg";
import DataAbaixo from "../../data/abaixo-10-reais.json";
import DataAcima from "../../data/acima-10-reais.json";
import HeadingText from "./components/headingText";
import { ProductType } from "../../types";
import Navbar from "../../components/navbar";

const Home = () => {
   let productArray: Array<ProductType> = [];
   const crudeJsonAcima = DataAcima.items;
   const crudeJsonAbaixo = DataAbaixo.items;

   //juntar no array
   for (let i = 0; i < crudeJsonAcima.length; i++) {
      //coloco 1 de quantidade pq não faz sentido colocar a mesma do json, já que estou fazendo o grid de produtos
      productArray.push({
         name: crudeJsonAcima[i].name,
         price: Number(crudeJsonAcima[i].price) / 100,
         sellingPrice: Number(crudeJsonAcima[i].sellingPrice / 100),
         description: JSON.stringify(Object.values(crudeJsonAcima[i].productCategories)),
         img: crudeJsonAcima[i].imageUrl,
         id: crudeJsonAcima[i].id,
         quantity: 1,
      });
   }
   //juntar no array agora o segundo json
   for (let i = 0; i < crudeJsonAbaixo.length; i++) {
      //coloco 1 de quantidade pq não faz sentido colocar a mesma do json, já que estou fazendo o grid de produtos
      productArray.push({
         name: crudeJsonAbaixo[i].name,
         price: Number(crudeJsonAbaixo[i].price) / 100,
         sellingPrice: Number(crudeJsonAbaixo[i].sellingPrice / 100),
         description: JSON.stringify(Object.values(crudeJsonAbaixo[i].productCategories)),
         img: crudeJsonAbaixo[i].imageUrl,
         id: crudeJsonAbaixo[i].id,
         quantity: 1,
      });
   }
   console.log(productArray);
   //mapeia um card para cada item no array, usando desestruturação, já que sei o tipo de objeto
   const IteradorProdutos = () => {
      return (
         <>
            {productArray.map((item, key) => (
               <ProductCard product={item} key={item.id.toString()} />
            ))}
         </>
      );
   };

   return (
      <React.Fragment>
         <Navbar />
         <HeadingText />
         <ProductGrid>
            <IteradorProdutos />
         </ProductGrid>
      </React.Fragment>
   );
};

export default Home;
