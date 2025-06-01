"use client"

import { useState, useRef, useEffect } from "react"
import { useRouter } from "next/navigation"
import Navbar from "@/components/Navbar"
import Sidebar from "@/components/Sidebar"
import { Search, Filter, Edit, Plus } from "lucide-react"

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
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#f5f6fa",
        minHeight: "100vh",
        display: "flex",
        color: "#333",
      }}
    >
      {/* Main Content */}
      <div
        style={{
          flex: 1,
          padding: "30px",
          paddingTop: "90px",
          paddingLeft: "30px",
          marginLeft: "128px",
          position: "relative",
        }}
      >
        {/* Page Header */}
        <div style={{ marginBottom: "30px" }}>
          <h1 style={{ fontSize: "2em", fontWeight: "bold", marginBottom: "10px", color: "#333" }}>Quản Lý Khóa Học</h1>
          <p style={{ color: "#666", fontSize: "1.1em" }}>Danh sách và quản lý các khóa học</p>
        </div>

        {/* Statistics Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "20px",
            marginBottom: "30px",
          }}
        >
          {/* Total Courses */}
          <div
            style={{
              backgroundColor: "white",
              borderRadius: "10px",
              boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
              padding: "20px",
              textAlign: "center",
            }}
          >
            <div style={{ fontSize: "1.2em", fontWeight: "bold", marginBottom: "10px" }}>Tổng Số Khóa Học</div>
            <div style={{ fontSize: "2em", color: "#9370db" }}>{courses.length}</div>
          </div>

          {/* Active Courses */}
          <div
            style={{
              backgroundColor: "white",
              borderRadius: "10px",
              boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
              padding: "20px",
              textAlign: "center",
            }}
          >
            <div style={{ fontSize: "1.2em", fontWeight: "bold", marginBottom: "10px" }}>Khóa Học Đang Hoạt Động</div>
            <div style={{ fontSize: "2em", color: "#9370db" }}>{courses.length}</div>
          </div>

          {/* Young Learners */}
          <div
            style={{
              backgroundColor: "white",
              borderRadius: "10px",
              boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
              padding: "20px",
              textAlign: "center",
            }}
          >
            <div style={{ fontSize: "1.2em", fontWeight: "bold", marginBottom: "10px" }}>Young Learners</div>
            <div style={{ fontSize: "2em", color: "#9370db" }}>
              {courses.filter((c) => c.level === "Young Learners").length}
            </div>
          </div>
        </div>

        {/* Search and Actions */}
        <div
          style={{
            backgroundColor: "white",
            borderRadius: "10px",
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
            padding: "20px",
            marginBottom: "20px",
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
            <h2 style={{ fontSize: "1.3em", fontWeight: "bold", margin: 0 }}>Danh Sách Khóa Học</h2>
            <button
              onClick={handleAddCourse}
              style={{
                backgroundColor: "#9370db",
                color: "white",
                border: "none",
                borderRadius: "8px",
                padding: "10px 20px",
                fontSize: "1em",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <Plus size={16} />
              Thêm Khóa Học
            </button>
          </div>

          <div style={{ display: "flex", gap: "15px", alignItems: "center" }}>
            <div style={{ position: "relative", flex: 1, maxWidth: "300px" }}>
              <Search
                style={{ position: "absolute", left: "12px", top: "50%", transform: "translateY(-50%)", color: "#666" }}
                size={16}
              />
              <input
                type="text"
                placeholder="Tìm kiếm khóa học..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{
                  width: "100%",
                  padding: "10px 12px 10px 40px",
                  border: "1px solid #ddd",
                  borderRadius: "8px",
                  fontSize: "1em",
                }}
              />
            </div>

            {/* Filter Dropdown */}
            <div style={{ position: "relative" }} ref={filterRef}>
              <button
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                style={{
                  backgroundColor: selectedFilter ? "#9370db" : "white",
                  color: selectedFilter ? "white" : "#666",
                  border: "1px solid #ddd",
                  borderRadius: "8px",
                  padding: "10px 15px",
                  fontSize: "1em",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <Filter size={16} />
                {selectedFilter || "Lọc"}
              </button>

              {/* Dropdown Menu */}
              {isFilterOpen && (
                <div
                  style={{
                    position: "absolute",
                    top: "100%",
                    left: "0",
                    backgroundColor: "white",
                    border: "1px solid #ddd",
                    borderRadius: "8px",
                    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                    zIndex: 1000,
                    minWidth: "150px",
                    marginTop: "4px",
                  }}
                >
                  {selectedFilter && (
                    <div
                      onClick={clearFilter}
                      style={{
                        padding: "10px 15px",
                        cursor: "pointer",
                        borderBottom: "1px solid #f0f0f0",
                        fontSize: "0.9em",
                        color: "#666",
                        fontStyle: "italic",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = "#f8f9fa"
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = "white"
                      }}
                    >
                      Xóa bộ lọc
                    </div>
                  )}
                  {filterOptions.map((option) => (
                    <div
                      key={option}
                      onClick={() => handleFilterSelect(option)}
                      style={{
                        padding: "10px 15px",
                        cursor: "pointer",
                        fontSize: "0.9em",
                        backgroundColor: selectedFilter === option ? "#f0f0f0" : "white",
                      }}
                      onMouseEnter={(e) => {
                        if (selectedFilter !== option) {
                          e.currentTarget.style.backgroundColor = "#f8f9fa"
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (selectedFilter !== option) {
                          e.currentTarget.style.backgroundColor = "white"
                        }
                      }}
                    >
                      {option}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Active Filter Display */}
          {selectedFilter && (
            <div style={{ marginTop: "15px", display: "flex", alignItems: "center", gap: "10px" }}>
              <span style={{ fontSize: "0.9em", color: "#666" }}>Đang lọc theo:</span>
              <span
                style={{
                  backgroundColor: "#9370db",
                  color: "white",
                  padding: "4px 12px",
                  borderRadius: "20px",
                  fontSize: "0.8em",
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                }}
              >
                {selectedFilter}
                <button
                  onClick={clearFilter}
                  style={{
                    backgroundColor: "transparent",
                    border: "none",
                    color: "white",
                    cursor: "pointer",
                    fontSize: "0.8em",
                    padding: "0",
                    marginLeft: "4px",
                  }}
                >
                  ✕
                </button>
              </span>
            </div>
          )}
        </div>

        {/* Courses Table */}
        <div
          style={{
            backgroundColor: "white",
            borderRadius: "10px",
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
            padding: "20px",
          }}
        >
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr style={{ borderBottom: "2px solid #f0f0f0" }}>
                  <th style={{ padding: "15px", textAlign: "left", fontWeight: "bold", color: "#333" }}>Mã Khóa Học</th>
                  <th style={{ padding: "15px", textAlign: "left", fontWeight: "bold", color: "#333" }}>
                    Tên Khóa Học
                  </th>
                  <th style={{ padding: "15px", textAlign: "left", fontWeight: "bold", color: "#333" }}>Số Giờ</th>
                  <th style={{ padding: "15px", textAlign: "left", fontWeight: "bold", color: "#333" }}>Học Phí</th>
                  <th style={{ padding: "15px", textAlign: "left", fontWeight: "bold", color: "#333" }}>Cấp Độ</th>
                  <th style={{ padding: "15px", textAlign: "left", fontWeight: "bold", color: "#333" }}>Thao Tác</th>
                </tr>
              </thead>
              <tbody>
                {filteredCourses.map((course, index) => (
                  <tr key={index} style={{ borderBottom: "1px solid #f0f0f0" }}>
                    <td style={{ padding: "15px" }}>
                      <span style={{ color: "#9370db", fontWeight: "bold" }}>{course.code}</span>
                    </td>
                    <td style={{ padding: "15px", fontWeight: "500" }}>{course.name}</td>
                    <td style={{ padding: "15px" }}>{course.hours}</td>
                    <td style={{ padding: "15px" }}>{course.tuition}</td>
                    <td style={{ padding: "15px" }}>
                      <span
                        style={{
                          backgroundColor: "#e8f4fd",
                          color: "#1976d2",
                          padding: "4px 12px",
                          borderRadius: "20px",
                          fontSize: "0.9em",
                          fontWeight: "500",
                        }}
                      >
                        {course.level}
                      </span>
                    </td>
                    <td style={{ padding: "15px" }}>
                      <button
                        onClick={() => handleEditCourse(course.code)}
                        style={{
                          backgroundColor: "transparent",
                          border: "none",
                          cursor: "pointer",
                          padding: "8px",
                          borderRadius: "6px",
                          color: "#666",
                        }}
                      >
                        <Edit size={16} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* No results message */}
          {filteredCourses.length === 0 && (
            <div style={{ textAlign: "center", padding: "40px", color: "#666" }}>
              <p>Không tìm thấy khóa học nào phù hợp với bộ lọc hiện tại.</p>
            </div>
          )}
        </div>

        {/* Course Code Generation Info */}
        <div
          style={{
            backgroundColor: "white",
            borderRadius: "10px",
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
            padding: "20px",
            marginTop: "20px",
          }}
        >
          <div style={{ fontSize: "1.2em", fontWeight: "bold", marginBottom: "15px" }}>Quy Tắc Mã Khóa Học</div>
          <div
            style={{ backgroundColor: "#f8f9fa", padding: "15px", borderRadius: "8px", border: "1px solid #e9ecef" }}
          >
            <p style={{ margin: "0 0 10px 0", fontSize: "0.95em", lineHeight: "1.5" }}>
              <strong>Định dạng:</strong> COU-[ddMMyy][XX]
            </p>
            <p style={{ margin: "0 0 10px 0", fontSize: "0.95em", lineHeight: "1.5" }}>
              <strong>Ví dụ:</strong> Khóa học "Starter 2" tạo ngày 28/11/2024 →{" "}
              <span style={{ color: "#9370db", fontWeight: "bold" }}>COU-28112401</span>
            </p>
            <p style={{ margin: "0", fontSize: "0.95em", lineHeight: "1.5" }}>
              <strong>Giải thích:</strong> COU (cố định) + dấu phân cách (-) + ngày tạo (281124) + số thứ tự (01)
            </p>
          </div>
        </div>
      </div>

      {/* Navbar and Sidebar */}
      <Navbar />
      <Sidebar activeMenu="Courses" />
    </div>
  )
}

export default CoursesPage
