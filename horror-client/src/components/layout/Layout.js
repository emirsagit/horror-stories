import Link from "next/link";

export default function layout({ children, ...restProps }) {
  return (
    <div className={`bg-gray-100 ${restProps}`}>
      <header>
        <nav>
          <Link href="/login">
            <a>Login</a>
          </Link>
        </nav>
      </header>
      <main>{children}</main>
      <footer className="">footer</footer>
    </div>
  );
}
