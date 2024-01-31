import { Button } from '@/app/components/ui/button';
import { getUserSession } from '@/app/lib/supabase/actions'
import { PlusCircleIcon } from 'lucide-react';
import { redirect } from 'next/navigation';
import React from 'react'
import { Deck } from './components/Deck';

async function page() {

    const { data: { user } } = await getUserSession();

    if (!user) redirect("/acessar")


    return <section className='flex items-center justify-center'>
        <div className='flex flex-col items-center gap-4'>

            <h1 className='text-4xl font-medium'>Seus Baralhos</h1>

            <div className='flex items-center gap-4'>
                <p className='font-bold'>2 Baralhos</p>
                <Button className='flex items-center gap-2'><PlusCircleIcon /> Adicionar</Button>
            </div>

            <div className='flex flex-col justify-center items-center gap-4'>
                <Deck />
                <Deck />
                <Deck />
                <Deck />
            </div>
        </div>
    </section>
}

export default page