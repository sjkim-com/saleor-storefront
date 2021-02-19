import * as React from "react";
import { Link } from "react-router-dom";

import { CMGT_SITE_ID } from "@temp/core/config";
import { Carousel, ProductListItem } from "..";
// import { generateProductUrl, maybe } from "../../core/utils";
import { cmgtGenerateProductUrl } from "../../core/utils";
import { TypedFeaturedProductsQuery } from "./queries";

import { createFeaturedProductsResponse } from "./script/cmgtFeaturedProductsConverter";

import "./scss/index.scss";

interface ProductsFeaturedProps {
  title?: string;
}

const ProductsFeatured: React.FC<ProductsFeaturedProps> = ({ title }) => {
  return (
    <TypedFeaturedProductsQuery
      displayError={false}
      variables={{
        storeId: CMGT_SITE_ID,
      }}
    >
      {({ data }) => {
        // const products = maybe(
        //   () => data.shop.homepageCollection.products.edges,
        //   []
        // );

        const products = createFeaturedProductsResponse(
          data.dms_displaycategory_connection
        );

        if (products.length) {
          return (
            <div className="products-featured">
              <div className="container">
                <h3>{title}</h3>
                <Carousel>
                  {products.map(({ node: product }) => (
                    <Link
                      to={cmgtGenerateProductUrl(product.id, product.name)}
                      key={product.id}
                    >
                      <ProductListItem product={product} />
                    </Link>
                  ))}
                </Carousel>
              </div>
            </div>
          );
        }
        return null;
      }}
    </TypedFeaturedProductsQuery>
  );
};

ProductsFeatured.defaultProps = {
  title: "Featured",
};

export default ProductsFeatured;
