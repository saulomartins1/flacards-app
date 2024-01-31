"use client"
import { PlayCircle, GalleryHorizontalEnd, Trash2, Edit } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export function Deck() {

    const handleEditDeck = () => {
        alert("Edit Deck");
    }
    const handleDeleteDeck = () => {
        alert("Delete Deck");
    }

    return <article className='flex items-center bg-card gap-16 p-5 rounded-md border border-border'>
        <h2 className='truncate max-w-52'>JavaScript Conceitos</h2>
        <div className='flex items-center gap-8'>
            <Link href="/play/1"><PlayCircle /></Link>
            <span className='flex items-center gap-2' title="Cards neste baralho"><GalleryHorizontalEnd />18</span>
            <button onClick={handleEditDeck}><Edit /> </button >
            <button onClick={handleDeleteDeck}><Trash2 /> </button >
        </div>
    </article>
}