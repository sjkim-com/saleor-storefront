import "./scss/index.scss";

import * as React from "react";
import { FormattedMessage, useIntl } from "react-intl";
import { commonMessages } from "@temp/intl";

import { Button, Form, TextField } from "..";
import { TypedPasswordResetRequestMutation } from "./queries";

import { passwordResetUrl } from "../../app/routes";
import { ResetPasswordRequest } from "./gqlTypes/ResetPasswordRequest";

const PasswordResetRequestForm: React.FC = () => {
  const intl = useIntl();

  const disableSubmit = (loading: boolean, data: ResetPasswordRequest) =>
    loading || data?.requestPasswordReset.errors.length === 0;

  const buttonMessage = (loading: boolean, data: ResetPasswordRequest) => {
    if (loading) {
      return intl.formatMessage(commonMessages.loading);
    }
    if (data?.requestPasswordReset.errors.length === 0) {
      return intl.formatMessage({ defaultMessage: "メールを確認してください。" });
    }
    return intl.formatMessage({ defaultMessage: "メールを送信" });
  };

  return (
    <div className="password-reset-form">
      <p>
        <FormattedMessage defaultMessage="ご登録のメールアドレスにパスワードの再設定画面のURLを記載したメールをお送りします。" />
      </p>
      <TypedPasswordResetRequestMutation>
        {(passwordReset, { loading, data }) => {
          return (
            <Form
              errors={data?.requestPasswordReset.errors || []}
              onSubmit={(event, { email }) => {
                event.preventDefault();
                passwordReset({
                  variables: {
                    email,
                    redirectUrl: `${window.location.origin}${passwordResetUrl}`,
                  },
                });
              }}
            >
              <TextField
                name="email"
                autoComplete="email"
                label={intl.formatMessage(commonMessages.eMail)}
                type="email"
                required
              />
              <div className="password-reset-form__button">
                <Button
                  testingContext="submit"
                  type="submit"
                  {...(disableSubmit(loading, data) && { disabled: true })}
                >
                  {buttonMessage(loading, data)}
                </Button>
              </div>
            </Form>
          );
        }}
      </TypedPasswordResetRequestMutation>
    </div>
  );
};

export default PasswordResetRequestForm;
