import type { FormHTMLAttributes } from "react";
import FormGroup, { type FormGroupProps } from "./FormGroup";

const center =
  "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-2";

interface FormProps extends FormHTMLAttributes<HTMLFormElement> {
  formGroups: FormGroupProps[];
  title: string;
}

export default function Form({ formGroups, title, ...props }: FormProps) {
  return (
    <form
      {...props}
      className={`${props.className} ${center} w-96 flex flex-col items-start gap-4`}
    >
      <h1 className="w-full text-3xl font-bold uppercase">{title}</h1>
      {formGroups.map((formGroup, index) => (
        <FormGroup {...formGroup} key={index} />
      ))}
      <button
        type="submit"
        className="bg-primary py-2 px-6 text-white rounded-lg hover:opacity-90"
      >
        Submit
      </button>
    </form>
  );
}
