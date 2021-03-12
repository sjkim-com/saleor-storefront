import * as React from "react";
import { eciHost, eciAccount } from "@temp/constants";

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
          }

          const params = {
            host: eciHost,
            type: "search",
            account: eciAccount,
            queries: [`q=${noveltySku}`, "p=1", "pl=1"],
          };

          // ノベルティ商品のSKUに紐づくノベルティ商品情報を取得
          window._eciUtils.fetchJsonData(params).then(data => {
            console.log("----- novelty item ----");
            console.log(JSON.stringify(data));

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
    <div>
      <p>対象ノベルティ商品</p>
      <div>
        <img src={noveltyDetail.img_url} width="56px;" alt="" />
        <p>{noveltyDetail.title}</p>
        <p>&yen;{noveltyDetail.price}</p>
      </div>
    </div>
  );
};

export default Novelty;
