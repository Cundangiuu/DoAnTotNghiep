"use client";

import { useState } from "react";
import Image from "next/image";
import {
    BookOpen,
    FileText,
    Users,
    BarChart2,
    DollarSign,
    UserPlus,
    Settings,
    Pencil,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface Class {
    id: number;
    code: string;
    name: string;
    schedule: string;
    location: string;
    nextClassLesson: string;
    academicStaff: {
        name: string;
        avatar: string;
    };
}

interface NavItemProps {
    icon: React.ReactNode;
    label: string;
    active?: boolean;
}

export default function SuaLopHoc() {
    // Giả sử bạn lấy lớp cần sửa, ví dụ lớp đầu tiên
    const [classData, setClassData] = useState<Class>({
        id: 1,
        code: "CLA-091224001",
        name: "Starter 2 - K22",
        schedule: "MF-1730-1940",
        location: "Branch 1 - Room 2",
        nextClassLesson: "2025-05-30 17:30",
        academicStaff: {
            name: "Ms. Jane",
            avatar: "/placeholder.svg?height=40&width=40",
        },
    });

    // Xử lý update input
    const handleChange = (field: keyof Class, value: any) => {
        if (field === "academicStaff") {
            setClassData({
                ...classData,
                academicStaff: { ...classData.academicStaff, ...value },
            });
        } else {
            setClassData({
                ...classData,
                [field]: value,
            });
        }
    };

    const handleSave = () => {
        // Xử lý lưu dữ liệu (gọi API ...)
        alert("Đã lưu thông tin lớp học:\n" + JSON.stringify(classData, null, 2));
    };

    const handleCancel = () => {
        // Xử lý hủy, quay về trang danh sách hoặc reset dữ liệu
        alert("Hủy sửa, quay lại trang danh sách");
    };

    return (
        <div className="flex min-h-screen bg-gray-50">
            {/* Sidebar */}
            <div className="w-32 bg-white border-r flex flex-col items-center py-6">
                <div className="mb-8">
                    <Image src="/Selection.jpg" alt="Logo" width={48} height={48} className="rounded" />
                </div>
                <div className="flex flex-col items-center space-y-8 flex-1">
                    <NavItem icon={<BookOpen size={20} />} label="Dashboard" />
                    <NavItem icon={<BookOpen size={20} />} label="Courses" />
                    <NavItem icon={<FileText size={20} />} label="Classes" active />
                    <NavItem icon={<Users size={20} />} label="Students" />
                    <NavItem icon={<BarChart2 size={20} />} label="Reports" />
                    <NavItem icon={<DollarSign size={20} />} label="Accounting" />
                    <NavItem icon={<UserPlus size={20} />} label="Staffs" />
                    <NavItem icon={<Settings size={20} />} label="Admin Portal" />
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 flex flex-col">
                {/* Header */}
                <header className="bg-white border-b px-6 py-4 flex items-center justify-between">
                    <h1 className="text-xl font-bold flex items-center gap-2">
                        <Pencil size={20} /> Sửa lớp học
                    </h1>
                    <div className="flex items-center space-x-4">
                        <span className="mr-2 font-medium">Hi, Binh An Pham</span>
                        <Avatar>
                            <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User" />
                            <AvatarFallback>BP</AvatarFallback>
                        </Avatar>
                    </div>
                </header>

                {/* Form Content */}
                <main className="flex-1 p-6">
                    <div className="bg-white rounded-lg border p-6 max-w-3xl mx-auto">
                        {/* Code */}
                        <label className="block text-sm font-medium text-gray-700 mb-1">Mã lớp</label>
                        <Input
                            value={classData.code}
                            onChange={(e) => handleChange("code", e.target.value)}
                            className="mb-4"
                            placeholder="Nhập mã lớp"
                        />

                        {/* Name */}
                        <label className="block text-sm font-medium text-gray-700 mb-1">Tên lớp</label>
                        <Input
                            value={classData.name}
                            onChange={(e) => handleChange("name", e.target.value)}
                            className="mb-4"
                            placeholder="Nhập tên lớp"
                        />

                        {/* Schedule */}
                        <label className="block text-sm font-medium text-gray-700 mb-1">Lịch học</label>
                        <Input
                            value={classData.schedule}
                            onChange={(e) => handleChange("schedule", e.target.value)}
                            className="mb-4"
                            placeholder="Nhập lịch học"
                        />

                        {/* Location */}
                        <label className="block text-sm font-medium text-gray-700 mb-1">Địa điểm</label>
                        <Input
                            value={classData.location}
                            onChange={(e) => handleChange("location", e.target.value)}
                            className="mb-4"
                            placeholder="Nhập địa điểm"
                        />

                        {/* Next Class Lesson */}
                        <label className="block text-sm font-medium text-gray-700 mb-1">Lớp học tiếp theo</label>
                        <Input
                            value={classData.nextClassLesson}
                            onChange={(e) => handleChange("nextClassLesson", e.target.value)}
                            className="mb-4"
                            placeholder="Nhập thời gian lớp học tiếp theo"
                        />

                        {/* Academic Staff Name */}
                        <label className="block text-sm font-medium text-gray-700 mb-1">Giáo viên phụ trách</label>
                        <Input
                            value={classData.academicStaff.name}
                            onChange={(e) =>
                                handleChange("academicStaff", { name: e.target.value })
                            }
                            className="mb-4"
                            placeholder="Tên giáo viên"
                        />

                        {/* Academic Staff Avatar */}
                        <label className="block text-sm font-medium text-gray-700 mb-1">Ảnh giáo viên (URL)</label>
                        <Input
                            value={classData.academicStaff.avatar}
                            onChange={(e) =>
                                handleChange("academicStaff", { avatar: e.target.value })
                            }
                            className="mb-6"
                            placeholder="URL ảnh giáo viên"
                        />

                        {/* Preview avatar */}
                        <div className="flex items-center mb-6">
                            <Avatar className="h-12 w-12 mr-3">
                                <AvatarImage src={classData.academicStaff.avatar || "/placeholder.svg"} alt={classData.academicStaff.name} />
                                <AvatarFallback>{classData.academicStaff.name.charAt(0)}</AvatarFallback>
                            </Avatar>
                            <span>{classData.academicStaff.name}</span>
                        </div>

                        {/* Buttons */}
                        <div className="flex space-x-4">
                            <Button className="bg-indigo-600 hover:bg-indigo-700 text-white" onClick={handleSave}>
                                Lưu
                            </Button>
                            <Button variant="outline" onClick={handleCancel}>
                                Hủy
                            </Button>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}

function NavItem({ icon, label, active = false }: NavItemProps) {
    return (
        <div className="flex flex-col items-center w-full">
            <div
                className={`p-3 rounded-lg flex flex-col items-center justify-center w-full ${active ? "bg-indigo-100" : ""
                    }`}
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
