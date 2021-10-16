import { useState } from "react";
import { Layout } from "../../components";
import { useContext } from "react";
import api from "../../utils/api";
import { UserContext } from "../../context/UserContext";
import { useErrorMessage } from "../../hooks";
import Link from "next/link";

export default function Register() {
  const { setUser } = useContext(UserContext);

  const formFields = { name: "", email: "", password: "", password_confirmation: "" };

  const [form, setForm] = useState(formFields);

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
      .get("/sanctum/csrf-cookie")
      .then((response) => {
        api()
          .post("/register", {
            name: form.name,
            email: form.email,
            password: form.password,
            password_confirmation: form.password_confirmation,
          })
          .then(({ data }) => {
            setUser(data);
          })
          .catch((error) => {
            handleErrorMessages(error.response.data.errors);
          });
      })
      .catch((error) => console.log(error));
  }

  return (
    <Layout>
      <div className="w-90 m-auto max-w-2xl mt-12 min-h-screen">
        <h1 className="text-2xl lg:text-3xl text-center mb-4 font-bold tracking-wide">Kayıt Ol 👍</h1>
        <form className="w-90 m-auto max-w-lg w-11/12" onSubmit={(e) => handleSubmit(e)}>
          <label htmlFor="name" className="block text-sm text-gray-500">
            Adınız:
          </label>
          <input type="text" name="name" value={form.name} id="name" onChange={(e) => handleChange(e)} required className="border border-gray-400 rounded-sm px-2 py-1 w-full mb-2" placeholder="Adınız" />
          <label htmlFor="name" className="block text-sm text-gray-500">
            E-posta Adresiniz:
          </label>
          <input type="email" name="email" value={form.email} id="email" onChange={(e) => handleChange(e)} required className="border border-gray-400 rounded-sm px-2 py-1 w-full mb-2" placeholder="isim@eposta.com" />
          <label htmlFor="password" className="block text-sm text-gray-500">
            Parola:
          </label>
          <input type="password" name="password" value={form.password} id="password" onChange={(e) => handleChange(e)} className="border border-gray-400 rounded-sm px-2 py-1 w-full mb-2" placeholder="Parola" />
          <label htmlFor="password" className="block text-sm text-gray-500">
            Parola Doğrulama:
          </label>
          <input type="password" name="password_confirmation" value={form.password_confirmation} id="password_confirmation" onChange={(e) => handleChange(e)} className="border border-gray-400 rounded-sm px-2 py-1 w-full mb-2" placeholder="Parola doğrulama" />
          {firstErrorMessage}
          <button type="submit" aria-label="submit" className="mt-2 w-full py-2 bg-blue-600 text-white rounded-md font-bold tracking-wider">
            GÖNDER
          </button>
          <Link href="/login">
            <a className="text-gray-700 w-full block mt-4  text-sm cursor-pointer text-left rounded-md font-semibold tracking-wider">
              Zaten kayıtlı mısınız <span className="underline text-blue-700">Giriş Yap</span>
            </a>
          </Link>
        </form>
      </div>
    </Layout>
  );
}

export async function getStaticProps(context) {
  return {
    props: {
      isRedirect: true,
    },
  };
}
