import classes from "./notification.module.css";
export default function Notification(props: {
  title: string;
  message: string;
  status: string;
}) {
  const { title, message, status } = props;
  let notificationClass;

  if (status === "pending") {
    notificationClass = classes.pending;
  }
  if (status === "success") {
    notificationClass = classes.success;
  }
  if (status === "error") {
    notificationClass = classes.error;
  }
  const cssClasses = `${notificationClass} ${classes.notification}`;
  return (
    <div className={cssClasses}>
      <h2>{title}</h2>
      <p>{message}</p>
    </div>
  );
}
