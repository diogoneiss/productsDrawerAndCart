import styled from 'styled-components';

export const Card = styled.div`
display: flex;
    flex-direction: row;
    justify-content: space-between;
    
  
border-width: 2px;

margin: 1rem;
text-align: center;
padding: 1rem;
max-height: 150px;

`;


export const MiddleWrapper = styled.div`
    margin-left: 3em;

`;
/**
 *     display: flex;
    flex-direction: column;
    justify-content: flex-start;

    
    align-items: flex-start; 


    flex-wrap: wrap;
    text-align: left;
 */
export const TitleText = styled.h2`
font-size: 1.2rem;
font-weight: 500;
`

export const NewPriceText = styled.p`
display: flex;
    font-size: 1rem;
    font-family: sans-serif;
    font-weight: 400;
    margin: 20px auto 0;
    bottom: 1rem;
`;

export const OldPriceText = styled.p`
  display: flex;

font-size: 0.9rem;
color: darkgray;
font-family: sans-serif;
    font-weight: 200;
   
    
    margin: 20px auto 0;

    bottom: 1rem;
`;


export const DescriptionText = styled.p`
 font-size: 0.7vw;

`
export const UpperWrapper = styled.div`
align-items: center;
display: flex;
flex-direction: row;
justify-content: center;

`;
export const BottomWrapper = styled.div`
display: flex;
align-self: flex-end;
flex-direction: row;
justify-content: center;
margin-left: 1em;

`;


export const IncreaseWrapper = styled.div`
margin-left: 1em;
display: flex;
align-self: flex-end;
    flex-direction: column;
    justify-content: center;
`;







export const StyledButton = styled.button`
font-size:0.6rem;
border: none;
outline: 0;
padding: 5px;
color: white;
background-color: green;
text-align: center;
cursor: pointer;
margin: 1em 1em;
position: relative;
align-self: flex-end;


:hover {
    opacity: 0.7;
}
`;

export const ProductImage = styled.img`
src: ${props => props.src};
position: relative;
height: 80%;
max-height: 150px;
`;