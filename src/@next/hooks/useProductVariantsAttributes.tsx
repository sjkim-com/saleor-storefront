import { useEffect, useState } from "react";

import { ProductDetails_product_variants } from "@sdk/queries/types/ProductDetails";

import { IProductVariantsAttributes } from "@types";

export const useProductVariantsAttributes = (
  productVariants: ProductDetails_product_variants[]
): IProductVariantsAttributes => {
  const [productVariantsAttributes, setProductVariantsAttributes] = useState<
    IProductVariantsAttributes
  >({});

  useEffect(() => {
    const variantsAttributes: IProductVariantsAttributes = {};

    productVariants.forEach(productVariant => {
      productVariant.attributes.forEach(productVariantAttribute => {
        const productVariantAttributeId = productVariantAttribute.attribute.id;
        const variantsAttributeExists = variantsAttributes.hasOwnProperty(
          productVariantAttributeId
        );

        if (variantsAttributeExists) {
          const variantsAttributeValueExists = variantsAttributes[
            productVariantAttributeId
          ].values.includes(productVariantAttribute.value!);

          if (!variantsAttributeValueExists) {
            variantsAttributes[productVariantAttributeId].values.push(
              productVariantAttribute.value!
            );
          }
        } else {
          variantsAttributes[productVariantAttributeId] = {
            attribute: productVariantAttribute.attribute,
            values: [productVariantAttribute.value!],
          };
        }
      });
    });

    setProductVariantsAttributes(variantsAttributes);
  }, [productVariants]);

  return productVariantsAttributes;
};
