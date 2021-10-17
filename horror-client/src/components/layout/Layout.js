import Navigation from "./navigation/Navigation";

export default function layout({ children, ...restProps }) {
  return (
    <div className={`bg-gray-100 ${restProps}`}>
      <Navigation />
      <main>{children}</main>
      <footer className="">footer</footer>
    </div>
  );
}
