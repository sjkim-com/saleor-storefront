import React from "react";
import { FormattedMessage, useIntl } from "react-intl";

import { commonMessages } from "@temp/intl";
// import { useAccountUpdate, useAuth } from "@saleor/sdk";
import { cmgtUseAccountUpdate, useAuth } from "@saleor/sdk";

import { Attribute, IconButton, Tile } from "@components/atoms";
import { getDBIdFromGraphqlIdConverter } from "../../../../core/utils";

import { AccountUpdateForm } from "./AccountUpdateForm";
import * as S from "./styles";

export const AccountTile: React.FC = () => {
  const [isEditing, setIsEditing] = React.useState(false);
  // const [setAccountUpdate, { data, error }] = useAccountUpdate();
  const [cmgtSetAccountUpdate, { data, error }] = cmgtUseAccountUpdate();
  const intl = useIntl();
  const { user } = useAuth();

  React.useEffect(() => {
    if (data && !error) {
      setIsEditing(false);
    }
  }, [data, error]);

  return (
    <S.TileWrapper>
      <Tile>
        <S.Wrapper>
          <S.Header>
            <FormattedMessage defaultMessage="MY DATA" />
          </S.Header>
          <S.Content>
            <S.HeaderSmall>
              <FormattedMessage defaultMessage="Personal details" />
              {!isEditing && (
                <IconButton
                  testingContext="editDetailsButton"
                  name="edit"
                  size={22}
                  onClick={() => setIsEditing(isEditing => !isEditing)}
                />
              )}
            </S.HeaderSmall>
            {isEditing ? (
              <AccountUpdateForm
                initialValues={{
                  firstName: (user && user.firstName) || "",
                  lastName: (user && user.lastName) || "",
                }}
                handleSubmit={data => {
                  // setAccountUpdate({ input: data });
                  if (user && user.id) {
                    const userId = getDBIdFromGraphqlIdConverter(user.id);
                    cmgtSetAccountUpdate({
                      id: userId,
                      input: {
                        first_name: data.firstName,
                        last_name: data.lastName,
                      },
                    });
                  }
                }}
                hide={() => {
                  setIsEditing(false);
                }}
              />
            ) : (
              <S.ContentOneLine data-test="personalDetailsSection">
                <Attribute
                  description={intl.formatMessage(commonMessages.firstName)}
                  // attributeValue={(user && user.firstName) || "-"}
                  attributeValue={
                    data === null
                      ? (user && user.firstName) || "-"
                      : data.accountUpdate?.user?.firstName || "-"
                  }
                  testingContext="firstNameText"
                />
                <Attribute
                  description={intl.formatMessage(commonMessages.lastName)}
                  // attributeValue={(user && user.lastName) || "-"}
                  attributeValue={
                    data === null
                      ? (user && user.lastName) || "-"
                      : data.accountUpdate?.user?.lastName || "-"
                  }
                  testingContext="lastNameText"
                />
              </S.ContentOneLine>
            )}
          </S.Content>
        </S.Wrapper>
      </Tile>
    </S.TileWrapper>
  );
};
