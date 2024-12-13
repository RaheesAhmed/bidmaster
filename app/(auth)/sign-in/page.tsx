"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Icons } from "@/components/icons";
import { useSignIn } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";
import { toast } from "@/hooks/use-toast";
import Image from "next/image";

export default function SignInPage() {
  const { isLoaded, signIn, setActive } = useSignIn();
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!isLoaded) return;

    setIsLoading(true);

    const formData = new FormData(event.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    try {
      const result = await signIn.create({
        identifier: email,
        password,
      });

      if (result.status === "complete") {
        await setActive({ session: result.createdSessionId });
        router.push("/dashboard");
        toast({
          title: "Welcome back!",
          description: "You have successfully signed in.",
        });
      } else {
        toast({
          title: "Error",
          description: "Please verify your email address.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Invalid email or password.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="container flex h-screen w-screen flex-col items-center justify-center relative">
      <button
        onClick={() => router.push("/")}
        className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100"
      >
        <Icons.close className="h-4 w-4" />
        <span className="sr-only">Close</span>
      </button>

      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <div className="flex flex-col space-y-2 text-center">
          <Image
            src="/logo.svg"
            alt="BidMaster Logo"
            width={200}
            height={100}
            className="mx-auto mb-4"
            priority
          />
          <h1 className="text-2xl font-semibold tracking-tight">
            Sign in to BidMaster
          </h1>
          <p className="text-sm text-muted-foreground">
            Welcome back! Please sign in to continue
          </p>
        </div>

        <div className="grid gap-6">
          <Button
            variant="outline"
            type="button"
            disabled={isLoading}
            className="bg-white"
          >
            <Icons.google className="mr-2 h-4 w-4" />
            Continue with Google
          </Button>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">
                or
              </span>
            </div>
          </div>

          <form onSubmit={onSubmit} className="grid gap-2">
            <div className="grid gap-2">
              <Input
                id="email"
                placeholder="Email address or username"
                type="email"
                name="email"
                autoCapitalize="none"
                autoComplete="email"
                autoCorrect="off"
                disabled={isLoading}
                required
              />
              <Input
                id="password"
                placeholder="Password"
                type="password"
                name="password"
                autoCapitalize="none"
                autoComplete="current-password"
                autoCorrect="off"
                disabled={isLoading}
                required
              />
            </div>
            <Button
              className="bg-[#14A800] hover:bg-[#3C8224] w-full mt-2"
              disabled={isLoading}
            >
              {isLoading && (
                <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
              )}
              Continue
            </Button>
          </form>
        </div>

        <div className="text-center text-sm">
          <p className="text-muted-foreground">
            Don't have an account?{" "}
            <Link
              href="/sign-up"
              className="text-[#14A800] hover:underline font-medium"
            >
              Sign up
            </Link>
          </p>
          <div className="mt-4">
            <Link
              href="/forgot-password"
              className="text-[#14A800] hover:underline text-sm"
            >
              Forgot password?
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
