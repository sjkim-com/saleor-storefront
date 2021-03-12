/* eslint-disable global-require */

import { generatePageUrl } from "./utils";

export const BASE_URL = "/";
export const PRODUCTS_PER_PAGE = 6;
export const SUPPORT_EMAIL = "support@example.com";
export const PROVIDERS = {
  BRAINTREE: {
    label: "Braintree",
  },
  GMOCREDIT: {
    label: "GMOCREDIT",
  },
  DUMMY: {
    label: "Dummy",
  },
  STRIPE: {
    label: "Stripe",
  },
  ADYEN: {
    label: "Adyen",
    script: {
      src:
        "https://checkoutshopper-test.adyen.com/checkoutshopper/sdk/3.10.1/adyen.js",
      integrity:
        "sha384-wG2z9zSQo61EIvyXmiFCo+zB3y0ZB4hsrXVcANmpP8HLthjoQJQPBh7tZKJSV8jA",
      crossOrigin: "anonymous",
    },
    style: {
      src:
        "https://checkoutshopper-test.adyen.com/checkoutshopper/sdk/3.10.1/adyen.css",
      integrity:
        "sha384-8ofgICZZ/k5cC5N7xegqFZOA73H9RQ7H13439JfAZW8Gj3qjuKL2isaTD3GMIhDE",
      crossOrigin: "anonymous",
    },
  },
};
export const STATIC_PAGES = [
  {
    label: "About",
    url: generatePageUrl("about"),
  },
];
export const SOCIAL_MEDIA = [
  {
    ariaLabel: "facebook",
    // TODO: actus_demo
    // href: "https://www.facebook.com/mirumeelabs/",
    // href: "https://ja-jp.facebook.com/actus.interior/",
    // sampleImage
    href: "https://ja-jp.facebook.com",
    path: require("../images/facebook-icon.svg"),
  },
  {
    ariaLabel: "instagram",
    // TODO: actus_demo
    // href: "https://www.instagram.com/mirumeelabs/",
    // href: "https://www.instagram.com/actus_press/",
    // sampleImage
    href: "https://www.instagram.com",
    path: require("../images/instagram-icon.svg"),
  },
  {
    ariaLabel: "twitter",
    // TODO: actus_demo
    // href: "https://twitter.com/getsaleor",
    // href: "https://twitter.com/actus_stylebook",
    // sampleImage
    href: "https://twitter.com",
    path: require("../images/twitter-icon.svg"),
  },
  // {
  //   ariaLabel: "youtube",
  //   href: "https://www.youtube.com/channel/UCg_ptb-U75e7BprLCGS4s1g/videos",
  //   path: require("../images/youtube-icon.svg"),
  // },
];
export const META_DEFAULTS = {
  custom: [],
  description:
    "Open-source PWA storefront built with Saleor's e-commerce GraphQL API. Written with React and TypeScript.",
  // TODO: actus_demo
  // image: `${window.location.origin}${require("../images/logo.svg")}`,
  // title: "Demo PWA Storefront – Saleor Commerce",
  // image: `${
  //   window.location.origin
  // }${require("../images/actus/logo_header_Actus_s.svg")}`,
  // sampleImage
  image: `${window.location.origin}${require("../images/sample/logo.svg")}`,
  title: "ACTUS online（アクタス公式通販）| 家具・雑貨・ギフト",
  type: "website",
  url: window.location.origin,
};
export enum CheckoutStep {
  Address = 1,
  Shipping,
  Payment,
  Review,
  PaymentConfirm,
}
export const CHECKOUT_STEPS = [
  {
    index: 0,
    link: "/checkout/address",
    name: "Address",
    nextActionName: "Continue to Shipping",
    onlyIfShippingRequired: false,
    step: CheckoutStep.Address,
  },
  {
    index: 1,
    link: "/checkout/shipping",
    name: "Shipping",
    nextActionName: "Continue to Payment",
    onlyIfShippingRequired: true,
    step: CheckoutStep.Shipping,
  },
  {
    index: 2,
    link: "/checkout/payment",
    name: "Payment",
    nextActionName: "Continue to Review",
    onlyIfShippingRequired: false,
    step: CheckoutStep.Payment,
  },
  {
    index: 3,
    link: "/checkout/review",
    name: "Review",
    nextActionName: "Place order",
    onlyIfShippingRequired: false,
    step: CheckoutStep.Review,
  },
  {
    index: 4,
    link: "/checkout/payment-confirm",
    name: "Payment confirm",
    onlyIfShippingRequired: false,
    step: CheckoutStep.PaymentConfirm,
    withoutOwnView: true,
  },
];

export const CMGT_SITE_ID = "00D2w000003Nwc9EAC";

export const SEARCH_FILTER = {
  string1: "ブランド",
  string2: "カラー",
  string3: "サイズ",
  string4: "重量",
  price: "価格",
};
