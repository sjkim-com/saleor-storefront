import "./scss/index.scss";

import * as React from "react";
import { FormattedMessage } from "react-intl";
import { commonMessages } from "@temp/intl";

import { FormAddressType } from "./types";

const AddressSummary: React.FC<{
  address?: FormAddressType;
  email?: string;
  paragraphRef?: React.RefObject<HTMLParagraphElement>;
}> = ({ address, email, paragraphRef }) => {
  if (address) {
    return (
      <p className="address-summary" ref={paragraphRef}>
        <strong>{`${address.lastName} ${address.firstName} `}</strong>
        <br />
        {address.companyName && (
          <>
            {address.companyName} <br />
          </>
        )}
        {address.postalCode},
        <br />
        {address.countryArea && <> {address.countryArea}</>} {address.city}
        <br />
        {address.streetAddress1}
        {address.streetAddress2 && <>, {address.streetAddress2}</>} <br />
        <br />
        {address.phone && (
          <>
            <FormattedMessage
              {...commonMessages.phoneNumber}
              values={{ phone: address.phone }}
            />{" "}
            <br />
          </>
        )}
        {email && (
          <>
            {email} <br />
          </>
        )}
      </p>
    );
  }
  if (email) {
    return (
      <p className="address-summary" ref={paragraphRef}>
        {email}
      </p>
    );
  }
  return null;
};

export default AddressSummary;
