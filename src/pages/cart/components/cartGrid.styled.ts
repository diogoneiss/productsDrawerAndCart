
import styled from 'styled-components';

export const WrapperContainer = styled.div`
display: flex;
align-items: stretch;
flex-direction: column;
flex-wrap: wrap;
margin: 5em auto;
width: 100%;
max-width: 850px;
	
	border: 1px 0 solid #ccc;
	border-radius: 0.3em;
	box-shadow: 0 1px 1px black;

`;
export const CartItemRepeater = styled.div`
display: flex;
align-items: stretch;
flex-direction: column;
flex-wrap: wrap;

width: 100%;
	
	border: 1px 0 solid #ccc;
	border-radius: 0.3em;


`;
export const TotalWrapper = styled.div`
position: relative;
display: flex;
align-items: stretch;
flex-direction: column;
flex-wrap: wrap;
margin: 0 auto;
width: 100%;

	
border: 1px 0 solid #ccc;

`;
export const TotalSubWrapper = styled.div`
display: flex;
align-items: flex-start;
flex-direction: row;
flex-wrap: wrap;
margin: 0 auto;
width: 100%;

	
border: 1px 0 solid #ccc;

`;



export const LastButton = styled.button`
position: relative;
margin: 2em;
width: 100%;
padding: 1em;
border: 0;
background-color: blue;
color: white;
font-size: 1.3em;
border-radius: 0.4em;
`;

