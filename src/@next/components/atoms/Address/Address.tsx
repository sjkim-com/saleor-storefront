import React from "react";

import { IAddress } from "@types";

import * as S from "./styles";

export const Address: React.FC<IAddress> = ({
  firstName,
  lastName,
  companyName,
  streetAddress1,
  streetAddress2,
  city,
  postalCode,
  countryArea,
  country,
  phone,
}: IAddress) => (
  <div>
    <S.Name>{`${lastName} ${firstName}`}</S.Name>
    {phone && (
      <>
        Phone number: {phone} <br />
      </>
    )}
    <br />
    {companyName && (
      <>
        {companyName} <br />
      </>
    )}
    {postalCode && `${postalCode}`} 
    <br />
    {countryArea && <>{countryArea} </>} {city}
    <br />
    {streetAddress1}
    {streetAddress2 && (
      <>
        {streetAddress2} <br />
      </>
    )}
    
    <br />

  </div>
);
