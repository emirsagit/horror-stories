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
  return (
    notificationMessage && (
      <div className="text-white fixed bottom-0 right-0 z-50 px-4 rounded-lg py-8 min-h-32 text-sm bg-green-700">
        <span>X</span>
        <MyComponent changeNotificationMessage={changeNotificationMessage} notificationMessage={notificationMessage} />
      </div>
    )
  );
}
