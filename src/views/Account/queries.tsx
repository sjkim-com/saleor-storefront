import gql from "graphql-tag";
import { TypedMutation } from "../../core/mutations";
// import {
//   AccountConfirm,
//   AccountConfirmVariables,
// } from "./gqlTypes/AccountConfirm";

import {
  CmgtAccountConfirm,
  CmgtAccountConfirmVariables,
} from "./gqlTypes/CmgtAccountConfirm";
// const accountConfirmMutation = gql`
//   mutation AccountConfirm($email: String!, $token: String!) {
//     confirmAccount(email: $email, token: $token) {
//       errors {
//         field
//         message
//       }
//     }
//   }
// `;

// export const TypedAccountConfirmMutation = TypedMutation<
//   AccountConfirm,
//   AccountConfirmVariables
// >(accountConfirmMutation);

const cmgtAccountConfirmMutation = gql`
  mutation CmgtAccountConfirm($email: String = "songc@ui2.co.jp") {
    update_account_user(
      _set: { is_active: true }
      where: { email: { _eq: $email } }
    ) {
      returning {
        email
      }
    }
  }
`;

export const TypedCmgtAccountConfirmMutation = TypedMutation<
  CmgtAccountConfirm,
  CmgtAccountConfirmVariables
>(cmgtAccountConfirmMutation);
