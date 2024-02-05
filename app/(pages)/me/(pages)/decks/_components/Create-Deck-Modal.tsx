import React from "react";

import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/app/components/ui/dialog";

import { PlusCircleIcon } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { Label } from "@/app/components/ui/label";

export function CreateDeckModal() {
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
          <Button className="max-w-max" type="submit">
            Criar
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
