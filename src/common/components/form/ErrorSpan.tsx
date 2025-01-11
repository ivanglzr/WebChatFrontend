interface ErrorSpanProps {
  errorMessage: string | null;
}

export default function ErrorSpan({ errorMessage }: ErrorSpanProps) {
  return errorMessage && <span className="text-red-500">{errorMessage}</span>;
}
