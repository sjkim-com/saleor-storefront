import React from "react";

import { Money } from "../Money";
import { IProps } from "./types";

// import { ShopContext } from "../../../../components/ShopProvider/context";

export const TaxedMoney: React.FC<IProps> = ({
  taxedMoney,
  defaultValue,
  ...props
}: IProps) => {
  // const { displayGrossPrices } = React.useContext(ShopContext);
  // const money = taxedMoney
  //   ? displayGrossPrices
  //     ? taxedMoney.gross
  //     : taxedMoney.net
  //   : undefined;

  // true : 税込み価格、false : 税抜き価格
  const isGross = false;

  return (
    <Money
      {...props}
      isGross={isGross}
      money={taxedMoney}
      defaultValue={defaultValue}
    />
  );
};

TaxedMoney.displayName = "TaxedMoney";
export default TaxedMoney;
