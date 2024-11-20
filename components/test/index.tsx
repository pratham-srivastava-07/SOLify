"use client";

import React from "react";
import LeftTop from "../leftTop";
import Link from "next/link";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

export default function Test() {
  return (
    <div className="bg-gradient-to-r  min-h-screen text-white">
      <header className="p-6">
        <div className="flex justify-between items-center">
          <div className="flex justify-center items-center space-x-96">
            <h1 className="text-3xl font-bold">
                
            </h1>
                <nav className="space-x-12">
                    <Link href="/" className="text-indigo-300 hover:text-indigo-500 font-semibold">
                        Home
                    </Link>
                    <Link href="/main" className="text-indigo-300 hover:text-indigo-500 font-semibold">
                        Features
                    </Link>
                    <Link href="/contact" className="text-indigo-300 hover:text-indigo-500 font-semibold">
                        Contact
                    </Link>
                    <Link href="/about" className="text-indigo-300 hover:text-indigo-500 font-semibold">
                        About
                    </Link>
            </nav>
          </div>
            <WalletMultiButton />
        </div>
      </header>
        <main className="flex justify-between items-center">
            <section className="flex-5 ">
                <LeftTop />
            </section>

            <section className="flex-7">
            <div className="relative w-96 h-96 flex items-center justify-center">
            
            <div className="absolute w-20 h-20 bg-indigo-500 rounded-full flex items-center justify-center animate-spin-slow text-sm">
              Airdrop
            </div>
            <div className="absolute w-40 h-40 border-2 border-indigo-400 rounded-full"></div>
            <div className="absolute w-32 h-32 bg-purple-500 rounded-full flex items-center justify-center animate-spin-fast text-sm">
              Send Tokens
            </div>
            <div className="absolute w-60 h-60 border-4 border-indigo-500 rounded-full animate-spin">
              <span className="absolute top-0 left-0 m-4 bg-indigo-600 text-sm p-2 rounded-full">
                Check Balance
              </span>
            </div>
          </div>
            </section>
        </main>
    </div>
  );
}



      {/* <main className="flex flex-col items-start px-8">
        <section className="flex justify-start w-full mb-16">
          <LeftTop />
        </section>

        
        <section className="relative mt-8">
          <div className="relative w-96 h-96 flex items-center justify-center">
            
            <div className="absolute w-20 h-20 bg-indigo-500 rounded-full flex items-center justify-center animate-spin-slow text-sm">
              Airdrop
            </div>
            <div className="absolute w-40 h-40 border-2 border-indigo-400 rounded-full"></div>
            <div className="absolute w-32 h-32 bg-purple-500 rounded-full flex items-center justify-center animate-spin-fast text-sm">
              Send Tokens
            </div>
            <div className="absolute w-60 h-60 border-4 border-indigo-500 rounded-full animate-spin">
              <span className="absolute top-0 left-0 m-4 bg-indigo-600 text-sm p-2 rounded-full">
                Check Balance
              </span>
            </div>
          </div>
        </section>
      </main> */}

      
      {/* <footer className="mt-20 p-6 text-center border-t border-indigo-500">
        <p>© 2024 Solardrop. All Rights Reserved.</p>
      </footer> */}