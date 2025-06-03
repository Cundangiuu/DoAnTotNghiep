"use client";

import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Sidebar from "@/components/Sidebar"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import {
    BookOpen,
    Calendar,
    LayoutDashboard,
    Plus,
    Settings,
    Users,
    UserSquare2,
    FileText,
    DollarSign,
    Users2,
    User,
    GraduationCap,
    Calculator,
    UserCheck,
} from "lucide-react"

export default function ClassesPage() {
    const [activeMenu, setActiveMenu] = useState("Classes")

    const students = [
        {
            avatar: "https://via.placeholder.com/40",
            code: "STU001",
            name: "John Doe",
            phone: "123456789",
            grade: "A",
            attendance: "95%",
            tuition: "$500",
        },
        {
            avatar: "https://via.placeholder.com/40",
            code: "STU002",
            name: "Jane Smith",
            phone: "987654321",
            grade: "B+",
            attendance: "88%",
            tuition: "$480",
        },
    ]

    return (
        <div className="flex h-screen bg-gray-50">
            {/* Sidebar */}
            <Sidebar activeMenu={activeMenu} />

            {/* Main Content */}
            <div className="flex-1 flex flex-col bg-white">
                {/* Header */}
                <header className="border-b border-gray-200 py-4 px-8 flex justify-between items-center bg-white">
                    <h1 className="text-2xl font-semibold text-gray-900">Classes</h1>
                    <div className="flex items-center gap-3">
                        <span className="text-gray-700">Hi, Binh An Pham</span>
                        <div className="h-8 w-8 bg-gray-300 rounded-full flex items-center justify-center">
                            <User className="h-4 w-4 text-gray-600" />
                        </div>
                        <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6">Save</Button>
                    </div>
                </header>

                {/* Content */}
                <main className="flex-1 p-8 bg-white">
                    {/* Filters */}
                    <div className="grid grid-cols-6 gap-4 mb-8">
                        <div className="space-y-2">
                            <label className="block text-sm font-medium text-gray-700">Name</label>
                            <Input
                                placeholder="Input text"
                                className="h-10 border-gray-300 text-gray-500 placeholder:text-gray-400"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="block text-sm font-medium text-gray-700">Course</label>
                            <Select>
                                <SelectTrigger className="h-10 border-gray-300 text-gray-500">
                                    <SelectValue placeholder="Input text" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="course1">Course 1</SelectItem>
                                    <SelectItem value="course2">Course 2</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="space-y-2">
                            <label className="block text-sm font-medium text-gray-700">Schedule</label>
                            <Select>
                                <SelectTrigger className="h-10 border-gray-300 text-gray-500">
                                    <SelectValue placeholder="Input text" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="morning">Morning</SelectItem>
                                    <SelectItem value="afternoon">Afternoon</SelectItem>
                                    <SelectItem value="evening">Evening</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="space-y-2">
                            <label className="block text-sm font-medium text-gray-700">Start Date</label>
                            <Select>
                                <SelectTrigger className="h-10 border-gray-300 text-gray-500">
                                    <SelectValue placeholder="Input text" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="today">Today</SelectItem>
                                    <SelectItem value="tomorrow">Tomorrow</SelectItem>
                                    <SelectItem value="nextweek">Next Week</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="space-y-2">
                            <label className="block text-sm font-medium text-gray-700">Academic Staff</label>
                            <Select>
                                <SelectTrigger className="h-10 border-gray-300 text-gray-500">
                                    <SelectValue placeholder="Input text" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="staff1">Staff 1</SelectItem>
                                    <SelectItem value="staff2">Staff 2</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="space-y-2">
                            <label className="block text-sm font-medium text-gray-700">Location</label>
                            <Input
                                placeholder="Input text"
                                className="h-10 border-gray-300 text-gray-500 placeholder:text-gray-400"
                            />
                        </div>
                    </div>

                    {/* Student List */}
                    <div>
                        <h2 className="text-xl font-semibold text-gray-900 mb-6">Student List</h2>
                        <div className="border border-gray-200 rounded-lg overflow-hidden bg-white">
                            <table className="w-full">
                                <thead>
                                    <tr className="bg-gray-50 border-b border-gray-200">
                                        <th className="text-left py-4 px-6 text-sm font-medium text-gray-700">Avatar</th>
                                        <th className="text-left py-4 px-6 text-sm font-medium text-gray-700">Code</th>
                                        <th className="text-left py-4 px-6 text-sm font-medium text-gray-700">Name</th>
                                        <th className="text-left py-4 px-6 text-sm font-medium text-gray-700">Phone Number</th>
                                        <th className="text-left py-4 px-6 text-sm font-medium text-gray-700">Latest Grade</th>
                                        <th className="text-left py-4 px-6 text-sm font-medium text-gray-700">Latest Attendance</th>
                                        <th className="text-left py-4 px-6 text-sm font-medium text-gray-700">Tuition</th>
                                        <th className="text-left py-4 px-6 text-sm font-medium text-gray-700">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {students.length === 0 ? (
                                        <tr>
                                            <td colSpan={8} className="py-16 text-center text-gray-500">
                                                No students enrolled in this class.
                                            </td>
                                        </tr>
                                    ) : (
                                        students.map((student, index) => (
                                            <tr key={index} className="hover:bg-gray-50">
                                                <td className="py-4 px-6">
                                                    <img src={student.avatar} alt="Avatar" className="h-10 w-10 rounded-full" />
                                                </td>
                                                <td className="py-4 px-6">{student.code}</td>
                                                <td className="py-4 px-6">{student.name}</td>
                                                <td className="py-4 px-6">{student.phone}</td>
                                                <td className="py-4 px-6">{student.grade}</td>
                                                <td className="py-4 px-6">{student.attendance}</td>
                                                <td className="py-4 px-6">{student.tuition}</td>
                                                <td className="py-4 px-6">
                                                    <Button variant="ghost" size="sm">Edit</Button>
                                                </td>
                                            </tr>
                                        ))
                                    )}
                                </tbody>
                            </table>
                            <div className="flex justify-end p-4 border-t border-gray-200">
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    className="rounded-full h-8 w-8 text-gray-400 hover:text-gray-600 hover:bg-gray-100"
                                >
                                    <Plus className="h-5 w-5" />
                                </Button>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}
