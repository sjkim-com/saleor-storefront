import React from "react";
// import { IProps } from "./types";

import { ITaxedMoney } from "@types";

const DEFAULT_CURRENCY = "JPY";
export interface IProps {
  isGross?: boolean;
  money?: ITaxedMoney | null;
  defaultValue?: string | null;
}

export const Money: React.FC<IProps> = ({
  isGross,
  money,
  defaultValue,
  ...props
}: IProps) => {
  let currency = DEFAULT_CURRENCY;
  const style = "currency";

  if (!money) {
    if (!defaultValue) {
      defaultValue = "0";
    }

    // return <span {...props}>{defaultValue}</span>;
    return (
      <span {...props}>
        {parseInt(defaultValue, 10).toLocaleString(undefined, {
          currency,
          style,
        })}
      </span>
    );
  }

  const { net, gross } = money;

  // 価格(税抜き)
  let { amount } = net;

  // 通貨コード(税抜き)
  currency = net?.currency;

  // 税込みをチェック
  if (isGross) {
    // 価格(税込み)
    amount = gross?.amount;

    // 通貨コード(税込み)
    currency = gross?.currency;
  }

  amount = amount === undefined ? 0 : amount;
  currency = currency === undefined ? DEFAULT_CURRENCY : currency;

  return (
    /*
    <span {...props}>
      {money.currency && money.currency !== ""
        ? money.price_amount.toLocaleString(undefined, {
            currency: money.currency,
            style,
          })
        : money.price_amount.toString()}
    </span>
    */
    <span {...props}>
      {
        /*
        {money.currency && money.currency !== ""
          ? money.price_amount.toLocaleString(undefined, {
              currency: money.currency,
              style,
            })
          : money.price_amount.toString()}
        */

        /*
        money.toLocaleString(undefined, {
          currency,
          style,
        })
        */

        amount.toLocaleString(undefined, {
          currency,
          style,
        })
      }
    </span>
  );
};

Money.displayName = "Money";
export default Money;
