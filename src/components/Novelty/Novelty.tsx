import * as React from "react";
import { eciHost, eciAccount } from "@temp/constants";
import "./scss/index.scss";

export interface INoveltyRequest {
  productId: string;
}

let noveltyData = null;

const Novelty: React.FC<{ request: INoveltyRequest }> = ({ request }) => {
  console.log("----- <Novelty> -----");

  React.useEffect(() => {
    // ノベルティ商品情報を取得
    const fetchNovelty = () => {
      return new Promise(resolve => {
        console.log(`  request.productId : '${request.productId}'`);

        const params = {
          host: eciHost,
          type: "search",
          account: eciAccount,
          queries: [`q=${request.productId}`, "p=1", "pl=1"],
        };

        // productIdに紐づく商品情報を取得
        window._eciUtils.fetchJsonData(params).then(data => {
          const noveltySku = data?.index?.asp?.facetList?.string5?.list[0];

          console.log(`  noveltySku : '${noveltySku}'`);

          if (noveltySku === undefined) {
            resolve(null);
            return;
          }

          const params = {
            host: eciHost,
            type: "search",
            account: eciAccount,
            queries: [`q=${noveltySku}`, "p=1", "pl=1"],
          };

          // ノベルティ商品のSKUに紐づくノベルティ商品情報を取得
          window._eciUtils.fetchJsonData(params).then(data => {
            resolve(data);
          });
        });
      });
    };

    // ノベルティ商品情報を取得
    fetchNovelty().then(data => {
      noveltyData = data;
    });
  }, [request.productId]);

  if (noveltyData === null) {
    return <div />;
  }

  const noveltyDetail = noveltyData.index?.asp?.itemList[0];
  if (noveltyDetail === null) {
    return <div />;
  }

  return (
    <div className="novelty">
      <h4 className="novelty__title">対象ノベルティ商品</h4>
      <div className="novelty__items">
        <div className="novelty__items-item">
          <h4 className="novelty__items-item__title">{noveltyDetail.title}</h4>
          <p className="novelty__items-item__price">
            &yen;{noveltyDetail.price}
          </p>
          <div className="novelty__items-item__img">
            <img src={noveltyDetail.img_url} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Novelty;
