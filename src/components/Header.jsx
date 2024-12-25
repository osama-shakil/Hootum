"use client";

import { AvatarFallback } from "@radix-ui/react-avatar";
import { getCookie } from "cookies-next";
import {
  ArrowLeft,
  ArrowRight,
  Bell,
  Menu,
  MenuIcon,
  Search,
  UserCircle2,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { memo } from "react";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

// Previous components remain the same...
const Logo = memo(() => (
  <Link href="/" className="text-xl font-semibold">
    Hootum
  </Link>
));
Logo.displayName = "Logo";

const Navigation = memo(() => (
  <nav>
    <ul className="hidden md:flex items-center space-x-6">
      <li>
        <Link
          href="/how-it-work"
          className="text-sm text-black font-semibold hover:text-foreground transition-colors"
        >
          How it work
        </Link>
      </li>
    </ul>
  </nav>
));
Navigation.displayName = "Navigation";

const SearchBar = memo(() => (
  <div className="relative flex-1 max-w-md">
    <Input
      type="search"
      placeholder="Search"
      className="pl-8 bg-gray-100 border-none rounded-full"
    />
    <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4" />
  </div>
));
SearchBar.displayName = "SearchBar";

const NotificationBell = memo(() => (
  <Button variant="ghost" className="relative rounded-full p-3">
    <Bell className="h-8 w-8" />
    <span className="absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full" />
  </Button>
));
NotificationBell.displayName = "NotificationBell";

const AuthButton = memo(() => (
<Link
  href="/auth"
  className="hidden md:flex items-center justify-between text-white bg-black rounded-full py-[11px] px-[16px] w-[125px] h-[44px]"
>
  <UserCircle2 className="w-[24px] h-[24px]" />
  <ArrowRight className="w-[11.25px] h-[10.58px]" />
</Link>

));
AuthButton.displayName = "AuthButton";

export function Header() {
  const pathname = usePathname();
  const isAuthenticated = getCookie("token");

  // if (pathname === "/auth") return null;

  return (
    <header className="border-b border-black shadow-sm py-2">
      <div className="md:container mx-auto px-4 h-16">
        <div className="flex items-center justify-between h-full">
          <div className="flex items-center space-x-8">
            <Logo />
            <div className="w-[2px] h-8 bg-black rounded-full" />
            <Navigation />
          </div>

          {isAuthenticated ? (
            <>
              <Link href="/profile" className="md:hidden block">
              <Menu className="text-white bg-black w-9 h-9 p-1 rounded" />
              </Link>
              <div
                
                className="hidden md:flex items-center justify-between w-[28%] gap-4 "
              >
                <SearchBar />
                <NotificationBell />
                <Link
                href="/profile"
                className="hidden md:flex items-center justify-between w-[28%] gap-4 "
              >
                <div className="flex items-center justify-between space-x-2 text-white bg-black rounded-full py-3 px-4 w-[15vh] cursor-pointer">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="/placeholder.svg" alt="User" />
                    <AvatarFallback>U</AvatarFallback>
                  </Avatar>
                  <ArrowLeft className={`h-5 w-5 transition-transform`} />
                </div></Link>
              </div>
            </>
          ) : pathname === "/auth" ? (
            <></>
          ) : (
            <>
              {" "}
              <Link href="/auth" className="md:hidden block">
                <Menu className="text-white bg-black w-9 h-9 p-1 rounded" />
              </Link>
              <AuthButton />
            </>
          )}
        </div>
      </div>
    </header>
  );
}
