import api from "../../utils/api";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

export default function Logout() {
  const { setUser } = useContext(UserContext);

  function handleClick() {
    api()
      .post("/logout")
      .then((response) => {
        console.log(response);
        setUser("");
      })
      .catch((error) => console.log(error));
  }

  return <button onClick={handleClick}>Çıkış Yap</button>;
}
