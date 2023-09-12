"use client";
import { ReactNode, useContext } from "react";
import MainNavigation from "./main-navigation";
import Notification from "../ui/notification";
import { NotificationContext } from "../../../../store/notification-context";

export default function Layout(props: { children: ReactNode }) {
  const notificationCtx = useContext(NotificationContext);
  const notification = notificationCtx.notification;
  return (
    <>
      <MainNavigation />
      {props.children}
      {notification && (
        <Notification
          title={notification.title}
          message={notification.message}
          status={notification.status}
        />
      )}
    </>
  );
}
