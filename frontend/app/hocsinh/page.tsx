"use client"

import { useState } from "react"
import type { ReactNode } from "react"
import {
  Search,
  Pencil,
  LayoutGrid,
  BookOpen,
  BarChart2,
  Users,
  FileText,
  DollarSign,
  UserPlus,
  Settings,
  Filter,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Image from "next/image"
import Link from "next/link"

interface Student {
  id: number
  code: string
  name: string
  phoneNumber: string
  dateOfBirth: string
  currentClass: string
  notes: string
  avatar: string
}

interface NavItemProps {
  icon: ReactNode
  label: string
  active?: boolean
}

export default function StudentsDashboard() {
  const [students, setStudents] = useState<Student[]>([
    {
      id: 1,
      code: "PBA11252024",
      name: "Pham Binh An (Andy)",
      phoneNumber: "(845) 817-9474",
      dateOfBirth: "14/12/2022",
      currentClass: "Starter 4 - K4",
      notes: "5% Discount Due",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 2,
      code: "PQC11252024",
      name: "Pham Quoc Cuong (John)",
      phoneNumber: "(845) 814-7661",
      dateOfBirth: "08/06/2024",
      currentClass: "Starter 4 - K5",
      notes: "Paid",
      avatar: "/placeholder.svg?height=40&width=40",
    },
  ])

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
          <NavItem icon={<FileText size={20} />} label="Classes" />
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
        <header className="bg-white border-b px-6 py-4 flex items-center justify-between sticky top-0 z-10">
          <h1 className="text-xl font-bold">Students</h1>
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <span className="mr-2 font-medium">Hi, Binh An Pham</span>
              <Avatar>
                <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User" />
                <AvatarFallback>BP</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 p-6">
          <div className="bg-white rounded-lg border shadow-sm">
            {/* Toolbar */}
            <div className="p-4 flex items-center justify-between border-b">
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                  <Input className="pl-10 w-64" placeholder="Search students..." />
                </div>
                <Button variant="outline" size="icon">
                  <Filter size={18} />
                </Button>
              </div>
              <Link href="/hocsinh/them-moi">
                <Button className="bg-indigo-500 hover:bg-indigo-600 text-white">
                  New Student
                </Button>
              </Link>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50 border-b">
                    <th className="px-6 py-3 text-sm font-medium text-gray-500 text-left">Avatar</th>
                    <th className="px-6 py-3 text-sm font-medium text-gray-500 text-left">Code</th>
                    <th className="px-6 py-3 text-sm font-medium text-gray-500 text-left">Name</th>
                    <th className="px-6 py-3 text-sm font-medium text-gray-500 text-left">Phone Number</th>
                    <th className="px-6 py-3 text-sm font-medium text-gray-500 text-left">Date of birth</th>
                    <th className="px-6 py-3 text-sm font-medium text-gray-500 text-left">Current Class</th>
                    <th className="px-6 py-3 text-sm font-medium text-gray-500 text-left">Notes</th>
                    <th className="px-6 py-3 text-sm font-medium text-gray-500 text-left">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {students.map((student) => (
                    <tr key={student.id} className="border-b hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4">
                        <Avatar className="h-10 w-10">
                          <AvatarImage src={student.avatar} alt={student.name} />
                          <AvatarFallback>{student.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                      </td>
                      <td className="px-6 py-4">
                        <a href="#" className="text-indigo-600 hover:text-indigo-800 hover:underline font-medium">
                          {student.code}
                        </a>
                      </td>
                      <td className="px-6 py-4 font-medium">{student.name}</td>
                      <td className="px-6 py-4">{student.phoneNumber}</td>
                      <td className="px-6 py-4">{student.dateOfBirth}</td>
                      <td className="px-6 py-4">
                        <a href="#" className="text-indigo-600 hover:text-indigo-800 hover:underline">
                          {student.currentClass}
                        </a>
                      </td>
                      <td className="px-6 py-4">
                        <span
                          className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${
                            student.notes === "Paid"
                              ? "bg-green-100 text-green-700"
                              : student.notes.includes("Discount")
                              ? "bg-orange-100 text-orange-700"
                              : "bg-gray-100 text-gray-700"
                          }`}
                        >
                          {student.notes}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <Button variant="ghost" size="sm" className="text-gray-500 hover:text-indigo-600">
                          <Pencil size={18} />
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

function NavItem({ icon, label, active = false }: NavItemProps) {
  return (
    <button
      className={`flex items-center space-x-3 w-full px-3 py-2 rounded-lg transition-colors ${
        active ? "bg-indigo-50 text-indigo-600" : "text-gray-600 hover:bg-gray-50"
      }`}
    >
      <div className={active ? "text-indigo-600" : "text-gray-500"}>{icon}</div>
      <span className={`text-sm ${active ? "font-medium" : ""}`}>{label}</span>
    </button>
  )
}
