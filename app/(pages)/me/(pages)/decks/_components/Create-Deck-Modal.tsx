'use client';

import React from 'react';

import {
    Dialog,
    DialogContent,
    DialogTrigger,
} from '@/app/components/ui/dialog';

import { PlusCircleIcon } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';
import { Label } from '@/app/components/ui/label';
// import { saveDeck } from '@/app/(pages)/actions/save-deck';
import { useSession } from 'next-auth/react';

export function CreateDeckModal() {
    const { data } = useSession();

    const handleCreateDeck = async () => {
        try {
            // await saveDeck({ name: "Primeiro Deck", userId: data?.user?.id, });
            console.log('Create Deck');
        } catch (error) {}
    };

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button className="flex font-semibold items-center gap-2">
                    <PlusCircleIcon /> Criar Baralho
                </Button>
            </DialogTrigger>
            <DialogContent className="max-w-[327px]">
                <div className="flex flex-col items-center gap-8">
                    <h2 className="font-bold text-xl">Criar Baralho</h2>
                    <div className="flex flex-col items-center gap-2">
                        <Label htmlFor="name" className="text-sm font-semibold">
                            Nome do Baralho
                        </Label>
                        <Input
                            autoComplete="off"
                            id="name"
                            type="text"
                            contentEditable="plaintext-only"
                        />
                    </div>
                    <Button onClick={handleCreateDeck} className="max-w-max">
                        Criar
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    );
}
