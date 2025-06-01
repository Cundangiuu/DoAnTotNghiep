"use client"

import { useState } from "react"
import { useParams, useRouter } from "next/navigation"
import Navbar from "@/components/Navbar"
import Sidebar from "@/components/Sidebar"


interface LessonDescription {
  id: number
  description: string
}

const CourseDetailsPage = () => {
  const params = useParams()
  const router = useRouter()
  const courseId = params.id as string

  // Modal state
  const [showDeleteModal, setShowDeleteModal] = useState(false)

  // Mock data for existing course (read-only)
  const courseData = {
    name: "Starter 3",
    hours: "88",
    tuition: "199.000 đ",
    level: "Young Learners",
    description: "Khóa học tiếng Anh cơ bản cho trẻ em",
    lessons: [
      { id: 1, description: "elizabethlopez" },
      { id: 2, description: "mmartinez1997" },
      { id: 3, description: "elizabeth_hall_1998" },
      { id: 4, description: "maria_white" },
      { id: 5, description: "ewatson" },
      { id: 6, description: "eallen1998" },
      { id: 7, description: "calebjones" },
      { id: 8, description: "" },
    ] as LessonDescription[],
  }

  const handleEdit = () => {
    router.push(`/edit-course/${courseId}`)
  }

  const handleDeleteClick = () => {
    setShowDeleteModal(true)
  }

  const handleDeleteConfirm = () => {
    console.log("Deleting course:", courseId)
    setShowDeleteModal(false)
    // Redirect back to courses list after deleting
    router.push("/")
  }

  const handleDeleteCancel = () => {
    setShowDeleteModal(false)
  }

  const handleAddLesson = () => {
    // Navigate to edit mode to add lesson
    router.push(`/edit-course/${courseId}`)
  }

  const handleEditLesson = (lessonId: number) => {
    // Navigate to edit mode to edit specific lesson
    router.push(`/edit-course/${courseId}?lesson=${lessonId}`)
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
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "30px",
          }}
        >
          <h1 style={{ fontSize: "2em", fontWeight: "bold", color: "#333" }}>{courseId} Course Details</h1>
          <div style={{ display: "flex", gap: "10px" }}>
            <button
              onClick={handleEdit}
              style={{
                backgroundColor: "#9370db",
                color: "white",
                border: "none",
                borderRadius: "8px",
                padding: "10px 20px",
                fontSize: "1em",
                cursor: "pointer",
              }}
            >
              Edit
            </button>
            <button
              onClick={handleDeleteClick}
              style={{
                backgroundColor: "#dc3545",
                color: "white",
                border: "none",
                borderRadius: "8px",
                padding: "10px 20px",
                fontSize: "1em",
                cursor: "pointer",
              }}
            >
              Delete
            </button>
          </div>
        </div>

        {/* Course Details Display */}
        <div
          style={{
            backgroundColor: "white",
            borderRadius: "10px",
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
            padding: "20px",
            marginBottom: "30px",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "20px",
              marginBottom: "20px",
            }}
          >
            {/* Name */}
            <div>
              <label
                style={{ display: "block", marginBottom: "8px", fontSize: "0.9em", fontWeight: "500", color: "#555" }}
              >
                Name
              </label>
              <div
                style={{
                  width: "100%",
                  padding: "10px",
                  border: "1px solid #ddd",
                  borderRadius: "8px",
                  fontSize: "1em",
                  backgroundColor: "#f9f9f9",
                  color: "#999",
                }}
              >
                {courseData.name || "Input text"}
              </div>
            </div>

            {/* Number of Hours */}
            <div>
              <label
                style={{ display: "block", marginBottom: "8px", fontSize: "0.9em", fontWeight: "500", color: "#555" }}
              >
                Number of Hours
              </label>
              <div
                style={{
                  width: "100%",
                  padding: "10px",
                  border: "1px solid #ddd",
                  borderRadius: "8px",
                  fontSize: "1em",
                  backgroundColor: "#f9f9f9",
                  color: "#999",
                }}
              >
                {courseData.hours || "Input text"}
              </div>
            </div>

            {/* Tuition */}
            <div>
              <label
                style={{ display: "block", marginBottom: "8px", fontSize: "0.9em", fontWeight: "500", color: "#555" }}
              >
                Tuition
              </label>
              <div
                style={{
                  width: "100%",
                  padding: "10px",
                  border: "1px solid #ddd",
                  borderRadius: "8px",
                  fontSize: "1em",
                  backgroundColor: "#f9f9f9",
                  color: "#999",
                }}
              >
                {courseData.tuition || "Input text"}
              </div>
            </div>

            {/* Level */}
            <div>
              <label
                style={{ display: "block", marginBottom: "8px", fontSize: "0.9em", fontWeight: "500", color: "#555" }}
              >
                Level
              </label>
              <div style={{ position: "relative" }}>
                <div
                  style={{
                    width: "100%",
                    padding: "10px",
                    border: "1px solid #ddd",
                    borderRadius: "8px",
                    fontSize: "1em",
                    backgroundColor: "#f9f9f9",
                    color: "#999",
                  }}
                >
                  {courseData.level || "Input text"}
                </div>
                <div
                  style={{
                    position: "absolute",
                    right: "10px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    pointerEvents: "none",
                    color: "#999",
                  }}
                >
                  ▼
                </div>
              </div>
            </div>

            {/* Description */}
            <div style={{ gridColumn: "1 / -1" }}>
              <label
                style={{ display: "block", marginBottom: "8px", fontSize: "0.9em", fontWeight: "500", color: "#555" }}
              >
                Description
              </label>
              <div
                style={{
                  width: "100%",
                  padding: "10px",
                  border: "1px solid #ddd",
                  borderRadius: "8px",
                  fontSize: "1em",
                  backgroundColor: "#f9f9f9",
                  color: "#999",
                }}
              >
                {courseData.description || "Input text"}
              </div>
            </div>
          </div>
        </div>

        {/* Course Outline */}
        <div
          style={{
            backgroundColor: "white",
            borderRadius: "10px",
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
            padding: "20px",
          }}
        >
          <h2 style={{ fontSize: "1.5em", fontWeight: "bold", marginBottom: "20px" }}>{courseId} Outline</h2>

          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr style={{ borderBottom: "2px solid #f0f0f0" }}>
                  <th style={{ padding: "15px", textAlign: "left", fontWeight: "bold", color: "#333", width: "50px" }}>
                    #
                  </th>
                  <th style={{ padding: "15px", textAlign: "left", fontWeight: "bold", color: "#333" }}>
                    Lesson Description
                  </th>
                  <th
                    style={{ padding: "15px", textAlign: "right", fontWeight: "bold", color: "#333", width: "100px" }}
                  >
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {courseData.lessons.map((lesson) => (
                  <tr key={lesson.id} style={{ borderBottom: "1px solid #f0f0f0" }}>
                    <td style={{ padding: "15px", textAlign: "left" }}>{lesson.id}</td>
                    <td style={{ padding: "15px" }}>
                      {lesson.description ? (
                        <span style={{ fontSize: "0.9em", color: "#333" }}>{lesson.description}</span>
                      ) : (
                        <span style={{ fontSize: "0.9em", color: "#999", fontStyle: "italic" }}>No description</span>
                      )}
                    </td>
                    <td style={{ padding: "15px", textAlign: "right" }}>
                      {lesson.description ? (
                        <button
                          onClick={() => handleEditLesson(lesson.id)}
                          style={{
                            backgroundColor: "transparent",
                            color: "#9370db",
                            border: "none",
                            fontSize: "0.9em",
                            cursor: "pointer",
                            textDecoration: "underline",
                          }}
                        >
                          Edit
                        </button>
                      ) : (
                        <button
                          onClick={handleAddLesson}
                          style={{
                            backgroundColor: "transparent",
                            color: "#9370db",
                            border: "none",
                            fontSize: "0.9em",
                            cursor: "pointer",
                            textDecoration: "underline",
                          }}
                        >
                          Add
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Navbar and Sidebar */}
      <Navbar />
      <Sidebar activeMenu="Courses" />

      {/* Delete Confirmation Modal */}
      
    </div>
  )
}

export default CourseDetailsPage
