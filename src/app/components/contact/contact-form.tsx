"use client";
import { useContext, useState } from "react";
import classes from "./contact-form.module.css";
import { NotificationContext } from "../../../../store/notification-context";

export default function ContactForm() {
  const [enteredName, setEnteredName] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredMessage, setEnteredMessage] = useState("");
  const notificationCtx = useContext(NotificationContext);

  const submitHandler = async (event: React.FormEvent) => {
    const reqBody = JSON.stringify({
      email: enteredEmail,
      name: enteredName,
      message: enteredMessage,
    });
    event.preventDefault();
    notificationCtx.showNotification({
      title: "Pending",
      message: "Message is adding",
      status: "pending",
    });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: reqBody,
      });
      if (!response.ok) {
        throw new Error("Something went wrong");
        return;
      }
      notificationCtx.showNotification({
        title: "Success",
        message: "Message is added",
        status: "success",
      });
    } catch (error) {
      notificationCtx.showNotification({
        title: "Error",
        message: "Something went wrong",
        status: "error",
      });
    }
  };
  return (
    <section className={classes.contact}>
      <h1>How can I help you?</h1>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.controls}>
          <div className={classes.control}>
            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              id="email"
              required
              value={enteredEmail}
              onChange={(e) => setEnteredEmail(e.target.value)}
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              id="name"
              required
              value={enteredName}
              onChange={(e) => setEnteredName(e.target.value)}
            />
          </div>
        </div>
        <div className={classes.control}>
          <label htmlFor="message">Your Message</label>
          <textarea
            name="text"
            id="message"
            rows={5}
            required
            value={enteredMessage}
            onChange={(e) => setEnteredMessage(e.target.value)}
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button>Send Message</button>
        </div>
      </form>
    </section>
  );
}
