import type { IMessage } from "../types/message";

interface Props {
  message: IMessage;
}

export default function Message({ message }: Props) {
  return (
    <li
      className={`${
        message.sent ? "text-right" : "text-left"
      } my-0.5 last:mb-4`}
    >
      <span
        className={`rounded-xl p-2 max-w-md inline-block text-left ${
          message.sent
            ? "border-2 border-primary"
            : "bg-primary border-2 border-transparent text-white"
        }`}
      >
        {message.content}
      </span>
    </li>
  );
}
