import React from "react";
import { FormattedMessage } from "react-intl";

import { Chip, DropdownSelect, Icon } from "@components/atoms";
import { commonMessages } from "@temp/intl";

import * as S from "./styles";
import { IProps } from "./types";

export const ProductListHeader: React.FC<IProps> = ({
  numberOfProducts = 0,
  openFiltersMenu,
  clearFilters,
  activeSortOption,
  activeFilters = 0,
  activeFiltersAttributes = [],
  sortOptions,
  onChange,
  onCloseFilterAttribute,
}: IProps) => {
  return (
    <S.Wrapper>
      <S.Bar>
        <S.LeftSide>
          <S.FiltersButton onClick={openFiltersMenu} data-test="filtersButton">
            <Icon name="filter" size={24} />
            <S.Filters>
              <FormattedMessage {...commonMessages.filterHeader} />{" "}
              {activeFilters > 0 && (
                <>
                  <span>({activeFilters})</span>
                </>
              )}
            </S.Filters>
          </S.FiltersButton>
          {activeFilters > 0 && (
            <S.Clear onClick={clearFilters} data-test="clearFiltersButton">
              <FormattedMessage {...commonMessages.clearFilterHeader} />
            </S.Clear>
          )}
        </S.LeftSide>

        <S.RightSide>
          <S.Element data-test="productsFoundCounter">
            <S.Label>
              <FormattedMessage defaultMessage="検索結果 " />{" "}
            </S.Label>
            {numberOfProducts}
            <S.Label>
              <FormattedMessage defaultMessage=" 件" />{" "}
            </S.Label>
          </S.Element>
          <S.Element>
            <S.Sort>
              <DropdownSelect
                onChange={onChange}
                options={sortOptions}
                value={sortOptions.find(
                  option => option.value === activeSortOption
                )}
              />
            </S.Sort>
          </S.Element>
        </S.RightSide>
      </S.Bar>
      <S.FiltersChipsWrapper>
        {activeFiltersAttributes.map(
          // ({ attributeSlug, valueName, valueSlug }) => (
          ({ attributeId, valueName, attributeValue }) => (
            <Chip
              // onClose={() => onCloseFilterAttribute(attributeSlug, valueSlug)}
              key={attributeValue}
              onClose={() => onCloseFilterAttribute(attributeId, attributeValue)}
            >
              {valueName}
            </Chip>
          )
        )}
      </S.FiltersChipsWrapper>
    </S.Wrapper>
  );
};
