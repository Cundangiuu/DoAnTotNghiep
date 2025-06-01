"use client"

import { useState } from "react"
import { useParams, useRouter } from "next/navigation"
import Navbar from "@/components/Navbar"
import Sidebar from "@/components/Sidebar"

interface LessonDescription {
  id: number
  description: string
}

const EditCoursePage = () => {
  const params = useParams()
  const router = useRouter()
  const courseId = params.id as string

  // Mock data for existing course
  const [courseName, setCourseName] = useState("Starter 3")
  const [hours, setHours] = useState("88")
  const [tuition, setTuition] = useState("199.000 đ")
  const [level, setLevel] = useState("Young Learners")
  const [description, setDescription] = useState("Khóa học tiếng Anh cơ bản cho trẻ em")
  const [lessons, setLessons] = useState<LessonDescription[]>([
    { id: 1, description: "elizabethlopez" },
    { id: 2, description: "mmartinez1997" },
    { id: 3, description: "elizabeth_hall_1998" },
    { id: 4, description: "maria_white" },
    { id: 5, description: "ewatson" },
    { id: 6, description: "eallen1998" },
    { id: 7, description: "calebjones" },
    { id: 8, description: "" },
  ])

  const handleAddLesson = () => {
    const newId = lessons.length > 0 ? Math.max(...lessons.map((l) => l.id)) + 1 : 1
    setLessons([...lessons, { id: newId, description: "" }])
  }

  const handleLessonChange = (id: number, value: string) => {
    setLessons(lessons.map((lesson) => (lesson.id === id ? { ...lesson, description: value } : lesson)))
  }

  const handleSave = () => {
    const updatedCourse = {
      id: courseId,
      name: courseName,
      hours,
      tuition,
      level,
      description,
      lessons,
    }
    console.log("Saving course:", updatedCourse)
    // Redirect back to courses list after saving
    router.push("/")
  }

  const handleDelete = () => {
    if (confirm("Bạn có chắc chắn muốn xóa khóa học này?")) {
      console.log("Deleting course:", courseId)
      // Redirect back to courses list after deleting
      router.push("/")
    }
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
          <h1 style={{ fontSize: "2em", fontWeight: "bold", color: "#333" }}>Editing {courseId} Course Details</h1>
          <div style={{ display: "flex", gap: "10px" }}>
            <button
              onClick={handleSave}
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
              Save
            </button>
            <button
              onClick={handleDelete}
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

        {/* Course Details Form */}
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
              <input
                type="text"
                value={courseName}
                onChange={(e) => setCourseName(e.target.value)}
                placeholder="Input text"
                style={{
                  width: "100%",
                  padding: "10px",
                  border: "1px solid #ddd",
                  borderRadius: "8px",
                  fontSize: "1em",
                  backgroundColor: "#f9f9f9",
                }}
              />
            </div>

            {/* Number of Hours */}
            <div>
              <label
                style={{ display: "block", marginBottom: "8px", fontSize: "0.9em", fontWeight: "500", color: "#555" }}
              >
                Number of Hours
              </label>
              <input
                type="text"
                value={hours}
                onChange={(e) => setHours(e.target.value)}
                placeholder="Input text"
                style={{
                  width: "100%",
                  padding: "10px",
                  border: "1px solid #ddd",
                  borderRadius: "8px",
                  fontSize: "1em",
                  backgroundColor: "#f9f9f9",
                }}
              />
            </div>

            {/* Tuition */}
            <div>
              <label
                style={{ display: "block", marginBottom: "8px", fontSize: "0.9em", fontWeight: "500", color: "#555" }}
              >
                Tuition
              </label>
              <input
                type="text"
                value={tuition}
                onChange={(e) => setTuition(e.target.value)}
                placeholder="Input text"
                style={{
                  width: "100%",
                  padding: "10px",
                  border: "1px solid #ddd",
                  borderRadius: "8px",
                  fontSize: "1em",
                  backgroundColor: "#f9f9f9",
                }}
              />
            </div>

            {/* Level */}
            <div>
              <label
                style={{ display: "block", marginBottom: "8px", fontSize: "0.9em", fontWeight: "500", color: "#555" }}
              >
                Level
              </label>
              <div style={{ position: "relative" }}>
                <select
                  value={level}
                  onChange={(e) => setLevel(e.target.value)}
                  style={{
                    width: "100%",
                    padding: "10px",
                    border: "1px solid #ddd",
                    borderRadius: "8px",
                    fontSize: "1em",
                    backgroundColor: "#f9f9f9",
                    appearance: "none",
                  }}
                >
                  <option value="">Input text</option>
                  <option value="Young Learners">Young Learners</option>
                  <option value="Intermediate">Intermediate</option>
                  <option value="Advanced">Advanced</option>
                </select>
                <div
                  style={{
                    position: "absolute",
                    right: "10px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    pointerEvents: "none",
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
              <input
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Input text"
                style={{
                  width: "100%",
                  padding: "10px",
                  border: "1px solid #ddd",
                  borderRadius: "8px",
                  fontSize: "1em",
                  backgroundColor: "#f9f9f9",
                }}
              />
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
                {lessons.map((lesson) => (
                  <tr key={lesson.id} style={{ borderBottom: "1px solid #f0f0f0" }}>
                    <td style={{ padding: "15px", textAlign: "left" }}>{lesson.id}</td>
                    <td style={{ padding: "15px" }}>
                      {lesson.description ? (
                        <span style={{ fontSize: "0.9em" }}>{lesson.description}</span>
                      ) : (
                        <input
                          type="text"
                          value={lesson.description}
                          onChange={(e) => handleLessonChange(lesson.id, e.target.value)}
                          placeholder="Add Lesson Description"
                          style={{
                            width: "100%",
                            padding: "8px",
                            border: "1px solid #ddd",
                            borderRadius: "6px",
                            fontSize: "0.9em",
                          }}
                        />
                      )}
                    </td>
                    <td style={{ padding: "15px", textAlign: "right" }}>
                      {lesson.description ? (
                        <button
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
    </div>
  )
}

export default EditCoursePage
