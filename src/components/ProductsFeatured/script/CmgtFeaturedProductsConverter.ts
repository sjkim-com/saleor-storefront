import { CmgtFeaturedProducts_dms_displaycategory_connection } from "../gqlTypes/CmgtFeaturedProducts";

import {
  FeaturedProducts_shop_homepageCollection_products_edges_node_thumbnail,
  FeaturedProducts_shop_homepageCollection_products_edges_node_thumbnail2x,
  FeaturedProducts_shop_homepageCollection_products_edges_node_pricing_priceRangeUndiscounted_start_gross,
  FeaturedProducts_shop_homepageCollection_products_edges_node_pricing_priceRangeUndiscounted_start_net,
  FeaturedProducts_shop_homepageCollection_products_edges_node_pricing_priceRangeUndiscounted_start,
  FeaturedProducts_shop_homepageCollection_products_edges_node_pricing_priceRangeUndiscounted_stop_gross,
  FeaturedProducts_shop_homepageCollection_products_edges_node_pricing_priceRangeUndiscounted_stop_net,
  FeaturedProducts_shop_homepageCollection_products_edges_node_pricing_priceRangeUndiscounted_stop,
  FeaturedProducts_shop_homepageCollection_products_edges_node_pricing_priceRangeUndiscounted,
  FeaturedProducts_shop_homepageCollection_products_edges_node_pricing_priceRange_start_gross,
  FeaturedProducts_shop_homepageCollection_products_edges_node_pricing_priceRange_start_net,
  FeaturedProducts_shop_homepageCollection_products_edges_node_pricing_priceRange_start,
  FeaturedProducts_shop_homepageCollection_products_edges_node_pricing_priceRange_stop_gross,
  FeaturedProducts_shop_homepageCollection_products_edges_node_pricing_priceRange_stop_net,
  FeaturedProducts_shop_homepageCollection_products_edges_node_pricing_priceRange_stop,
  FeaturedProducts_shop_homepageCollection_products_edges_node_pricing_priceRange,
  FeaturedProducts_shop_homepageCollection_products_edges_node_pricing,
  FeaturedProducts_shop_homepageCollection_products_edges_node_category,
  FeaturedProducts_shop_homepageCollection_products_edges_node,
  FeaturedProducts_shop_homepageCollection_products_edges,
} from "../gqlTypes/FeaturedProducts";

export const createFeaturedProductsResponse = (
  featured: CmgtFeaturedProducts_dms_displaycategory_connection
) => {
  const currencyVariant = "JPY";

  const nodeVariant = featured.edges[0].node;
  const products = nodeVariant.dms_displaycategoryproducts.map(
    displayCategory => {
      const priceGress = displayCategory.pms_product.sale_price;
      const priceNet = displayCategory.pms_product.sale_price;

      const featuredProductsShopHomepageCollectionProductsEdgesNodeThumbnail: FeaturedProducts_shop_homepageCollection_products_edges_node_thumbnail = {
        __typename: "Image",
        url: displayCategory.pms_product.pms_productimgs[0].img,
        alt: displayCategory.pms_product.pms_productimgs[0].text,
      };

      const featuredProductsShopHomepageCollectionProductsEdgesNodeThumbnail2x: FeaturedProducts_shop_homepageCollection_products_edges_node_thumbnail2x = {
        __typename: "Image",
        url: displayCategory.pms_product.pms_productimgs[0].img,
      };

      const featuredProductsShopHomepageCollectionProductsEdgesNodePricingPriceRangeUndiscountedStartGross: FeaturedProducts_shop_homepageCollection_products_edges_node_pricing_priceRangeUndiscounted_start_gross = {
        __typename: "Money",
        amount: priceGress,
        currency: currencyVariant,
      };

      const featuredProductsShopHomepageCollectionProductsEdgesNodePricingPriceRangeUndiscountedStartNet: FeaturedProducts_shop_homepageCollection_products_edges_node_pricing_priceRangeUndiscounted_start_net = {
        __typename: "Money",
        amount: priceNet,
        currency: currencyVariant,
      };

      const featuredProductsShopHomepageCollectionProductsEdgesNodePricingPriceRangeUndiscountedStart: FeaturedProducts_shop_homepageCollection_products_edges_node_pricing_priceRangeUndiscounted_start = {
        __typename: "TaxedMoney",
        gross: featuredProductsShopHomepageCollectionProductsEdgesNodePricingPriceRangeUndiscountedStartGross,
        net: featuredProductsShopHomepageCollectionProductsEdgesNodePricingPriceRangeUndiscountedStartNet,
      };

      const featuredProductsShopHomepageCollectionProductsEdgesNodePricingPriceRangeUndiscountedStopGross: FeaturedProducts_shop_homepageCollection_products_edges_node_pricing_priceRangeUndiscounted_stop_gross = {
        __typename: "Money",
        amount: priceGress,
        currency: currencyVariant,
      };

      const featuredProductsShopHomepageCollectionProductsEdgesNodePricingPriceRangeUndiscountedStopNet: FeaturedProducts_shop_homepageCollection_products_edges_node_pricing_priceRangeUndiscounted_stop_net = {
        __typename: "Money",
        amount: priceNet,
        currency: currencyVariant,
      };

      const featuredProductsShopHomepageCollectionProductsEdgesNodePricingPriceRangeUndiscountedStop: FeaturedProducts_shop_homepageCollection_products_edges_node_pricing_priceRangeUndiscounted_stop = {
        __typename: "TaxedMoney",
        gross: featuredProductsShopHomepageCollectionProductsEdgesNodePricingPriceRangeUndiscountedStopGross,
        net: featuredProductsShopHomepageCollectionProductsEdgesNodePricingPriceRangeUndiscountedStopNet,
      };

      const featuredProductsShopHomepageCollectionProductsEdgesNodePricingPriceRangeUndiscounted: FeaturedProducts_shop_homepageCollection_products_edges_node_pricing_priceRangeUndiscounted = {
        __typename: "TaxedMoneyRange",
        start: featuredProductsShopHomepageCollectionProductsEdgesNodePricingPriceRangeUndiscountedStart,
        stop: featuredProductsShopHomepageCollectionProductsEdgesNodePricingPriceRangeUndiscountedStop,
      };

      const featuredProductsShopHomepageCollectionProductsEdgesNodePricingPriceRangeStartGross: FeaturedProducts_shop_homepageCollection_products_edges_node_pricing_priceRange_start_gross = {
        __typename: "Money",
        amount: priceGress,
        currency: currencyVariant,
      };

      const featuredProductsShopHomepageCollectionProductsEdgesNodePricingPriceRangeStartNet: FeaturedProducts_shop_homepageCollection_products_edges_node_pricing_priceRange_start_net = {
        __typename: "Money",
        amount: priceNet,
        currency: currencyVariant,
      };

      const featuredProductsShopHomepageCollectionProductsEdgesNodePricingPriceRangeStart: FeaturedProducts_shop_homepageCollection_products_edges_node_pricing_priceRange_start = {
        __typename: "TaxedMoney",
        gross: featuredProductsShopHomepageCollectionProductsEdgesNodePricingPriceRangeStartGross,
        net: featuredProductsShopHomepageCollectionProductsEdgesNodePricingPriceRangeStartNet,
      };

      const featuredProductsShopHomepageCollectionProductsEdgesNodePricingPriceRangeStopGross: FeaturedProducts_shop_homepageCollection_products_edges_node_pricing_priceRange_stop_gross = {
        __typename: "Money",
        amount: priceNet,
        currency: currencyVariant,
      };

      const featuredProductsShopHomepageCollectionProductsEdgesNodePricingPriceRangeStopNet: FeaturedProducts_shop_homepageCollection_products_edges_node_pricing_priceRange_stop_net = {
        __typename: "Money",
        amount: priceNet,
        currency: currencyVariant,
      };

      const featuredProductsShopHomepageCollectionProductsEdgesNodePricingPriceRangeStop: FeaturedProducts_shop_homepageCollection_products_edges_node_pricing_priceRange_stop = {
        __typename: "TaxedMoney",
        gross: featuredProductsShopHomepageCollectionProductsEdgesNodePricingPriceRangeStopGross,
        net: featuredProductsShopHomepageCollectionProductsEdgesNodePricingPriceRangeStopNet,
      };

      const featuredProductsShopHomepageCollectionProductsEdgesNodePricingPriceRange: FeaturedProducts_shop_homepageCollection_products_edges_node_pricing_priceRange = {
        __typename: "TaxedMoneyRange",
        start: featuredProductsShopHomepageCollectionProductsEdgesNodePricingPriceRangeStart,
        stop: featuredProductsShopHomepageCollectionProductsEdgesNodePricingPriceRangeStop,
      };

      const featuredProductsShopHomepageCollectionProductsEdgesNodePricing: FeaturedProducts_shop_homepageCollection_products_edges_node_pricing = {
        __typename: "ProductPricingInfo",
        onSale: false,
        priceRangeUndiscounted: featuredProductsShopHomepageCollectionProductsEdgesNodePricingPriceRangeUndiscounted,
        priceRange: featuredProductsShopHomepageCollectionProductsEdgesNodePricingPriceRange,
      };

      const featuredProductsShopHomepageCollectionProductsEdgesNodeCategory: FeaturedProducts_shop_homepageCollection_products_edges_node_category = {
        __typename: "Category",
        id: nodeVariant.display_category_id,
        name: nodeVariant.name,
      };

      const featuredProductsShopHomepageCollectionProductsEdgesNode: FeaturedProducts_shop_homepageCollection_products_edges_node = {
        __typename: "Product",
        id: displayCategory.pms_product.id,
        name: displayCategory.pms_product.name,
        thumbnail: featuredProductsShopHomepageCollectionProductsEdgesNodeThumbnail,
        thumbnail2x: featuredProductsShopHomepageCollectionProductsEdgesNodeThumbnail2x,
        pricing: featuredProductsShopHomepageCollectionProductsEdgesNodePricing,
        category: featuredProductsShopHomepageCollectionProductsEdgesNodeCategory,
      };

      const featuredProductsShopHomepageCollectionProductsEdges: FeaturedProducts_shop_homepageCollection_products_edges = {
        __typename: "ProductCountableEdge",
        node: featuredProductsShopHomepageCollectionProductsEdgesNode,
      };

      return featuredProductsShopHomepageCollectionProductsEdges;
    }
  );

  return products;
};
