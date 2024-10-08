'use client';
import Image from "next/image";
import { MetaMaskButton } from "@metamask/sdk-react-ui";
import Link from "next/link";


export default function Header() {
  return (
    <header>
      <nav className="bg-dark px-4 lg:px-6 py-2.5 ">
        <div className="flex justify-between items-center mx-auto max-w-screen-xl">
          <Link href="/">
            <Image
              src="/images/logo.png"
              alt="Logo"
              width={100}
              height={36}
            />
          </Link>
          <div className="flex items-center lg:order-2">
            {/* <a href="#" className="text-subtle-text font-medium text-sm px-4">election</a> */}
            {/* <a href="#" className="text-subtle-text font-medium text-sm px-4">vote</a> */}
            <MetaMaskButton theme="light" color="white"></MetaMaskButton>
          </div>
        </div>
      </nav>
    </header>
  );
}

