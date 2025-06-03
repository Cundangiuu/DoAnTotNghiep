"use client"

import { useState, useRef, useEffect } from "react"
import { useRouter } from "next/navigation"
import Sidebar from "@/components/Sidebar"
import { Search, Filter, Edit, Plus } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface Course {
  code: string
  name: string
  hours: number
  tuition: string
  level: string
}

const courses: Course[] = [
  {
    code: "COU-28112401",
    name: "Starter 2 - K22",
    hours: 26,
    tuition: "702.000 đ",
    level: "Young Learners",
  },
  {
    code: "COU-28112402",
    name: "Starter 3",
    hours: 88,
    tuition: "199.000 đ",
    level: "Young Learners",
  },
  {
    code: "COU-28112403",
    name: "Advanced English",
    hours: 120,
    tuition: "1.500.000 đ",
    level: "Teenagers",
  },
  {
    code: "COU-28112404",
    name: "IELTS Preparation",
    hours: 80,
    tuition: "2.000.000 đ",
    level: "IELTS",
  },
]

// Function to generate course code based on the rule
function generateCourseCode(courseName: string, creationDate: Date, sequenceNumber: number): string {
  const day = creationDate.getDate().toString().padStart(2, "0")
  const month = (creationDate.getMonth() + 1).toString().padStart(2, "0")
  const year = creationDate.getFullYear().toString().slice(-2)
  const sequence = sequenceNumber.toString().padStart(2, "0")

  return `COU-${day}${month}${year}${sequence}`
}

const CoursesPage = () => {
  const router = useRouter()
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedFilter, setSelectedFilter] = useState("")
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const filterRef = useRef<HTMLDivElement>(null)

  const filterOptions = ["Young Learners", "Teenagers", "IELTS"]

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (filterRef.current && !filterRef.current.contains(event.target as Node)) {
        setIsFilterOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  const filteredCourses = courses.filter((course) => {
    const matchesSearch =
      course.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.code.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesFilter = selectedFilter === "" || course.level === selectedFilter
    return matchesSearch && matchesFilter
  })

  const handleAddCourse = () => {
    router.push("/new-course")
  }

  const handleEditCourse = (courseCode: string) => {
    router.push(`/edit-course/${courseCode}`)
  }

  const handleFilterSelect = (filter: string) => {
    setSelectedFilter(filter)
    setIsFilterOpen(false)
  }

  const clearFilter = () => {
    setSelectedFilter("")
    setIsFilterOpen(false)
  }

  return (
    <div className="flex min-h-screen bg-[#f5f6fa] text-[#333]">

        <Sidebar activeMenu="Courses" />
            <div className="flex flex-col flex-1">

            <header className="h-16 border-b flex items-center justify-between px-6 bg-white">
                <h1 className="text-xl font-semibold">Course</h1>
                <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                    <span>Hi, Binh An Pham</span>
                    <Avatar className="h-8 w-8">
                    <AvatarImage src="/placeholder-user.jpg" alt="User" />
                    <AvatarFallback>BP</AvatarFallback>
                    </Avatar>
                </div>
                </div>
            </header>
            {/* Main Content */}
            <main className="flex-1 p-6 overflow-auto">
                <div>
                    {/* Thống Kê Các Thẻ */}
                    <div className="grid gap-5 mb-8" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))" }}>
                    {/* Tổng Số Khóa Học */}
                    <div className="bg-white rounded-xl shadow-md p-5 text-center">
                        <div className="text-lg font-bold mb-2">Tổng Số Khóa Học</div>
                        <div className="text-4xl font-extrabold text-purple-600">{courses.length}</div>
                    </div>

                    {/* Khóa Học Đang Hoạt Động */}
                    <div className="bg-white rounded-xl shadow-md p-5 text-center">
                        <div className="text-lg font-bold mb-2">Khóa Học Đang Hoạt Động</div>
                        <div className="text-4xl font-extrabold text-purple-600">{courses.length}</div>
                    </div>

                    {/* Young Learners */}
                    <div className="bg-white rounded-xl shadow-md p-5 text-center">
                        <div className="text-lg font-bold mb-2">Young Learners</div>
                        <div className="text-4xl font-extrabold text-purple-600">
                        {courses.filter(c => c.level === "Young Learners").length}
                        </div>
                    </div>
                    </div>

                    {/* Thanh Tìm Kiếm & Nút Thêm */}
                    <div className="bg-white rounded-xl shadow-md p-5 mb-5">
                    <div className="flex justify-between items-center mb-5">
                        <h2 className="text-xl font-bold">Danh Sách Khóa Học</h2>
                        <button
                        onClick={handleAddCourse}
                        className="bg-purple-600 text-white rounded-lg px-5 py-2 flex items-center gap-2 hover:bg-purple-700 transition"
                        >
                        <Plus size={16} />
                        Thêm Khóa Học
                        </button>
                    </div>

                    <div className="flex gap-4 items-center flex-wrap">
                        <div className="relative flex-1 max-w-xs">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={16} />
                        <input
                            type="text"
                            placeholder="Tìm kiếm khóa học..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                        />
                        </div>

                        {/* Dropdown Bộ Lọc */}
                        <div className="relative" ref={filterRef}>
                        <button
                            onClick={() => setIsFilterOpen(!isFilterOpen)}
                            className={`flex items-center gap-2 px-4 py-2 border rounded-lg cursor-pointer text-base
                            ${selectedFilter ? "bg-purple-600 text-white border-purple-600" : "bg-white text-gray-600 border-gray-300"}
                            `}
                        >
                            <Filter size={16} />
                            {selectedFilter || "Lọc"}
                        </button>

                        {isFilterOpen && (
                            <div className="absolute top-full left-0 mt-1 min-w-[150px] bg-white border border-gray-300 rounded-lg shadow-lg z-50">
                            {selectedFilter && (
                                <div
                                onClick={clearFilter}
                                className="px-4 py-2 cursor-pointer border-b border-gray-200 text-gray-500 italic hover:bg-gray-100"
                                >
                                Xóa bộ lọc
                                </div>
                            )}
                            {filterOptions.map((option) => (
                                <div
                                key={option}
                                onClick={() => handleFilterSelect(option)}
                                className={`px-4 py-2 cursor-pointer text-sm ${
                                    selectedFilter === option ? "bg-gray-100" : "hover:bg-gray-50"
                                }`}
                                >
                                {option}
                                </div>
                            ))}
                            </div>
                        )}
                        </div>
                    </div>

                    {/* Hiển thị bộ lọc đang dùng */}
                    {selectedFilter && (
                        <div className="mt-4 flex items-center gap-3 text-gray-600 text-sm">
                        <span>Đang lọc theo:</span>
                        <span className="bg-purple-600 text-white rounded-full px-4 py-1 flex items-center gap-2 text-xs">
                            {selectedFilter}
                            <button onClick={clearFilter} className="hover:text-gray-300">
                            ✕
                            </button>
                        </span>
                        </div>
                    )}
                    </div>

                    {/* Bảng Khóa Học */}
                    <div className="bg-white rounded-xl shadow-md p-5 overflow-x-auto">
                    <table className="w-full border-collapse">
                        <thead>
                        <tr className="border-b-2 border-gray-200">
                            <th className="py-4 px-6 text-left font-semibold text-gray-700">Mã Khóa Học</th>
                            <th className="py-4 px-6 text-left font-semibold text-gray-700">Tên Khóa Học</th>
                            <th className="py-4 px-6 text-left font-semibold text-gray-700">Số Giờ</th>
                            <th className="py-4 px-6 text-left font-semibold text-gray-700">Học Phí</th>
                            <th className="py-4 px-6 text-left font-semibold text-gray-700">Cấp Độ</th>
                            <th className="py-4 px-6 text-left font-semibold text-gray-700">Thao Tác</th>
                        </tr>
                        </thead>
                        <tbody>
                        {filteredCourses.map((course, idx) => (
                            <tr key={idx} className="border-b border-gray-200 hover:bg-gray-50 transition">
                            <td className="py-3 px-6 font-bold text-purple-600">{course.code}</td>
                            <td className="py-3 px-6 font-medium">{course.name}</td>
                            <td className="py-3 px-6">{course.hours}</td>
                            <td className="py-3 px-6">{course.tuition}</td>
                            <td className="py-3 px-6">
                                <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                                {course.level}
                                </span>
                            </td>
                            <td className="py-3 px-6">
                                <button
                                onClick={() => handleEditCourse(course.code)}
                                className="text-gray-600 hover:text-purple-600 transition"
                                aria-label={`Chỉnh sửa khóa học ${course.name}`}
                                >
                                <Edit size={16} />
                                </button>
                            </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>

                    {/* Thông báo không có kết quả */}
                    {filteredCourses.length === 0 && (
                        <div className="text-center py-10 text-gray-500">
                        Không tìm thấy khóa học nào phù hợp với bộ lọc hiện tại.
                        </div>
                    )}
                    </div>
                </div>
            </main>
        </div>
        

        {/* Navbar and Sidebar */}
    </div>
  )
}

export default CoursesPage
