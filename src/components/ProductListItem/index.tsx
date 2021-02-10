import "./scss/index.scss";

import isEqual from "lodash/isEqual";
import * as React from "react";

import { Thumbnail } from "@components/molecules";

import { IMoney, ITaxedMoney } from "@types";

import { TaxedMoney } from "../../@next/components/containers";

import { FeaturedProducts_site_sitesettings_connection_edges_node_product_collection_product_collectionproducts_product_product } from "../ProductsFeatured/gqlTypes/FeaturedProducts";

interface ProductListItemProps {
  product: FeaturedProducts_site_sitesettings_connection_edges_node_product_collection_product_collectionproducts_product_product;
}

const ProductListItem: React.FC<ProductListItemProps> = ({ product }) => {
  // const { category } = product;
  // const price = product.pricing?.priceRange?.start;
  // const priceUndiscounted = product.pricing?.priceRangeUndiscounted?.start;
  const category = product.product_category;
  const productVariant = product?.product_productvariant;

  // 金額
  const money: IMoney = {
    // 価格
    amount: productVariant.price_amount,
    // 通貨コード
    currency: productVariant.currency,
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

  const getProductPrice = () => {
    if (isEqual(price, priceUndiscounted)) {
      return <TaxedMoney taxedMoney={price} />;
    }
    return (
      <>
        <span className="product-list-item__undiscounted_price">
          <TaxedMoney taxedMoney={priceUndiscounted} />
        </span>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <TaxedMoney taxedMoney={price} />
      </>
    );
  };
  return (
    <div className="product-list-item">
      <div className="product-list-item__image">
        <Thumbnail source={product} />
      </div>
      <h4 className="product-list-item__title">{product.name}</h4>
      <p className="product-list-item__category">{category?.name}</p>
      <p className="product-list-item__price">{getProductPrice()}</p>
    </div>
  );
};

export default ProductListItem;
