'use client'
import { MenuIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { Logo } from '../assets/Logo'
import { Avatar, AvatarFallback, AvatarImage } from '@/app/components/ui/avatar'

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/app/components/ui/dropdown-menu'
import { useSession } from 'next-auth/react'
import { SignOutButton } from './authComponents/sign-out'

export function Header() {
    const { data } = useSession()

    return (
        <header className="flex items-center justify-between py-4 dark:bg-transparent ">
            {data?.user ? (
                <div className="flex items-center justify-between w-full">
                    <Link href="/">
                        <Logo />
                    </Link>
                    <div className="relative text-title">
                        <DropdownMenu>
                            <DropdownMenuTrigger className="flex self-center">
                                <Avatar>
                                    <AvatarImage
                                        src={data?.user?.image || ''}
                                    />
                                    <AvatarFallback>FC</AvatarFallback>
                                </Avatar>
                            </DropdownMenuTrigger>

                            <DropdownMenuContent className="min-w-[250px] mr-4 dark:bg-card shadow-2xl shadow-black">
                                <DropdownMenuLabel className="flex items-center justify-between">
                                    <span
                                        title={data?.user?.name || ''}
                                        className="max-w-40 truncate"
                                    >
                                        {data?.user?.name}
                                    </span>
                                    <SignOutButton />
                                </DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <nav className="flex flex-col">
                                    <Link
                                        href="#"
                                        className="px-2 py-3 hover:bg-border rounded-sm"
                                    >
                                        Perfil
                                    </Link>
                                    <Link
                                        href="/me/decks"
                                        className="px-2 py-3 hover:bg-border rounded-sm"
                                    >
                                        Baralhos
                                    </Link>
                                    <Link
                                        href="#"
                                        className="px-2 py-3 hover:bg-border rounded-sm"
                                    >
                                        Estatísticas
                                    </Link>
                                    <Link
                                        href="#"
                                        className="px-2 py-3 hover:bg-border rounded-sm"
                                    >
                                        Ranking
                                    </Link>
                                </nav>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </div>
            ) : (
                <Link href="/">
                    <Logo />
                </Link>
            )}
        </header>
    )
}
