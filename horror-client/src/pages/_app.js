import "../styles/globals.css";
import { UserContext } from "../context/UserContext";
import { authUser } from "../hooks";

function MyApp({ Component, pageProps }) {
  const [user, setUser, loading, setLoading] = authUser();
  return (
    <UserContext.Provider value={{ user, setUser, loading, setLoading }}>
      <Component {...pageProps} />
    </UserContext.Provider>
  );
}

export default MyApp;
