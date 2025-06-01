"use client"

import { useState } from "react"
import type { ReactNode } from "react"
import {
  Pencil,
  LayoutGrid,
  BookOpen,
  BarChart2,
  Users,
  FileText,
  DollarSign,
  UserPlus,
  Settings,
  Upload,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"
import Link from "next/link"

interface FormData {
  name: string
  nickname: string
  phoneNumber: string
  dateOfBirth: string
  discountType: string
  emailAddress: string
  avatar: File | null
}

interface Student {
  id: number
  code: string
  name: string
  phoneNumber: string
  dateOfBirth: string
  currentClass: string
  avatar: string
}

interface NavItemProps {
  icon: ReactNode
  label: string
  active?: boolean
}

export default function NewStudentForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "Pham Binh An",
    nickname: "Andy",
    phoneNumber: "",
    dateOfBirth: "",
    discountType: "",
    emailAddress: "",
    avatar: null,
  })

  const [existingStudents] = useState<Student[]>([
    {
      id: 1,
      code: "STU-281124001",
      name: "Pham Binh An (Andy)",
      phoneNumber: "(845) 817-9474",
      dateOfBirth: "14/12/2022",
      currentClass: "Starter 4 - K4",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 2,
      code: "STU-281124002",
      name: "Pham Quoc Cuong (John)",
      phoneNumber: "(845) 814-7661",
      dateOfBirth: "08/06/2024",
      currentClass: "Starter 4 - K5",
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
          <div className="flex items-center space-x-4">
            <h1 className="text-xl font-semibold">New Student</h1>
            <div className="text-sm text-gray-500">Fill in the information below to create new student</div>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="/hocsinh">
              <Button variant="outline">Cancel</Button>
            </Link>
            <Button className="bg-indigo-500 hover:bg-indigo-600 text-white">Save Changes</Button>
            <div className="flex items-center border-l pl-4 ml-4">
              <span className="mr-2 font-medium">Hi, Binh An Pham</span>
              <Avatar>
                <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User" />
                <AvatarFallback>BP</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 p-6 space-y-6">
          {/* Student Details Form */}
          <div className="bg-white rounded-lg border shadow-sm">
            <div className="p-6">
              <h2 className="text-lg font-semibold mb-6">Student Information</h2>

              <div className="flex flex-col lg:flex-row gap-8">
                {/* Avatar Section */}
                <div className="flex flex-col items-center space-y-4">
                  <Avatar className="h-32 w-32 border-2 border-indigo-100">
                    <AvatarImage src={formData.avatar ? URL.createObjectURL(formData.avatar) : "/placeholder.svg"} alt="Preview" />
                    <AvatarFallback className="text-3xl font-bold text-indigo-600 bg-indigo-50">
                      {formData.name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <Button variant="outline" size="sm" className="w-full">
                    <Upload size={16} className="mr-2" />
                    Upload Photo
                  </Button>
                  <p className="text-xs text-gray-500">Allowed formats: JPG, PNG. Max size: 2MB</p>
                </div>

                {/* Form Fields */}
                <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Full Name</label>
                    <Input
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Enter student's full name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Nickname (English Name)</label>
                    <Input
                      value={formData.nickname}
                      onChange={(e) => setFormData({ ...formData, nickname: e.target.value })}
                      placeholder="Enter student's nickname"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Phone Number</label>
                    <Input
                      type="tel"
                      placeholder="Enter phone number"
                      value={formData.phoneNumber}
                      onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Date of Birth</label>
                    <Input
                      type="date"
                      value={formData.dateOfBirth}
                      onChange={(e) => setFormData({ ...formData, dateOfBirth: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Discount Type</label>
                    <Select
                      value={formData.discountType}
                      onValueChange={(value: string) => setFormData({ ...formData, discountType: value })}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select discount type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="none">No Discount</SelectItem>
                        <SelectItem value="5-percent">5% Discount</SelectItem>
                        <SelectItem value="10-percent">10% Discount</SelectItem>
                        <SelectItem value="student">Student Discount</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Email Address</label>
                    <Input
                      type="email"
                      placeholder="Enter email address"
                      value={formData.emailAddress}
                      onChange={(e) => setFormData({ ...formData, emailAddress: e.target.value })}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Tabs Section */}
          <div className="bg-white rounded-lg border shadow-sm">
            <Tabs defaultValue="enrollment" className="w-full">
              <TabsList className="flex p-0 bg-transparent border-b rounded-none">
                <TabsTrigger
                  value="enrollment"
                  className="flex-1 px-6 py-3 data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-indigo-500 data-[state=active]:text-indigo-600 rounded-none"
                >
                  Enrollment History
                </TabsTrigger>
                <TabsTrigger
                  value="grades"
                  className="flex-1 px-6 py-3 data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-indigo-500 data-[state=active]:text-indigo-600 rounded-none"
                >
                  Grades & Progress
                </TabsTrigger>
                <TabsTrigger
                  value="attendance"
                  className="flex-1 px-6 py-3 data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-indigo-500 data-[state=active]:text-indigo-600 rounded-none"
                >
                  Attendance Record
                </TabsTrigger>
                <TabsTrigger
                  value="invoice"
                  className="flex-1 px-6 py-3 data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-indigo-500 data-[state=active]:text-indigo-600 rounded-none"
                >
                  Payment History
                </TabsTrigger>
              </TabsList>

              <TabsContent value="enrollment" className="p-6">
                {/* Existing Students Table */}
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-gray-50 border-b">
                        <th className="px-4 py-3 text-sm font-medium text-gray-500 text-left">Avatar</th>
                        <th className="px-4 py-3 text-sm font-medium text-gray-500 text-left">Code</th>
                        <th className="px-4 py-3 text-sm font-medium text-gray-500 text-left">Name</th>
                        <th className="px-4 py-3 text-sm font-medium text-gray-500 text-left">Phone Number</th>
                        <th className="px-4 py-3 text-sm font-medium text-gray-500 text-left">Date of birth</th>
                        <th className="px-4 py-3 text-sm font-medium text-gray-500 text-left">Current Class</th>
                        <th className="px-4 py-3 text-sm font-medium text-gray-500 text-left">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {existingStudents.map((student) => (
                        <tr key={student.id} className="border-b hover:bg-gray-50 transition-colors">
                          <td className="px-4 py-3">
                            <Avatar className="h-10 w-10">
                              <AvatarImage src={student.avatar} alt={student.name} />
                              <AvatarFallback>{student.name.charAt(0)}</AvatarFallback>
                            </Avatar>
                          </td>
                          <td className="px-4 py-3">
                            <a href="#" className="text-indigo-600 hover:text-indigo-800 hover:underline font-medium">
                              {student.code}
                            </a>
                          </td>
                          <td className="px-4 py-3 font-medium">{student.name}</td>
                          <td className="px-4 py-3">{student.phoneNumber}</td>
                          <td className="px-4 py-3">{student.dateOfBirth}</td>
                          <td className="px-4 py-3">
                            <a href="#" className="text-indigo-600 hover:text-indigo-800 hover:underline">
                              {student.currentClass}
                            </a>
                          </td>
                          <td className="px-4 py-3">
                            <Button variant="ghost" size="sm" className="text-gray-500 hover:text-indigo-600">
                              <Pencil size={16} />
                            </Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </TabsContent>

              <TabsContent value="grades" className="p-6">
                <div className="text-center py-8">
                  <div className="text-gray-400 mb-2">No grades available yet</div>
                  <p className="text-sm text-gray-500">Grades will be displayed here once the student starts classes</p>
                </div>
              </TabsContent>

              <TabsContent value="attendance" className="p-6">
                <div className="text-center py-8">
                  <div className="text-gray-400 mb-2">No attendance records yet</div>
                  <p className="text-sm text-gray-500">Attendance will be tracked here once the student enrolls in classes</p>
                </div>
              </TabsContent>

              <TabsContent value="invoice" className="p-6">
                <div className="text-center py-8">
                  <div className="text-gray-400 mb-2">No payment history yet</div>
                  <p className="text-sm text-gray-500">Payment records will appear here after the first transaction</p>
                </div>
              </TabsContent>
            </Tabs>
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