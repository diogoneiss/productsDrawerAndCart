import styled from "styled-components";

export const Card = styled.div`
   display: flex;
   font-weight: bold;
   flex-direction: row;
   justify-content: space-between;

   text-align: center;
   padding: 1rem;
   max-height: 150px;
`;

export const MiddleWrapper = styled.div`
   display: flex;
   margin-left: 2em;
   flex-direction: column;
   justify-content: flex-start;

   align-items: flex-start;
`;
/**
 *     display: flex;
    flex-direction: column;
    justify-content: flex-start;

    
    align-items: flex-start; 


    flex-wrap: wrap;
    text-align: left;
 */
export const TitleText = styled.span`
   display: flex;
   font-size: 1em;
   font-weight: 700;
   text-align: left;
`;

export const NewPriceText = styled.span`
   display: flex;
   margin-top: 0.1em;
   font-size: 1rem;
   font-family: sans-serif;
`;

export const OldPriceText = styled.span`
   display: flex;
   margin-top: 0.3em;
   font-size: 0.8em;
   color: darkgray;
   font-family: sans-serif;
`;

export const UpperWrapper = styled.div`
   align-items: center;
   display: flex;
   flex-direction: row;
   justify-content: center;
`;

export const RightmostWrapper = styled.div`
   display: flex;
   align-self: flex-end;
   flex-direction: row;
   justify-content: center;
   margin-left: 1em;
`;

export const QuantityBox = styled.input`
   display: inline-block;
   max-width: 2em;
   max-height: 2em;
   font-size: 1.2em;
   margin-top: 0px;
`;

export const QuantityLabel = styled.label`
   font-size: 0.6em;
   font-weight: normal;
   display: inline-block;
   margin-bottom: auto;
   align-self: center;
`;

export const FinalRightWrapper = styled.div`
   margin-left: 1em;
   display: flex;
   align-self: flex-end;
   flex-direction: column;
   justify-content: center;
`;

export const QuantityWrapper = styled.div`
   margin-left: 1em;
   display: flex;
   align-self: center;
   flex-direction: column;
   justify-content: center;
`;

export const PlusAndMinusWrapper = styled.div`
   margin-left: 1em;
   display: flex;
   align-self: flex-end;
   flex-direction: column;
   justify-content: center;
`;

export const StyledButton = styled.button`
   font-size: 0.8em;
   border-radius: 0.8em;
   border: none;
   outline: 0;
   padding: 0.5em;
   color: white;
   background-color: green;
   text-align: center;
   cursor: pointer;
   margin-bottom: 1em;
   position: relative;
   align-self: flex-end;

   :hover {
      opacity: 0.7;
   }
`;

export const ProductImage = styled.img`
   src: ${(props) => props.src};
   position: relative;
   height: 80%;
   max-height: 150px;
   border-style: solid;
   border-width: 1px;
   border-color: darkgrey;
`;
