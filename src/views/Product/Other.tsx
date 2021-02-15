import * as React from "react";
import { FormattedMessage } from "react-intl";

import { ProductList } from "@components/organisms";

import { ProductDetails_product_category_products_edges } from "./gqlTypes/ProductDetails";

import { createCategoryProducts } from "./scripts/cmgtCategoryProductsConverter";

const OtherProducts: React.FC<{
  products: ProductDetails_product_category_products_edges[];
}> = ({ products }) => {
  // ProductDetails_product_category_products_edges型の配列データから
  // CategoryProducts_dms_displaycategoryproduct_connection_edges_node型の
  // 配列データを生成。
  const categoryProducts = createCategoryProducts(products);
  if (categoryProducts.length < 1) {
    return <></>;
  }

  return (
    <div className="product-page__other-products">
      <div className="container">
        <h4 className="product-page__other-products__title">
          <FormattedMessage defaultMessage="Other products in this category" />
        </h4>
        <ProductList products={categoryProducts} />
      </div>
    </div>
  );
};

export default OtherProducts;
