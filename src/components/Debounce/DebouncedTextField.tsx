import * as React from "react";

import TextField, { TextFieldProps } from "../TextField";
import DebounceChange from "./DebounceChange";

interface DebouncedTextFieldProps extends TextFieldProps {
  time?: number;
  resetValue?: boolean;
  inputRef?: React.RefObject<HTMLInputElement>;
}

const DebouncedTextField: React.FC<DebouncedTextFieldProps> = props => {
  const {
    time,
    resetValue,
    value: originalValue,
    onChange,
    inputRef,
    setvalue,
    ...textFieldProps
  } = props;
  return (
    <DebounceChange
      resetValue={resetValue}
      debounce={onChange}
      time={time}
      value={originalValue}
    >
      {({ change, value }) => (
        <TextField
          {...textFieldProps}
          value={value}
          onChange={change}
          inputRef={inputRef}
          setvalue={setvalue}
        />
      )}
    </DebounceChange>
  );
};

DebouncedTextField.defaultProps = {
  time: 250,
};

export default DebouncedTextField;
