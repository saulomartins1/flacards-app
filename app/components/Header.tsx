import Link from 'next/link';
import React from 'react'
import { Logo } from '../assets/Logo'
import { getUserSession } from '../lib/supabase/actions'
import { SignOut } from './authComponents/SignOut';
import { ModeToggle } from './ModeToggle'


export async function Header() {
    const { data: { session } } = await getUserSession();

    return (
        <header className='flex items-center justify-around py-8 dark:bg-transparent'>
            <Link href="/">
                <Logo />
            </Link>
            {session && <div>
                <p>Logged in {session.user.email} </p>
                <SignOut />
            </div>}
            <ModeToggle />
        </header>
    )
}
