import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { Hero } from "./components/Hero";
import { authOptions } from "./lib/auth";

export default async function Home() {

  const session = await getServerSession(authOptions);
  if(session?.user) redirect("/me");

  return (
    <main>
      <Hero />
    </main>
  );
}
