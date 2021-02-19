import * as React from "react";

import { NavLink } from "..";
import { TypedSecondaryMenuQuery } from "./queries";

import "./scss/index.scss";

class Nav extends React.PureComponent {
  render() {
    return (
      <footer className="footer-nav">
        {/* <div dangerouslySetInnerHTML={{ __html: outer_html }} /> */}
        <div className="container">
          {/* <TypedSecondaryMenuQuery>
            {({ data }) => {
              console.log(data);
              return data.shop.navigation.secondary.items.map(item => (
                <div className="footer-nav__section" key={item.id}>
                  <h4 className="footer-nav__section-header">
                    <NavLink item={item} />
                  </h4>
                  <div className="footer-nav__section-content">
                    {item.children.map(subItem => (
                      <p key={subItem.id}>
                        <NavLink item={subItem} />
                      </p>
                    ))}
                  </div>
                </div>
              ));
            }}
          </TypedSecondaryMenuQuery> */}
          <div className="footer-nav__section">
            <h4 className="footer-nav__section-header">
              オンラインショッピングガイド
            </h4>
            <div className="footer-nav__section-content">
              <p>新規会員登録</p>
              <p>メールマガジン購読</p>
              <p>ブランドから探す</p>
              <p>アイテムから探す</p>
              <p>特集一覧から探す</p>
            </div>
          </div>
          {/* <div className="footer-nav__section">
            <h4 className="footer-nav__section-header">＆nbsp;</h4>
            <div className="footer-nav__section-content">
              <p>アクタスオンラインについて</p>
              <p>会員登録・各種変更について</p>
              <p>配送・配送料金について</p>
              <p>決済手数料について</p>
              <p>お支払い方法について</p>
              <p>ご注文方法について</p>
            </div>
          </div>
          <div className="footer-nav__section">
            <h4 className="footer-nav__section-header">＆nbsp;</h4>
            <div className="footer-nav__section-content">
              <p>キャンセル・交換・返品について</p>
              <p>ギフト包装について</p>
              <p>ギフトカタログについて</p>
              <p>入荷お知らせメールについて</p>
              <p>ご利用環境について</p>
              <p>お問い合わせについて</p>
            </div>
          </div>
          <div className="footer-nav__section">
            <h4 className="footer-nav__section-header">＆nbsp;</h4>
            <div className="footer-nav__section-content">
              <p>ご利用規約</p>
              <p>特定商取引法に基づく表記</p>
              <p>プライバシーポリシー</p>
              <p>サイトマップ</p>
            </div>
          </div> */}
          <div className="footer-nav__section">
            <h4 className="footer-nav__section-header">会社概要</h4>
            <div className="footer-nav__section-content">
              <p>会社概要</p>
              <p>店舗情報</p>
              <p>採用情報</p>
              <p>メッセージ</p>
              <p>ショップブログ</p>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Nav;
