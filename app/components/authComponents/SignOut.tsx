
import { redirect } from 'next/navigation';
import React from 'react'
import createSupabaseServerClient from '@/app/lib/supabase/server';
import { ExitIcon } from '@radix-ui/react-icons';

export function SignOut() {
    async function handleSignOut() {
        "use server"

        const supabase = await createSupabaseServerClient();
        await supabase.auth.signOut();
        redirect("/");

    }
    return <form action={handleSignOut}>
        <button className='p-3 font-bold transition-colors hover:bg-red-100 rounded-full'><ExitIcon strokeWidth="8" color='red' /></button>
    </form>
}