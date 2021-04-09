import styled from "styled-components";

export const Card = styled.div`
  display: flex;

  

  @media (max-width:576px) {
      display: flex;
      flex-direction: column;
  }
`;

export const UpperWrapper = styled.div`
   display: flex;
   width: 70%;
   gap: 1em;

   @media (max-width:576px) {
      width: 100%;
      justify-content: space-around;
  }
`;

export const MiddleWrapper = styled.div`
   display: flex;

   flex-direction: column;
   justify-content: center;
`;

export const TitleText = styled.span`

   font-size: 1em;
   font-weight: 700;
   text-align: left;
@media (max-width:576px) {
      font-size: 0.8em;
  }
`;

export const NewPriceText = styled.span`

   margin-top: 0.1em;
   font-size: 1rem;
   font-weight: 700;
   font-family: sans-serif;
`;

export const OldPriceText = styled.span`

   margin-top: 0.3em;
   font-size: 0.8em;
   color: darkgray;
   font-family: sans-serif;
`;


export const RightmostWrapper = styled.div`
   display: flex;

   flex-direction: row;
   justify-content: center;
   gap: 1em;
   margin-bottom: .5em;
`;

export const QuantityBox = styled.div`
   text-align: center;
   font-size: 1.2em;

`;

export const QuantityLabel = styled.label`
   font-size: 0.7em;
   font-weight: normal;
   display: inline-block;
   margin-bottom: auto;
   align-self: center;
   
`;

export const FinalRightWrapper = styled.div`
   flex: 1;
   display: flex;

   flex-direction: column;
   justify-content: space-evenly;
`;

export const QuantityWrapper = styled.div`

   display: flex;

   flex-direction: column;

`;

export const StyledButtonQuantity = styled.button`
   font-size: 0.8em;
   border-radius: 0.8em;
   border: none;
   outline: 0;
   padding: 0.5em;
   color: white;
   background-color: green;
   text-align: center;
   cursor: pointer;
   margin-bottom: 5px;
`;

export const StyledButton = styled.button`
   font-size: 0.8em;
   border-radius: 0.8em;
   border: none;
   outline: 0;
   padding: 0.5em 1em;
   color: white;
   background-color: green;

   cursor: pointer;

    margin: 0 auto;
    margin-bottom: 1em;


:hover {
      opacity: 0.7;
   }
`;

export const ProductImage = styled.img`
   src: ${(props) => props.src};

   height: 80%;


   max-height: 150px;

   margin-left: 1em;
   border-style: solid;
   border-width: 1px;
   border-color: darkgrey;
   margin: 1em;
   @media (max-width:576px) {
      
  }
`;
