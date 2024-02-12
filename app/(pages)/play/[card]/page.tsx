import { redirect } from 'next/navigation';
import React from 'react'

async function page({ params }: { params: { card: string } }) {

    // if (!user) redirect("/acessar")

    return <section className='flex items-center justify-center'>
        <div className='flex flex-col items-center gap-4'>
            <h1 className='text-4xl font-medium'>Jogando: {params.card}</h1>

        </div>
    </section>
}

export default page