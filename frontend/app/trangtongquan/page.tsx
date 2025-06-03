"use client";

import React from "react";
import Sidebar from "@/components/Sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const DashboardPage = () => {
  return (
    <div className="flex min-h-screen bg-[#f5f6fa] text-[#333]">
      {/* Sidebar */}
      <Sidebar activeMenu="Dashboard" />

      {/* Main content */}
      <div className="flex flex-col flex-1">
        {/* Header */}
        <header className="h-16 border-b flex items-center justify-between px-6 bg-white">
          <h1 className="text-xl font-semibold">Dashboard</h1>
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

        {/* Content */}
        <main className="flex-1 p-6 overflow-auto">
          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {/* Total Students */}
            <div className="bg-white rounded-xl shadow-md p-6 text-center">
              <h2 className="text-lg font-semibold mb-2">Tổng Số Học Viên</h2>
              <p className="text-3xl font-bold text-purple-500">1,294</p>
            </div>

            {/* Active Classes */}
            <div className="bg-white rounded-xl shadow-md p-6 text-center">
              <h2 className="text-lg font-semibold mb-2">Số Lớp Đang Hoạt Động</h2>
              <p className="text-3xl font-bold text-purple-500">56</p>
            </div>

            {/* Upcoming Sessions */}
            <div className="bg-white rounded-xl shadow-md p-6 text-center">
              <h2 className="text-lg font-semibold mb-2">Các Buổi Học Sắp Tới</h2>
              <p className="text-3xl font-bold text-purple-500">12</p>
            </div>
          </div>

          {/* Notifications */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-lg font-semibold mb-4">Thông Báo</h2>
            <ul className="space-y-3 text-sm">
              <li className="border-b pb-2">📘 Khóa học mới khả dụng: Toán Nâng Cao</li>
              <li className="border-b pb-2">🗓️ Lịch họp nhân viên vào thứ Hai tới</li>
              <li>⏰ Sắp đến hạn đăng ký học</li>
            </ul>
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardPage;
