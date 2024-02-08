"use client";

import React from "react";
import { Input } from "@/app/components/ui/input";
import { Label } from "@/app/components/ui/label";
import { Button } from "@/app/components/ui/button";
import { useRef } from "react";
import { createBrowserClient } from "@supabase/ssr";

export const FormSignIn = () => {
  const [sent, setSent] = React.useState<Boolean>(false);
  const ref = useRef<HTMLInputElement | null>(null);

  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const email = ref.current;

    if (email && email.value.includes("@") && email.value.length > 10) {
      // Trocar para RegEx depois/

      const { data: DataUser, error } = await supabase.auth.signInWithOtp({
        email: email.value,
        options: {
          shouldCreateUser: true,
          emailRedirectTo: `${location.origin}/api/auth/callback`,
        },
      });

      if (error) {
        setSent(false);
        console.log(error.message);
      }
      if (!error && DataUser) {
        console.log("Enviado");
        setSent(true);
      }
    } else {
      alert("Utilize um email válido!");
    }
  };

  return (
    <>
      {sent ? (
        <div className="bg-green-200 border border-green-500 text-green-800 rounded-sm p-2 text-center">
          <p>
            Você receberá um link de acesso em seu e-mail{" "}
            <span className="font-semibold">{ref?.current?.value}</span>
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="w-full">
          <div className="flex flex-col gap-4 items-center">
            <Label htmlFor="email">E-mail</Label>
            <Input ref={ref} id="email" placeholder="exemplo@gmail.com" />
            <Button className="w-full">Acessar</Button>
          </div>
        </form>
      )}
    </>
  );
};
