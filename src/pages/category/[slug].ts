import { GetStaticPaths, GetStaticProps } from "next";

import { shopAttributesQuery } from "@graphql";
import {
  ShopAttributesQuery,
  ShopAttributesQueryVariables,
} from "@graphql/gqlTypes/ShopAttributesQuery";
import { paths } from "@paths";
import {
  channelSlug,
  exportMode,
  incrementalStaticRegenerationRevalidate,
  staticPathsFetchBatch,
} from "@temp/constants";
import { CategoryPage, CategoryPageProps } from "@temp/views/Category";
import { exhaustList, getSaleorApi } from "@utils/ssr";

export default CategoryPage;

export const getStaticPaths: GetStaticPaths<
  CategoryPageProps["params"]
> = async () => {
  const { api } = await getSaleorApi();
  const categoriesList = await api.categories.getList({
    first: staticPathsFetchBatch,
  });

  await exhaustList(categoriesList);

  const paths = categoriesList.data.map(({ slug }) => ({
    params: { slug },
  }));

  return { paths, fallback: !exportMode };
};

export const getStaticProps: GetStaticProps<
  CategoryPageProps,
  CategoryPageProps["params"]
> = async ({ params: { slug } }) => {
  let data = null;
  const { api, apolloClient } = await getSaleorApi();
  const { data: categoryDetails } = await api.categories.getDetails({ slug });

  if (categoryDetails) {
    const { id } = categoryDetails;

    const [ancestors, attributes] = await Promise.all([
      api.categories.getAncestors({ first: 5, id }).then(({ data }) => data),
      apolloClient
        .query<ShopAttributesQuery, ShopAttributesQueryVariables>({
          query: shopAttributesQuery,
          variables: { categoryId: id, channel: channelSlug },
        })
        .then(({ data }) => data.attributes?.edges.map(e => e.node) || []),
    ]);

    data = { categoryDetails, ancestors, attributes, id };
  }

  return {
    revalidate: incrementalStaticRegenerationRevalidate,
    props: {
      data,
      params: { slug },
    },
  };
};
