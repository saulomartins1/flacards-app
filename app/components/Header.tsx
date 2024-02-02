import Link from 'next/link';
import React from 'react'
import { Logo } from '../assets/Logo'
import { getUserSession } from '../lib/supabase/actions'
import { ProfileDropdown } from './authComponents/ProfileDropdown';
import { ModeToggle } from './ModeToggle'


export async function Header() {
    const { data: { user } } = await getUserSession();

    return (
        <header className='flex items-center justify-between py-8 dark:bg-transparent'>
            <Link href="/">
                <Logo />
            </Link>
            {user &&
                <div>
                    <nav className='flex gap-4 items-center'>
                        <ProfileDropdown user={user} />
                    </nav>
                </div>
            }
        </header>
    )
}
