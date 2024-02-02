import { Button } from '@/app/components/ui/button';
import { getUserSession } from '@/app/lib/supabase/actions'
import { PlusCircleIcon } from 'lucide-react';
import { redirect } from 'next/navigation';
import React from 'react'
import { Deck } from './components/Deck';

async function page() {

    const { data: { user } } = await getUserSession();

    if (!user) redirect("/acessar")


    return <section className='flex items-center justify-center mt-16'>
        <div className='flex flex-col items-center gap-6'>
            <h1 className='text-3xl font-bold'>Meus Baralhos</h1>
            <div className='flex flex-col items-center gap-8'>
                <div className='flex gap-5 items-center'>
                    <p><span className='font-semibold text-2xl mr-3'>02</span> baralhos</p>
                    <p><span className='font-semibold text-2xl mr-3'>66</span> cards</p>
                </div>
                <Button className='flex font-semibold items-center gap-2'><PlusCircleIcon /> Criar Baralho</Button>
            </div>

            {/* <div className='flex flex-col justify-center items-center gap-4'>
                <Deck />
            </div> */}
        </div>
    </section>
}

export default page