import React from "react";

import { Switch, Route } from "react-router-dom";
import Home from "./pages/home";
import Cart from "./pages/cart";
import NotFound from "./pages/notFound";
import Checkout from "./pages/checkout";

const Routes = () => {
   /*
   const dispatch = useDispatch();
   useEffect(() => {
      //colocaria aqui a chamada da api para recuperação dos produtos.
      //como não a possuo, vou apenas enviar os jsons para um banco de dados
      //combinado no redux.
   }, []);
   */

   return (
      <div>
         <Switch>
            <Route path="/" exact={true} component={() => <Home />} />
            <Route path="/carrinho" exact={true} component={() => <Cart />} />
            <Route path="/checkout" exact={true} component={() => <Checkout />} />
            <Route path="*" component={() => <NotFound />} />
         </Switch>
      </div>
   );
};

export default Routes;
