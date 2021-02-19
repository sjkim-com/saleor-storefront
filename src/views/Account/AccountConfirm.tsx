import * as React from "react";
import { useAlert } from "react-alert";

import { StringParam, useQueryParams } from "use-query-params";

import { RouteComponentProps } from "react-router";
import { BASE_URL } from "../../core/config";

// import { TypedAccountConfirmMutation } from "./queries";
import { TypedCmgtAccountConfirmMutation } from "./queries";

import "./scss/index.scss";

const AccountConfirm: React.FC<RouteComponentProps> = ({ history }) => {
  const [query] = useQueryParams({
    email: StringParam,
    token: StringParam,
  });

  const alert = useAlert();

  const displayConfirmationAlert = anyErrors => {
    alert.show(
      {
        content:
          anyErrors.length > 0
            ? anyErrors.map(error => error.message).join(" ")
            : "これでログインできます",
        title: anyErrors.length > 0 ? "エラー" : "アカウントが確認されました。",
      },
      { type: anyErrors.length > 0 ? "error" : "success", timeout: 5000 }
    );
  };

  React.useEffect(() => {
    this.accountManagerFn({
      // variables: { email: query.email, token: query.token },
      variables: { email: query.email },
    })
      .then(result => {
        // const possibleErrors = result.data.confirmAccount.errors;
        const possibleErrors =
          result.data.update_account_user.returning.length > 0 ? [] : ["error"];
        displayConfirmationAlert(possibleErrors);
      })
      .catch(() => {
        const errors = [
          {
            message: "アカウントのアクティブ化中に問題が発生しました。",
          },
        ];
        displayConfirmationAlert(errors);
      })
      .finally(() => {
        history.push(BASE_URL);
      });
  }, []);

  return (
    <TypedCmgtAccountConfirmMutation>
      {accountConfirm => {
        this.accountManagerFn = accountConfirm;
        return <div />;
      }}
    </TypedCmgtAccountConfirmMutation>
  );
};

export default AccountConfirm;
