/**
 *message types ["caution, error, success"]
 *adding message type: required to add notification type component to Notification
 */
import { useState } from "react";

export default function useNotification() {
  const [notificationMessage, setNotificationMessage] = useState("");
  const [notificationMessageType, setNotificationMessageType] = useState("");

  /**
   *Set notification message
   *Params @message(empty: setFalse), @time(second), @type(caution, error, success)
   */
  function changeNotificationMessage(message, type = "success", time = 10000) {
    if (!message) {
      setNotificationMessage("");
      return;
    }

    setNotificationMessageType(type);
    setNotificationMessage(message);

    setTimeout(() => {
      setNotificationMessage("");
    }, time);
  }

  return [notificationMessage, notificationMessageType, changeNotificationMessage];
}
