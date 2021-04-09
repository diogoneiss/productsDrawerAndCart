import styled from "styled-components";

export const WrapperContainer = styled.div`
   background-color: white;
   display: flex;
   align-items: stretch;
   flex-direction: column;
   flex-wrap: wrap;
   margin: 5em auto;

   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

   max-width: 550px;

   border-radius: 0.5em;
`;

export const HeaderArea = styled.h1`
   font-size: 2em;
   font-weight: bold;
   text-align: center;
   margin-bottom: 0.6em;
`;

export const CartItemRepeater = styled.div`
   display: flex;
   align-items: stretch;
   flex-direction: column;
   flex-wrap: wrap;

   border-style: solid;
   border-width: 1px 0;
   border-color: darkgrey;
`;
export const TotalWrapper = styled.div`
   font-size: 1.5em;
   font-weight: bold;
   position: relative;
   display: flex;
   align-items: center;
   align-self: stretch;
   flex-direction: column;
   justify-content: center;
   flex-wrap: wrap;
   margin: 0 auto;

   border-style: solid;
   border-width: 0 0 1px 0;
   border-color: darkgrey;
   width: 100%;
`;
export const TotalSubWrapper = styled.div`
   padding: 1em;

   display: flex;
   flex-direction: row;
   align-content: flex-start;

   width: 90%;
`;

export const TotalText = styled.span`
   display: flex;
   align-self: flex-start;
`;
export const PriceText = styled.span`
   display: flex;
   margin-left: auto;
`;
export const ParabensBox = styled.div`
   font-size: large;
   padding: 1em;
   border-radius: 1em;
   color: darkgreen;
   background-color: lightgreen;
   margin-bottom: 1em;
`;
export const LastButton = styled.button`
   font-size: 2em;
   font-weight: bold;
   position: relative;
   margin: 2em;

   padding: 1em;
   border: 0;
   background-color: blue;
   color: white;
   font-size: 1.3em;
   border-radius: 0.4em;

   :hover {
      background-color: darkblue;
   }
`;
