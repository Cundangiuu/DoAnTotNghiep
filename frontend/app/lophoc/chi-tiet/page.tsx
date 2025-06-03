"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Image from "next/image"
import Sidebar from "@/components/Sidebar" // ✅ Import Sidebar
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogCancel,
  AlertDialogAction
} from "@/components/ui/alert-dialog"

import {
  LayoutDashboard,
  BookOpen,
  GraduationCap,
  Users,
  FileText,
  Calculator,
  UserCheck,
  Settings,
  X,
} from "lucide-react"
interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
}
export default function ClassEditingPage() {
  const [activeMenu, setActiveMenu] = useState("Classes")

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

  // Dữ liệu học viên trong lớp (fake)
  const [students, setStudents] = useState([
    { id: 1, name: "Nguyễn Văn A" },
    { id: 2, name: "Trần Thị B" },
    { id: 3, name: "Lê Văn C" },
  ])

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar activeMenu={activeMenu} />


      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Page Content */}
        <main className="flex-1 p-6 overflow-auto">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-xl font-semibold text-gray-900">Editing Class - Lớp ABC123</h1>
            <div className="flex space-x-2">
              <Button className="bg-blue-600 hover:bg-blue-700">Save</Button>
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button variant="destructive">Delete</Button>
                </AlertDialogTrigger>
                <AlertDialogContent className="max-w-[400px] rounded-lg p-6 border-0">
                  <div className="absolute right-4 top-4">
                    <AlertDialogCancel className="p-0 h-auto bg-transparent border-0 hover:bg-transparent">
                      <X className="h-5 w-5 text-gray-500" />
                    </AlertDialogCancel>
                  </div>
                  <div className="pt-2">
                    <AlertDialogHeader>
                      <AlertDialogTitle className="text-2xl font-bold text-center">
                        Do you want to delete this course?
                      </AlertDialogTitle>
                    </AlertDialogHeader>
                    <AlertDialogFooter className="flex gap-4 mt-8 sm:justify-center">
                      <AlertDialogAction
                        className="bg-red-500 hover:bg-red-600 text-white rounded-md px-8 py-2"
                        onClick={() => {
                          // Gọi API xóa hoặc chuyển hướng
                          alert("Đã xóa lớp học!")
                        }}
                      >
                        Yes
                      </AlertDialogAction>
                      <AlertDialogCancel className="bg-gray-400 hover:bg-gray-500 text-white rounded-md px-8 py-2 border-0">
                        No
                      </AlertDialogCancel>
                    </AlertDialogFooter>
                  </div>
                </AlertDialogContent>
              </AlertDialog>
            </div>
          </div>

          {/* Class Details Form */}
          <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Class Name</label>
                <Input placeholder="Nhập tên lớp" className="w-full" defaultValue="Lớp ABC123" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Class Code</label>
                <Input placeholder="Nhập mã lớp" className="w-full" defaultValue="ABC123" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Teacher</label>
                <Input placeholder="Giáo viên phụ trách" className="w-full" defaultValue="Nguyễn Văn Giáo" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Student Count</label>
                <Input placeholder="Số học viên" className="w-full" defaultValue="30" type="number" />
              </div>

              <div className="col-span-full space-y-2">
                <label className="text-sm font-medium text-gray-700">Description</label>
                <textarea placeholder="Mô tả lớp học" className="w-full min-h-[40px]" defaultValue="Lớp học nâng cao..." />
              </div>
            </div>
          </div>

          {/* Students List */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Students in Class</h2>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-4 font-medium text-gray-700 w-16">#</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-700">Student Name</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-700 w-24">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {students.map((student) => (
                    <tr key={student.id} className="border-b border-gray-100">
                      <td className="py-3 px-4 text-gray-600">{student.id}</td>
                      <td className="py-3 px-4 text-gray-900">{student.name}</td>
                      <td className="py-3 px-4">
                        <button className="text-blue-600 hover:text-blue-800 hover:underline text-sm">Edit</button>
                      </td>
                    </tr>
                  ))}
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-4 text-gray-600">{students.length + 1}</td>
                    <td className="py-3 px-4"></td>
                    <td className="py-3 px-4">
                      <button className="text-blue-600 hover:text-blue-800 hover:underline text-sm">Add</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
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
}

