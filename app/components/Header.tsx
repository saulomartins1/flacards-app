import React from 'react'
import { Logo } from '../assets/Logo'
import { ModeToggle } from './ModeToggle'


export function Header() {
    return (
        <header className='flex items-center justify-around py-8 dark:bg-transparent'>
            <Logo />
            <ModeToggle />
        </header>
    )
}
