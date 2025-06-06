"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Sidebar from "@/components/Sidebar";
import Swal from "sweetalert2";

export default function ClassesPage() {
  const [activeMenu, setActiveMenu] = useState("Classes");

  // State lưu dữ liệu tạo lớp mới, đúng theo cấu trúc bạn muốn gửi
  const [newClass, setNewClass] = useState({
    course_id: "",
    class_schedule_id: "",
    start_date: "",
    room: "",
    branch: "",
    staffIds: "", // Nhập tay, dạng "1,2" vd
  });

  const handleChange = (field: string, value: string) => {
    setNewClass((prev) => ({ ...prev, [field]: value }));
  };

  const handleCreateClass = async () => {
  if (
    !newClass.course_id ||
    !newClass.class_schedule_id ||
    !newClass.start_date ||
    !newClass.room ||
    !newClass.branch ||
    !newClass.staffIds
  ) {
    Swal.fire({
      icon: "warning",
      title: "Vui lòng điền đầy đủ thông tin",
      timer: 2000,
      showConfirmButton: false,
    });
    return;
  }

  const payload = {
    course_id: parseInt(newClass.course_id),
    class_schedule_id: parseInt(newClass.class_schedule_id),
    start_date: newClass.start_date,
    room: newClass.room,
    branch: newClass.branch,
    staffIds: newClass.staffIds
      .split(",")
      .map((id) => parseInt(id.trim()))
      .filter((id) => !isNaN(id)),
  };

  try {
    const res = await fetch("http://localhost:5000/classes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      const errorData = await res.json().catch(() => null);
      const errorMessage = errorData?.message || "Lỗi khi tạo lớp học";
      throw new Error(errorMessage);
    }

    await res.json();

    Swal.fire({
      icon: "success",
      title: "Tạo lớp thành công!",
      timer: 2000,
      showConfirmButton: false,
    });

    // Chuyển trang sau 2 giây
    setTimeout(() => {
      window.location.href = "http://localhost:3000/lophoc";
    }, 2000);

  } catch (error: any) {
    console.error(error);
    Swal.fire({
      icon: "error",
      title: "Đã xảy ra lỗi khi tạo lớp!",
      text: error.message || "Lỗi không xác định",
    });
  }
};


  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar activeMenu={activeMenu} />

      {/* Main content */}
      <div className="flex-1 flex flex-col bg-white">
        {/* Header */}
        <header className="border-b border-gray-200 py-4 px-8 flex justify-between items-center bg-white">
          <h1 className="text-2xl font-semibold text-gray-900">Lớp học</h1>
          <div className="flex items-center gap-3">
            <span className="text-gray-700">Xin chào, Binh An Pham</span>
            <div className="h-8 w-8 bg-gray-300 rounded-full flex items-center justify-center">
              {/* Icon user bạn tự thay đổi nếu muốn */}
              <svg
                className="h-4 w-4 text-gray-600"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5.121 17.804A7.5 7.5 0 0112 15a7.5 7.5 0 016.879 2.804M12 12a5 5 0 100-10 5 5 0 000 10z"
                />
              </svg>
            </div>
          </div>
        </header>

        {/* Form */}
        <main className="flex-1 p-8 bg-white overflow-auto">
          <section className="mb-8 p-6 border border-gray-200 rounded-lg shadow-sm bg-white">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">
              Tạo lớp học mới
            </h2>
            <div className="grid grid-cols-6 gap-6">
              {/* course_id */}
              <div className="col-span-3 space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Course ID (Khóa học)
                </label>
                <Input
                  type="number"
                  min={1}
                  value={newClass.course_id}
                  onChange={(e) => handleChange("course_id", e.target.value)}
                  placeholder="Nhập course_id"
                  className="h-10 border-gray-300 text-gray-700"
                />
              </div>

              {/* class_schedule_id */}
              <div className="col-span-3 space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Class Schedule ID (Lịch học)
                </label>
                <Input
                  type="number"
                  min={1}
                  value={newClass.class_schedule_id}
                  onChange={(e) =>
                    handleChange("class_schedule_id", e.target.value)
                  }
                  placeholder="Nhập class_schedule_id"
                  className="h-10 border-gray-300 text-gray-700"
                />
              </div>

              {/* start_date */}
              <div className="col-span-3 space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Start Date (Ngày bắt đầu)
                </label>
                <Input
                  type="date"
                  value={newClass.start_date}
                  onChange={(e) => handleChange("start_date", e.target.value)}
                  className="h-10 border-gray-300 text-gray-700"
                />
              </div>

              {/* room */}
              <div className="col-span-3 space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Room (Phòng học)
                </label>
                <Input
                  type="text"
                  value={newClass.room}
                  onChange={(e) => handleChange("room", e.target.value)}
                  placeholder="Nhập phòng học"
                  className="h-10 border-gray-300 text-gray-700"
                />
              </div>

              {/* branch */}
              <div className="col-span-3 space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Branch (Cơ sở)
                </label>
                <Input
                  type="text"
                  value={newClass.branch}
                  onChange={(e) => handleChange("branch", e.target.value)}
                  placeholder="Nhập cơ sở"
                  className="h-10 border-gray-300 text-gray-700"
                />
              </div>

              {/* staffIds */}
              <div className="col-span-6 space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Staff IDs (Danh sách ID giảng viên, cách nhau dấu phẩy)
                </label>
                <Input
                  type="text"
                  value={newClass.staffIds}
                  onChange={(e) => handleChange("staffIds", e.target.value)}
                  placeholder="Ví dụ: 1,2,3"
                  className="h-10 border-gray-300 text-gray-700"
                />
              </div>
            </div>

            <div className="mt-8 flex justify-end">
              <Button
                style={{ backgroundColor: "#636AE8FF" }}
                className="text-white hover:bg-[#4F55E5]"
                onClick={handleCreateClass}
              >
                Tạo lớp
              </Button>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
