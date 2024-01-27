import { redirect } from "next/navigation";
import { Hero } from "./components/Hero";
import { getUserSession } from "./lib/supabase/actions";

export default async function Home() {
  const { data: { session } } = await getUserSession()
  if (session?.user) redirect("/conta")

  return (
    <main>
      <Hero />
    </main>
  );
}
