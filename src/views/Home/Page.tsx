import "./scss/index.scss";

import classNames from "classnames";
import * as React from "react";
import { FormattedMessage, useIntl } from "react-intl";
import { Link, useHistory } from "react-router-dom";
import { eciDebug } from "@temp/constants";
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

// EC Intelligence : Rankingサンプル用
import {
  RankingType,
  IRankingRequest,
  Ranking,
} from "../../components/Ranking";

// EC Intelligence : ECIincludeHtmlサンプル用
import { ECIincludeHtml } from "../../components/ECIincludeHtml";

// EC Intelligence : Recommendサンプル用
import {
  RecommendType,
  IRecommendRequest,
  Recommend,
} from "../../components/Recommend";

// EC Intelligence : TimeSaleサンプル用
import { ITimeSaleRequest, TimeSale } from "../../components/TimeSale";

// EC Intelligence : NewProductサンプル用
import { INewProductRequest, NewProduct } from "../../components/NewProduct";

// import noPhotoImg from "../../images/no-photo.svg";

// sampleImage
import noImg from "../../images/sample/placeholder540x540.png";

console.log("----- <Home> Page -----");

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

  // EC Intelligence : Rankingサンプル用
  const rankingRequest: IRankingRequest = {
    rankingType: RankingType.VIEW,
    htmlTemplateId: "2",
    htmlTagId: "include_ranking_sample",
    // yyyyMMddHH形式
    fromDate: "2021031500",
    // yyyyMMddHH形式
    toDate: "2021031523",
    rankingLimitCount: 5,
  };

  // EC Intelligence : Recommendサンプル用
  const recommendRequest: IRecommendRequest = {
    recommendType: RecommendType.VIEW,
    htmlTemplateId: "1",
    htmlTagId: "include_recommend_sample",
    // ProductIdを指定。
    itemIds: ["223-ACTUS_001001_001"],
    recommendLimitCount: 5,
  };

  // EC Intelligence : TimeSaleサンプル用
  const timeSaleRequest: ITimeSaleRequest = {
    startDate: "2021-03-12 00:00:00",
    endDate: "2021-03-31 23:59:59",
    timeSaleLimitCount: 8,
    pageIndex: 1,
  };

  // EC Intelligence : NewProductサンプル用
  const newProductRequest: INewProductRequest = {
    newProductLimitCount: 8,
    pageIndex: 1,
  };

  return (
    <>
      {/* EC Intelligence : [接客]テンプレートサンプル */}
      <ECIincludeHtml templateId="toppage_top_banner_template_01" />
      <ECIincludeHtml templateId="toppage_banner_template_01" />

      {/* EC Intelligence : Rankingサンプル */}
      <Ranking request={rankingRequest} />

      {/* EC Intelligence : Recommendサンプル */}
      <Recommend request={recommendRequest} />

      {/* EC Intelligence : TimeSaleサンプル */}
      <TimeSale request={timeSaleRequest} />

      {/* EC Intelligence : NewProductサンプル */}
      <NewProduct request={newProductRequest} />

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
                  // sampleImage
                  backgroundImage: `url(${noImg})`,
                  // backgroundImage: `url('http://ui2-actus-demo.s3-website-ap-northeast-1.amazonaws.com/images/top.jpg')`,
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
                      // sampleImage
                      // backgroundImage: `url('http://ui2-actus-demo.s3-website-ap-northeast-1.amazonaws.com/images/shop_contents_headline_group_member_2024.jpg')`,
                      backgroundImage: `url(${noImg})`,
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
                      // sampleImage
                      // backgroundImage: `url('http://ui2-actus-demo.s3-website-ap-northeast-1.amazonaws.com/images/shop_contents_headline_group_member_2051.jpg')`,
                      backgroundImage: `url(${noImg})`,
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
                      // sampleImage
                      // backgroundImage: `url('http://ui2-actus-demo.s3-website-ap-northeast-1.amazonaws.com/images/shop_contents_headline_group_member_1999.jpg')`,
                      backgroundImage: `url(${noImg})`,
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
