import { Logout, Settings } from "./index";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

export default function Profile({ user }) {
  const [showProfile, setShowProfile] = useState(false);

  return (
    <div className="relative" onMouseOver={() => setShowProfile((prev) => !prev)} onMouseOut={() => setShowProfile(false)}>
      <button className="flex items-center hover:bg-gray-100 px-2 py-0.5 rounded-md" type="buttton">
        <Image src={user.avatar_thumb_url ? user.avatar_thumb_url : "/default-avatar.jpg  "} alt={user.name} width="35" height="35" layout="fixed" className="rounded-full" />
        <span className="ml-1">{user.name}</span>
        <span>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
            <path fill="none" d="M0 0h24v24H0z" />
            <path d="m12 13.172 4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z" />
          </svg>
        </span>
      </button>
      <ul className={showProfile ? "flex absolute w-full flex-col justify-center bg-white text-gray-600" : "hidden"}>
        <li className="w-full border-b p-1">
          <Link href="">
            <a className="hover:bg-gray-100 w-full block text-center">Profile</a>
          </Link>
        </li>
        <li className="w-full border-b p-1">
          <Logout />
        </li>
        <li className="w-full border-b p-1 flex">
          <Settings />
        </li>
      </ul>
    </div>
  );
}
