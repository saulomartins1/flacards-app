"use server";

import { db } from "@/app/lib/prisma";
import { ISaveDeck } from "@/app/types";

export const saveDeck = async (params: ISaveDeck) => {
  await db.deck.create({
    data: {
      name: params.name,
      userId: params.userId,
    },
  });
};
