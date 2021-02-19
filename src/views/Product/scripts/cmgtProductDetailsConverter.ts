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
  const pmsProduct:
    CmgtProductDetails_pms_product_connection_edges_node =
      cmgtProductDetails.pms_product_connection.edges.length > 0
        ? cmgtProductDetails.pms_product_connection.edges[0].node
        : null;
  const pmsProductOptions =
    pmsProduct.pms_productoptions_connection.edges;
  const pmsSaleProducts =
    cmgtProductDetails.pms_saleproduct_connection.edges;
  const pmsProductImages =
    cmgtProductDetails.pms_productimg_connection.edges;
  const pmsWareHouseStocks =
    pmsSaleProducts.length > 0
      ? pmsSaleProducts[0].node.pms_warehousestocks_connection.edges
      : null;
  const pmsProductNotices =
    cmgtProductDetails.pms_productnotice_connection.edges;
  const displayCategoryProduct =
    pmsProduct.dms_displaycategoryproducts_connection.edges.length > 0
      ? pmsProduct.dms_displaycategoryproducts_connection.edges[0].node.dms_displaycategory
      : null;

  const currencyCode = "JPY";
  const productPriceGross = pmsProduct.sale_price;
  const productPriceNet = pmsProduct.sale_price;
  const productUndiscountedPriceGross = pmsProduct.sale_price;
  const productUndiscountedPriceNet = pmsProduct.sale_price;

  let productImageUrl = null;
  if (pmsSaleProducts.length > 0) {
    const saleProductId = pmsSaleProducts[0].node.saleproduct_id;
    const productImages = pmsProductImages.filter(image => 
      image.node.saleproduct_id === saleProductId
    );

    productImageUrl = productImages.length > 1 ? productImages[0].node.img : null;
  }

  const thumbnail: ProductDetails_product_thumbnail = {
    __typename: "Image",
    url: productImageUrl,
    alt: "",
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
  
  const categoryProducts:
    ProductDetails_product_category_products = {
      __typename: "ProductCountableConnection",
      edges: [],
    };

  const category:
    ProductDetails_product_category = {
      __typename: "Category",
      id: displayCategoryProduct?.display_category_id,
      name: displayCategoryProduct?.name,
      products: categoryProducts,
    };

  // 画面の初期表示時に表示する商品画像一覧を設定
  const images: ProductDetails_product_images[] = [];
  pmsProductImages.forEach(image => {
    const { node } = image;

    images.push({
      __typename: "ProductImage",
      id: `${node.product_id}-${node.img_no}`,
      url: node.img,
      alt: node.text,
    });
  });

  const attributes:
    ProductDetails_product_attributes[] = [];

  pmsProductNotices.forEach(notice => {
    const { node } = notice;
    const noticeField = node.pms_productnoticefield;
    const attributesValues:
      ProductDetails_product_attributes_values[] = [];

    // 商品属性(Attributes)に表示するデータを設定
    const attributesAttribute:
      ProductDetails_product_attributes_attribute = {
        __typename: "Attribute",
        id: noticeField.product_notice_field_id,
        name: noticeField.title,
      };
    
    attributesValues.push({
      __typename: "AttributeValue",
      id: noticeField.product_notice_field_id,
      name: node.detail
    });

    attributes.push({
      __typename: "SelectedAttribute",
      attribute: attributesAttribute,
      values: attributesValues,  
    });
  });

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

  const optionValues = {};
  pmsProductOptions.forEach(option => {
    const { node } = option;

    if (
      node.option_no === null ||
      node.option_no === undefined ||
      node.option_name === null ||
      node.option_name === undefined
    ) {
      console.error("***** Data error : Product option *****");
      console.error(`  product_id : '${pmsProduct.product_id}'`);
      console.error(`  option_no : '${node.option_no}'`);
      console.error(`  option_name : '${node.option_name}'`);
      return;
    }

    let optionValue = optionValues[node.option_no];
    if (optionValue === undefined) {
      optionValue = {
        id: node.option_no,
        name: node.option_name,
        details: {},
      };
      optionValues[node.option_no] = optionValue;
    }

    node.pms_productoptionvalues_connection.edges.forEach(values => {
      const { node } = values;

      if (
        node.option_value_no === null ||
        node.option_value_no === undefined ||
        node.option_value === null ||
        node.option_value === undefined
      ) {
        console.error("***** Data error : Product option value *****");
        console.error(`  product_id : '${pmsProduct.product_id}'`);
        console.error(`  option_value_no : '${node.option_value_no}'`);
        console.error(`  option_value : '${node.option_value}'`);
        return;
      }

      let optionDetails = optionValue.details[node.option_value_no];
      if (optionDetails === undefined) {
        optionDetails = {
          id: node.option_value_no,
          name: node.option_value,
        };
        optionValue.details[node.option_value_no] = optionDetails;
      }
    });
  });

  const variants:
    ProductDetails_product_variants[] = [];

  pmsSaleProducts.forEach(product => {
    const { node } = product;
    const variantsAttributes:
      ProductDetails_product_variants_attributes[] = [];
    const variantsImages:
      ProductDetails_product_variants_images[] = [];

    // セレクトボックスが選択されてSKUが確定した時点で表示する画像を設定
    pmsProductImages.forEach(image => {
      const imageNode = image.node;
      if (node.saleproduct_id !== imageNode.saleproduct_id) {
        return;
      }
      variantsImages.push({
        __typename: "ProductImage",
        id: `${node.saleproduct_id}-${imageNode.img_no}`,
        url: imageNode.img,
        alt: imageNode.text,
      });

    });

    /*
    const productImage = pmsProductImages.find(image => {
      if (node.saleproduct_id === image.node.saleproduct_id) {
        return image;
      }
    });
    if (productImage !== undefined) {
      const { node } = productImage;
      variantsImages.push({
        __typename: "ProductImage",
        id: node.saleproduct_id,
        url: node.img,
        alt: node.text,
      });
    }
    */
    
    node.pms_saleproductoptionvalues.forEach(productValue => {
      if (
        productValue.option_no === null ||
        productValue.option_no === undefined ||
        productValue.option_value_no === null ||
        productValue.option_value_no === undefined
      ) {
        console.error("***** Data error : Sale product option value *****");
        console.error(`  saleproduct_id : '${node.saleproduct_id}'`);
        console.error(`  option_no : ${productValue.option_no}.`);
        console.error(`  option_value_no : ${productValue.option_value_no}.`);
        return;
      }

      const value = optionValues[productValue.option_no];
      const valueDetails = value.details[productValue.option_value_no];
      if (value === undefined || valueDetails === undefined) {
        console.error("***** Data error : Sale product option value *****");
        console.error(`  saleproduct_id : '${node.saleproduct_id}'`);
        console.error(`  option_no : ${productValue.option_no}.`);
        console.error(`  option_value_no : ${productValue.option_value_no}.`);
        return;
      }

      const variantsAttributesValues:
        ProductDetails_product_variants_attributes_values[] = [];

      // 設定する id が異なる毎にセレクトボックスが追加表示される
      const variantsAttributesAttribute:
        ProductDetails_product_variants_attributes_attribute = {
          __typename: "Attribute",
          id: value.id,
          name: value.name,
          // URLのクエリーパラメーターに設定される名称
          slug: `option-value-${value.id}`,
        };

      // セレクトボックス一覧に表示するデータを設定
      variantsAttributesValues.push({
        __typename: "AttributeValue",
        id: valueDetails.id,
        name: valueDetails.name,
        // URLのクエリーパラメーターに設定される値
        value: valueDetails.name,
      });

      variantsAttributes.push({
        __typename: "SelectedAttribute",
        attribute: variantsAttributesAttribute,
        values: variantsAttributesValues,
      });
    });

    const stockQuantity =
      pmsWareHouseStocks.length > 0
        ? pmsWareHouseStocks[0].node.stock_qty
        : 0;

    const productVariants: ProductDetails_product_variants = {
      __typename: "ProductVariant",
      id: node.saleproduct_id,
      sku: node.saleproduct_id,
      name: node.name,
      isAvailable: true,
      quantityAvailable: stockQuantity > 10 ? 10 : stockQuantity,
      images: variantsImages,
      pricing: variantsPricing,
      attributes: variantsAttributes,
    };

    variants.push(productVariants);
  });

  const descriptionJson = JSON.stringify({
    "blocks": [
      {
        "key": "",
        "data": {},
        "text": pmsProduct.detail === null ? "" : pmsProduct.detail,
        "type": "unstyled",
        "depth": 0,
        "entityRanges": [],
        "inlineStyleRanges": []
      }
    ],
    "entityMap": {}
  });  

  const product: ProductDetails_product = {
    __typename: "Product",
    id: pmsProduct.product_id,
    name: pmsProduct.name,
    thumbnail,
    thumbnail2x,
    pricing,
    descriptionJson,
    category,
    images,
    attributes,
    variants,
    seoDescription: "dummy: SEO Description",
    seoTitle: pmsProduct.name,
    isAvailable: true,
    isAvailableForPurchase: true,
    availableForPurchase: null,
  };

  return product;
};
