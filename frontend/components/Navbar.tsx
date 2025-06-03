"use client";

import React from "react";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Navbar = () => {
    return (
        <nav className="fixed top-0 left-0 w-full h-16 bg-[#e9ecef] px-6 flex items-center justify-between z-10 border-b shadow-sm">
            {/* Logo */}
            <div className="flex items-center cursor-pointer">
                <Image src="/Selection.jpg" alt="Logo" width={100} height={40} />
            </div>

            {/* Title */}
            <h1 className="text-xl font-semibold">Classes</h1>

            {/* User Info */}
            <div className="flex items-center gap-2">
                <span>Hi, Binh An Pham</span>
                <Avatar className="h-8 w-8">
                    <AvatarImage src="/placeholder-user.jpg" alt="User" />
                    <AvatarFallback>BP</AvatarFallback>
                </Avatar>
            </div>
        </nav>
    );
};

export default Navbar;
