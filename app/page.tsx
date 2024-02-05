import { redirect } from "next/navigation";
import { Hero } from "./components/Hero";
import { getUserSession } from "./lib/supabase/actions";

export default async function Home() {
  const {
    data: { user },
  } = await getUserSession();
  if (user) redirect("/me");

  return (
    <main>
      <Hero />
    </main>
  );
}
