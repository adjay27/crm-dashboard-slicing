import React from "react";
import { MainNav } from "./MainNav";
import { Button } from "./ui/button";
import Image from "next/image";
import Link from "next/link";

const NavBar = () => {
  return (
    <div className="border-b flex justify-between px-20">
      <div className="flex h-16 items-center px-4">
        <Image src="/venture.svg" alt="logo" width={115} height={28} />
      </div>
      <div className="flex h-16 items-center px-4">
        <MainNav className="mx-6" />
      </div>
      <div className="flex items-center px-4">
        <Link href="/login" className="mr-4 underline text-sm font-medium">Login</Link>
        <Button>Get Started</Button>
      </div>
    </div>
  );
};

export default NavBar;
