import Link from "next/link";
import Logo from "./logo/Logo";
import { Profile } from "../..";
import * as ROUTES from "../../../constants/routes";
import { UserContext } from "../../../context/UserContext";
import { useContext, useState } from "react";
import VerificationLink from "../verification/VerificationLink";

export default function Navigation() {
  const { user } = useContext(UserContext);
  const [showLinks, setShowLinks] = useState(false);
  return (
    <>
      {user ? !user.isVerified && <VerificationLink /> : ""}
      <header className="bg-white w-full fixed top-0 left-0 right-0 h-16">
        <nav className="flex flex-row justify-between items-center w-11/12 max-w-5xl mx-auto h-full text-gray-700">
          <button className="md:hidden" onClick={() => setShowLinks(true)}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <div className={(showLinks ? "fixed pt-4 right-1/3 left-0 bottom-0 z-50 top-0 bg-white border-r-2 border-blue-900 flex flex-col pl-2" : "hidden") + " md:flex md:flex-row gap-4"}>
            <button aria-label="close" className="self-end pr-4 md:hidden" onClick={() => setShowLinks(false)}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18 18 6M6 6l12 12" />
              </svg>
            </button>
            <Link href={ROUTES.HOME.url}>
              <a className="my-1">
                <Logo />
              </a>
            </Link>
            <Link href={ROUTES.HOME.url}>
              <a className="my-1">{ROUTES.HOME.name}</a>
            </Link>
          </div>
          <div className="flex flex-row gap-4 items-center">
            {!user ? (
              <>
                <Link href={ROUTES.LOGIN.url}>
                  <a>{ROUTES.LOGIN.name}</a>
                </Link>
                <Link href={ROUTES.REGISTER.url}>
                  <a>{ROUTES.REGISTER.name}</a>
                </Link>{" "}
              </>
            ) : (
              <Profile user={user} />
            )}
          </div>
        </nav>
      </header>
    </>
  );
}
