import "./scss/index.scss";

import * as React from "react";
import { eciDebug } from "@temp/constants";

import { SocialMediaIcon } from "..";
import { SOCIAL_MEDIA } from "../../core/config";
import Nav from "./Nav";

const Footer: React.FC = () => {
  React.useEffect(() => {
    window._scq.push(["_setDebug", eciDebug]);
    window._scq.push(["_setCustomField", 1, "Footer"]);
    window._scq.push(["_trackPageview"]);
  }, []);
  return (
    <div className="footer" id="footer">
      {/* EC Intelligence template */}
      <div id="include_footer_01" />

      <div className="footer__favicons container">
        {SOCIAL_MEDIA.map(medium => (
          <SocialMediaIcon medium={medium} key={medium.ariaLabel} />
        ))}
      </div>
      <Nav />
    </div>
  );
};

export default Footer;
