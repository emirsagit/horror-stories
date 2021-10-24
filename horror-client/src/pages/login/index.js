import { useState } from "react";
import { Layout } from "../../components";
import { useContext } from "react";
import Image from "next/image";
import api from "../../utils/api";
import { UserContext } from "../../context/UserContext";
import { useErrorMessage } from "../../hooks";
import Link from "next/link";

export default function Login() {
  const { setUser } = useContext(UserContext);

  const formFields = { email: "", password: "" };

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
          .post("/login", {
            email: form.email,
            password: form.password,
          })
          .then(({ data }) => {
            setUser(data.data);
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
        <h1 className="text-2xl lg:text-3xl text-center mb-4 font-bold tracking-wide">Giriş Yap 👍</h1>
        <form className="w-90 m-auto max-w-lg w-11/12" onSubmit={(e) => handleSubmit(e)}>
          <label htmlFor="email" className="block text-sm text-gray-500">
            E-posta Adresiniz:
          </label>
          <input type="email" name="email" value={form.email} id="email" onChange={(e) => handleChange(e)} required className="border border-gray-400 rounded-sm px-2 py-1 w-full mb-2" placeholder="isim@eposta.com" />
          <label htmlFor="password" className="block text-sm text-gray-500">
            Parola:
          </label>
          <input type="password" name="password" value={form.password} id="password" onChange={(e) => handleChange(e)} className="border border-gray-400 rounded-sm px-2 py-1 w-full mb-2" placeholder="parola" />
          {firstErrorMessage}
          <button type="submit" aria-label="submit" className="mt-2 w-full py-2 bg-blue-600 text-white rounded-md font-bold tracking-wider">
            GÖNDER
          </button>
          <a href="#" className="w-full py-2 cursor-pointer border-gray-500 border mt-4 text-center rounded-md font-bold tracking-wider bg-white flex items-center justify-center" rel="noopener">
            <img src="/svgs/google.svg" width={16} height={16} alt="google" /> <span className="ml-0.5">oogle ile giriş</span>
          </a>
          <Link href="/register">
            <a className="text-gray-700 w-full block mt-4  text-sm cursor-pointer text-left rounded-md font-semibold tracking-wider">
              Kayıtlı değil misiniz? <span className="underline text-blue-700">Hemen Kaydolun</span>
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
