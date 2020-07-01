import React from "react";
import styles from "./FormSelect.module.css";
import {
  FormControl,
  InputLabel,
  NativeSelect,
  FilledInput,
} from "@material-ui/core";

const FormSelect = ({
  id,
  name = id,
  label = name,
  value = "",
  onChange,
  options = [],
  optionID = "id",
  optionValue = "value",
  optionName = optionValue,
  defaultOption = "",
  ...rest
}) => {
  return (
    <FormControl variant="filled" margin="dense" className={styles.formControl}>
      <InputLabel htmlFor={id}>{label}</InputLabel>
      <NativeSelect
        value={value}
        onChange={onChange}
        input={<FilledInput id={id} name={name} fullWidth={true} />}
        {...rest}
      >
        {defaultOption && (
          <option value={defaultOption}>{defaultOption}</option>
        )}
        {options.map((option) => (
          <option key={option[optionID]} value={option[optionValue]}>
            {option[optionName]}
          </option>
        ))}
      </NativeSelect>
    </FormControl>
  );
};

export default FormSelect;
