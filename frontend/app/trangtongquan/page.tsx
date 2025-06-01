"use client";

import React from 'react';
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import { LayoutDashboard } from "lucide-react"

const DashboardPage = () => {
    return (
        <div style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#f5f6fa', minHeight: '100vh', display: 'flex', color: '#333' }}>
            {/* Main Content */}
            <div style={{ 
                flex: 1, 
                padding: '30px', 
                paddingTop: '100px', // Padding top để tránh bị che khuất bởi Navbar
                paddingLeft: '150px', // Padding left để tránh bị che khuất bởi Sidebar (điều chỉnh theo chiều rộng sidebar của bạn)
                marginLeft: '32px', /*sidebar width là 32 px */
                position: 'relative'
                }}>
            

                {/* Dashboard Content */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', marginBottom: '30px' }}>
                    {/* Total Students */}
                    <div style={{ backgroundColor: 'white', borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', padding: '20px', textAlign: 'center' }}>
                        <div style={{ fontSize: '1.2em', fontWeight: 'bold', marginBottom: '10px' }}>Tổng Số Học Viên</div>
                        <div style={{ fontSize: '2em', color: '#9370db' }}>1,294</div>
                    </div>

                    {/* Active Classes */}
                    <div style={{ backgroundColor: 'white', borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', padding: '20px', textAlign: 'center' }}>
                        <div style={{ fontSize: '1.2em', fontWeight: 'bold', marginBottom: '10px' }}>Số Lớp Đang Hoạt Động</div>
                        <div style={{ fontSize: '2em', color: '#9370db' }}>56</div>
                    </div>

                    {/* Upcoming Sessions */}
                    <div style={{ backgroundColor: 'white', borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', padding: '20px', textAlign: 'center' }}>
                        <div style={{ fontSize: '1.2em', fontWeight: 'bold', marginBottom: '10px' }}>Các Buổi Học Sắp Tới</div>
                        <div style={{ fontSize: '2em', color: '#9370db' }}>12</div>
                    </div>
                </div>

                {/* Notifications */}
                <div style={{ backgroundColor: 'white', borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', padding: '20px' }}>
                    <div style={{ fontSize: '1.2em', fontWeight: 'bold', marginBottom: '10px' }}>Thông Báo</div>
                    <ul>
                        <li style={{ padding: '8px 0', borderBottom: '1px solid #eee' }}>Khóa học mới khả dụng: Toán Nâng Cao</li>
                        <li style={{ padding: '8px 0', borderBottom: '1px solid #eee' }}>Lịch họp nhân viên vào thứ Hai tới</li>
                        <li style={{ padding: '8px 0' }}>Sắp đến hạn đăng ký học</li>
                    </ul>
                </div>
            </div>

            {/* Navbar and Sidebar */}
            <Navbar />
            <Sidebar activeMenu="Dashboard" />
        </div>
    );
};

export default DashboardPage;