import React from 'react'
import { Tabs, TabsContent } from '@/app/components/ui/tabs'
import { Card } from "@/app/components/ui/card"

import { LoginWithGithub } from '@/app/components/authComponents/LoginWithGithub'
import { redirect } from 'next/navigation'
import { getUserSession } from '@/app/lib/supabase/actions'
import { FormSignIn } from './FormSignIn'

async function page() {

    const { data: { user } } = await getUserSession()
    if (user) redirect("/conta")


    return <section className='h-screen mt-16 flex flex-col items-center gap-8'>
        <div>
            <h1 className='text-3xl text-center font-bold uppercase'>Acesse sua conta</h1>
            <p>Você receberá um e-mail com um link de acesso para sua conta!</p>
        </div>
        <div className='flex flex-col items-center gap-4'>
            <Tabs defaultValue="access" className="w-[400px] rounded-md">
                <TabsContent value="access">
                    <Card className='p-8 flex flex-col gap-8'>
                        <FormSignIn />
                        <LoginWithGithub />
                    </Card>
                </TabsContent>
            </Tabs>
        </div>
    </section>
}

export default page