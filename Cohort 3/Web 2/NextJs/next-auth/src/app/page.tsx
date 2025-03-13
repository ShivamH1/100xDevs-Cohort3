"use client"
import { SessionProvider, signIn, signOut, useSession } from "next-auth/react";

export default function Home() {
  return (
    <SessionProvider>
      <RealHome />
    </SessionProvider>
  );
}

function RealHome() {
  const session = useSession();

  return (
    <div className="flex items-center justify-center">
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => {
          if (session.status === "authenticated") {
            signOut();
          } else {
            signIn();
          }
        }}
      >
        {session.status === "authenticated" ? "Logout" : "Login"}
        {JSON.stringify(session)}
      </button>
    </div>
  );
}
