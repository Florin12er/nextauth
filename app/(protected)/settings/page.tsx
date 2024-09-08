"use client";

import { useCurrentUser } from "@/hooks/user-current-user";
import { signOut } from "next-auth/react";

const SettingsPage = () => {
  const user = useCurrentUser();
  return (
    <div className="bg-white p-10 rounded-xl">
      <button type="submit" onClick={() => signOut()}>
        Logout
      </button>
    </div>
  );
};

export default SettingsPage;
