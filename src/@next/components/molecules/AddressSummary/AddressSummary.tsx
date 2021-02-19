import React from "react";
import { FormattedMessage } from "react-intl";
import { commonMessages } from "@temp/intl";

import * as S from "./styles";
import { IProps } from "./types";

/**
 * Address summary
 */
const AddressSummary: React.FC<IProps> = ({ address, email }: IProps) => {
  if (address) {
    return (
      <S.Wrapper data-test="addressTile">
        <strong>{`${address.lastName} ${address.firstName} `}</strong>
        <br /><br />
        {address.companyName && (
          <>
            {address.companyName} <br />
          </>
        )}
        {address.postalCode},
        <br />
        {address.countryArea && <> {address.countryArea}</>}{" "}{address.city}
        <br />
        {address.streetAddress1}
        {address.streetAddress2 && <>, {address.streetAddress2}</>}{" "}
        <br />
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
            <FormattedMessage
              {...commonMessages.showEmail}
              values={{ email }}
            />{" "}
          </>
        )}
      </S.Wrapper>
    );
  }
  if (email) {
    return <S.Wrapper data-test="emailTile">{email}</S.Wrapper>;
  }
  return null;
};

export { AddressSummary };
