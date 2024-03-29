import React from 'react'
import { Tabs, TabsContent } from '@/app/components/ui/tabs'
import { Card } from "@/app/components/ui/card"

import { FormSignIn } from './FormSignIn'
import { LoginWithGoogle } from '@/app/components/authComponents/sign-in-google'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/lib/auth'
import { redirect } from 'next/navigation'

async function page() {
    const session = await getServerSession(authOptions);
    if(session?.user) redirect("/me");

    return <section className='h-screen mt-16 flex flex-col items-center gap-8'>
        <div>
            <h1 className='text-3xl text-center font-bold uppercase pb-3'>Acesse sua conta</h1>
            <p className='text-center'>Você receberá um e-mail com um link de acesso para sua conta!</p>
        </div>
        <div className='flex flex-col items-center gap-4'>
            <Tabs defaultValue="access" className="rounded-md">
                <TabsContent value="access">
                    <Card className='p-8 flex flex-col gap-8'>
                        <FormSignIn />
                        <LoginWithGoogle />
                    </Card>
                </TabsContent>
            </Tabs>
        </div>
    </section>
}

export default page