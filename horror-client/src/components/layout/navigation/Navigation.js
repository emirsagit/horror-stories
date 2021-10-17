import Link from "next/link";
import Logo from "./logo/Logo";
import { Profile } from "../..";
import * as ROUTES from "../../../constants/routes";
import { UserContext } from "../../../context/UserContext";
import { useContext } from "react";

export default function Navigation() {
  const { user } = useContext(UserContext);
  return (
    <header className="bg-white w-full fixed top-0 left-0 right-0 h-10">
      <nav className="flex flex-col lg:flex-row lg:justify-between items-center w-11/12 max-w-5xl mx-auto h-full text-gray-700">
        <div className="flex flex-col lg:flex-row gap-4">
          <Link href={ROUTES.HOME.url}>
            <a>
              <Logo />
            </a>
          </Link>
          <Link href={ROUTES.HOME.url}>
            <a>{ROUTES.HOME.name}</a>
          </Link>
        </div>
        <div className="flex flex-col lg:flex-row gap-4">
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
  );
}
