import React from "react";

import { IMoney, ITaxedMoney } from "@types";

import { TaxedMoney } from "@components/containers";
import { Thumbnail } from "@components/molecules";

import * as S from "./styles";
import { IProps } from "./types";

const DEFAULT_CURRENCY = "JPY";

export const ProductTile: React.FC<IProps> = ({ product }: IProps) => {
  // const price =
  //   product.pricing &&
  //   product.pricing.priceRange &&
  //   product.pricing.priceRange.start
  //     ? product.pricing.priceRange.start
  //     : undefined;

  // 金額
  const money: IMoney = {
    // 価格
    amount: product.sale_price,
    // 通貨コード
    currency: DEFAULT_CURRENCY,
  };

  // 割引価格
  const price: ITaxedMoney = {
    // 価格(税込み)
    gross: money,
    // 価格(税抜き)
    net: money,
  };

  // 通常価格
  const priceUndiscounted: ITaxedMoney = {
    // 価格(税込み)
    gross: money,
    // 価格(税抜き)
    net: money,
  };

  return (
    <S.Wrapper>
      <S.Title data-test="productTile">{product.name}</S.Title>
      <S.Price data-test="productPrice">
        {/* <TaxedMoney taxedMoney={price} /> */}
        <TaxedMoney taxedMoney={priceUndiscounted} defaultValue="0" />
      </S.Price>
      <S.Image data-test="productThumbnail">
        <Thumbnail source={product} />
      </S.Image>
    </S.Wrapper>
  );
};
