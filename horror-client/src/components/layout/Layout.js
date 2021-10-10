export default function layout({ children, ...restProps }) {
  return (
    <div className={`bg-gray-100 ${restProps}`}>
      <header>
        <nav>Nav</nav>
      </header>
      <main>{children}</main>
      <footer className="">footer</footer>
    </div>
  );
}
