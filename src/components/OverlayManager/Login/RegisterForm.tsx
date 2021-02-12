import "./scss/index.scss";

import * as React from "react";

import { useIntl, IntlShape } from "react-intl";
import { commonMessages } from "@temp/intl";
import { useAuth } from "@saleor/sdk";
import { demoMode } from "@temp/constants";
import { accountConfirmUrl } from "@temp/app/routes";
import { AlertManager, useAlert } from "react-alert";
import { Button, Form, TextField } from "../..";
import { maybe } from "../../../core/utils";

const showSuccessNotification = (
  data,
  hide: () => void,
  alert: AlertManager,
  intl: IntlShape
) => {
  const successful = maybe(() => data.requiresConfirmation);
  if (successful) {
    hide();
    alert.show(
      {
        title: data.requiresConfirmation
          ? intl.formatMessage({
              defaultMessage:
                "Please check your e-mail for further instructions",
            })
          : intl.formatMessage({ defaultMessage: "New user has been created" }),
      },
      { type: "success", timeout: 5000 }
    );
  }
};

// const RegisterForm: React.FC<{ hide: () => void }> = ({ hide }) => {
//   const alert = useAlert();
//   const intl = useIntl();
//
//   return (
//     <TypedAccountRegisterMutation
//       onCompleted={data => showSuccessNotification(data, hide, alert, intl)}
//     >
//       {(registerCustomer, { loading, data }) => {
//         return (
//           <Form
//             errors={maybe(() => data.accountRegister.errors, [])}
//             onSubmit={(event, { email, password }) => {
//               event.preventDefault();
//               const redirectUrl = `${window.location.origin}${accountConfirmUrl}`;
//               registerCustomer({ variables: { email, password, redirectUrl } });
//             }}
//           >
//             <TextField
//               name="email"
//               autoComplete="email"
//               label={intl.formatMessage(commonMessages.eMail)}
//               type="email"
//               required
//             />
//             <TextField
//               name="password"
//               autoComplete="password"
//               label={intl.formatMessage(commonMessages.password)}
//               type="password"
//               required
//             />
//             <div className="login__content__button">
//               <Button
//                 testingContext="submitRegisterFormButton"
//                 type="submit"
//                 {...(loading && { disabled: true })}
//               >
//                 {loading
//                   ? intl.formatMessage(commonMessages.loading)
//                   : intl.formatMessage({ defaultMessage: "登録" })}
//               </Button>
//             </div>
//           </Form>
//         );
//       }}
//     </TypedAccountRegisterMutation>
//   );
// };
const RegisterForm: React.FC<{ hide: () => void }> = ({ hide }) => {
  const { registerAccount } = useAuth();
  const alert = useAlert();
  const [loading, setLoading] = React.useState(false);
  const [errors, setErrors] = React.useState(null);
  // const alert = useAlert();
  const intl = useIntl();

  const handleOnSubmit = async (evt, { email, password }) => {
    const redirectUrl = `${window.location.origin}${accountConfirmUrl}`;
    evt.preventDefault();
    setLoading(true);
    const { data, dataError } = await registerAccount(
      email,
      password,
      redirectUrl
    );
    setLoading(false);
    // validation check
    if (dataError?.error) {
      setErrors(dataError.error);
    } else if (data && hide) {
      setErrors(null);
      hide();
    }

    console.log(data);
    showSuccessNotification(data, hide, alert, intl);
  };

  const formData = demoMode
    ? {
        email: "admin@example.com",
        password: "admin",
        redirectUrl: "",
      }
    : {};

  return (
    <div className="login-form">
      <Form data={formData} errors={errors || []} onSubmit={handleOnSubmit}>
        <TextField
          name="email"
          autoComplete="email"
          label={intl.formatMessage(commonMessages.eMail)}
          type="email"
          required
        />
        <TextField
          name="password"
          autoComplete="password"
          label={intl.formatMessage(commonMessages.password)}
          type="password"
          required
        />
        <div className="login__content__button">
          <Button
            testingContext="submitRegisterFormButton"
            type="submit"
            {...(loading && { disabled: true })}
          >
            {loading
              ? intl.formatMessage(commonMessages.loading)
              : intl.formatMessage({ defaultMessage: "Register" })}
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default RegisterForm;
