import Form from "../../common/components/form/Form";

import useValidationErrors from "../../common/hooks/useValidationErrors";

import { register } from "../services/service";

import { validateRegisterData } from "../schemas/auth";

import type { FormEvent } from "react";
import type { FormGroupProps } from "../../common/components/form/FormGroup";
import type { IRegister } from "../types/auth";

const formGroups: FormGroupProps[] = [
  {
    inputProps: {
      type: "text",
      placeholder: "Name",
      name: "fullname",
      id: "fullname",
      autoComplete: "name",
    },
    labelProps: {
      htmlFor: "fullname",
    },
    labelContent: "Name",
  },
  {
    inputProps: {
      type: "email",
      placeholder: "Email",
      name: "email",
      id: "email",
      autoComplete: "email",
    },
    labelProps: {
      htmlFor: "email",
    },
    labelContent: "Email",
  },
  {
    inputProps: {
      type: "password",
      placeholder: "Password",
      name: "password",
      id: "password",
      autoComplete: "current-password",
    },
    labelProps: {
      htmlFor: "password",
    },
    labelContent: "Password",
  },
];

export default function RegisterView() {
  const [errors, setError] = useValidationErrors<IRegister>({
    email: "",
    password: "",
    fullname: "",
  });

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = Object.fromEntries(new FormData(event.currentTarget));

    const { data, error } = validateRegisterData(formData);

    if (error) {
      setError(error);

      return;
    }

    const res = await register(data as unknown as IRegister);

    if (res instanceof Error) {
      alert(res.message);

      return;
    }

    alert(res.message);
  };

  return (
    <Form
      onSubmit={handleSubmit}
      title="Register"
      errors={errors}
      formGroups={formGroups}
    />
  );
}
