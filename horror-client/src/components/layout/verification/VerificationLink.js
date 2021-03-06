import api from "../../../utils/api";
import { CLIENT_BASE_URL } from "../../../constants/env";
import { REDIRECT_AFTER_VERIFICATION } from "../../../constants/routes";

export default function VerificationLink() {
  function handleClick() {
    api()
      .post("/api/email/verify", {
        redirect_url: CLIENT_BASE_URL + REDIRECT_AFTER_VERIFICATION.url,
      })
      .then((response) => {
        console.log(response);
        setUser("");
      })
      .catch((error) => console.log(error));
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 p-4 bg-gray-100 flex flex-col">
      <p className="m-auto text-center max-w-32">Sitemizden yararlanmak için lütfen mail adresinizi onaylayın.</p>
      <button className="block text-blue-900 underline" onClick={handleClick} type="button">
        Onaylama E-postasını Tekrar gönder
      </button>
    </div>
  );
}
