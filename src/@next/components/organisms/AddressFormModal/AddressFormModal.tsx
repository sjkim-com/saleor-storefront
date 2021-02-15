import React from "react";

import { cmgtUseCreateUserAddress, useUpdateUserAddress, cmgtSelectUserAddress } from "@saleor/sdk";

import { CountryCode } from "@saleor/sdk/lib/gqlTypes/globalTypes";
import { AddressForm } from "../AddressForm";
import { Modal } from "../Modal";

import { IProps } from "./types";
import { cmgtGetUserIdFromGraphqlId } from "../../../../core/utils";

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
    cmgtSetCreatUserAddress,
    { data: createData, error: addressCreateErrors },
  ] = cmgtUseCreateUserAddress();

  const [
    cmgtSetSelectUserAddress,
    { data: selectData, error: addressSelectErrors },
  ] = cmgtSelectUserAddress();
  
  const [
    setUpdateUserAddress,
    { data: updateData, error: addressUpdateErrors },
  ] = useUpdateUserAddress();

  if (addressCreateErrors) {
    errors = addressCreateErrors.extraInfo.userInputErrors;
  }

  if (addressSelectErrors) {
    errors = addressSelectErrors.extraInfo.userInputErrors;
  }

  if (addressUpdateErrors) {
    errors = addressUpdateErrors.extraInfo.userInputErrors;
  }

  React.useEffect(() => {
    if (
      (createData && !addressCreateErrors) ||
      (updateData && !addressUpdateErrors) ||
      (selectData && !addressSelectErrors)
    ) {
      hideModal();
    }
  }, [selectData, updateData, addressSelectErrors, addressUpdateErrors]);

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
            cmgtSetCreatUserAddress({
              addressObject: {
                ...data,
                country: data?.country?.code as CountryCode,
                account_user_addresses: {
                  data: {
                    user_id:cmgtGetUserIdFromGraphqlId(userId)
                  }
                }
              },
            });

            cmgtSetSelectUserAddress({
              user_id:cmgtGetUserIdFromGraphqlId(userId)
            });
          } else {
            setUpdateUserAddress({
              id: address!.id,
              input: {
                ...data,
                country: data?.country?.code as CountryCode
              },
            });
          }
        }}
      />
    </Modal>
  );
};
