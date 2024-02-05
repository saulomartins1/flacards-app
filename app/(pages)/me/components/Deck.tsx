"use client";
import { Button } from "@/app/components/ui/button";
import {
  GalleryHorizontalEnd,
  //   Trash2,
  Edit,
  PlayCircleIcon,
} from "lucide-react";
import Link from "next/link";
import React from "react";

export function Deck() {
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
          JavaScript Conceitos Lorem ipsum dolor sit amet.
        </h2>
        <button onClick={handleEditDeck}>
          <Edit />
        </button>
      </div>
      <div className="w-full flex justify-between items-center gap-8">
        <span className="flex items-center gap-2" title="Cards neste baralho">
          <GalleryHorizontalEnd />2
        </span>
        <Link href="/me/decks">
          <Button className="flex font-semibold items-center gap-2 bg-brand">
            <PlayCircleIcon /> Jogar
          </Button>
        </Link>

        {/* <button onClick={handleDeleteDeck}>
          <Trash2 />{" "}
        </button> */}
      </div>
    </article>
  );
}
