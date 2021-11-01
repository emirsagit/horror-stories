import "../styles/globals.css";
import { UserContext } from "../context/UserContext";
import { NotificationContext } from "../context/NotificationContext";
import { useAuthUser, useNotification } from "../hooks";
import { protectRoutes } from "../helpers";

function MyApp({ Component, pageProps }) {
  const [user, setUser] = useAuthUser();
  const [notificationMessage, notificationMessageType, changeNotificationMessage] = useNotification();

  protectRoutes(pageProps, user, changeNotificationMessage);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <NotificationContext.Provider value={{ notificationMessage, notificationMessageType, changeNotificationMessage }}>
        <Component {...pageProps} />
      </NotificationContext.Provider>
    </UserContext.Provider>
  );
}

export default MyApp;
