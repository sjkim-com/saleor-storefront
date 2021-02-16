import "./scss/index.scss";

import * as React from "react";
import { FormattedMessage, IntlShape, useIntl } from "react-intl";
import { commonMessages } from "@temp/intl";

import { useAuth } from "@saleor/sdk";
import { demoMode } from "@temp/constants";
import { AlertManager, useAlert } from "react-alert";
import { Button, Form, TextField } from "..";
// import { TypedPasswordResetRequestMutation } from "./queries";

import { passwordResetUrl } from "../../app/routes";

// import { ResetPasswordRequest } from "./gqlTypes/ResetPasswordRequest";

// const PasswordResetRequestForm: React.FC = () => {
//   const intl = useIntl();
//
//   const disableSubmit = (loading: boolean, data: ResetPasswordRequest) =>
//     loading || data?.requestPasswordReset.errors.length === 0;
//
//   const buttonMessage = (loading: boolean, data: ResetPasswordRequest) => {
//     if (loading) {
//       return intl.formatMessage(commonMessages.loading);
//     }
//     if (data?.requestPasswordReset.errors.length === 0) {
//       return intl.formatMessage({ defaultMessage: "Check in your inbox" });
//     }
//     return intl.formatMessage({ defaultMessage: "Reset password" });
//   };
//
//   return (
//     <div className="password-reset-form">
//       <p>
//         <FormattedMessage defaultMessage="パスワードをリセットするための、メールアドレスを入力してください" />
//       </p>
//       <TypedPasswordResetRequestMutation>
//         {(passwordReset, { loading, data }) => {
//           return (
//             <Form
//               errors={data?.requestPasswordReset.errors || []}
//               onSubmit={(event, { email }) => {
//                 event.preventDefault();
//                 passwordReset({
//                   variables: {
//                     email,
//                     redirectUrl: `${window.location.origin}${passwordResetUrl}`,
//                   },
//                 });
//               }}
//             >
//               <TextField
//                 name="email"
//                 autoComplete="email"
//                 label={intl.formatMessage(commonMessages.eMail)}
//                 type="email"
//                 required
//               />
//               <div className="password-reset-form__button">
//                 <Button
//                   testingContext="submit"
//                   type="submit"
//                   {...(disableSubmit(loading, data) && { disabled: true })}
//                 >
//                   {buttonMessage(loading, data)}
//                 </Button>
//               </div>
//             </Form>
//           );
//         }}
//       </TypedPasswordResetRequestMutation>
//     </div>
//   );
// };

const showSuccessNotification = (
  data,
  hide: () => void,
  alert: AlertManager,
  intl: IntlShape
) => {
  const successful = true;
  if (successful) {
    hide();
    alert.show(
      {
        title: intl.formatMessage({
          defaultMessage:
            "詳細な手順については、電子メールを確認してください。",
        }),
      },
      { type: "success", timeout: 5000 }
    );
  }
};

const PasswordResetRequestForm: React.FC<{ hide: () => void }> = ({ hide }) => {
  const { resetPasswordRequest } = useAuth();
  const intl = useIntl();
  const alert = useAlert();
  const [loading, setLoading] = React.useState(false);
  const [errors, setErrors] = React.useState(null);

  const handleOnSubmit = async (evt, { email, password }) => {
    const redirectUrl = `${window.location.origin}${passwordResetUrl}`;
    evt.preventDefault();

    setLoading(true);
    const { data, dataError } = await resetPasswordRequest(email, redirectUrl);
    setLoading(false);
    // validation check
    if (dataError?.error) {
      setErrors(dataError.error);
    } else if (data) {
      setErrors(null);
    }
    showSuccessNotification(data, hide , alert, intl);
  };

  const formData = demoMode
    ? {
        email: "henry@example.com",
        redirectUrl: "",
      }
    : {};

  return (
    <div className="password-reset-form">
      <p>
        <FormattedMessage defaultMessage="パスワードをリセットするための、メールアドレスを入力してください" />
      </p>
      <Form data={formData} errors={errors || []} onSubmit={handleOnSubmit}>
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
            {...(loading && { disabled: true })}
          >
            {loading
              ? intl.formatMessage(commonMessages.loading)
              : intl.formatMessage({ defaultMessage: "メールを送る。" })}
          </Button>
        </div>
      </Form>
    </div>
  );
};
export default PasswordResetRequestForm;
