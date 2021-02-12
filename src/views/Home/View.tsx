import "./scss/index.scss";

import * as React from "react";

import { MetaWrapper, Loader } from "../../components";
import Page from "./Page";
import { TypedHomePageQuery } from "./queries";

const View: React.FC = () => (
  <div className="home-page">
    <TypedHomePageQuery alwaysRender displayLoader={false} errorPolicy="all">
      {({ data, loading }) => {
        const shop =
          !!data && Object.keys(data).length > 0
            ? data?.site_sitesettings_connection.edges[0].node
            : null;

        return (
          <>
            {shop ? (
              <MetaWrapper
                meta={{
                  description: data.shop ? data.shop.description : "",
                  title: data.shop ? data.shop.name : "",
                }}
              >
                <Page
                  loading={loading}
                  // backgroundImage={
                  //   data.shop &&
                  //   data.shop.homepageCollection &&
                  //   data.shop.homepageCollection.backgroundImage
                  // }
                  // categories={data.categories}
                  // shop={data.shop}
                  categories={data?.product_category_connection}
                  shop={shop}
                />
              </MetaWrapper>
            ) : (
              <Loader />
            )}
          </>
        );
      }}
    </TypedHomePageQuery>
  </div>
);

export default View;
