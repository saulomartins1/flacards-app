'use server';

import { db } from '@/app/lib/prisma';
import { ISaveDeck } from '@/app/types';

export const saveDeck = async ({ name, userId, }: ISaveDeck) => {
    await db.deck.create({
        data: { name, userId },
    });
};
