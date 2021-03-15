import { useCart } from "@saleor/sdk";
import React from "react";

import { Container } from "../Container";

import * as S from "./styles";
import { IProps } from "./types";

// EC Intelligence : Recommendサンプル用
import {
  RecommendType,
  IRecommendRequest,
  Recommend,
} from "../../../../components/Recommend";

/**
 * Cart template for cart page with list of products added by user.
 */
const Cart: React.FC<IProps> = ({
  breadcrumbs,
  title,
  cartHeader,
  cartFooter,
  cart,
  button,
}: IProps) => {
  const { items } = useCart();
  // EC Intelligence : Recommendサンプル用
  const recommendRequest: IRecommendRequest = {
    recommendType: RecommendType.VIEW,
    htmlTemplateId: "1",
    htmlTagId: "include_recommend_sample",
    // ProductIdを指定。
    itemIds: [],
    recommendLimitCount: 12,
  };

  if (items?.length) {
    items.forEach(item => {
      const productId = item?.variant?.product?.id;
      if (productId) {
        recommendRequest.itemIds.push(productId);
      }
    });
  }

  return (
    <Container>
      <S.Wrapper>
        <S.Breadcrumbs>{breadcrumbs}</S.Breadcrumbs>
        <S.Title>{title}</S.Title>
        <S.CartHeader>{cartHeader}</S.CartHeader>
        <S.Cart>{cart}</S.Cart>
        <S.CartFooter>{cartFooter}</S.CartFooter>
        <S.ProceedButton>{button}</S.ProceedButton>
        <S.Recommend>
          <Recommend request={recommendRequest} />
        </S.Recommend>
      </S.Wrapper>
    </Container>
  );
};

export { Cart };
