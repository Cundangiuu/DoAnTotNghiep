// src/app/dashboard/page.tsx

"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Sidebar from "@/components/Sidebar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Filter, Search } from "lucide-react";
import Link from "next/link";
import Swal from "sweetalert2";
const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:5000';

// Định nghĩa kiểu dữ liệu cho Staff
interface Staff {
    id: number;
    code: string;
    first_name: string | null; // Có thể là null từ API
    last_name: string | null;  // Có thể là null từ API
    email_address: string;
    phone_number: string;
    specialization: string;
}

// Định nghĩa kiểu dữ liệu cho lớp học
interface Class {
    id: number;
    code: string;
    course_id: number;
    class_schedule_id: number;
    start_date: string | null;
    room: string | null;
    branch: string | null;
    status?: string;


    course: {
        id: number;
        code: string;
        name: string;
        tuition_rate?: number;
        number_hour?: number;
        description?: string;
    };
    class_schedule: {
        id: number;
        code: string;
        description: string;
    };
    // staffs CÓ THỂ LÀ MẢNG CÁC STAFF
    staffs?: Staff[] | null; // Thay đổi ở đây: có thể là mảng Staff, hoặc null/undefined
}

export default function DashboardPage() {
    const [classes, setClasses] = useState<Class[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    function capitalizeFirstLetter(str: string) {
        if (!str) return '';
        return str.charAt(0).toUpperCase() + str.slice(1);
        }

    function handleDelete(classId: number) {
    Swal.fire({
        title: 'Bạn có chắc muốn xóa lớp học này?',
        text: "Hành động này không thể hoàn tác!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#3085d6',
        confirmButtonText: 'Xóa',
        cancelButtonText: 'Hủy'
    }).then((result) => {
        if (result.isConfirmed) {
        axios.delete(`${API_BASE_URL}/classes/${classId}`)
            .then(() => {
            setClasses(prev => prev.filter(c => c.id !== classId));
            Swal.fire(
                'Đã xóa!',
                'Lớp học đã được xóa thành công.',
                'success'
            )
            })
            .catch(err => {
            console.error("Lỗi khi xóa lớp học:", err);
            Swal.fire(
                'Lỗi!',
                'Xảy ra lỗi khi xóa lớp học. Vui lòng thử lại.',
                'error'
            )
            });
        }
    });
    }

    const fetchClasses = async () => {
        try {
            setLoading(true);
            setError(null);

            const apiUrl = `${API_BASE_URL}/classes`;
            console.log(`Đang gọi API: GET ${apiUrl}`);

            const response = await axios.get<Class[]>(apiUrl);
            console.log("Dữ liệu lớp học đã nhận:", response.data);
            setClasses(response.data);

        } catch (err) {
            console.error("Lỗi khi lấy danh sách lớp học:", err);
            if (axios.isAxiosError(err) && err.response) {
                 setError(`Lỗi: ${err.response.status} - ${err.response.statusText}`);
                 console.error("Chi tiết phản hồi lỗi:", err.response.data);
                 console.error("Headers phản hồi lỗi:", err.response.headers);
            } else {
                 setError("Không thể tải danh sách lớp học. Vui lòng thử lại.");
            }
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchClasses();
    }, []);

    function handleEdit(itemId: any): void {
    window.location.href = "http://localhost:3000/lophoc/sua-lop";
    }


    return (
        <div className="flex h-screen bg-white">
            <Sidebar activeMenu="Classes" />

            <div className="flex-1 flex flex-col">
                <header className="h-16 border-b flex items-center justify-between px-6">
                    <h1 className="text-xl font-semibold">Lớp học</h1>
                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2">
                            <span>Xin chào, Binh An Pham</span>
                            <Avatar className="h-8 w-8">
                                <AvatarImage src="/placeholder-user.jpg" alt="User" />
                                <AvatarFallback>BP</AvatarFallback>
                            </Avatar>
                        </div>
                    </div>
                </header>

                <main className="flex-1 p-6 overflow-auto">
                    <div className="flex justify-between mb-6">
                        <div className="flex gap-2">
                            <div className="relative">
                                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                                <Input type="search" placeholder="Tìm kiếm..." className="pl-8 w-[250px]" />
                            </div>
                            <Button variant="outline" size="icon">
                                <Filter className="h-4 w-4" />
                            </Button>
                        </div>
                        <Link href="lophoc/them-lop" passHref>
                            <Button
                                style={{ backgroundColor: '#636AE8FF' }}
                                className="text-white hover:bg-[#4F55E5]"
                            >
                                Lớp học mới
                            </Button>
                        </Link>



                    </div>

                    {loading && <p>Đang tải danh sách lớp học...</p>}
                    {error && <p className="text-red-500">Lỗi: {error}</p>}

                    {!loading && !error && classes && (
                        <div className="overflow-x-auto">
                             <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Mã Lớp
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Tên Khóa học
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Lịch trình
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Ngày bắt đầu
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Địa điểm
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Giảng viên
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Trạng thái
                                        </th>

                                        <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Thao tác
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {classes.length > 0 ? (
                                        classes.map((classItem) => (
                                            <tr key={classItem.id}>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                    {classItem.code}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                    {classItem.course?.name || '-'}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                    {classItem.class_schedule?.description || '-'}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                    {classItem.start_date
                                                        ? `${new Date(classItem.start_date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} - ${new Date(classItem.start_date).toLocaleDateString()}`
                                                        : '-'}
                                                </td>


                                                 <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                     {
                                                        (classItem.room || classItem.branch) ?
                                                            `${classItem.room || ''}${classItem.room && classItem.branch ? ' - ' : ''}${classItem.branch || ''}`
                                                            : '-'
                                                     }
                                                 </td>
                                                {/* CẬP NHẬT LOGIC HIỂN THỊ TÊN GIẢNG VIÊN */}
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                    {
                                                        // Kiểm tra nếu staffs tồn tại, là mảng, và có ít nhất 1 phần tử
                                                        classItem.staffs && Array.isArray(classItem.staffs) && classItem.staffs.length > 0
                                                        ?
                                                        // Lấy phần tử đầu tiên của mảng staffs
                                                        // Sử dụng || '' để xử lý trường hợp first_name hoặc last_name là null/undefined
                                                        `${classItem.staffs[0].first_name || ''} ${classItem.staffs[0].last_name || ''}`.trim()
                                                        :
                                                        // Nếu không có staffs hoặc staffs rỗng, hiển thị '-'
                                                        "-"
                                                    }
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm">
                                                    <span
                                                    className={`inline-block px-2 py-1 rounded text-white font-semibold ${
                                                        classItem.status === 'mới' ? 'bg-green-500' :
                                                        classItem.status === 'đang diễn ra' ? 'bg-blue-600' :
                                                        classItem.status === 'đã kết thúc' ? 'bg-gray-500' :
                                                        classItem.status === 'hủy' ? 'bg-red-600' :
                                                        'bg-gray-400'
                                                    }`}
                                                    >
                                                    {capitalizeFirstLetter(classItem.status ?? '') || '-'}
                                                    </span>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium flex space-x-4 justify-end">
                                                    {/* Nút sửa */}
                                                    <button
                                                        onClick={() => handleEdit(classItem.id)}
                                                        className="text-blue-500 hover:text-blue-700"
                                                        aria-label="Edit"
                                                    >
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536M9 11l6-6 3 3-6 6H9v-3z" />
                                                        </svg>
                                                    </button>

                                                    {/* Nút xóa */}
                                                    <button
                                                        onClick={() => handleDelete(classItem.id)}
                                                        className="text-red-500 hover:text-red-700"
                                                        aria-label="Delete"
                                                    >
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                                        </svg>
                                                    </button>
                                                    </td>

                                            </tr>
                                        ))
                                    ) : (
                                         <tr>
                                             <td colSpan={7} className="px-6 py-4 text-center text-gray-500">
                                                 Không có lớp học nào để hiển thị.
                                             </td>
                                         </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    )}

                    {!loading && !error && (!classes || classes.length === 0) && (
                         <p className="text-center text-gray-500 mt-4">Không có lớp học nào để hiển thị.</p>
                    )}
                </main>
            </div>
        </div>
    );
}