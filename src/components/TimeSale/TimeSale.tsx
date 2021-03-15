import "./scss/index.scss";

import * as React from "react";
import { eciHost, eciAccount } from "@temp/constants";

export interface ITimeSaleRequest {
  /**
   * @param {string} startDate "yyyy-MM-dd HH:mm:ss"
   */
  startDate: string;
  /**
   * @param {string} endDate "yyyy-MM-dd HH:mm:ss"
   */
  endDate: string;
  timeSaleLimitCount: number;
  pageIndex: number;
}

let timeSaleDetails = null;

const TimeSale: React.FC<{ request: ITimeSaleRequest }> = ({ request }) => {
  console.log("----- <TimeSale> -----");

  React.useEffect(() => {
    // タイムセール商品情報を取得
    const fetchTimeSale = () => {
      return new Promise(resolve => {
        const params = {
          host: eciHost,
          type: "search",
          account: eciAccount,
          queries: [
            `string6=${request.startDate}`,
            `p=${request.pageIndex}`,
            `pl=${request.timeSaleLimitCount}`,
          ],
        };

        // startDateに紐づく商品情報を取得
        window._eciUtils.fetchJsonData(params).then(data => {
          const endDate = data?.index?.asp?.facetList?.string7?.list[0];
          if (endDate === undefined) {
            resolve(null);
            return;
          }

          resolve(data);
        });
      });
    };

    // タイムセール商品情報を取得
    fetchTimeSale().then((data: any) => {
      const nowTime = new Date().getTime();

      timeSaleDetails = data?.index?.asp?.itemList?.filter(data => {
        const startTime = new Date(data.string6).getTime();
        const endTime = new Date(data.string7).getTime();

        if (nowTime >= startTime && nowTime <= endTime) {
          return true;
        }

        return false;
      });

      if (
        Array.isArray(timeSaleDetails) !== true ||
        timeSaleDetails.length < 1
      ) {
        return <div />;
      }
    });
  }, [request.startDate]);

  if (Array.isArray(timeSaleDetails) !== true || timeSaleDetails.length < 1) {
    return <div />;
  }

  return (
    <div>
      <p className="timesale-product-list__demo_title">タイムセール商品</p>
      <ul>
        {timeSaleDetails.map(timeSaleDetail => {
          return (
            <li className="timesale-product-list">
              <div className="timesale-product-list-item">
                <a href={timeSaleDetail.url}>
                  <img
                    className="timesale-product-list-item__image"
                    src={timeSaleDetail.img_url}
                    alt={timeSaleDetail.title}
                  />
                  <p className="timesale-product-list-item__title">
                    {timeSaleDetail.title}
                  </p>
                  <p className="timesale-product-list-item__price">
                    &yen;{Number(timeSaleDetail.price).toLocaleString()}
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

export default TimeSale;
