"use client"

import { useState } from "react"
import type { ReactNode } from "react"
import {
  Search,
  Filter,
  Pencil,
  LayoutGrid,
  BookOpen,
  BarChart2,
  Users,
  FileText,
  DollarSign,
  UserPlus,
  Settings,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Image from "next/image"

interface Class {
  id: number
  code: string
  name: string
  schedule: string
  location: string
  nextClassLesson: string
  academicStaff: {
    name: string
    avatar: string
  }
}

interface NavItemProps {
  icon: ReactNode
  label: string
  active?: boolean
}

export default function LopHoc() {
  const [classes, setClasses] = useState<Class[]>([
    {
      id: 1,
      code: "CLA-091224001",
      name: "Starter 2 - K22",
      schedule: "MF-1730-1940",
      location: "Branch 1 - Room 2",
      nextClassLesson: "class_day_id",
      academicStaff: {
        name: "Ms. Jane",
        avatar: "/placeholder.svg?height=40&width=40",
      },
    },
    {
      id: 2,
      code: "CLA-091224002",
      name: "Starter 3 - K55",
      schedule: "TTh-1730-1940",
      location: "Branch 2 - Room 1",
      nextClassLesson: "class_day_id",
      academicStaff: {
        name: "Ms. April",
        avatar: "/placeholder.svg?height=40&width=40",
      },
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
        <header className="bg-white border-b px-6 py-4 flex items-center justify-between">
          <h1 className="text-xl font-bold">Classes</h1>
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
          <div className="bg-white rounded-lg border">
            {/* Toolbar */}
            <div className="p-4 flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                  <Input className="pl-10 w-64" placeholder="Search classes..." />
                </div>
                <Button variant="outline" size="icon">
                  <Filter size={18} />
                </Button>
              </div>
              <Button size="sm" className="bg-indigo-500 hover:bg-indigo-600 text-white">
                New Class
              </Button>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-y text-left">
                    <th className="px-6 py-3 text-sm font-medium text-gray-500">Code</th>
                    <th className="px-6 py-3 text-sm font-medium text-gray-500">Name</th>
                    <th className="px-6 py-3 text-sm font-medium text-gray-500">Schedule</th>
                    <th className="px-6 py-3 text-sm font-medium text-gray-500">Location</th>
                    <th className="px-6 py-3 text-sm font-medium text-gray-500">Next Class Lesson</th>
                    <th className="px-6 py-3 text-sm font-medium text-gray-500">Academic Staff</th>
                    <th className="px-6 py-3 text-sm font-medium text-gray-500">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {classes.map((classItem) => (
                    <tr key={classItem.id} className="border-t hover:bg-gray-50">
                      <td className="px-6 py-4">
                        <a href="#" className="text-blue-500 hover:underline">
                          {classItem.code}
                        </a>
                      </td>
                      <td className="px-6 py-4">{classItem.name}</td>
                      <td className="px-6 py-4">{classItem.schedule}</td>
                      <td className="px-6 py-4">{classItem.location}</td>
                      <td className="px-6 py-4">{classItem.nextClassLesson}</td>
                      <td className="px-6 py-4">
                        <div className="flex items-center">
                          <Avatar className="h-8 w-8 mr-2">
                            <AvatarImage
                              src={classItem.academicStaff.avatar || "/placeholder.svg"}
                              alt={classItem.academicStaff.name}
                            />
                            <AvatarFallback>{classItem.academicStaff.name.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <span>{classItem.academicStaff.name}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <Button variant="ghost" size="sm" className="text-gray-500">
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
    <div className="flex flex-col items-center w-full">
      <div
        className={`p-3 rounded-lg flex flex-col items-center justify-center w-full ${active ? "bg-indigo-100" : ""}`}
      >
        <div className={`p-2 rounded-lg ${active ? "bg-indigo-100 text-indigo-600" : "text-gray-500"}`}>{icon}</div>
        <span className={`text-xs mt-1 ${active ? "text-indigo-600 font-medium" : "text-gray-500"}`}>{label}</span>
      </div>
    </div>
  )
}
