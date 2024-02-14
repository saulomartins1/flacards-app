import { authOptions } from '@/app/lib/auth';
import { db } from '@/app/lib/prisma';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import React from 'react';
import { Deck } from '../../_components/Deck';
import { CreateDeckModal } from './_components/Create-Deck-Modal';

async function page() {
    const session = await getServerSession(authOptions);
    if(!session?.user) redirect("/acessar");

    const [decks] = await Promise.all([
        db.deck.findMany({
            where: {
                userId: (session.user as any).id, 
            },
            include: {
                cards: true
            }
        })
    ]);

    const totalDecks = decks.length;
    const totalCards = decks.reduce((acc, total) => {
        return acc + total.cards.length;
    }, 0);


    return (
        <section className="flex items-center justify-center mt-16">
            <div className="flex flex-col items-center gap-16">
                <div className="flex flex-col items-center gap-8">
                    <h1 className="text-3xl font-bold">Meus Baralhos</h1>
                    <div className="flex flex-col items-center gap-5">
                        <div className="flex gap-6 items-center">
                            <p>
                                <span className="font-semibold text-2xl mr-1">
                                    {totalDecks}
                                </span>{' '}
                                baralhos
                            </p>
                            <p>
                                <span className="font-semibold text-2xl mr-1">
                                    {totalCards}
                                </span>{' '}
                                cards
                            </p>
                        </div>
                    </div>

                    <CreateDeckModal />
                </div>

                <div className="flex flex-col justify-center items-center gap-4">
                    {decks.map((deck, index) => <Deck key={index} deck={deck} /> )}
                </div>
            </div>
        </section>
    );
}

export default page;
