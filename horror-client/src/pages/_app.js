import "../styles/globals.css";
import { UserContext } from "../context/UserContext";
import { useAuthUser } from "../hooks";
import { protectRoutes } from "../helpers";

function MyApp({ Component, pageProps }) {
  const [user, setUser] = useAuthUser();

  protectRoutes(pageProps, user);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Component {...pageProps} />
    </UserContext.Provider>
  );
}

export default MyApp;
