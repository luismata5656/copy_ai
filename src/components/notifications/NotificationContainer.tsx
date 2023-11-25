import React, { useState } from "react";
import Notification from "./Notification";

// Define the shape of a single notification.
interface INotification {
  id: string;
  type: "info" | "success" | "warning" | "error";
  message: string;
}

const NotificationContainer: React.FC = () => {
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

    // Remove the notification after the specified timeout.
    setTimeout(() => removeNotification(id), timeout);
  };

  const removeNotification = (id: string) => {
    // Filter out the notification with the matching id.
    setNotifications((prevNotifications) =>
      prevNotifications.filter((notif) => notif.id !== id),
    );
  };

  return (
    <div className="fixed inset-0 flex flex-col items-center space-y-4 p-4 z-50">
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

export default NotificationContainer;
