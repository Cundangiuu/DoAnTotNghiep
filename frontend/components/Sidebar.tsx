"use client"

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

interface NavItemProps {
    icon: React.ReactNode;
    label: string;
    active?: boolean;
}

interface SidebarProps {
    activeMenu: string;
}

const menuItems = [
    { icon: LayoutDashboard, label: "Dashboard" },
    { icon: BookOpen, label: "Courses" },
    { icon: GraduationCap, label: "Classes" },
    { icon: Users, label: "Students" },
    { icon: FileText, label: "Reports" },
    { icon: Calculator, label: "Accounting" },
    { icon: UserCheck, label: "Staffs" },
    { icon: Settings, label: "Admin Portal" },
];

function NavItem({ icon, label, active = false }: NavItemProps) {
    return (
        <div className="flex flex-col items-center w-full">
            <div
                className={`p-3 rounded-lg flex flex-col items-center justify-center w-full ${active ? "bg-indigo-100" : ""}`}
            >
                <div className={`p-2 rounded-lg ${active ? "bg-indigo-100 text-indigo-600" : "text-gray-500"}`}>
                    {icon}
                </div>
                <span className={`text-xs mt-1 ${active ? "text-indigo-600 font-medium" : "text-gray-500"}`}>
                    {label}
                </span>
            </div>
        </div>
    );
}

export default function Sidebar({ activeMenu }: SidebarProps) {
    return (
        <div className="w-32 bg-white border-r flex flex-col items-center py-6" style={{ padding: '0px', position: 'fixed', top: '60px', left: '0', height: '100%', overflowY: 'auto', zIndex: 10}}>
            
            <div className="flex flex-col items-center space-y-4 flex-1">
                {menuItems.map((item) => (
                    <NavItem
                        key={item.label}
                        icon={<item.icon size={20} />}
                        label={item.label}
                        active={activeMenu === item.label}
                    />
                ))}
            </div>
        </div>
    )
}