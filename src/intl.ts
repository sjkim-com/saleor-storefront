import { defineMessages, IntlShape } from "react-intl";

export const commonMessages = defineMessages({
  search: {
    // defaultMessage: "search",
    defaultMessage: "検索",
  },
  outOfStock: {
    // defaultMessage: "Out of stock",
    defaultMessage: "在庫切れ",
  },
  lowStock: {
    // defaultMessage: "Low stock",
    defaultMessage: "残り僅か",
  },
  noItemsAvailable: {
    defaultMessage: "No items available",
  },
  noPurchaseAvailable: {
    defaultMessage: "Not available for purchase",
  },
  purchaseAvailableOn: {
    defaultMessage: `Will become available for purchase on {date} at {time}`,
  },
  youMightLike: {
    defaultMessage: "You might like",
  },
  choosePaymentMethod: {
    // defaultMessage: "Please choose payment method.",
    defaultMessage: "支払い方法を選択してください。",
  },
  provideEmailAddress: {
    // defaultMessage: "Please provide email address.",
    defaultMessage: "メールアドレスを入力してください。",
  },
  account: {
    // defaultMessage: "Account",
    defaultMessage: "会員",
  },
  myAccount: {
    // defaultMessage: "My Account",
    defaultMessage: "会員情報",
  },
  orderHistory: {
    // defaultMessage: "Order history",
    defaultMessage: "注文履歴",
  },
  addressBook: {
    // defaultMessage: "Address book",
    defaultMessage: "アドレス帳",
  },
  logOut: {
    // defaultMessage: "Log Out",
    defaultMessage: "ログアウト",
  },
  firstName: {
    // defaultMessage: "First Name",
    defaultMessage: "名前(名)",
  },
  lastName: {
    // defaultMessage: "Last Name",
    defaultMessage: "苗字(姓)",
  },
  password: {
    // defaultMessage: "Password",
    defaultMessage: "パスワード",
  },
  quantity: {
    // defaultMessage: "Quantity",
    defaultMessage: "数量",
  },
  sku: {
    defaultMessage: "SKU",
  },
  maxQtyIs: {
    // defaultMessage: "Maximum quantity is {maxQuantity}",
    defaultMessage: "数量の最大値は {maxQuantity} です。",
  },
  qty: {
    // defaultMessage: "Quantity",
    defaultMessage: "数量",
  },
  subtotal: {
    // defaultMessage: "Subtotal",
    defaultMessage: "小計",
  },
  shipping: {
    // defaultMessage: "Shipping",
    defaultMessage: "配送",
  },
  promoCode: {
    // defaultMessage: "Promo code",
    defaultMessage: "プロモーション コード",
  },
  total: {
    // defaultMessage: "Total",
    defaultMessage: "合計",
  },
  totalPrice: {
    // defaultMessage: "Total Price",
    defaultMessage: "合計金額",
  },
  checkout: {
    // defaultMessage: "Checkout",
    defaultMessage: "チェックアウト",
  },
  eMail: {
    // defaultMessage: "Email Address",
    defaultMessage: "メールアドレス",
  },
  shortEmail: {
    // defaultMessage: "Email",
    defaultMessage: "メール",
  },
  loading: {
    defaultMessage: "Loading",
  },
  products: {
    defaultMessage: "Products",
  },
  price: {
    // defaultMessage: "Price",
    defaultMessage: "金額",
  },
  variant: {
    defaultMessage: "Variant",
  },
  phone: {
    // defaultMessage: "Phone",
    defaultMessage: "電話",
  },
  cardNo: {
    defaultMessage: "カード番号",
  },
  expire: {
    defaultMessage: "満期期間",
  },
  securityCode: {
    defaultMessage: "セキュリティコード",
  },
  phoneNumber: {
    // defaultMessage: "Phone number: {phone}",
    defaultMessage: "電話番号 : {phone}",
  },
  showEmail: {
    // defaultMessage: "Email: {email}",
    defaultMessage: "メール : {email}",
  },
  save: {
    // defaultMessage: "Save",
    defaultMessage: "保存",
  },
  add: {
    // defaultMessage: "Add",
    defaultMessage: "追加",
  },
  filterHeader: {
    // defaultMessage: "FILTERS",
    defaultMessage: "フィルター",
  },
  clearFilterHeader: {
    // defaultMessage: "CLEAR FILTERS",
    defaultMessage: "フィルターをクリア",
  },
  status: {
    // defaultMessage: "Status",
    defaultMessage: "ステータス",
  },
  cancel: {
    // defaultMessage: "Cancel",
    defaultMessage: "キャンセル",
  },
  home: {
    // defaultMessage: "Home",
    defaultMessage: "ホーム",
  },
});

export const checkoutMessages = defineMessages({
  stepNameAddress: {
    // defaultMessage: "Address",
    defaultMessage: "住所",
  },
  stepNameShipping: {
    // defaultMessage: "Shipping",
    defaultMessage: "配送",
  },
  stepNamePayment: {
    // defaultMessage: "Payment",
    defaultMessage: "支払い",
  },
  stepNameReview: {
    // defaultMessage: "Review",
    defaultMessage: "レビュー",
  },
  addressNextActionName: {
    defaultMessage: "Continue to Shipping",
  },
  shippingNextActionName: {
    defaultMessage: "Continue to Payment",
  },
  paymentNextActionName: {
    defaultMessage: "Continue to Review",
  },
  reviewNextActionName: {
    defaultMessage: "Place order",
  },
  addNewAddress: {
    defaultMessage: "Add new address",
  },
  shippingMethod: {
    // defaultMessage: "SHIPPING METHOD",
    defaultMessage: "配送方法",
  },
  billingAddress: {
    // defaultMessage: "BILLING ADDRESS",
    defaultMessage: "請求先住所",
  },
  paymentMethod: {
    // defaultMessage: "PAYMENT METHOD",
    defaultMessage: "支払い方法",
  },
  reviewOrder: {
    // defaultMessage: "REVIEW ORDER",
    defaultMessage: "注文確認",
  },
  shippingAddress: {
    // defaultMessage: "Shipping Address",
    defaultMessage: "配送先住所",
  },
  continueShopping: {
    defaultMessage: "CONTINUE SHOPPING",
  },
});

export const prodListHeaderCommonMsg = defineMessages({
  sortOptionsClear: {
    // defaultMessage: "Clear...",
    defaultMessage: "指定しない",
  },
  sortOptionsPrice: {
    // defaultMessage: "Price Low-High",
    defaultMessage: "価格 : 安い",
  },
  sortOptionsPriceDsc: {
    // defaultMessage: "Price High-Low",
    defaultMessage: "価格 : 高い",
  },
  sortOptionsName: {
    // defaultMessage: "Name Increasing",
    defaultMessage: "商品名 : 昇順",
  },
  sortOptionsNameDsc: {
    // defaultMessage: "Name Decreasing",
    defaultMessage: "商品名 : 降順",
  },
  sortOptionsUpdatedAt: {
    // defaultMessage: "Last updated Ascending",
    defaultMessage: "最終更新日 : 昇順",
  },
  sortOptionsUpdatedAtDsc: {
    // defaultMessage: "Last updated Descending",
    defaultMessage: "最終更新日 : 降順",
  },
});

export const paymentStatusMessages = defineMessages({
  notCharged: {
    defaultMessage: "Not charged",
  },
  partiallyCharged: {
    defaultMessage: "Partially charged",
  },
  fullyCharged: {
    defaultMessage: "Fully charged",
  },
  partiallyRefunded: {
    defaultMessage: "Partially refunded",
  },
  fullyRefunded: {
    defaultMessage: "Fully refunded",
  },
});

export const orderStatusMessages = defineMessages({
  draft: {
    defaultMessage: "Draft",
  },
  unfulfilled: {
    defaultMessage: "Unfulfilled",
  },
  partiallyFulfilled: {
    defaultMessage: "Partially fulfilled",
  },
  fulfilled: {
    defaultMessage: "Fulfilled",
  },
  canceled: {
    defaultMessage: "Canceled",
  },
});

export function translatePaymentStatus(
  status: string,
  intl: IntlShape
): string {
  switch (status) {
    case "Not charged":
      return intl.formatMessage(paymentStatusMessages.notCharged);
    case "Partially charged":
      return intl.formatMessage(paymentStatusMessages.partiallyCharged);
    case "Fully charged":
      return intl.formatMessage(paymentStatusMessages.fullyCharged);
    case "Partially refunded":
      return intl.formatMessage(paymentStatusMessages.partiallyRefunded);
    case "Fully refunded":
      return intl.formatMessage(paymentStatusMessages.fullyRefunded);
    default:
      return status;
  }
}

export function translateOrderStatus(status: string, intl: IntlShape): string {
  switch (status) {
    case "Draft":
      return intl.formatMessage(orderStatusMessages.draft);
    case "Unfulfilled":
      return intl.formatMessage(orderStatusMessages.unfulfilled);
    case "Partially fulfilled":
      return intl.formatMessage(orderStatusMessages.partiallyFulfilled);
    case "Fulfilled":
      return intl.formatMessage(orderStatusMessages.fulfilled);
    case "Canceled":
      return intl.formatMessage(orderStatusMessages.canceled);
    default:
      return status;
  }
}
