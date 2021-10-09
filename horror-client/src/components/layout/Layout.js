export default function layout({ children }) {
  return (
    <>
      <header>
        <nav>Nav</nav>
      </header>
      <main>{children}</main>
      <footer>footer</footer>
    </>
  );
}
