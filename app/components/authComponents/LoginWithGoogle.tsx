'use client';

import React from 'react';
import { Button } from '@/app/components/ui/button';
import { signIn } from 'next-auth/react';

export function LoginWithGoogle() {
    const handleGoogleLogin = async () => {
        try {
            await signIn();
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <Button
            onClick={handleGoogleLogin}
            variant="link"
            className="max-w-max flex self-center gap-2"
        >
            Login with Google
        </Button>
    );
}
