import React from 'react';

// import { Container } from './styles';

type PriceType = {
  price?: number
}

const Price: React.FC<PriceType> = ({price}) => {
    if(price === undefined || price <= 0)
        return <>R$ 0 </>
        
  return <>R${" " +price.toFixed(2).toString().replace(".", ",")}</>;
}

export default Price;