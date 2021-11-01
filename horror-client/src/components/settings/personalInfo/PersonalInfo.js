import { useState } from "react";
import { useContext } from "react";
import { NotificationContext } from "../../../context/NotificationContext";
import api from "../../../utils/api";
import { UserContext } from "../../../context/UserContext";
import { useErrorMessage } from "../../../hooks";
import Link from "next/link";

export default function Login() {
  const { user, setUser } = useContext(UserContext);
  const { changeNotificationMessage } = useContext(NotificationContext);

  const formFields = { email: "", name: "" };

  const [form, setForm] = useState({ email: user.email, name: user.name });

  const [firstErrorMessage, handleErrorMessages] = useErrorMessage(formFields);

  function handleChange(e) {
    const { name, value } = e.target;

    setForm((prevForm) => {
      return {
        ...prevForm,
        [name]: value,
      };
    });

    handleErrorMessages(name);
  }

  async function handleSubmit(e) {
    e.preventDefault();

    api()
      .post("/login", {
        email: form.email,
        password: form.password,
      })
      .then(({ data }) => {
        setUser(data.data);
        changeNotificationMessage("Başarıyla giriş yaptınız");
      })
      .catch((error) => {
        handleErrorMessages(error.response.data.errors);
      })
      .catch((error) => console.log(error));
  }

  return (
    <form className="max-w-lg m-auto shadow-lg lg:p-8 p-4" onSubmit={(e) => handleSubmit(e)}>
      <h2 className="text-gray-800 font-bold text-xl mb-4">Kullanıcı Bilgileri:</h2>
      <label htmlFor="email" className="block text-sm text-gray-500">
        E-posta Adresi Değiştir
      </label>
      <input type="email" name="email" value={form.email} id="email" onChange={(e) => handleChange(e)} required className="border border-gray-400 rounded-sm px-2 py-1 w-full mb-2" placeholder="isim@eposta.com" />
      <label htmlFor="name" className="block text-sm text-gray-500">
        Adınız:
      </label>
      <input type="text" name="name" value={form.name} id="name" onChange={(e) => handleChange(e)} required className="border border-gray-400 rounded-sm px-2 py-1 w-full mb-2" placeholder="Adınız" />
      {firstErrorMessage}
      <button type="submit" aria-label="submit" className="mt-2 px-6 block py-1 ml-auto bg-blue-600 text-white rounded-md font-bold tracking-wider">
        KAYDET
      </button>
    </form>
  );
}
