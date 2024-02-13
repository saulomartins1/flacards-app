import React from 'react';
import { ExitIcon } from '@radix-ui/react-icons';
import { signOut } from 'next-auth/react';

export function SignOutButton() {
    
    const handleSignOut = async () => signOut({redirect: true, callbackUrl: "/"});

    return (
        <form action={handleSignOut}>
            <button
                title="Sair da conta"
                className="p-3 font-bold transition-colors text-red-500 hover:bg-red-500 hover:text-white rounded-full"
            >
                <ExitIcon strokeWidth="8" color="currentColor" />
            </button>
        </form>
    );
}
