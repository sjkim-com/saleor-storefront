import React from "react";

// import { cmgtUseCreateUserAddress, cmgtSelectUserAddress, cmgtUseUpdateUserAddress} from "@saleor/sdk";

import { useCreateUserAddress, useUpdateUserAddress } from "@saleor/sdk";

import { CountryCode } from "@saleor/sdk/lib/gqlTypes/globalTypes";
import { AddressForm } from "../AddressForm";
import { Modal } from "../Modal";

import { IProps } from "./types";
// import { cmgtGetUserIdFromGraphqlId } from "../../../../core/utils";

export const AddressFormModal: React.FC<IProps> = ({
  hideModal,
  submitBtnText,
  target,
  title,
  userId,
  address,
  formId,
  ...props
}: IProps) => {
  const [show, setShow] = React.useState(true);
  let errors: any[] | undefined = [];

  const [
    setCreatUserAddress,
    { data: createData, error: addressCreateErrors },
  ] = useCreateUserAddress();

  const [
    setUpdateUserAddress,
    { data: updateData, error: addressUpdateErrors },
  ] = useUpdateUserAddress();
  
  if (addressCreateErrors) {
    errors = addressCreateErrors.extraInfo.userInputErrors;
  }
  
  // const [
  //   cmgtSetCreateUserAddress,
  //   { data: createData, error: addressCreateErrors },
  // ] = cmgtUseCreateUserAddress();

  // const [
  //   cmgtSetSelectUserAddress,
  //   { data: selectData, error: addressSelectErrors },
  // ] = cmgtSelectUserAddress();
  
  // const [
  //   cmgtSetUpdateuserAddress,
  //   { data: updateData, error: addressUpdateErrors },
  // ] = cmgtUseUpdateUserAddress();

  // if (addressSelectErrors) {
  //   errors = addressSelectErrors.extraInfo.userInputErrors;
  // }

  if (addressUpdateErrors) {
    errors = addressUpdateErrors.extraInfo.userInputErrors;
  }

  React.useEffect(() => {
    if (
      (createData && !addressCreateErrors) ||
      (updateData && !addressUpdateErrors) 
      // ||(selectData && !addressSelectErrors)
    ) {
      hideModal();
    }
  },  [createData, updateData, addressCreateErrors, addressUpdateErrors]);
  // [createData, selectData, updateData, addressSelectErrors, addressUpdateErrors]);

  return (
    <Modal
      submitButtonTestingContext="submitAddressFormModalButton"
      testingContext="submitAddressFormModal"
      title={title}
      hide={() => {
        hideModal();
        setShow(false);
      }}
      formId={formId}
      disabled={false}
      show={show}
      target={target}
      submitBtnText={submitBtnText}
    >
      <AddressForm
        {...props}
        {...{ errors }}
        formId={formId}
        address={address ? address.address : undefined}
        handleSubmit={data => {
          if (userId) {
            setCreatUserAddress({
              input: {
                ...data,
                country: data?.country?.code as CountryCode,
              },
            });
          } else {
            setUpdateUserAddress({
              id: address!.id,
              input: {
                ...data,
                country: data?.country?.code as CountryCode,
              },
            });
          }
          // if (userId) {
          //  cmgtSetCreateUserAddress({
          //     addressObject: {
          //       ...data,
          //       country: data?.country?.code as CountryCode,
          //       account_user_addresses: {
          //         data: {
          //           user_id:cmgtGetUserIdFromGraphqlId(userId)
          //         }
          //       }
          //     }
          //   });

          //   cmgtSetSelectUserAddress({
          //     user_id:cmgtGetUserIdFromGraphqlId(userId)
          //   });
          // } else {
          //   cmgtSetUpdateuserAddress({
          //     addressId: cmgtGetUserIdFromGraphqlId(address!.id),
          //     addressObject: {
          //       ...data,
          //       country: data?.country?.code as CountryCode
          //     }
          //   });
          // }
        }}
      />
    </Modal>
  );
};
