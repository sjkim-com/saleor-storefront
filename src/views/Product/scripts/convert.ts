/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
/* eslint-disable prettier/prettier */

import {
  CmgtProductDetails,
  CmgtProductDetails_pms_product_connection_edges_node,
} from "../gqlTypes/CmgtProductDetails";

import {
  ProductDetails_product_thumbnail,
  ProductDetails_product_thumbnail2x,
  ProductDetails_product_pricing_priceRangeUndiscounted_start_gross,
  ProductDetails_product_pricing_priceRangeUndiscounted_start_net,
  ProductDetails_product_pricing_priceRangeUndiscounted_start,
  ProductDetails_product_pricing_priceRangeUndiscounted_stop_gross,
  ProductDetails_product_pricing_priceRangeUndiscounted_stop_net,
  ProductDetails_product_pricing_priceRangeUndiscounted_stop,
  ProductDetails_product_pricing_priceRangeUndiscounted,
  ProductDetails_product_pricing_priceRange_start_gross,
  ProductDetails_product_pricing_priceRange_start_net,
  ProductDetails_product_pricing_priceRange_start,
  ProductDetails_product_pricing_priceRange_stop_gross,
  ProductDetails_product_pricing_priceRange_stop_net,
  ProductDetails_product_pricing_priceRange_stop,
  ProductDetails_product_pricing_priceRange,
  ProductDetails_product_pricing,
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
  ProductDetails_product_category,
  ProductDetails_product_images,
  ProductDetails_product_attributes_attribute,
  ProductDetails_product_attributes_values,
  ProductDetails_product_attributes,
  ProductDetails_product_variants_images,
  ProductDetails_product_variants_pricing_priceUndiscounted_gross,
  ProductDetails_product_variants_pricing_priceUndiscounted_net,
  ProductDetails_product_variants_pricing_priceUndiscounted,
  ProductDetails_product_variants_pricing_price_gross,
  ProductDetails_product_variants_pricing_price_net,
  ProductDetails_product_variants_pricing_price,
  ProductDetails_product_variants_pricing,
  ProductDetails_product_variants_attributes_attribute,
  ProductDetails_product_variants_attributes_values,
  ProductDetails_product_variants_attributes,
  ProductDetails_product_variants,
  ProductDetails_product,
} from "../gqlTypes/ProductDetails";

export const createProductDetailsResponse = (
  cmgtProductDetails: CmgtProductDetails
) => {
  console.log("<Product : scripts> createProductDetailsResponse");
  console.log("----- cmgtProductDetails -----");
  console.log(JSON.stringify(cmgtProductDetails));

  const pmsProduct:
    CmgtProductDetails_pms_product_connection_edges_node =
      cmgtProductDetails.pms_product_connection.edges.length > 0
        ? cmgtProductDetails.pms_product_connection.edges[0].node
        : null;
  const displayCategoryProduct =
    pmsProduct.dms_displaycategoryproducts_connection.edges.length > 0
      ? pmsProduct.dms_displaycategoryproducts_connection.edges[0].node.dms_displaycategory
      : null;
  const pmsSaleProducts =
    cmgtProductDetails.pms_saleproduct_connection.edges;
  const pmsProductImages =
    cmgtProductDetails.pms_productimg_connection.edges;

  const currencyCode = "JPY";
  const productPriceGross = pmsProduct.sale_price;
  const productPriceNet = pmsProduct.sale_price;
  const productUndiscountedPriceGross = pmsProduct.sale_price;
  const productUndiscountedPriceNet = pmsProduct.sale_price;
  const productImageUrl = null;

  const thumbnail: ProductDetails_product_thumbnail = {
    __typename: "Image",
    url: productImageUrl,
    alt: "thumbnail",
  };
  
  const thumbnail2x: ProductDetails_product_thumbnail2x = {
    __typename: "Image",
    url: productImageUrl,
  };
  
  const pricingPriceRangeUndiscountedStartGross:
    ProductDetails_product_pricing_priceRangeUndiscounted_start_gross = {
    __typename: "Money",
    amount: productUndiscountedPriceGross,
    currency: currencyCode,
  };
  
  const pricingPriceRangeUndiscountedStartNet:
    ProductDetails_product_pricing_priceRangeUndiscounted_start_net = {
    __typename: "Money",
    amount: productUndiscountedPriceNet,
    currency: currencyCode,
  };
  
  const pricingPriceRangeUndiscountedStart:
    ProductDetails_product_pricing_priceRangeUndiscounted_start = {
    __typename: "TaxedMoney",
    // Amount of money including taxes.
    gross: pricingPriceRangeUndiscountedStartGross,
    // Amount of money without taxes.
    net: pricingPriceRangeUndiscountedStartNet,
  };
  
  const pricingPriceRangeUndiscountedStopGross:
    ProductDetails_product_pricing_priceRangeUndiscounted_stop_gross = {
    __typename: "Money",
    amount: productUndiscountedPriceGross,
    currency: currencyCode,
  };
  
  const pricingPriceRangeUndiscountedStopNet:
    ProductDetails_product_pricing_priceRangeUndiscounted_stop_net = {
    __typename: "Money",
    amount: productUndiscountedPriceNet,
    currency: currencyCode,
  };
  
  const pricingPriceRangeUndiscountedStop:
    ProductDetails_product_pricing_priceRangeUndiscounted_stop = {
    __typename: "TaxedMoney",
    // Amount of money including taxes.
    gross: pricingPriceRangeUndiscountedStopGross,
    // Amount of money without taxes.
    net: pricingPriceRangeUndiscountedStopNet,
  };
  
  const pricingPriceRangeUndiscounted:
    ProductDetails_product_pricing_priceRangeUndiscounted = {
    __typename: "TaxedMoneyRange",
    start: pricingPriceRangeUndiscountedStart,
    stop: pricingPriceRangeUndiscountedStop,
  };
  
  const pricingPriceRangeStartGross:
    ProductDetails_product_pricing_priceRange_start_gross = {
    __typename: "Money",
    amount: productPriceGross,
    currency: currencyCode,
  };
  
  const pricingPriceRangeStartNet:
    ProductDetails_product_pricing_priceRange_start_net = {
    __typename: "Money",
    amount: productPriceNet,
    currency: currencyCode,
  };
  
  const pricingPriceRangeStart:
    ProductDetails_product_pricing_priceRange_start = {
    __typename: "TaxedMoney",
    // Amount of money including taxes.
    gross: pricingPriceRangeStartGross,
    // Amount of money without taxes.
    net: pricingPriceRangeStartNet,
  };
  
  const pricingPriceRangeStopGross:
    ProductDetails_product_pricing_priceRange_stop_gross = {
    __typename: "Money",
    amount: productPriceGross,
    currency: currencyCode,
  };
  
  const pricingPriceRangeStopNet:
    ProductDetails_product_pricing_priceRange_stop_net = {
    __typename: "Money",
    amount: productPriceNet,
    currency: currencyCode,
  };
  
  const pricingPriceRangeStop:
    ProductDetails_product_pricing_priceRange_stop = {
    __typename: "TaxedMoney",
    // Amount of money including taxes.
    gross: pricingPriceRangeStopGross,
    // Amount of money without taxes.
    net: pricingPriceRangeStopNet,
  };
  
  const pricingPriceRange:
    ProductDetails_product_pricing_priceRange = {
    __typename: "TaxedMoneyRange",
    // Lower bound of a price range.
    start: pricingPriceRangeStart,
    // Upper bound of a price range.
    stop: pricingPriceRangeStop,
  };
  
  const pricing: ProductDetails_product_pricing = {
    __typename: "ProductPricingInfo",
    onSale: true,
    priceRangeUndiscounted: pricingPriceRangeUndiscounted,
    priceRange: pricingPriceRange,
  };
  
  const categoryProductsEdgesNodeThumbnail:
    ProductDetails_product_category_products_edges_node_thumbnail = {
    __typename: "Image",
    url: productImageUrl,
    alt: "categoryProductsEdgesNodeThumbnail",
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
    id: "dummy: categoryProductsEdgesNode id",
    name: "dummy: categoryProductsEdgesNode name",
    thumbnail: categoryProductsEdgesNodeThumbnail,
    thumbnail2x: categoryProductsEdgesNodeThumbnail2x,
    pricing: categoryProductsEdgesNodePricing,
  };
  
  const categoryProductsEdges:
    ProductDetails_product_category_products_edges[] = [];
  
  const categoryProducts:
    ProductDetails_product_category_products = {
    __typename: "ProductCountableConnection",
    edges: categoryProductsEdges,
  };

  const category:
    ProductDetails_product_category = {
    __typename: "Category",
    id: displayCategoryProduct?.display_category_id,
    name: displayCategoryProduct?.name,
    products: categoryProducts,
  };
  
  const images:
    ProductDetails_product_images[] = [];
  
  const attributesAttribute:
    ProductDetails_product_attributes_attribute = {
    __typename: "Attribute",
    id: "dummy: attributesAttribute id",
    name: "dummy: attributesAttribute name",
  };
  
  const attributesValues:
    ProductDetails_product_attributes_values[] = [];
  
  const attributes:
    ProductDetails_product_attributes[] = [];
  
  const variantsImages:
    ProductDetails_product_variants_images[] = [];
  
  const variantsPricingPriceUndiscountedGross:
    ProductDetails_product_variants_pricing_priceUndiscounted_gross = {
    __typename: "Money",
    amount: productUndiscountedPriceGross,
    currency: currencyCode,
  };
  
  const variantsPricingPriceUndiscountedNet:
    ProductDetails_product_variants_pricing_priceUndiscounted_net = {
    __typename: "Money",
    amount: productUndiscountedPriceNet,
    currency: currencyCode,
  };
  
  const variantsPricingPriceUndiscounted:
    ProductDetails_product_variants_pricing_priceUndiscounted = {
    __typename: "TaxedMoney",
    // Amount of money including taxes.
    gross: variantsPricingPriceUndiscountedGross,
    // Amount of money without taxes.
    net: variantsPricingPriceUndiscountedNet,
  };
  
  const variantsPricingPriceGross:
    ProductDetails_product_variants_pricing_price_gross = {
    __typename: "Money",
    amount: productPriceGross,
    currency: currencyCode,
  };
  
  const variantsPricingPriceNet:
    ProductDetails_product_variants_pricing_price_net = {
    __typename: "Money",
    amount: productPriceNet,
    currency: currencyCode,
  };
  
  const variantsPricingPrice:
    ProductDetails_product_variants_pricing_price = {
    __typename: "TaxedMoney",
    // Amount of money including taxes.
    gross: variantsPricingPriceGross,
    // Amount of money without taxes.
    net: variantsPricingPriceNet,
  };
  
  const variantsPricing:
    ProductDetails_product_variants_pricing = {
    __typename: "VariantPricingInfo",
    onSale: true,
    // The price without any discount.
    priceUndiscounted: variantsPricingPriceUndiscounted,
    // The price, with any discount subtracted.
    price: variantsPricingPrice,
  };
  
  const variants:
    ProductDetails_product_variants[] = [];

  pmsSaleProducts.forEach(product => {
    const { node } = product;

    // 設定する id が異なる毎にセレクトボックスが追加表示される
    const variantsAttributesAttribute:
      ProductDetails_product_variants_attributes_attribute = {
      __typename: "Attribute",
      id: `Attribute@${node.product_id}`,
      name: "選択してください",
      slug: "option-value",   // URLのクエリーパラメーターに設定される名称
    };
  
    const variantsAttributesValues:
      ProductDetails_product_variants_attributes_values[] = [];

    variantsAttributesValues.push({
      __typename: "AttributeValue",
      id: `AttributeValue@${node.saleproduct_id}`,
      name: node.name,
      value: node.name,   // URLのクエリーパラメーターに設定される値
    });

    const variantsAttributes:
      ProductDetails_product_variants_attributes[] = [];

    variantsAttributes.push({
      __typename: "SelectedAttribute",
      // Name of an attribute displayed in the interface.
      attribute: variantsAttributesAttribute,
      // Values of an attribute.
      values: variantsAttributesValues,
    });

    const productVariants: ProductDetails_product_variants = {
      __typename: "ProductVariant",
      id: node.saleproduct_id,
      sku: node.saleproduct_id,
      name: node.name,
      isAvailable: true,
      quantityAvailable: 10,
      images: variantsImages,
      pricing: variantsPricing,
      attributes: variantsAttributes,
    };

    variants.push(productVariants);
  });

  const product: ProductDetails_product = {
    __typename: "Product",
    id: pmsProduct.product_id,
    name: pmsProduct.name,
    thumbnail,
    thumbnail2x,
    pricing,
    descriptionJson: "",
    category,
    images,
    attributes,
    variants,
    seoDescription: "SEO Description",
    seoTitle: "SEO Title",
    isAvailable: true,
    isAvailableForPurchase: true,
    availableForPurchase: null,
  };

  console.log("----- product -----");
  console.log(JSON.stringify(product));

  return product;
};
