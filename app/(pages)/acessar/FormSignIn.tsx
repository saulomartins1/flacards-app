"use client";

import React from "react";
import { Input } from "@/app/components/ui/input";
import { Label } from "@/app/components/ui/label";
import { Button } from "@/app/components/ui/button";
import { useRef } from "react";

export const FormSignIn = () => {
  const [sent, setSent] = React.useState<Boolean>(false);
  const ref = useRef<HTMLInputElement | null>(null);

 

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
      
    const email = ref.current;
    //TODO: Email Magic Link Provider
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
            <Button className="w-full" disabled>Acessar</Button>
          </div>
        </form>
      )}
    </>
  );
};
