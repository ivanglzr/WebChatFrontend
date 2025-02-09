import socket from "../../socket";
import { useState } from "react";

import { SendIcon } from "./SendIcon";

import { postMessage } from "../services/service";

import type { ChangeEvent, MouseEvent } from "react";

interface Props {
  chatId: string;
}

export default function MessageInput({ chatId }: Props) {
  const [message, setMessage] = useState<string>("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) =>
    setMessage(event.target.value);

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    if (!message || !socket.id) return;

    postMessage(chatId, { content: message, socketId: socket.id });

    setMessage("");
  };

  return (
    <div className="sticky left-0 bottom-0 w-full pb-2 flex gap-2">
      <button
        type="submit"
        onClick={handleClick}
        className="flex justify-center items-center bg-gray-200 p-2 rounded-full"
      >
        <SendIcon width={24} height={24} />
      </button>
      <input
        type="text"
        name="content"
        id="content"
        className="w-full p-2 rounded-lg border border-black focus:outline-none"
        placeholder="Write here your message..."
        value={message}
        onChange={handleChange}
      />
    </div>
  );
}
