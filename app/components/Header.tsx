import { MenuIcon } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Logo } from "../assets/Logo";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/app/components/ui/avatar";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/app/components/ui/dropdown-menu";

export async function Header() {

  const user = false;
  const userAvatar = "1";
  // const userAvatar = user?.user_metadata?.avatar_url;
  // const userEmailFormatted = user?.email?.slice(0, user.email.indexOf("@"));

  return (
    <header className="flex items-center justify-between py-4 dark:bg-transparent ">
      {user ? (
        <div className="flex items-center justify-between w-full">
          <Avatar>
            <AvatarImage src={userAvatar} />
            <AvatarFallback>FC</AvatarFallback>
          </Avatar>

          <Link href="/">
            <Logo />
          </Link>

          <div className="relative text-title">
            <DropdownMenu>
              <DropdownMenuTrigger className="flex self-center">
                <MenuIcon />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="min-w-[250px] mr-4 dark:bg-card shadow-2xl shadow-black">
                <DropdownMenuLabel>userEmailFormatted</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <nav className="flex flex-col">
                  <Link
                    href="#"
                    className="px-2 py-3 hover:bg-border rounded-sm"
                  >
                    Perfil
                  </Link>
                  <Link
                    href="#"
                    className="px-2 py-3 hover:bg-border rounded-sm"
                  >
                    Baralhos
                  </Link>
                  <Link
                    href="#"
                    className="px-2 py-3 hover:bg-border rounded-sm"
                  >
                    Estatísticas
                  </Link>
                  <Link
                    href="#"
                    className="px-2 py-3 hover:bg-border rounded-sm"
                  >
                    Ranking
                  </Link>
                </nav>
                <DropdownMenuSeparator />
                <span>
                  {/* <SignOut /> */}
                </span>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      ) : (
        <Link href="/">
          <Logo />
        </Link>
      )}
    </header>
  );
}
