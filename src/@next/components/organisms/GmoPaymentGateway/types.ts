import {ICardDataCmgt, IFormError} from "@types";

export interface IGMOPaymentInfo {
  cardNo?: number;
  expire?: number;
  securityCode?: number;
}

export interface IGMOPaymentResult {
  data?: boolean;
  dataError?: IGMOPaymentError | null;
}

export interface IGMOPaymentError {
  error?: IGMOPaymentErrorValue | null;
}
export interface IGMOPaymentErrorValue {
  message: string;
  field?: string;
}

export interface IProps {
  /**
   * Form reference on which payment might be submitted.
   */
  formRef?: React.RefObject<HTMLFormElement>;
  /**
   * Form id on which payment might be submitted.
   */
  formId?: string;
  /**
   * Method called after the form is submitted. Passed token attribute will be used to create payment.
   */
  processPayment: (token: string, cardData:ICardDataCmgt) => void;

  totalAmount?: number;
  
  errors?: IFormError[];
}

export enum JobCd {
  Check = 'CHECK',
  Capture = 'CAPTURE',
  Auth = 'AUTH',
  Sales = 'SALES',
  Void = 'VOID',
  Return = 'RETURN',
  Returnx = 'RETURNX',
  Sauth = 'SAUTH',
}

export enum Method {
  Lump = "1",
  Installment = "2",
  BonusLump = "3",
  Revolving = "4",
  BonusInstallment = "5"
}