'use client'

import React from 'react'
import { createBrowserClient } from '@supabase/ssr'
import { Button } from '@/app/components/ui/button'

export function LoginWithGithub() {

    const supabase = createBrowserClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    )
    const LoginWithGitHub = () => {
        supabase.auth.signInWithOAuth({
            provider: "github",
            options: {
                redirectTo: `${location.origin}/auth/callback`,
            },
        })
    }

    return <Button onClick={LoginWithGitHub} className="max-w-max flex self-center" >Login with GitHub</Button>
}
