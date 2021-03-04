/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: CmgtAccountConfirm
// ====================================================

export interface CmgtAccountConfirm_update_account_user_returning {
  __typename: "account_user";
  email: string;
  id: string;
}

export interface CmgtAccountConfirm_update_account_user {
  __typename: "account_user_mutation_response";
  /**
   * data of the affected rows by the mutation
   */
  returning: CmgtAccountConfirm_update_account_user_returning[];
}

export interface CmgtAccountConfirm {
  /**
   * update data of the table: "account_user"
   */
  update_account_user: CmgtAccountConfirm_update_account_user | null;
}

export interface CmgtAccountConfirmVariables {
  email?: string | null;
}
