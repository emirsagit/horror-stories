import { useState, useEffect } from "react";
import api from "../utils/api";

export default function useAuthUser() {
  const [user, setUser] = useState("");

  useEffect(() => {
    api()
      .get("api/user")
      .then(({ data }) => {
        setUser(data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return [user, setUser];
}
