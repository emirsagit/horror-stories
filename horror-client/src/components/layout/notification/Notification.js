import { NotificationContext } from "../../../context/NotificationContext";
import { SuccessNotification, ErrorNotification, CautionNotification } from "./svgs";
import { useContext } from "react";

const components = {
  success: SuccessNotification,
  error: ErrorNotification,
  caution: CautionNotification,
};

export default function Notification() {
  const { notificationMessage, notificationMessageType, changeNotificationMessage } = useContext(NotificationContext);

  const MyComponent = components[notificationMessageType];
  return notificationMessage && <MyComponent />;
}
