import Navigation from "./navigation/Navigation";
import Notification from "./notification/Notification";

export default function layout({ children, ...restProps }) {
  return (
    <div className="bg-gray-100">
      <Navigation />
      <main className="pt-10 mt-12 min-h-screen m-auto max-w-2xl w-11/12">{children}</main>
      <footer className="">footer</footer>
      <Notification />
    </div>
  );
}
