import "./scss/index.scss";

import * as React from "react";
import { eciHost, eciAccount } from "@temp/constants";

export interface INewProductRequest {
  newProductLimitCount: number;
  pageIndex: number;
}

let newProductDetails = null;

const NewProduct: React.FC<{ request: INewProductRequest }> = ({ request }) => {
  React.useEffect(() => {
    // 新商品情報を取得
    const fetchTimeSale = () => {
      return new Promise(resolve => {
        const params = {
          host: eciHost,
          type: "search",
          account: eciAccount,
          queries: [
            `string9=${encodeURI("新商品")}`,
            `p=${request.pageIndex}`,
            `pl=${request.newProductLimitCount}`,
          ],
        };

        // 新商品に紐づく商品情報を取得
        window._eciUtils.fetchJsonData(params).then(data => {
          resolve(data);
        });
      });
    };

    // 新商品情報を取得
    fetchTimeSale().then((data: any) => {
      if (data === null) {
        return <div />;
      }

      newProductDetails = data?.index?.asp?.itemList;
    });
  }, [request.pageIndex]);

  if (
    Array.isArray(newProductDetails) !== true ||
    newProductDetails.length < 1
  ) {
    return <div />;
  }

  return (
    <div>
      <p className="new-product-list__demo_title">新商品</p>
      <ul>
        {newProductDetails.map(newProductDetail => {
          const key = `new-product-${newProductDetail.id}`;

          return (
            <li key={key} className="new-product-list">
              <div className="new-product-list-item">
                <a href={newProductDetail.url}>
                  <img
                    className="new-product-list-item__image"
                    src={newProductDetail.img_url}
                    alt={newProductDetail.title}
                  />
                  <p className="new-product-list-item__title">
                    {newProductDetail.title}
                  </p>
                  <p className="new-product-list-item__price">
                    &yen;{Number(newProductDetail.price).toLocaleString()}
                  </p>
                </a>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default NewProduct;
