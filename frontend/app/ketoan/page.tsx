"use client";

import React from 'react';
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";

const AccountingPage = () => {
    return (
        <div style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#f5f6fa', minHeight: '100vh', display: 'flex', color: '#333' }}>
            {/* Sidebar */}
            <Sidebar activeMenu="Accounting" />

            {/* Main Content */}
            <div style={{ flex: 1, padding: '30px', paddingTop: '90px', paddingLeft: '180px' }}>{/* Thêm paddingTop và paddingLeft */}
                {/* Navbar */}
                <Navbar />

                {/* Invoice Generation */}
                <div style={{ backgroundColor: 'white', borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', padding: '20px', marginBottom: '30px' }}>
                    <div style={{ fontSize: '1.2em', fontWeight: 'bold', marginBottom: '10px' }}>Tạo Hóa Đơn</div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        <div>
                            <label style={{ display: 'block', marginBottom: '5px', fontSize: '0.85em' }}>Học Phí</label>
                            <input type="text" style={{ width: '100%', padding: '8px', borderRadius: '5px', border: '1px solid #ddd', fontSize: '0.85em' }} placeholder="Nhập học phí" />
                        </div>
                        <div>
                            <label style={{ display: 'block', marginBottom: '5px', fontSize: '0.85em' }}>Giảm Giá</label>
                            <input type="text" style={{ width: '100%', padding: '8px', borderRadius: '5px', border: '1px solid #ddd', fontSize: '0.85em' }} placeholder="Nhập giảm giá" />
                        </div>
                        <div>
                            <label style={{ display: 'block', marginBottom: '5px', fontSize: '0.85em' }}>Phụ Thu</label>
                            <input type="text" style={{ width: '100%', padding: '8px', borderRadius: '5px', border: '1px solid #ddd', fontSize: '0.85em' }} placeholder="Nhập phụ thu" />
                        </div>
                        <button style={{ backgroundColor: '#007bff', color: 'white', padding: '8px 16px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Tạo Hóa Đơn</button>
                    </div>
                </div>

                {/* Payment Processing */}
                <div style={{ backgroundColor: 'white', borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', padding: '20px' }}>
                    <div style={{ fontSize: '1.2em', fontWeight: 'bold', marginBottom: '10px' }}>Xử Lý Thanh Toán</div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        <div>
                            <label style={{ display: 'block', marginBottom: '5px', fontSize: '0.85em' }}>Số Tiền Thanh Toán</label>
                            <input type="text" style={{ width: '100%', padding: '8px', borderRadius: '5px', border: '1px solid #ddd', fontSize: '0.85em' }} placeholder="Nhập số tiền thanh toán" />
                        </div>
                        <div>
                            <label style={{ display: 'block', marginBottom: '5px', fontSize: '0.85em' }}>Phương Thức Thanh Toán</label>
                            <input type="text" style={{ width: '100%', padding: '8px', borderRadius: '5px', border: '1px solid #ddd', fontSize: '0.85em' }} placeholder="Chọn phương thức thanh toán" />
                        </div>
                        <div>
                            <label style={{ display: 'block', marginBottom: '5px', fontSize: '0.85em' }}>Ngày Thanh Toán</label>
                            <input type="date" style={{ width: '100%', padding: '8px', borderRadius: '5px', border: '1px solid #ddd', fontSize: '0.85em' }} placeholder="Chọn ngày thanh toán" />
                        </div>
                        <button style={{ backgroundColor: '#007bff', color: 'white', padding: '8px 16px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Thanh Toán</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AccountingPage;