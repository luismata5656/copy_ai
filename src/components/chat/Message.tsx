import React from "react";

type Message = {
  message: string;
  role: string;
};

const Message: React.FC<Message> = ({ role, message }) => {
  return (
    <>
      {role === "user" ? (
        <>
          <div className="border border-solid border-0 border-b-4 border-default-accent w-min m-2 p-1 ms-auto">
            User
          </div>
          <div className="w-full p-2 text-right">{message}</div>
        </>
      ) : (
        <>
          <div className="border border-solid border-0 border-b-4 border-default-secondary-2 w-min m-2 p-1 ">
            Computer
          </div>
          <div className="w-full p-2 ">{message}</div>
        </>
      )}
    </>
  );
};

export default Message;
