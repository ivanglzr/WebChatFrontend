import Form from "../components/Form";

import { register } from "../services/service";

import type { FormEvent } from "react";
import type { FormGroupProps } from "../components/FormGroup";
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
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const data = Object.fromEntries(new FormData(event.currentTarget));

    //TODO: add validation

    const res = await register(data as unknown as IRegister);

    if (res instanceof Error) {
      alert(res.message);

      return;
    }

    alert(res.message);
  };

  return (
    <Form onSubmit={handleSubmit} title="Register" formGroups={formGroups} />
  );
}
