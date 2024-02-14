"use client";
import { Button } from "@/app/components/ui/button";
import { Prisma } from "@prisma/client";
import {
  GalleryHorizontalEnd,
  //   Trash2,
  Edit,
  PlayCircleIcon,
} from "lucide-react";
import Link from "next/link";
import React from "react";

interface IDeckProps {
  deck: Prisma.DeckGetPayload<{
    include: {cards: Prisma.Deck$cardsArgs}
  }>;
}


export function Deck({deck}: IDeckProps) {

  const handleEditDeck = () => {
    alert("Edit Deck");
  };

  //   const handleDeleteDeck = () => {
  //     alert("Delete Deck");
  //   };

  return (
    <article className="w-full flex-wrap flex items-center bg-card gap-16 p-5 rounded-md border border-border">
      <div className="flex items-center w-full justify-between">
        <h2 className="truncate max-w-64">
          {deck.name}
        </h2>
        <button onClick={handleEditDeck}>
          <Edit />
        </button>
      </div>
      <div className="w-full flex justify-between items-center gap-8">
        <span className="flex items-center gap-2" title="Cards neste baralho">
          <GalleryHorizontalEnd />{deck.cards.length}
        </span>
        <Link href="/me/decks">
          <Button className="flex font-semibold items-center gap-2 bg-brand">
            <PlayCircleIcon /> Jogar
          </Button>
        </Link>
      </div>
    </article>
  );
}
