import { PrismaClient } from "@prisma/client";
import Link from "next/link";

const client = new PrismaClient();

const getUserDetails = async () => {
  try {
    const users = await client.user.findFirst();
    return {
      name: users?.username,
      password: users?.password,
    }
  } catch (error) {
    
  }
}

export default async function Home() {
  const userDetails = await getUserDetails();
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className="flex flex-col items-center gap-4">
        <div className="text-2xl font-bold">Todo Application</div>
        <Link href={"signin"} className="text-lg text-blue-500 hover:underline">
          Sign in
        </Link>
        <Link href={"signup"} className="text-lg text-blue-500 hover:underline">
          Sign up
        </Link>
      </div>
      <div className="flex flex-col items-center gap-4">
        {userDetails?.name}
        <p>{userDetails?.password}</p>
      </div>
    </div>
  );
}
