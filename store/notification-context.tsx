"use client";
import { createContext, useEffect, useState } from "react";
interface notification {
  status: string;
  message: string;
  title: string;
}

interface context {
  notification: notification | null;
  showNotification: (notificationData: notification) => void;
  hideNotification: () => void;
}
export const NotificationContext = createContext<context>({
  notification: null,
  showNotification: () => {},
  hideNotification: () => {},
});

export default function NotificationProvider(props: {
  children: React.ReactNode;
}) {
  const [activeNotification, setActiveNotification] =
    useState<notification | null>(null);
  console.log("activeNotification", activeNotification);

  useEffect(() => {
    if (
      activeNotification &&
      (activeNotification.status === "error" ||
        activeNotification?.status === "success")
    ) {
      const timer = setTimeout(() => {
        setActiveNotification(null);
      }, 3000);
      return () => {
        clearTimeout(timer);
      };
    }
  }, [activeNotification]);
  const showNotificationHandler = (notificationData: notification) => {
    setActiveNotification(notificationData);
  };
  const hideNotificationHandler = () => {
    setActiveNotification(null);
  };
  const context = {
    notification: activeNotification,
    showNotification: showNotificationHandler,
    hideNotification: hideNotificationHandler,
  };
  return (
    <NotificationContext.Provider value={context}>
      {props.children}
    </NotificationContext.Provider>
  );
}
