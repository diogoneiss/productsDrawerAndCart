import React from "react";
import Navbar from "../../components/navbar";
import styled from "styled-components";
// import { Container } from './styles';

const NotFound: React.FC = () => {
   return (
      <React.Fragment>
         <Navbar buttonText="Voltar para home" linkPath="/" showNumberOfItens={false} />
         <h1 style={{ textAlign: "center" }}>Ops! Página não encontrada..</h1>
      </React.Fragment>
   );
};

export default NotFound;
