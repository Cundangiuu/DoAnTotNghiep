"use client"

import { useState } from "react"
import type { ReactNode } from "react"
import {
  Pencil,
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
  email: string
  phoneNumber: string
  position: string
  department: string
  startDate: string
  salary: string
  avatar: File | null
}

interface Staff {
  id: number
  code: string
  name: string
  phoneNumber: string
  email: string
  position: string
  department: string
  status: string
  avatar: string
}

interface NavItemProps {
  icon: ReactNode
  label: string
  active?: boolean
}

export default function NewStaffForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phoneNumber: "",
    position: "",
    department: "",
    startDate: "",
    salary: "",
    avatar: null,
  })

  const [existingStaff] = useState<Staff[]>([
    {
      id: 1,
      code: "STF-281124001",
      name: "Nguyen Van A",
      phoneNumber: "(845) 817-9474",
      email: "nguyenvana@example.com",
      position: "English Teacher",
      department: "Academic",
      status: "Active",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 2,
      code: "STF-281124002",
      name: "Tran Thi B",
      phoneNumber: "(845) 814-7661",
      email: "tranthib@example.com",
      position: "Academic Coordinator",
      department: "Academic",
      status: "Active",
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
          <NavItem icon={<UserPlus size={20} />} label="Staffs" active />
          <NavItem icon={<Settings size={20} />} label="Admin Portal" />
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-white border-b px-6 py-4 flex items-center justify-between sticky top-0 z-10">
          <div className="flex items-center space-x-4">
            <h1 className="text-xl font-semibold">New Staff</h1>
            <div className="text-sm text-gray-500">Fill in the information below to create new staff</div>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="/nhanvien">
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
          {/* Staff Details Form */}
          <div className="bg-white rounded-lg border shadow-sm">
            <div className="p-6">
              <h2 className="text-lg font-semibold mb-6">Staff Information</h2>

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
                      placeholder="Enter staff's full name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Email</label>
                    <Input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="Enter email address"
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
                    <label className="text-sm font-medium text-gray-700">Position</label>
                    <Select
                      value={formData.position}
                      onValueChange={(value: string) => setFormData({ ...formData, position: value })}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select position" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="teacher">English Teacher</SelectItem>
                        <SelectItem value="coordinator">Academic Coordinator</SelectItem>
                        <SelectItem value="admin">Administrative Staff</SelectItem>
                        <SelectItem value="manager">Manager</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Department</label>
                    <Select
                      value={formData.department}
                      onValueChange={(value: string) => setFormData({ ...formData, department: value })}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select department" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="academic">Academic</SelectItem>
                        <SelectItem value="admin">Administration</SelectItem>
                        <SelectItem value="hr">Human Resources</SelectItem>
                        <SelectItem value="it">IT</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Start Date</label>
                    <Input
                      type="date"
                      value={formData.startDate}
                      onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Tabs Section */}
          <div className="bg-white rounded-lg border shadow-sm">
            <Tabs defaultValue="documents" className="w-full">
              <TabsList className="flex p-0 bg-transparent border-b rounded-none">
                <TabsTrigger
                  value="documents"
                  className="flex-1 px-6 py-3 data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-indigo-500 data-[state=active]:text-indigo-600 rounded-none"
                >
                  Documents
                </TabsTrigger>
                <TabsTrigger
                  value="schedule"
                  className="flex-1 px-6 py-3 data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-indigo-500 data-[state=active]:text-indigo-600 rounded-none"
                >
                  Schedule
                </TabsTrigger>
                <TabsTrigger
                  value="performance"
                  className="flex-1 px-6 py-3 data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-indigo-500 data-[state=active]:text-indigo-600 rounded-none"
                >
                  Performance Reviews
                </TabsTrigger>
                <TabsTrigger
                  value="payroll"
                  className="flex-1 px-6 py-3 data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-indigo-500 data-[state=active]:text-indigo-600 rounded-none"
                >
                  Payroll
                </TabsTrigger>
              </TabsList>

              <TabsContent value="documents" className="p-6">
                <div className="text-center py-8">
                  <div className="text-gray-400 mb-2">No documents uploaded yet</div>
                  <p className="text-sm text-gray-500">Upload staff documents here once they are available</p>
                </div>
              </TabsContent>

              <TabsContent value="schedule" className="p-6">
                <div className="text-center py-8">
                  <div className="text-gray-400 mb-2">No schedule assigned yet</div>
                  <p className="text-sm text-gray-500">Staff schedule will appear here once assigned</p>
                </div>
              </TabsContent>

              <TabsContent value="performance" className="p-6">
                <div className="text-center py-8">
                  <div className="text-gray-400 mb-2">No performance reviews yet</div>
                  <p className="text-sm text-gray-500">Performance reviews will be displayed here after evaluations</p>
                </div>
              </TabsContent>

              <TabsContent value="payroll" className="p-6">
                <div className="text-center py-8">
                  <div className="text-gray-400 mb-2">No payroll information yet</div>
                  <p className="text-sm text-gray-500">Payroll details will appear here once processed</p>
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
