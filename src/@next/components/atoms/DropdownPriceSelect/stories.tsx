import { storiesOf } from "@storybook/react";
import React from "react";

import { DropdownPriceSelect } from ".";

const options = [
  {
    label: "Alphabetically",
    value: { field: "NAME", direction: "ASC" },
  },
  {
    label: "Price - High to Low",
    value: { field: "PRICE", direction: "DESC" },
  },
  {
    label: "Price - Low to High",
    value: { field: "PRICE", direction: "ASC" },
  },
];

const Container = () => {
  const [value, setValue] = React.useState();
  return (
    <DropdownPriceSelect options={options} value={value} onChange={setValue} />
  );
};

storiesOf("@components/atoms/DropdownPriceSelect", module)
  .addParameters({ component: DropdownPriceSelect })
  .add("default", () => <Container />);
