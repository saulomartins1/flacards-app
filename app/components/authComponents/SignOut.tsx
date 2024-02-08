import { redirect } from "next/navigation";
import React from "react";
import createSupabaseServerClient from "@/app/lib/supabase/server";
import { ExitIcon } from "@radix-ui/react-icons";

export function SignOut() {
  async function handleSignOut() {
    "use server";

    const supabase = await createSupabaseServerClient();
    await supabase.auth.signOut();
    redirect("/");
  }
  return (
    <form action={handleSignOut}>
      <button className="flex justify-between items-center gap-4 p-2 transition-colors rounded-sm w-full">
        Sair <ExitIcon strokeWidth="8" color="red" />
      </button>
    </form>
  );
}
