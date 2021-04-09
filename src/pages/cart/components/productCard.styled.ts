import styled from "styled-components";

export const Card = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: space-between;

   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
   max-width: 300px;
   margin: 1rem;
   text-align: center;
   font-family: poppins, sans-serif;
`;

export const TitleText = styled.p`
   font-size: 1.3vw;
   font-weight: 500;
   text-transform: uppercase;
`;

export const DescriptionText = styled.p`
   font-size: 1.2vw;
`;
export const UpperWrapper = styled.div`
   align-items: center;
   display: flex;
   flex-direction: column;
   justify-content: center;
`;
export const BottomWrapper = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
`;

export const PriceText = styled.p`
   font-size: 1vw;
   font-family: sans-serif;
   font-weight: 400;
   display: block;
   max-width: 90%;
   margin: 20px auto 0;
   position: relative;
   bottom: 1rem;
`;
/**
 * 
    ::after, ::before{
     content: '';
      height: 1px;
      width: 10%;
      display: block;
      position: absolute;
      background-color: #ddd;
      top: 0.5em;
    }
    ::before {
        left: 5%;
    }
    ::after {
        right: 5%;
    }
 */
export const AddToCartButton = styled.button`
   font-size: 0.7vw;
   border: none;
   outline: 0;
   padding: 12px;
   color: white;
   background-color: green;
   text-align: center;
   cursor: pointer;
   width: 80%;
   margin: 1em auto;
   display: block;
   overflow: hidden;
   position: relative;

   :hover {
      opacity: 0.7;
   }
`;

export const ProductImage = styled.img`
   src: ${(props) => props.src};
   position: relative;
   width: 80%;
   border-radius: 50px;
`;
