import React, {
  forwardRef,
  RefForwardingComponent,
  useImperativeHandle,
  useState,
} from "react";
import { RouteComponentProps } from "react-router";

import { CheckoutReview } from "@components/organisms";
import { statuses as dummyStatuses } from "@components/organisms/DummyPaymentGateway";
import { useCheckout, useAuth } from "@saleor/sdk";
import { IFormError, ICardDataCmgt } from "@types";
import { cmgtGetUserIdFromGraphqlId } from "../../../../core/utils";
import { creditPayment_Sales } from '../../../../@next/components/organisms/GmoPaymentGateway/gmoApi';

export interface ISubmitCheckoutData {
  id: string;
  orderNumber: string;
  token: string;
}

export interface ICheckoutReviewSubpageHandles {
  complete: () => void;
}

interface IProps extends RouteComponentProps<any> {
  selectedPaymentGatewayToken?: string;
  cardInfo?:ICardDataCmgt;
  paymentGatewayFormRef: React.RefObject<HTMLFormElement>;
  changeSubmitProgress: (submitInProgress: boolean) => void;
  onSubmitSuccess: (data: ISubmitCheckoutData) => void;
  onError: (errors: IFormError[]) => void;
}

const CheckoutReviewSubpageWithRef: RefForwardingComponent<
  ICheckoutReviewSubpageHandles,
  IProps
> = (
  {
    selectedPaymentGatewayToken,
    cardInfo,
    paymentGatewayFormRef,
    changeSubmitProgress,
    onSubmitSuccess,
    onError,
    ...props
  }: IProps,
  ref
) => {
  const { checkout, payment, cmgtCompleteCheckout, cmgtSelectLastOrderNo } = useCheckout();
  const { user } = useAuth();

  const [errors, setErrors] = useState<IFormError[]>([]);

  const checkoutShippingAddress = checkout?.shippingAddress
    ? {
        ...checkout?.shippingAddress,
        phone: checkout?.shippingAddress?.phone || undefined,
      }
    : undefined;

  const checkoutBillingAddress = checkout?.billingAddress
    ? {
        ...checkout?.billingAddress,
        phone: checkout?.billingAddress?.phone || undefined,
      }
    : undefined;

  const getPaymentMethodDescription = () => {
    if (payment?.gateway === "mirumee.payments.dummy") {
      return `Dummy: ${
        dummyStatuses.find(
          status => status.token === selectedPaymentGatewayToken
        )?.label
      }`;
    }
    if (payment?.gateway === "mirumee.payments.gmocredit") {
      return `Gmo Credit`;
    }
    if (payment?.gateway === "mirumee.payments.adyen") {
      return `Adyen payments`;
    }
    if (payment?.creditCard) {
      return `Ending in ${payment?.creditCard.lastDigits}`;
    }
    return ``;
  };

  useImperativeHandle(ref, () => ({
    complete: async () => {
      changeSubmitProgress(true);
      let data;
      let dataError;
      if (payment?.gateway === "mirumee.payments.adyen") {
        paymentGatewayFormRef.current?.dispatchEvent(
          new Event("submitComplete", { cancelable: true })
        );
      } else {
        const selectOrderNo = await cmgtSelectLastOrderNo();
        const gmoResult = await creditPayment_Sales(selectOrderNo.data, payment?.total?.amount!, cardInfo!);]

        if(gmoResult.data){
          const response = await cmgtCompleteCheckout({
            paymentData: {
              id: payment?.id!,
              gateway: payment?.gateway!,
              token: payment?.token!,
              total: payment?.total!
            }, 
            userId: user === undefined || user === null ? undefined : cmgtGetUserIdFromGraphqlId(user.id)
          });

          data = response.data;
          dataError = response.dataError;
          changeSubmitProgress(false);
        } else {
          dataError = gmoResult.dataError;
        }
        const errors = dataError?.error;

        if (errors) {
          setErrors(errors);
          onError(errors);
        } else {
          setErrors([]);
          onSubmitSuccess({
            id: data?.order?.id,
            orderNumber: data?.order?.number,
            token: data?.order?.token,
          });
        }
      }
    },
  }));

  return (
    <CheckoutReview
      {...props}
      shippingAddress={checkoutShippingAddress}
      billingAddress={checkoutBillingAddress}
      shippingMethodName={checkout?.shippingMethod?.name}
      paymentMethodName={getPaymentMethodDescription()}
      email={checkout?.email}
      errors={errors}
    />
  );
};

const CheckoutReviewSubpage = forwardRef(CheckoutReviewSubpageWithRef);

export { CheckoutReviewSubpage };
