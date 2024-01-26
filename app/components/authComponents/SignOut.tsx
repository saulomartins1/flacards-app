
import { redirect } from 'next/navigation';
import React from 'react'
import createSupabaseServerClient from '@/app/lib/supabase/server';

export function SignOut() {
    async function handleSignOut() {
        "use server"

        const supabase = await createSupabaseServerClient();
        await supabase.auth.signOut();
        redirect("/");

    }
    return <form action={handleSignOut}>
        <button>Sair</button>
    </form>
}