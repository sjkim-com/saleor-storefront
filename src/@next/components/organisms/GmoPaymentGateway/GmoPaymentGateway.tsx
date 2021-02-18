import { Formik } from "formik";
import React from "react";
import { useIntl } from "react-intl";
import { commonMessages } from "@temp/intl";

import * as S from "./styles";
import { IProps } from "./types";
import { TextField } from "../../molecules/TextField";
import errorCode from "./error-codes.json";
// import { useGmo } from "@saleor/sdk";

const cardInfo : {
  cardNo: number;
  expire: number;
  securityCode: number;
};

const GmoPaymentGateway: React.FC<IProps> = ({
  processPayment,
  formRef,
  formId,
  totalAmount,
  errors = []
}: IProps) => {
  const intl = useIntl();

  const errorMessageList = errors.length !== 0 ? errors.message.split("|").map(code => errorCode[code]) : [];

  // TODO : GMOの処理をSDKに移動して、corsエラー解決できたら、使う
  // const {
  //   creditPayment
  // } = useGmo();

  return (
    <Formik
      initialValues={cardInfo}
      onSubmit={(values, { setSubmitting }) => {
        // TODO : GMOの処理をSDKに移動して、corsエラー解決できたら、使う
        // creditPayment(orderId, 100, values.cardNo, values.expire, values.securityCode);
        processPayment("Gmo-credit", values);
        setSubmitting(false);
      }}
    >
      {({
        handleChange,
        handleSubmit,
        handleBlur,
        values,
      }) => (
      <S.Form id={formId} ref={formRef} onSubmit={handleSubmit} data-test="gmoPaymentGatewayForm">

        {errorMessageList.map(message =>(
          <S.Error>※ {message}</S.Error>
        ))}
        <S.Card>
          <S.CardNumberField>
            <TextField
                 name="cardNo"
                 label={intl.formatMessage(commonMessages.cardNo)}
                //  defaultValue={"4111111111111111"}
                 type="text"
                 value={values.cardNo}
                 onBlur={handleBlur}
                 onChange={handleChange}
                 required
             />
          </S.CardNumberField>
          <S.CardExpiryField>
          <TextField
                name="expire"
                label={intl.formatMessage(commonMessages.expire)}
                // defaultValue={"2012"}
                type="number"
                value={values.expire}
                onBlur={handleBlur}
                onChange={handleChange}
                required
              />
          </S.CardExpiryField>
          <S.CardCvcField>
          <TextField
                name="securityCode"
                label={intl.formatMessage(commonMessages.securityCode)}
                // defaultValue={"123"}
                type="number"
                value={values.securityCode}
                onBlur={handleBlur}
                onChange={handleChange}
                required
              />
          </S.CardCvcField>
        </S.Card>
      </S.Form>
      )}
    </Formik>
  );
};

export { GmoPaymentGateway };
