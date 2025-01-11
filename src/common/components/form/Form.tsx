import FormGroup, { type FormGroupProps } from "./FormGroup";

import type { FormHTMLAttributes } from "react";
import type { TErrorMessages } from "../../hooks/useValidationErrors";

const center =
  "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-2";

interface FormProps<T extends object>
  extends FormHTMLAttributes<HTMLFormElement> {
  formGroups: FormGroupProps[];
  title: string;
  errors: TErrorMessages<T>;
}

export default function Form<T extends object>({
  formGroups,
  title,
  errors,
  ...props
}: FormProps<T>) {
  return (
    <form
      {...props}
      className={`${props.className} ${center} w-96 flex flex-col items-start gap-4`}
    >
      <h1 className="w-full text-3xl font-bold uppercase">{title}</h1>
      {formGroups.map((formGroup, index) => {
        const name = formGroup.inputProps?.name as keyof T | undefined;
        const errorMessage = name ? errors[name] ?? null : null;

        return (
          <FormGroup errorMessage={errorMessage} {...formGroup} key={index} />
        );
      })}
      <button
        type="submit"
        className="bg-primary py-2 px-6 text-white rounded-lg hover:opacity-90"
      >
        Submit
      </button>
    </form>
  );
}
