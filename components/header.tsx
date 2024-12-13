import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { ModeToggle } from "./mode-toggle";
import Image from "next/image";

const navigation = [
  { name: "Features", href: "#features" },
  { name: "Pricing", href: "#pricing" },
  { name: "Resources", href: "#resources" },
  { name: "Blog", href: "/blog" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b">
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
            <Button variant="ghost" className="rounded-full">
              Sign In
            </Button>
            <Button className="rounded-full bg-[#14A800] hover:bg-[#3C8224]">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
