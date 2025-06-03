import type React from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Sidebar from "@/components/Sidebar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
    BarChart3,
    BookOpen,
    FileText,
    Filter,
    Search,
    Settings,
    Users,
    Users2,
    Wallet,
} from "lucide-react"
import Link from "next/link"
import ClassesTable from "@/components/ui/classes-table"

export default function Dashboard() {
    return (
        <div className="flex h-screen bg-white">
            {/* Sidebar */}

            <Sidebar activeMenu="Classes" />

            {/* Main Content Area */}
            <div className="flex-1 flex flex-col" >

                {/* Header */}
                <header className="h-16 border-b flex items-center justify-between px-6">
                    <h1 className="text-xl font-semibold">Classes</h1>
                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2">
                            <span>Hi, Binh An Pham</span>
                            <Avatar className="h-8 w-8">
                                <AvatarImage src="/placeholder-user.jpg" alt="User" />
                                <AvatarFallback>BP</AvatarFallback>
                            </Avatar>
                        </div>
                    </div>
                </header>

                {/* Content */}
                <main className="flex-1 p-6 overflow-auto">
                    <div className="flex justify-between mb-6">
                        <div className="flex gap-2">
                            <div className="relative">
                                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                                <Input type="search" placeholder="Search..." className="pl-8 w-[250px]" />
                            </div>
                            <Button variant="outline" size="icon">
                                <Filter className="h-4 w-4" />
                            </Button>
                        </div>
                        <Button className="bg-blue-600 hover:bg-blue-700">New Class</Button>
                    </div>

                    <ClassesTable />
                </main>
            </div>
        </div>
    )
}


function NavItem({ icon, label, active }: { icon: React.ReactNode; label: string; active: boolean }) {
    return (
        <Link
            href="#"
            className={`flex flex-col items-center gap-1 px-2 py-2 rounded-md text-xs ${active ? "text-blue-600" : "text-gray-500 hover:text-gray-900"
                }`}
        >
            <div className={`p-2 rounded-md ${active ? "bg-blue-100" : ""}`}>{icon}</div>
            <span>{label}</span>
        </Link>
    )
}
