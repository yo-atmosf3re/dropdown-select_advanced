import React from "react";
import { Field } from "formik";
import Select, { components } from "react-select";
import { DropdownSelectFieldProps } from "./DropdownSelectField.types";
import styles from './DropdownSelectField.module.css'

// ! Кастомизация для react-select;
const CUSTOM_STYLES = {
   control: (baseStyles: any, state: any) => ({
      ...baseStyles,
      // ** Для обнуления бордера при фокусе на инпуте используется переназначение в этом месте: 13 строка;
      border: state.isFocused ? "2px solid #4D9DD2" : "1px solid #ccc",
      // border: 0,
      borderRadius: "4px",
      boxShadow: "none",
   }),
   option: (baseStyles: any, state: any) => ({
      ...baseStyles,
      backgroundColor: state.isSelected ? "#4D9DD2" : "white",
      color: state.isSelected ? "white" : "black",
      cursor: "pointer",
   }),
   // ** Настройка menu и указание "marginTop: 0" очень важная часть кастомизации, без этого у списка будет верхний отступ;
   menu: (baseStyles: any, state: any) => ({
      ...baseStyles,
      // marginTop: 0,
   }),
   input: (baseStyles: any, state: any) => ({
      ...baseStyles,
      outline: 'none'
   })
};

// ! Индикация справа в поле dropdown select'a;
const DROPDOWN_INDICATOR = (props: any): JSX.Element => {
   return (
      components.DropdownIndicator && (
         <components.DropdownIndicator {...props}>
            <i></i>
         </components.DropdownIndicator>
      )
   );
};

export const DropdownSelectField: React.FC<DropdownSelectFieldProps> = ({
   options,
   label,
   ...props
}) => {
   return (
      <div className={styles.formGroup}>
         <label className={styles.formLabel}>
            {label}:
         </label>
         <Field
            className={styles.formField}
            name={props.field.name}
         >
            {
               ({ field, form: { touched, errors }, meta }: any) => {
                  return (
                     <Select
                        isClearable
                        options={options}
                        styles={CUSTOM_STYLES}
                        components={{ DropdownIndicator: DROPDOWN_INDICATOR }}
                        {...field}
                        {...props}
                        onChange={(val: any) => props.form.setFieldValue(field.name, val)}
                        onBlur={() => props.form.setFieldTouched(field.name, true)}
                        placeholder="Select value"
                     />
                  );
               }
            }
         </Field>
      </div>
   );
};