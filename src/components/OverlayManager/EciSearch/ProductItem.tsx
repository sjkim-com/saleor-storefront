import * as React from "react";
import { Link } from "react-router-dom";

import { Thumbnail } from "@components/molecules";
import { ISource as IThumbnailSource } from "@components/molecules/Thumbnail/types";
import {
  ProductDetails_product_thumbnail,
  ProductDetails_product_thumbnail2x,
} from "@saleor/sdk/lib/queries/gqlTypes/ProductDetails";
import { cmgtGenerateProductUrl } from "../../../core/utils";

const ProductItem: React.FC<any> = ({ id, title, img, price }) => {
  const thumbnail: ProductDetails_product_thumbnail = {
    __typename: "Image",
    url: img,
    alt: null,
  };
  const thumbnail2x: ProductDetails_product_thumbnail2x = {
    __typename: "Image",
    url: img,
  };
  const thumbnailSource: IThumbnailSource = {
    thumbnail,
    thumbnail2x,
  };

  return (
    <li className="search__products__item">
      <Link to={cmgtGenerateProductUrl(id, title)}>
        <Thumbnail source={thumbnailSource} />
        <span>
          <h4>{title}</h4>
          <p>{price || "-"}</p>
        </span>
      </Link>
    </li>
  );
};

export default ProductItem;
