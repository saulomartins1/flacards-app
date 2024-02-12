import { Button } from '@/app/components/ui/button';
import { ChevronRight, PlayCircleIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import React from 'react'

async function page() {

    return <section className='flex items-center justify-center mt-16'>
        <div className='flex flex-col items-center gap-16'>
            <div className='flex flex-col items-center gap-8'>
                <Image src="/ui-hero.png" width="180" height="155" alt='Flacards logo from app home page' priority />
                <Link href="/me/decks"><Button className='flex font-semibold items-center gap-2 bg-brand'><PlayCircleIcon /> Jogar Agora</Button></Link>
            </div>
            <div className='flex flex-col items-center gap-5'>
                <div className='flex gap-6 items-center'>
                    <p><span className='font-semibold text-2xl mr-1'>02</span> baralhos</p>
                    <p><span className='font-semibold text-2xl mr-1'>66</span> cards</p>
                </div>
                <Link href="/me/decks" className='flex gap-3 items-center text-sm font-medium p-3'>Ver baralhos <ChevronRight size={16} /></Link>
            </div>
        </div>
    </section>
}

export default page