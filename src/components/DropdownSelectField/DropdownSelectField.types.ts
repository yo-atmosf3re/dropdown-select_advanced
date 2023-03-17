import { FormikProps } from "formik";

export interface Option {
   value: string;
   label: string;
}

export interface DropdownSelectFieldProps {
   options: Option[];
   label: string;
   field: {
      name: string;
   };
   form: FormikProps<{ color: string }>;
   name: string
}