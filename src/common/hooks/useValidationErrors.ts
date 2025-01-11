import { useState } from "react";

import type { ZodError } from "zod";

export type TErrorMessages<T = object> = {
  [K in keyof T]: string | null;
};

export default function useValidationErrors<T extends object>(placeholder: T) {
  const [errors, updateError] = useState<TErrorMessages<T>>(
    placeholder as TErrorMessages<T>
  );

  const setError = (error: ZodError<T>) => {
    const newErrors = { ...errors };

    Object.keys(placeholder).map((key) => {
      const errorMessage =
        error.errors.find((error) => error.path.includes(key))?.message ?? null;

      (newErrors as Record<string, string | null>)[key] = errorMessage;
    });

    updateError(newErrors);
  };

  return [errors, setError] as const;
}
