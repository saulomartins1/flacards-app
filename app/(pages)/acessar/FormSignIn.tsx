"use client"

import React from 'react'
import { Input } from "@/app/components/ui/input"
import { Label } from "@/app/components/ui/label"
import { Button } from '@/app/components/ui/button'
import { useRef } from 'react'
import { createBrowserClient } from '@supabase/ssr'

export const FormSignIn = () => {
    const ref = useRef<HTMLInputElement | null>(null);


    const supabase = createBrowserClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    )

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const email = ref.current;

        if (email && email.value.includes("@") && email.value.length > 10) {
            const { error } = await supabase.auth.signInWithOtp({
                email: email.value,
                options: {
                    shouldCreateUser: true,
                    emailRedirectTo: `${location.origin}/auth/callback`,
                },
            })
            if (error) {
                console.log(error.message)
            }

        } else {
            alert("Utilize um email válido!")
        }
    }

    return <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-4 items-center">
            <Label htmlFor="email">E-mail</Label>
            <Input ref={ref} id="email" placeholder="exemplo@gmail.com" />
            <Button className='w-full'>Acessar</Button>
        </div>
    </form>
}
