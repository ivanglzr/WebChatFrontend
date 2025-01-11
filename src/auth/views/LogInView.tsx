import Form from "../../common/components/form/Form";

import useValidationErrors from "../../common/hooks/useValidationErrors";

import { logIn } from "../services/service";

import { validateLoginData } from "../schemas/auth";

import type { FormEvent } from "react";
import type { FormGroupProps } from "../../common/components/form/FormGroup";
import type { ILogin } from "../types/auth";

const formGroups: FormGroupProps[] = [
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

export default function LogInView() {
  const [errors, setError] = useValidationErrors<ILogin>({
    email: "",
    password: "",
  });

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = Object.fromEntries(new FormData(event.currentTarget));

    const { data, error } = validateLoginData(formData);

    if (error) {
      setError(error);

      return;
    }

    const res = await logIn(data);

    if (res instanceof Error) {
      alert(res.message);

      return;
    }

    alert(res.message);
  };

  return (
    <Form
      errors={errors}
      onSubmit={handleSubmit}
      title="Log in"
      formGroups={formGroups}
    />
  );
}
