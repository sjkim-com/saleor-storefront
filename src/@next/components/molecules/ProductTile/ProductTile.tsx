import React from "react";

import { TaxedMoney } from "@components/containers";
import { Thumbnail } from "@components/molecules";

import * as S from "./styles";
import { IProps } from "./types";

export const ProductTile: React.FC<IProps> = ({ product }: IProps) => {
  // const price =
  //   product.pricing &&
  //   product.pricing.priceRange &&
  //   product.pricing.priceRange.start
  //     ? product.pricing.priceRange.start
  //     : undefined;

  const price = product.sale_price;
  
  return (
    <S.Wrapper>
      <S.Title data-test="productTile">{product.name}</S.Title>
      <S.Price data-test="productPrice">
        {/* <TaxedMoney taxedMoney={price} /> */}
        <TaxedMoney taxedMoney={price} defaultValue="0" />
      </S.Price>
      <S.Image data-test="productThumbnail">
        <Thumbnail source={product} />
      </S.Image>
    </S.Wrapper>
  );
};
