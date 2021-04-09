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
   border-style: solid;
   border-width: 0 0 1px 0;
   border-color: darkgrey;
   padding: 1em;
`;

export const TextArea = styled.p`
   font-size: 1.3em;
   font-weight: bold;
   text-align: center;
   margin: 5em 0;
`;

export const LastButton = styled.button`
   font-size: 2em;
   font-weight: bold;
   position: relative;
   margin: 2em;
   cursor: pointer;
   padding: 1em;
   border: 0;
   background-color: green;
   color: white;
   font-size: 1.3em;
   border-radius: 0.4em;

   :hover {
      background-color: darkgreen;
   }
`;
