import Link from 'next/link';
import React from 'react'
import { Logo } from '../assets/Logo'
import { getUserSession } from '../lib/supabase/actions'
import { ProfileDropdown } from './authComponents/ProfileDropdown';
import { ModeToggle } from './ModeToggle'


export async function Header() {
    const { data: { user } } = await getUserSession();

    return (
        <header className='flex items-center justify-around py-8 dark:bg-transparent'>
            <Link href="/">
                <Logo />
            </Link>
            {user ?
                <div>
                    <nav className='flex gap-4 items-center'>
                        <a href="#" className='py-4 px-1'>Baralhos</a>
                        <a href="#" className='py-4 px-1'>Progresso</a>
                        <a href="#" className='py-4 px-1'>Estatísticas</a>
                        <ProfileDropdown user={user} />
                    </nav>
                </div>
                :
                <ModeToggle />
            }
        </header>
    )
}
