import * as React from "react";
import { Link } from "react-router-dom";

import { Carousel, ProductListItem } from "..";
import { generateProductUrl, maybe } from "../../core/utils";
import { TypedFeaturedProductsQuery } from "./queries";

import "./scss/index.scss";

interface ProductsFeaturedProps {
  title?: string;
}

const ProductsFeatured: React.FC<ProductsFeaturedProps> = ({ title }) => {
  return (
    <TypedFeaturedProductsQuery displayError={false}>
      {({ data }) => {
        // const products = maybe(
        //   () => data.shop.homepageCollection.products.edges,
        //   []
        // );
        const products = maybe(
          () => data.site_sitesettings_connection.edges[0].node.product_collection.product_collectionproducts,
          []
        );

        if (products.length) {
          return (
            <div className="products-featured">
              <div className="container">
                <h3>{title}</h3>
                <Carousel>
                  {/* {products.map(({ node: product }) => (
                    <Link
                      to={generateProductUrl(product.id, product.name)}
                      key={product.id}
                    >
                      <ProductListItem product={product} />
                    </Link>
                  ))} */}
                  {products.map(product => (
                    <Link
                      to={generateProductUrl(
                        product.product_product.id.toString(),
                        product.product_product.name
                      )}
                      key={product.product_product.id}
                    >
                      <ProductListItem product={product.product_product} />
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
