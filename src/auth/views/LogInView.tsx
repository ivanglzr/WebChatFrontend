import Form from "../components/Form";

import { logIn } from "../services/service";

import type { FormEvent } from "react";
import type { FormGroupProps } from "../components/FormGroup";
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
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const data = Object.fromEntries(new FormData(event.currentTarget));

    //TODO: add validation

    const res = await logIn(data as unknown as ILogin);

    if (res instanceof Error) {
      alert(res.message);

      return;
    }

    alert(res.message);
  };

  return (
    <Form onSubmit={handleSubmit} title="Log in" formGroups={formGroups} />
  );
}
