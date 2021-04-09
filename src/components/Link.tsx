import React, { Children } from "react";
import { Link } from "react-router-dom";

// import { Container } from './styles';

type PropTypes = {
   children: React.ReactNode;
   destination: string;
};

const styledJson = {
   color: "inherit",
   margin: "inherit",
   textDecoration: "none",
};

//estilizacao do component Link, tirando o estilo padrão
const LinkComponent: React.FC<PropTypes> = ({ children, destination }) => {
   return (
      <Link style={styledJson} to={destination}>
         {children}
      </Link>
   );
};

export default LinkComponent;
