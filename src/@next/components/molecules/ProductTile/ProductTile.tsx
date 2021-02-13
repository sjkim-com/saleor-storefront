import React from "react";

import { IMoney, ITaxedMoney } from "@types";

import { TaxedMoney } from "@components/containers";
import { Thumbnail } from "@components/molecules";
import { ISource as IThumbnailSource } from "@components/molecules/Thumbnail/types";

import {
  ProductDetails_product_thumbnail,
  ProductDetails_product_thumbnail2x,
} from "@saleor/sdk/lib/queries/gqlTypes/ProductDetails";

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
    amount: product?.sale_price !== undefined ? product.sale_price : 0,
    // 通貨コード
    currency: DEFAULT_CURRENCY,
  };

  // 通常価格
  const priceUndiscounted: ITaxedMoney = {
    // 価格(税込み)
    gross: money,
    // 価格(税抜き)
    net: money,
  };

  // 商品画像
  const pmsProductImage =
    product?.pms_productimgs.length > 0 ? product?.pms_productimgs[0] : null;

  // 画像URL
  let imageUrl = pmsProductImage?.img;
  if (imageUrl === null || imageUrl === undefined) {
    imageUrl = "";
  }

  const thumbnail: ProductDetails_product_thumbnail = {
    __typename: "Image",
    url: imageUrl,
    alt: null,
  };
  const thumbnail2x: ProductDetails_product_thumbnail2x = {
    __typename: "Image",
    url: imageUrl,
  };
  const thumbnailSource: IThumbnailSource = {
    thumbnail,
    thumbnail2x,
  };

  return (
    <S.Wrapper>
      <S.Title data-test="productTile">{product.name}</S.Title>
      <S.Price data-test="productPrice">
        {/* <TaxedMoney taxedMoney={price} /> */}
        <TaxedMoney taxedMoney={priceUndiscounted} defaultValue="0" />
      </S.Price>
      <S.Image data-test="productThumbnail">
        <Thumbnail source={thumbnailSource} />
      </S.Image>
    </S.Wrapper>
  );
};
