import React from "react";

export default function ChatInput() {
  return (
    <div className="flex flex-row items-center gap-2 h-16 px-4">
      <input
        type="text"
        placeholder="Send Message"
        className="w-full h-12 bg-white rounded-lg px-4"
      />
      <button className="bg-slate-800 text-white font-medium rounded-lg px-4 py-2 h-12">
        Send
      </button>
    </div>
  );
}
