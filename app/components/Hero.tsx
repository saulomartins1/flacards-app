import React from 'react'
import { Button } from './ui/button'

export function Hero() {
    return (
        <section>
            <h1></h1>
            <p></p>
            <div>
                <Button>Criar conta</Button>
                <p className='text-white'>Já possui uma conta? <span className='font-bold'>Entrar</span></p>
            </div>
        </section>
    )
}