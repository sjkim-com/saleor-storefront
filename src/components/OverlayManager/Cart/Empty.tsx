import * as React from "react";
import { FormattedMessage } from "react-intl";

import { Button } from "../..";

const Empty: React.FC<{ overlayHide(): void }> = ({ overlayHide }) => (
  <div className="cart__empty">
    <h4>
      <FormattedMessage defaultMessage="バッグ内に商品がありません。" />
    </h4>
    {/*
    <p>
      <FormattedMessage defaultMessage="You haven’t added anything to your bag. We’re sure you’ll find something in our store" />
    </p>
    */}
    <div className="cart__empty__action">
      <Button
        testingContext="emptyCartHideOverlayButton"
        secondary
        onClick={overlayHide}
      >
        <FormattedMessage defaultMessage="買い物を続ける" />
      </Button>
    </div>
  </div>
);

export default Empty;
