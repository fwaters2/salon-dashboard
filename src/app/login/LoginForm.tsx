"use client";

import { useRouter } from "next/navigation";

export const LoginForm = () => {
  const router = useRouter();

  return (
    <>
      <input
        type="text"
        placeholder="Type here"
        className="input input-bordered w-full max-w-xs"
      />
      <button
        className="btn btn-primary"
        onClick={() => router.push("/dashboard")}
      >
        Submit
      </button>
    </>
  );
};
