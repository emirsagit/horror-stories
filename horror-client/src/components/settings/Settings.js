import React from "react";
import { PersonalInfo, Password } from ".";

export default function Settings({ children }) {
  return (
    <div>
      <PersonalInfo />
      <Password />
    </div>
  );
}
