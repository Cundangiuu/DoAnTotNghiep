"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
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

interface NavItemProps {
    icon: React.ReactNode
    label: string
    active?: boolean
}

interface Course {
    id: string
    name: string
    code: string
    teacher: string
    studentCount: number
    description: string
}

export default function CourseListPage() {
    const [activeMenu, setActiveMenu] = useState("Courses")

    const menuItems = [
        { icon: LayoutDashboard, label: "Dashboard" },
        { icon: BookOpen, label: "Courses" },
        { icon: GraduationCap, label: "Classes" },
        { icon: Users, label: "Students" },
        { icon: FileText, label: "Reports" },
        { icon: Calculator, label: "Accounting" },
        { icon: UserCheck, label: "Staffs" },
        { icon: Settings, label: "Admin Portal" },
    ]

    const [courses, setCourses] = useState<Course[]>([
        {
            id: "1",
            name: "Khóa học React căn bản",
            code: "REACT101",
            teacher: "Nguyễn Văn A",
            studentCount: 120,
            description: "Tìm hiểu React từ cơ bản đến nâng cao",
        },
        {
            id: "2",
            name: "Khóa học Node.js",
            code: "NODE202",
            teacher: "Trần Thị B",
            studentCount: 85,
            description: "Phát triển backend với Node.js và Express",
        },
        {
            id: "3",
            name: "Khóa học Python cho người mới",
            code: "PYTH303",
            teacher: "Lê Văn C",
            studentCount: 150,
            description: "Học Python từ đầu đến ứng dụng thực tế",
        },
    ])

    return (
        <div className="flex h-screen bg-gray-50">
            {/* Sidebar */}
            <div className="w-32 bg-white border-r border-gray-200 flex flex-col items-center py-6">
                <div className="mb-8">
                    <Image src="/Selection.jpg" alt="Logo" width={48} height={48} className="rounded-md" />
                </div>
                <div className="flex flex-col items-center space-y-8 flex-1">
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

            {/* Main Content */}
            <div className="flex-1 flex flex-col overflow-hidden">
                {/* Page Content */}
                <main className="flex-1 p-6 overflow-auto">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-6">
                        <h1 className="text-2xl font-semibold text-gray-900">Danh sách Khóa học</h1>
                        <div className="flex space-x-3">
                            <Button className="bg-blue-600 hover:bg-blue-700 focus-visible:ring-blue-500">
                                Thêm khóa học
                            </Button>
                            <Button variant="destructive" className="px-4">
                                Xóa
                            </Button>
                        </div>
                    </div>

                    {/* Course Filter & Search */}
                    <div className="mb-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                        <Input placeholder="Tìm kiếm khóa học..." className="w-full" />
                        <Input placeholder="Giáo viên..." className="w-full" />
                        <Input placeholder="Mã khóa học..." className="w-full" />
                    </div>

                    {/* Class Details Form */}
                    <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-4">
                            <div className="space-y-1">
                                <label className="block text-sm font-medium text-gray-700">Class Name</label>
                                <Input
                                    placeholder="Nhập tên lớp"
                                    className="w-full"
                                    defaultValue="Lớp ABC123"
                                />
                            </div>

                            <div className="space-y-1">
                                <label className="block text-sm font-medium text-gray-700">Class Code</label>
                                <Input
                                    placeholder="Nhập mã lớp"
                                    className="w-full"
                                    defaultValue="ABC123"
                                />
                            </div>

                            <div className="space-y-1">
                                <label className="block text-sm font-medium text-gray-700">Teacher</label>
                                <Input
                                    placeholder="Giáo viên phụ trách"
                                    className="w-full"
                                    defaultValue="Nguyễn Văn Giáo"
                                />
                            </div>

                            <div className="space-y-1">
                                <label className="block text-sm font-medium text-gray-700">Student Count</label>
                                <Input
                                    placeholder="Số học viên"
                                    className="w-full"
                                    type="number"
                                    defaultValue="30"
                                />
                            </div>

                            <div className="col-span-full space-y-1">
                                <label className="block text-sm font-medium text-gray-700">Description</label>
                                <textarea
                                    placeholder="Mô tả lớp học"
                                    className="w-full rounded-md border border-gray-300 p-2 text-sm resize-y focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 min-h-[48px]"
                                    defaultValue="Lớp học nâng cao..."
                                />
                            </div>
                        </div>
                    </div>

                    {/* Course List Table */}
                    <div className="bg-white rounded-lg border border-gray-200 p-6">
                        <table className="w-full table-auto border-collapse">
                            <thead>
                                <tr className="border-b border-gray-200">
                                    <th className="text-left py-3 px-4 font-semibold text-gray-700 w-12">#</th>
                                    <th className="text-left py-3 px-4 font-semibold text-gray-700">Tên khóa học</th>
                                    <th className="text-left py-3 px-4 font-semibold text-gray-700 w-28">Mã khóa</th>
                                    <th className="text-left py-3 px-4 font-semibold text-gray-700">Giáo viên</th>
                                    <th className="text-left py-3 px-4 font-semibold text-gray-700 w-28">Học viên</th>
                                    <th className="text-left py-3 px-4 font-semibold text-gray-700 w-32">Hành động</th>
                                </tr>
                            </thead>
                            <tbody>
                                {courses.map((course, index) => (
                                    <tr
                                        key={course.id}
                                        className="border-b border-gray-100 hover:bg-gray-50 cursor-default"
                                    >
                                        <td className="py-3 px-4 text-gray-600">{index + 1}</td>
                                        <td className="py-3 px-4 text-gray-900">{course.name}</td>
                                        <td className="py-3 px-4 text-gray-700">{course.code}</td>
                                        <td className="py-3 px-4 text-gray-700">{course.teacher}</td>
                                        <td className="py-3 px-4 text-gray-700">{course.studentCount}</td>
                                        <td className="py-3 px-4 flex space-x-4">
                                            <button className="text-blue-600 hover:text-blue-800 hover:underline text-sm">
                                                Edit
                                            </button>
                                            {/* Nếu muốn thêm nút xóa, bỏ comment bên dưới */}
                                            {/* <button className="text-red-600 hover:text-red-800 hover:underline text-sm">Xóa</button> */}
                                        </td>
                                    </tr>
                                ))}
                                <tr className="border-b border-gray-100 hover:bg-gray-50 cursor-pointer">
                                    <td className="py-3 px-4 text-gray-600">{courses.length + 1}</td>
                                    <td colSpan={5} className="py-3 px-4 text-blue-600 hover:underline">
                                        Thêm khóa học mới
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </main>
            </div>
        </div>
    )

    function NavItem({ icon, label, active = false }: NavItemProps) {
        return (
            <div
                className="flex flex-col items-center w-full cursor-pointer select-none"
                onClick={() => setActiveMenu(label)}
            >
                <div
                    className={`p-3 rounded-lg flex flex-col items-center justify-center w-full transition-colors duration-200 ${active ? "bg-indigo-100" : "hover:bg-gray-100"
                        }`}
                >
                    <div
                        className={`p-2 rounded-lg transition-colors duration-200 ${active ? "bg-indigo-100 text-indigo-600" : "text-gray-500"
                            }`}
                    >
                        {icon}
                    </div>
                </div>
                <span
                    className={`mt-2 text-xs font-medium select-none ${active ? "text-indigo-600" : "text-gray-500"
                        }`}
                >
                    {label}
                </span>
            </div>
        )
    }
}
