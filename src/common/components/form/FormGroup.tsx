import ErrorSpan from "./ErrorSpan";

import type { InputHTMLAttributes, LabelHTMLAttributes } from "react";

export interface FormGroupProps {
  labelProps?: LabelHTMLAttributes<HTMLLabelElement>;
  inputProps?: InputHTMLAttributes<HTMLInputElement>;
  labelContent: string;
}

export default function FormGroup({
  labelContent,
  inputProps,
  labelProps,
  errorMessage,
}: FormGroupProps & { errorMessage: string | null }) {
  return (
    <div className="w-full flex flex-col gap-1">
      <label {...labelProps} htmlFor={labelProps?.htmlFor ?? inputProps?.name}>
        {labelContent}
      </label>
      <input
        {...inputProps}
        className={`${inputProps?.className} w-full bg-gray-100/75 outline outline-1 outline-gray-400 border-none focus:outline-2 focus:outline-primary rounded-lg py-2 px-4`}
      />
      <ErrorSpan errorMessage={errorMessage} />
    </div>
  );
}
