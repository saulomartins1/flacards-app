import React from 'react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/app/components/ui/dropdown-menu"
import { SignOut } from './SignOut';
import Link from 'next/link';
import { ModeToggle } from '../ModeToggle';
import Image from 'next/image';
import { AvatarIcon } from '@radix-ui/react-icons';

export function ProfileDropdown({ user }: { user: any }) {

    const userEmailFormatted = user?.email?.slice(0, user.email.indexOf("@"));
    const userImage = user?.user_metadata?.avatar_url;

    return <DropdownMenu>
        <DropdownMenuTrigger className='outline-none'>
            <div className='relative flex justify-center items-center w-10 h-10 rounded-full overflow-hidden'>
                {userImage ?
                    <Image className='object-contain rounded-full' src={userImage} fill sizes='40px' alt={`${userEmailFormatted}'s avatar`} />
                    :
                    <AvatarIcon className='text-foreground' width={28} height={28} />
                }
            </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent className='max-w-40 p-2'>
            <div className='flex justify-between items-center'>
                <h2 className='p-0 truncate' title={userEmailFormatted}>{userEmailFormatted}</h2>
                <SignOut />
            </div>
            <DropdownMenuSeparator />
            <Link className='flex flex-grow py-2 font-medium hover:underline' href="/profile/:user">Perfil</Link>
            <DropdownMenuSeparator />
            <div className='flex justify-between pt-1 items-center'>
                <p className='text-sm '>Modo</p>
                <ModeToggle />
            </div>
        </DropdownMenuContent>
    </DropdownMenu>
}