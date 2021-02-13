/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
/* eslint-disable prettier/prettier */

import {
  CmgtDisplayCategoryProductDetails_dms_displaycategoryproduct_connection_edges_node_pms_product,
  CmgtDisplayCategoryProductDetails_dms_displaycategoryproduct_connection_edges,
  CmgtDisplayCategoryProductDetails,
} from "../gqlTypes/CmgtDisplayCategoryProductDetails";

import {
  ProductDetails_product_category_products_edges_node_thumbnail,
  ProductDetails_product_category_products_edges_node_thumbnail2x,
  ProductDetails_product_category_products_edges_node_pricing_priceRangeUndiscounted_start_gross,
  ProductDetails_product_category_products_edges_node_pricing_priceRangeUndiscounted_start_net,
  ProductDetails_product_category_products_edges_node_pricing_priceRangeUndiscounted_start,
  ProductDetails_product_category_products_edges_node_pricing_priceRangeUndiscounted_stop_gross,
  ProductDetails_product_category_products_edges_node_pricing_priceRangeUndiscounted_stop_net,
  ProductDetails_product_category_products_edges_node_pricing_priceRangeUndiscounted_stop,
  ProductDetails_product_category_products_edges_node_pricing_priceRangeUndiscounted,
  ProductDetails_product_category_products_edges_node_pricing_priceRange_start_gross,
  ProductDetails_product_category_products_edges_node_pricing_priceRange_start_net,
  ProductDetails_product_category_products_edges_node_pricing_priceRange_start,
  ProductDetails_product_category_products_edges_node_pricing_priceRange_stop_gross,
  ProductDetails_product_category_products_edges_node_pricing_priceRange_stop_net,
  ProductDetails_product_category_products_edges_node_pricing_priceRange_stop,
  ProductDetails_product_category_products_edges_node_pricing_priceRange,
  ProductDetails_product_category_products_edges_node_pricing,
  ProductDetails_product_category_products_edges_node,
  ProductDetails_product_category_products_edges,
  ProductDetails_product_category_products,
} from "../gqlTypes/ProductDetails";

export const createDisplayCategoryProductDetailsResponse = (
  productId: string,
  cmgtDisplayCategoryProductDetails: CmgtDisplayCategoryProductDetails
) => {
  const dmsDisplayCategoryProducts:
    CmgtDisplayCategoryProductDetails_dms_displaycategoryproduct_connection_edges[] =
      cmgtDisplayCategoryProductDetails.dms_displaycategoryproduct_connection.edges;

  const categoryProductsEdges:
    ProductDetails_product_category_products_edges[] = [];

  dmsDisplayCategoryProducts.forEach(dmsDisplayCategoryProduct => {
    const pmsProduct:
      CmgtDisplayCategoryProductDetails_dms_displaycategoryproduct_connection_edges_node_pms_product =
        dmsDisplayCategoryProduct.node.pms_product;

    // 引数のproductIdと一致する場合、対象外とする
    if (pmsProduct.product_id === productId) {
      return;
    }

    const pmsProductImage =
      pmsProduct.pms_productimgs_connection.edges.length > 0
        ? pmsProduct.pms_productimgs_connection.edges[0].node
        : null;
    const currencyCode = "JPY";
    const productPriceGross = pmsProduct.sale_price;
    const productPriceNet = pmsProduct.sale_price;
    const productUndiscountedPriceGross = pmsProduct.sale_price;
    const productUndiscountedPriceNet = pmsProduct.sale_price;
    const productImageUrl = pmsProductImage?.img;
        
    const categoryProductsEdgesNodeThumbnail:
      ProductDetails_product_category_products_edges_node_thumbnail = {
      __typename: "Image",
      url: productImageUrl,
      alt: pmsProductImage?.text,
    };
    
    const categoryProductsEdgesNodeThumbnail2x:
      ProductDetails_product_category_products_edges_node_thumbnail2x = {
      __typename: "Image",
      url: productImageUrl,
    };
    
    const categoryProductsEdgesNodePricingPriceRangeUndiscountedStartGross:
      ProductDetails_product_category_products_edges_node_pricing_priceRangeUndiscounted_start_gross = {
      __typename: "Money",
      amount: productUndiscountedPriceGross,
      currency: currencyCode,
    };
    
    const categoryProductsEdgesNodePricingPriceRangeUndiscountedStartNet:
      ProductDetails_product_category_products_edges_node_pricing_priceRangeUndiscounted_start_net = {
      __typename: "Money",
      amount: productUndiscountedPriceNet,
      currency: currencyCode,
    };
    
    const categoryProductsEdgesNodePricingPriceRangeUndiscountedStart:
      ProductDetails_product_category_products_edges_node_pricing_priceRangeUndiscounted_start = {
      __typename: "TaxedMoney",
      // Amount of money including taxes.
      gross: categoryProductsEdgesNodePricingPriceRangeUndiscountedStartGross,
      // Amount of money without taxes.
      net: categoryProductsEdgesNodePricingPriceRangeUndiscountedStartNet,
    };
    
    const categoryProductsEdgesNodePricingPriceRangeUndiscountedStopGross:
      ProductDetails_product_category_products_edges_node_pricing_priceRangeUndiscounted_stop_gross = {
      __typename: "Money",
      amount: productUndiscountedPriceGross,
      currency: currencyCode,
    };
    
    const categoryProductsEdgesNodePricingPriceRangeUndiscountedStopNet:
      ProductDetails_product_category_products_edges_node_pricing_priceRangeUndiscounted_stop_net = {
      __typename: "Money",
      amount: productUndiscountedPriceNet,
      currency: currencyCode,
    };
    
    const categoryProductsEdgesNodePricingPriceRangeUndiscountedStop:
      ProductDetails_product_category_products_edges_node_pricing_priceRangeUndiscounted_stop = {
      __typename: "TaxedMoney",
      // Amount of money including taxes.
      gross: categoryProductsEdgesNodePricingPriceRangeUndiscountedStopGross,
      // Amount of money without taxes.
      net: categoryProductsEdgesNodePricingPriceRangeUndiscountedStopNet,
    };
    
    const categoryProductsEdgesNodePricingPriceRangeUndiscounted:
      ProductDetails_product_category_products_edges_node_pricing_priceRangeUndiscounted = {
      __typename: "TaxedMoneyRange",
      // Lower bound of a price range.
      start: categoryProductsEdgesNodePricingPriceRangeUndiscountedStart,
      // Upper bound of a price range.
      stop: categoryProductsEdgesNodePricingPriceRangeUndiscountedStop,
    };
    
    const categoryProductsEdgesNodePricingPriceRangeStartGross:
      ProductDetails_product_category_products_edges_node_pricing_priceRange_start_gross = {
      __typename: "Money",
      amount: productPriceGross,
      currency: currencyCode,
    };
    
    const categoryProductsEdgesNodePricingPriceRangeStartNet:
      ProductDetails_product_category_products_edges_node_pricing_priceRange_start_net = {
      __typename: "Money",
      amount: productPriceNet,
      currency: currencyCode,
    };
    
    const categoryProductsEdgesNodePricingPriceRangeStart:
      ProductDetails_product_category_products_edges_node_pricing_priceRange_start = {
      __typename: "TaxedMoney",
      // Amount of money including taxes.
      gross: categoryProductsEdgesNodePricingPriceRangeStartGross,
      // Amount of money without taxes.
      net: categoryProductsEdgesNodePricingPriceRangeStartNet,
    };
    
    const categoryProductsEdgesNodePricingPriceRangeStopGross:
      ProductDetails_product_category_products_edges_node_pricing_priceRange_stop_gross = {
      __typename: "Money",
      amount: productPriceGross,
      currency: currencyCode,
    };
    
    const categoryProductsEdgesNodePricingPriceRangeStopNet:
      ProductDetails_product_category_products_edges_node_pricing_priceRange_stop_net = {
      __typename: "Money",
      amount: productPriceNet,
      currency: currencyCode,
    };
    
    const categoryProductsEdgesNodePricingPriceRangeStop:
      ProductDetails_product_category_products_edges_node_pricing_priceRange_stop = {
      __typename: "TaxedMoney",
      // Amount of money including taxes.
      gross: categoryProductsEdgesNodePricingPriceRangeStopGross,
      // Amount of money without taxes.
      net: categoryProductsEdgesNodePricingPriceRangeStopNet,
    };
    
    const categoryProductsEdgesNodePricingPriceRange:
      ProductDetails_product_category_products_edges_node_pricing_priceRange = {
      __typename: "TaxedMoneyRange",
      // Lower bound of a price range.
      start: categoryProductsEdgesNodePricingPriceRangeStart,
      // Upper bound of a price range.
      stop: categoryProductsEdgesNodePricingPriceRangeStop,
    };
    
    const categoryProductsEdgesNodePricing:
      ProductDetails_product_category_products_edges_node_pricing = {
      __typename: "ProductPricingInfo",
      onSale: true,
      // The undiscounted price range of the product variants.
      priceRangeUndiscounted: categoryProductsEdgesNodePricingPriceRangeUndiscounted,
      // The discounted price range of the product variants.
      priceRange: categoryProductsEdgesNodePricingPriceRange,
    };
    
    const categoryProductsEdgesNode:
      ProductDetails_product_category_products_edges_node = {
      __typename: "Product",
      id: pmsProduct.product_id,
      name: pmsProduct.name,
      thumbnail: categoryProductsEdgesNodeThumbnail,
      thumbnail2x: categoryProductsEdgesNodeThumbnail2x,
      pricing: categoryProductsEdgesNodePricing,
    };

    const categoryProductsEdge:
      ProductDetails_product_category_products_edges = {
        __typename: "ProductCountableEdge",
        node: categoryProductsEdgesNode,
      };

    categoryProductsEdges.push(categoryProductsEdge);
  });        

  const categoryProducts:
    ProductDetails_product_category_products = {
      __typename: "ProductCountableConnection",
      edges: categoryProductsEdges,
    };

  return categoryProducts;
};
