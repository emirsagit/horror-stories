import Link from "next/link";
import { Logout } from "..";

export default function layout({ children, ...restProps }) {
  return (
    <div className={`bg-gray-100 ${restProps}`}>
      <header>
        <nav>
          <Link href="/login">
            <a>Giriş</a>
          </Link>
          <Link href="/register">
            <a>Kayıt</a>
          </Link>
          <Logout />
        </nav>
      </header>
      <main>{children}</main>
      <footer className="">footer</footer>
    </div>
  );
}
