import "./scss/index.scss";

import classNames from "classnames";
import * as React from "react";
import { FormattedMessage, useIntl } from "react-intl";
import { Link } from "react-router-dom";

import { Button, Loader, ProductsFeatured } from "../../components";
// import { generateCategoryUrl } from "../../core/utils";

import {
  // ProductsList_categories,
  // ProductsList_shop,
  // ProductsList_shop_homepageCollection_backgroundImage,
  ProductsList_product_category_connection,
  ProductsList_site_sitesettings_connection_edges_node,
} from "./gqlTypes/ProductsList";

import { structuredData } from "../../core/SEO/Homepage/structuredData";

// EC Intelligence : Recommendサンプル用
import {
  RecommendType,
  IRecommendRequest,
  Recommend,
} from "../../components/Recommend";

// import noPhotoImg from "../../images/no-photo.svg";

const Page: React.FC<{
  loading: boolean;
  // categories: ProductsList_categories;
  categories: ProductsList_product_category_connection;
  // backgroundImage: ProductsList_shop_homepageCollection_backgroundImage;
  shop: ProductsList_site_sitesettings_connection_edges_node;
  // shop: ProductsList_shop;
  // }> = ({ loading, categories, backgroundImage, shop }) => {
}> = ({ loading, categories, shop }) => {
  const categoriesExist = () => {
    return categories && categories.edges && categories.edges.length > 0;
  };
  const intl = useIntl();
  const collection = shop?.product_collection;

  // EC Intelligence : Recommendサンプル用
  const recommendRequest: IRecommendRequest = {
    recommendType: RecommendType.VIEW,
    htmlTemplateId: "1",
    htmlTagId: "include_recommend_sample",
    // EC Intelligence側で、SKUにレコメンドが登録されていない為、ProductIdを指定。
    itemIds: ["223-ACTUS_001001_001"],
    recommendLimitCount: 3,
  };

  return (
    <>
      {/* EC Intelligence : [接客]テンプレートサンプル */}
      <div id="include_toppage_top_banner_01" />
      <div id="include_toppage_banner_01" />

      {/* EC Intelligence : Recommendサンプル */}
      <Recommend request={recommendRequest} />

      <script className="structured-data-list" type="application/ld+json">
        {structuredData(shop)}
      </script>
      <Link to="/category/新入荷/actus_000/">
        <div
          className="home-page__hero"
          // style={
          //   backgroundImage
          //     ? { backgroundImage: `url(${backgroundImage.url})` }
          //     : null
          // }
          style={
            collection.background_image
              ? {
                  // backgroundImage: `url(${collection.background_image})`
                  backgroundImage: `url('http://ui2-actus-demo.s3-website-ap-northeast-1.amazonaws.com/images/top.jpg')`,
                }
              : null
          }
        >
          {/*
          <div className="home-page__hero-text">
          <div>
            <span className="home-page__hero__title">
              <h1>
                <FormattedMessage defaultMessage="Final reduction" />
              </h1>
            </span>
          </div>
          <div>
            <span className="home-page__hero__title">
              <h1>
                <FormattedMessage defaultMessage="Up to 70% off sale" />
              </h1>
            </span>
          </div>
          </div>
          <div className="home-page__hero-action">
          {loading && !categories ? (
            <Loader />
          ) : (
            categoriesExist() && (
              <Link
                to={generateCategoryUrl(
                  categories.edges[0].node.id,
                  categories.edges[0].node.name
                )}
              >
                <Button testingContext="homepageHeroActionButton">
                  <FormattedMessage defaultMessage="Shop sale" />
                </Button>
              </Link>
            )
          )}
          </div>
         */}
        </div>
      </Link>
      <ProductsFeatured
        title={intl.formatMessage({ defaultMessage: "Featured" })}
      />
      {categoriesExist() && (
        <div className="home-page__categories">
          <div className="container">
            <h3>
              <FormattedMessage defaultMessage="Recommend" />
            </h3>
            <div className="home-page__categories__list">
              <div>
                <Link to="/category/雑貨/actus_002">
                  <div
                    className={classNames("home-page__categories__list__image")}
                    style={{
                      backgroundImage: `url('http://ui2-actus-demo.s3-website-ap-northeast-1.amazonaws.com/images/shop_contents_headline_group_member_2024.jpg')`,
                    }}
                  />
                  <h3>ACTUS 2021 Srping-Summer</h3>
                </Link>
              </div>
              <div>
                <Link to="/category/雑貨/actus_003">
                  <div
                    className={classNames("home-page__categories__list__image")}
                    style={{
                      backgroundImage: `url('http://ui2-actus-demo.s3-website-ap-northeast-1.amazonaws.com/images/shop_contents_headline_group_member_2051.jpg')`,
                    }}
                  />
                  <h3>enjoy STUDY</h3>
                </Link>
              </div>
              <div>
                <Link to="/category/雑貨/actus_001">
                  <div
                    className={classNames("home-page__categories__list__image")}
                    style={{
                      backgroundImage: `url('http://ui2-actus-demo.s3-website-ap-northeast-1.amazonaws.com/images/shop_contents_headline_group_member_1999.jpg')`,
                    }}
                  />
                  <h3>Byers selection ACTUS Olympics</h3>
                </Link>
              </div>
              {/*
              {categories.edges.map(({ node: category }) => (
                <div key={category.id}>
                  <Link
                    to={generateCategoryUrl(category.id, category.name)}
                    key={category.id}
                  >
                    <div
                      className={classNames(
                        "home-page__categories__list__image",
                        {
                          "home-page__categories__list__image--no-photo": !category.backgroundImage,
                        }
                      )}
                      style={{
                        backgroundImage: `url(${
                          category.backgroundImage
                            ? category.backgroundImage.url
                            : noPhotoImg
                        })`,
                      }}
                    />
                    <h3>{category.name}</h3>
                  </Link>
                </div>
              ))}
              */}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Page;
