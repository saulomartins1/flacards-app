import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'

export function Hero() {

    /* 
    1. Verificar a melhor forma de fazer proteção de rotas:
    ...Matcher do middleware ou verificando e redirecionando em cada página específica ou outra forma?
    2. Melhor forma de lidar com Header component em diferentes páginas:
    ...Criar um novo ou utilizar o mesmo component com condicionais?

    */
    return (
        <section className='flex items-center justify-center'>
            <div className='max-w-[500px] flex flex-col gap-8'>
                <h1 className='text-4xl font-medium'>ESTUDE, APRENDA, REVISE</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vel vulputate velit. Phasellus et sodales metus, eget auctor.</p>
                <Link className='max-w-max' href="/acessar">
                    <Button className='font-semibold'>Acessar</Button>
                </Link>
            </div>
            <div>
                <Image src="/hero-img.png" width={384} height={459} alt="Cards Image" />
            </div>
        </section>
    )
}