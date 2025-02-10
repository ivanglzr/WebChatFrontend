import type { IMessage } from "../types/message";

interface Props {
  message: IMessage;
}

export default function Message({ message }: Props) {
  console.count("Message");

  return (
    <li
      className={`${
        message.sent ? "text-right" : "text-left"
      } my-2.5 last:mb-4`}
    >
      <span
        className={`rounded-xl p-2 ${
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
