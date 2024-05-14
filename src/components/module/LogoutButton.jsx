"use client";

import { signOut } from "next-auth/react";
import { FiLogOut } from "react-icons/fi";
import styles from "@/module/LogoutButton.module.css";

export default function LogoutButton() {
  return (
    <button className={styles.button} onClick={signOut}>
      <FiLogOut />
      خروج
    </button>
  );
}
