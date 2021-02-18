// import GMOPG, {ENUMS} from 'gmopg'
import config from "./gmo.json";
import { IGMOPaymentResult, IGMOPaymentError, IGMOPaymentErrorValue, JobCd, Method } from "./types";
import axios from "axios";
import { cmgtGetGmoResponseArray } from "../../../../core/utils";
import { ICardDataCmgt } from "@types";

const env = process.env.NODE_ENV || 'development';
const configData = config[env];

export const creditPayment_Sales =  async (orderId: number, amount: number, cardInfo: ICardDataCmgt) => {

    const newOrderId = orderId + 1;

    const createOrderparams = new FormData();
    createOrderparams.append("ShopID",configData.ShopID);
    createOrderparams.append("ShopPass",configData.ShopPass);
    createOrderparams.append("OrderID",newOrderId.toString());
    createOrderparams.append("JobCd",JobCd.Auth);
    createOrderparams.append("Amount",amount.toString());
    createOrderparams.append("Tax","0");

    const createOrderRes = await axios.post('/payment/EntryTran.idPass', createOrderparams).then(res => res);
    const resultOrderData = cmgtGetGmoResponseArray(createOrderRes.data);

    if(createOrderRes.status !== 200 || createOrderRes.status === 200 && resultOrderData[0] === "ErrCode"){
        return paymentResultConvert(resultOrderData, false);
    } else {
        const paymentParams = new FormData();
        paymentParams.append("AccessID", resultOrderData[1]);
        paymentParams.append("AccessPass", resultOrderData[3]);
        paymentParams.append("OrderID", newOrderId.toString());
        paymentParams.append("Method", Method.Lump);
        paymentParams.append("CardNo", cardInfo.cardNo?.toString());
        paymentParams.append("Expire", cardInfo.expire.toString());
        paymentParams.append("SecurityCode", cardInfo.securityCode.toString());

        const paymentRes = await axios.post('/payment/ExecTran.idPass', paymentParams).then(res => res);
        const resultPaymentData = cmgtGetGmoResponseArray(createOrderRes.data);

        if(paymentRes.status !== 200 || paymentRes.status === 200 && resultPaymentData[0] === "ErrCode"){
            return paymentResultConvert(resultPaymentData, false);
        }

        return paymentResultConvert(null, true);
    }
};

const paymentResultConvert = (resultData:string[] | null, flg: boolean) : IGMOPaymentResult => {
    let resultError: IGMOPaymentError = {
        error: null
    };

    if(resultData !== null) {
        let resultErrorValue : IGMOPaymentErrorValue = {
            message: resultData[3],
            field: resultData[1]
        };
    
        resultError = {
            error: resultErrorValue
        };
    }

    let result : IGMOPaymentResult = {
        data: flg,
        dataError: resultError
    };

    return result;
}