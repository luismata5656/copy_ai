"use client";
import { useState } from "react";
import MessageList from "@/components/chat/MessageList";
import { useChat } from "ai/react";

type Message = {
  message: string;
  isUser: boolean;
};

export default function Home() {
  var React = require("react");
  const isAuthenticated = true;
  const messages_placeholder: Message[] = [
    { message: "Hello User!", isUser: false },
    { message: "Hello Computer, how are you?", isUser: true },
    { message: "As an LLM, I can't have a mood :(", isUser: false },
  ];
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  return (
    <main className="flex h-screen w-screen bg-default-primary overflow-x-hidden">
      <div className="flex-1">
        <div className="flex flex-col justify-start items-center w-full h-full p-0 overflow-y-auto">
          {isAuthenticated ? (
            <>
              <div className="w-full h-full text-default-white mt-0 mb-32">
                <MessageList messages={messages} />
              </div>
              <form
                onSubmit={handleSubmit}
                className="flex items-center absolute bottom-0 w-full sm:w-1/2 mb-16"
              >
                <input
                  className="h-full p-4 mx-8 sm:mx-auto w-full border border-gray-300 rounded shadow-xl"
                  value={input}
                  placeholder="Say something..."
                  onChange={handleInputChange}
                />
              </form>
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
    </main>
  );
}
