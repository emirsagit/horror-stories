import { useState, useEffect } from "react";
import api from "../utils/api";

export default function authUser() {
  const [user, setUser] = useState("");
  const [loading, setLoading] = useState(true);

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

  return [user, setUser, loading, setLoading];
}
