"use client";

import { useRouter } from "next/navigation";

export const LogoutBtn = () => {
  const router = useRouter();
  return (
    <button
      className="btn btn-ghost flex-1"
      onClick={() => router.push("/login")}
    >
      Logout
    </button>
  );
};
