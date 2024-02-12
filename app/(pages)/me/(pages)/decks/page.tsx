import { redirect } from "next/navigation";
import React from "react";
import { Deck } from "../../_components/Deck";
import { CreateDeckModal } from "./_components/Create-Deck-Modal";

async function page() {
  
  // if (!user) redirect("/acessar");

  return (
    <section className="flex items-center justify-center mt-16">
      <div className="flex flex-col items-center gap-16">
        <div className="flex flex-col items-center gap-8">
          <h1 className="text-3xl font-bold">Meus Baralhos</h1>
          <div className="flex flex-col items-center gap-5">
            <div className="flex gap-6 items-center">
              <p>
                <span className="font-semibold text-2xl mr-1">02</span> baralhos
              </p>
              <p>
                <span className="font-semibold text-2xl mr-1">66</span> cards
              </p>
            </div>
          </div>

          <CreateDeckModal />
        </div>

        <div className="flex flex-col justify-center items-center gap-4">
          <Deck />
          <Deck />
        </div>
      </div>
    </section>
  );
}

export default page;
