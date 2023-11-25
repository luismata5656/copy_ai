"use client";
import React, { useState } from "react";
import LeftSidebar from "@/components/LeftSidebar";
import MessageList from "@/components/chat/MessageList";
import Auth from "@/components/auth/Auth";
import Register from "@/components/auth/Register";
import SettingsModal from "@/components/SettingsModal";
import Notification from "@/components/notifications/Notification";
import { useAuth } from "@/contexts/AuthContext";

// Define the shape of a single notification.
interface INotification {
  id: string;
  type: "info" | "success" | "warning" | "error";
  message: string;
}

const NotificationContainer: React.FC<{
  notifications: INotification[];
  removeNotification: (id: string) => void;
}> = ({ notifications, removeNotification }) => {
  return (
    <div className="fixed flex flex-col items-center space-y-12 z-50">
      {notifications.map((notification) => (
        <Notification
          key={notification.id}
          type={notification.type}
          message={notification.message}
          onClose={() => removeNotification(notification.id)}
        />
      ))}
    </div>
  );
};

type Message = {
  message: string;
  isUser: boolean;
};

export default function Home() {
  const { user } = useAuth();
  const [notifications, setNotifications] = useState<INotification[]>([]);
  const addNotification = (
    type: INotification["type"],
    message: string,
    timeout: number = 3000,
  ) => {
    // Generate a unique ID for each notification.
    const id = Math.random().toString(36).substr(2, 9);
    const newNotification = { id, type, message };

    // Add the new notification to the state.
    setNotifications((prevNotifications) => [
      ...prevNotifications,
      newNotification,
    ]);

    // Remove the notification after a timeout.
    setTimeout(() => {
      setNotifications((prevNotifications) =>
        prevNotifications.filter((notif) => notif.id !== id),
      );
    }, timeout);
  };

  const removeNotification = (id: string) => {
    setNotifications((prevNotifications) =>
      prevNotifications.filter((notif) => notif.id !== id),
    );
  };

  const messages: Message[] = [
    { message: "Hello User!", isUser: false },
    { message: "Hello Computer, how are you?", isUser: true },
    { message: "As an LLM, I can't have a mood :(", isUser: false },
  ];

  const [isLeftSidebarOpen, setIsLeftSidebarOpen] = useState(false);

  const toggleLeftSidebar = () => {
    setIsLeftSidebarOpen(!isLeftSidebarOpen);
  };

  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  return (
    <main className="flex h-screen w-screen bg-default-primary overflow-x-hidden">
      <NotificationContainer
        notifications={notifications}
        removeNotification={removeNotification}
      />
      <LeftSidebar
        isOpen={isLeftSidebarOpen}
        onClose={() => toggleLeftSidebar()}
        showSettings={() => setIsSettingsOpen(true)}
      />
      <div className="flex-1">
        <div className="flex flex-col justify-start items-center w-full h-full p-0 overflow-y-auto">
          {user ? (
            <>
              <div className="w-full h-full text-default-white mt-0 mb-32">
                <MessageList messages={messages} />
              </div>
              <form className="flex items-center absolute bottom-0 w-full sm:w-1/2 mb-16">
                <input
                  className="h-full p-4 mx-8 sm:mx-auto w-full border border-gray-300 rounded shadow-xl"
                  placeholder="Say something..."
                />
              </form>
            </>
          ) : (
            <>
              {isRegisterOpen ? (
                <Register
                  showLogin={() => setIsRegisterOpen(false)}
                  addNotification={addNotification}
                />
              ) : (
                <>
                  <Auth
                    showRegister={() => setIsRegisterOpen(true)}
                    addNotification={addNotification}
                  />
                </>
              )}
            </>
          )}
        </div>
      </div>
      <SettingsModal
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
      />
    </main>
  );
}
