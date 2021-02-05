import React from "react";
// import { IProps } from "./types";
export interface IProps {
  money?: {
    price_amount: number;
    currency: string;
  } | null;
  defaultValue?: string;
}

export const Money: React.FC<IProps> = ({
  money,
  defaultValue,
  ...props
}: IProps) => {
  if (!money) {
    // return <span {...props}>{defaultValue}</span>;
    return (
      <span {...props}>
        {parseInt(defaultValue, 10).toLocaleString(undefined, {
          currency: "JPY",
          style: "currency",
        })}
      </span>
    );
  }
  return (
    // <span {...props}>
    //   {money.currency && money.currency !== ""
    //     ? money.price_amount.toLocaleString(undefined, {
    //         currency: money.currency,
    //         style: "currency",
    //       })
    //     : money.price_amount.toString()}
    // </span>
    <span {...props}>
      {
        /* {money.currency && money.currency !== ""
          ? money.price_amount.toLocaleString(undefined, {
              currency: money.currency,
              style: "currency",
            })
          : money.price_amount.toString()} */
        money.toLocaleString(undefined, {
          currency: "JPY",
          style: "currency",
        })
      }
    </span>
  );
};

Money.displayName = "Money";
export default Money;
