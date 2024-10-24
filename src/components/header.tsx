import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ModeToggle } from "./mode-toogle";
import { Button } from "./ui/button";
import { ArrowUpRight } from "lucide-react";

export default async function Header() {
  return (
    <>
      <nav className="w-full border background-blur-md fixed z-50">
        <div className="flex h-[72px] w-full items-center justify-between lg:px-20 px-3 shadow-sm">
          <Link href={"/"} className="flex items-center gap-2 cursor-pointer">
            <Image
              src={"/next.svg"}
              alt="100xLiveArena"
              width={30}
              height={30}
              className="rounded"
            />
            <h3 className="text-xl font-bold">
              100x<span className="text-blue-600">LiveArena</span>
            </h3>
          </Link>

          <div className="flex gap-8 mx-4 flex-row items-center justify-between font-medium">
            <div>About</div>
            <div>Features</div>
            <div>Contact Us</div>
          </div>

          <div className="h-[46px] py-2 justify-start items-center gap-6 inline-flex">
            {/* <Button variant="link">
              <Link href={"/room/sfea"}>Try Demo</Link>
            </Button> */}


            <Button className="rounded-full">
              <Link
                href={"/auth"}
                className="font-semibold flex items-center gap-2"
              >
                Get Started{" "}
                <ArrowUpRight className="inline" width={16} height={16} />
              </Link>
            </Button>

            <ModeToggle />

          </div>
        </div>
      </nav>
    </>
  );
}
