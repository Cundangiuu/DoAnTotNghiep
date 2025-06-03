// components/Sidebar.tsx
"use client"

import Image from "next/image"
import {
    LayoutDashboard,
    BookOpen,
    GraduationCap,
    Users,
    FileText,
    Calculator,
    UserCheck,
    Settings,
} from "lucide-react"
import Link from "next/link";

interface NavItemProps {
    icon: React.ReactNode;
    label: string;
    active?: boolean;
}

interface SidebarProps {
    activeMenu: string;
}

const menuItems = [
    { icon: LayoutDashboard, label: "Dashboard", href: "/trangtongquan" },
    { icon: BookOpen, label: "Courses", href: "/khoahoc" },
    { icon: GraduationCap, label: "Classes", href: "/lophoc" },
    { icon: Users, label: "Students", href: "/hocsinh" },
    { icon: FileText, label: "Reports", href: "/baocao" },
    { icon: Calculator, label: "Accounting", href: "/ketoan" },
    { icon: UserCheck, label: "Staffs", href: "/nhanvien" },
    { icon: Settings, label: "Admin Portal", href: "/congquantri" },
];


function NavItem({ icon, label, active = false, href }: NavItemProps & { href: string }) {
    return (
        <Link href={href} className="w-full">
            <div
                className={`p-3 rounded-lg flex flex-col items-center justify-center w-full cursor-pointer hover:bg-indigo-50 ${
                    active ? "bg-indigo-100" : ""
                }`}
            >
                <div className={`p-2 rounded-lg ${active ? "bg-indigo-100 text-indigo-600" : "text-gray-500"}`}>
                    {icon}
                </div>
                <span className={`text-xs mt-1 ${active ? "text-indigo-600 font-medium" : "text-gray-500"}`}>
                    {label}
                </span>
            </div>
        </Link>
    );
}
export default function Sidebar({ activeMenu }: SidebarProps) {
    return (
        <div className="w-32 bg-white border-r flex flex-col items-center py-6" style={{ padding: '0px' }}>
            <div className="mb-8 flex items-center justify-start h-[100px] pl-4">
                <Image src="/Selection.jpg" alt="Logo" width={150} height={80} className="rounded-xl" />
            </div>
            <div className="flex flex-col items-center space-y-8 flex-1">
                {menuItems.map((item) => (
                    <NavItem
                        key={item.label}
                        icon={<item.icon size={20} />}
                        label={item.label}
                        active={activeMenu === item.label}
                        href={item.href}
                    />
                ))}
            </div>
        </div>
    );
}
