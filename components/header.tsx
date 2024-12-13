"use client";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { ModeToggle } from "./mode-toggle";
import Image from "next/image";
import { SignInButton, SignUpButton, UserButton, useUser } from "@clerk/nextjs";
import { Icons } from "./icons";

const navigation = [
  { name: "Features", href: "#features" },
  { name: "Pricing", href: "#pricing" },
  { name: "Resources", href: "#resources" },
  { name: "Blog", href: "/blog" },
];

export function Header() {
  const { isSignedIn, user, isLoaded } = useUser();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex h-14 items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.svg"
              alt="BidMaster Logo"
              width={250}
              height={150}
              priority
            />
          </Link>
        </div>

        {/* Navigation */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            {navigation.map((item) => (
              <NavigationMenuItem key={item.name}>
                <Link href={item.href} legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    {item.name}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <ModeToggle />
          <div className="hidden md:flex items-center gap-4">
            {!isLoaded ? (
              // Loading state
              <Button variant="ghost" size="sm" disabled>
                <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                Loading...
              </Button>
            ) : isSignedIn ? (
              // Signed in state
              <div className="flex items-center gap-4">
                <Link href="/dashboard">
                  <Button variant="ghost" className="rounded-full">
                    Dashboard
                  </Button>
                </Link>
                <UserButton
                  afterSignOutUrl="/"
                  appearance={{
                    elements: {
                      avatarBox: "w-10 h-10",
                    },
                  }}
                />
              </div>
            ) : (
              // Signed out state
              <>
                <SignInButton mode="modal">
                  <Button variant="ghost" className="rounded-full">
                    Sign In
                  </Button>
                </SignInButton>
                <SignUpButton mode="modal">
                  <Button className="rounded-full bg-[#14A800] hover:bg-[#3C8224]">
                    Get Started
                  </Button>
                </SignUpButton>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="rounded-full">
                <Icons.menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-[200px]">
              {navigation.map((item) => (
                <DropdownMenuItem key={item.name} asChild>
                  <Link href={item.href}>{item.name}</Link>
                </DropdownMenuItem>
              ))}
              <DropdownMenuSeparator />
              {isSignedIn ? (
                <>
                  <DropdownMenuItem asChild>
                    <Link href="/dashboard">Dashboard</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/settings">Settings</Link>
                  </DropdownMenuItem>
                </>
              ) : (
                <>
                  <DropdownMenuItem>
                    <SignInButton mode="modal">Sign In</SignInButton>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <SignUpButton mode="modal">Get Started</SignUpButton>
                  </DropdownMenuItem>
                </>
              )}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}
