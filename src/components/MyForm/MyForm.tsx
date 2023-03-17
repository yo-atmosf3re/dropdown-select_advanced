import React from 'react'
import { Formik, Form } from "formik";
import { DropdownSelectField } from '../DropdownSelectField/DropdownSelectField'
import { Option } from '../DropdownSelectField/DropdownSelectField.types'
import styles from './MyForm.module.css'

const OPTIONS: Option[] = [
   { value: "red", label: "Red" },
   { value: "blue", label: "Blue" },
   { value: "green", label: "Green" },
];

export function MyForm() {
   return (
      <Formik
         initialValues={{ color: "" }}
         onSubmit={(values) => {
            console.log(values.color)
         }}
      >
         {
            (formProps) => (
               <Form
                  className={styles.form}
               >
                  <DropdownSelectField
                     name="color"
                     options={OPTIONS}
                     label="Color"
                     field={{ name: "color" }}
                     form={formProps}
                  />
                  <button
                     className={styles.submitButton}
                     disabled={!formProps.values.color}
                     type="submit">
                     Submit
                  </button>
               </Form>
            )
         }
      </Formik>
   );
}