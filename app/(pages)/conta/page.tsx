import { getUserSession } from '@/app/lib/supabase/actions'
import { redirect } from 'next/navigation';
import React from 'react'

async function page() {

    const { data: { user } } = await getUserSession();

    if (!user) redirect("/acessar")


    return <section className='flex items-center justify-center'>
        <div className='max-w-[500px] flex flex-col gap-8'>
            <h1 className='text-4xl font-medium'>Seus Baralhos</h1>
        </div>
    </section>
}

export default page