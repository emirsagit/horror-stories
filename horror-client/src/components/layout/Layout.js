import Navigation from "./navigation/Navigation";

export default function layout({ children, ...restProps }) {
  return (
    <div className="bg-gray-100">
      <Navigation />
      <main className="pt-10">{children}</main>
      <footer className="">footer</footer>
    </div>
  );
}
