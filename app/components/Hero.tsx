import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'

export function Hero() {

    return (
        <section className='flex items-center justify-center'>
            <div className='max-w-[500px] flex flex-col gap-8'>
                <h1 className='text-3xl font-bold'>ESTUDE, APRENDA, REVISE</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vel vulputate velit. Phasellus et sodales metus, eget auctor.</p>
                <Link className='max-w-max' href="/acessar">
                    <Button className='font-semibold'>Acessar</Button>
                </Link>
            </div>
        </section>
    )
}