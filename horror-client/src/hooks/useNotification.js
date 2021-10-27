import { useState } from "react";

export default function useNotification() {
  const [notificationMessage, setNotificationMessage] = useState("Heeeeyyyyyyyyyy");
  const [notificationMessageType, setNotificationMessageType] = useState("caution");

  function changeNotificationMessage(message, time = 3000, type = "success") {
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
