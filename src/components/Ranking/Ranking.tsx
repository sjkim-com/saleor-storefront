import * as React from "react";

// EC Intelligenceの仕様
export enum RankingType {
  // 閲覧
  VIEW = 1,
  // 購買
  PURCHASE = 2,
}

export interface IRankingRequest {
  rankingType: RankingType;
  htmlTemplateId: string;
  htmlTagId: string;
  fromDate: string;
  toDate: string;
  rankingLimitCount: number;
  shopId?: string;
  categories?: string[];
  string1?: string[];
  string2?: string[];
  string3?: string[];
  string4?: string[];
  string5?: string[];
  string6?: string[];
  string7?: string[];
  string8?: string[];
  string9?: string[];
  string10?: string[];
  string11?: string[];
  string12?: string[];
  string13?: string[];
  string14?: string[];
  string15?: string[];
  string16?: string[];
  string17?: string[];
  string18?: string[];
  string19?: string[];
  string20?: string[];
  string21?: string[];
  string22?: string[];
  string23?: string[];
  string24?: string[];
  string25?: string[];
  string26?: string[];
  string27?: string[];
  string28?: string[];
  string29?: string[];
  string30?: string[];
  number1?: number[];
  number2?: number[];
  number3?: number[];
  number4?: number[];
  number5?: number[];
  number6?: number[];
  number7?: number[];
  number8?: number[];
  number9?: number[];
  number10?: number[];
}

const addProperty = (data: object, key: string, value: any) => {
  if (value) {
    data[key] = value;
  }
};

const Ranking: React.FC<{ request: IRankingRequest }> = ({ request }) => {
  React.useEffect(() => {
    // 必須データを設定
    const data = {
      index: request.rankingType,
      from: request.fromDate,
      to: request.toDate,
      limit: request.rankingLimitCount,
      tmpId: request.htmlTemplateId,
      renderId: request.htmlTagId,
    };

    // オプションデータを設定
    addProperty(data, "shop", request.shopId);
    addProperty(data, "category", request.categories);
    addProperty(data, "string1", request.string1);
    addProperty(data, "string2", request.string2);
    addProperty(data, "string3", request.string3);
    addProperty(data, "string4", request.string4);
    addProperty(data, "string5", request.string5);
    addProperty(data, "string6", request.string6);
    addProperty(data, "string7", request.string7);
    addProperty(data, "string8", request.string8);
    addProperty(data, "string9", request.string9);
    addProperty(data, "string10", request.string10);
    addProperty(data, "string11", request.string11);
    addProperty(data, "string12", request.string12);
    addProperty(data, "string13", request.string13);
    addProperty(data, "string14", request.string14);
    addProperty(data, "string15", request.string15);
    addProperty(data, "string16", request.string16);
    addProperty(data, "string17", request.string17);
    addProperty(data, "string18", request.string18);
    addProperty(data, "string19", request.string19);
    addProperty(data, "string20", request.string20);
    addProperty(data, "string21", request.string21);
    addProperty(data, "string22", request.string22);
    addProperty(data, "string23", request.string23);
    addProperty(data, "string24", request.string24);
    addProperty(data, "string25", request.string25);
    addProperty(data, "string26", request.string26);
    addProperty(data, "string27", request.string27);
    addProperty(data, "string28", request.string28);
    addProperty(data, "string29", request.string29);
    addProperty(data, "string30", request.string30);
    addProperty(data, "number1", request.number1);
    addProperty(data, "number2", request.number2);
    addProperty(data, "number3", request.number3);
    addProperty(data, "number4", request.number4);
    addProperty(data, "number5", request.number5);
    addProperty(data, "number6", request.number6);
    addProperty(data, "number7", request.number7);
    addProperty(data, "number8", request.number8);
    addProperty(data, "number9", request.number9);
    addProperty(data, "number10", request.number10);

    // EC Intelligence にRankリクエストを送信し、
    // レスポンス(HTML形式)を<div>タグに挿入。
    window._scq.push(["_rank", data]);
  }, []);

  return <div id={request.htmlTagId} />;
};

export default Ranking;
