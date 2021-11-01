import Link from "next/link";
import { SETTINGS } from "../../../constants/routes";

export default function Settings() {
  return (
    <Link href={SETTINGS.url}>
      <a className="hover:bg-gray-100 w-full text-center">{SETTINGS.name}</a>
    </Link>
  );
}
