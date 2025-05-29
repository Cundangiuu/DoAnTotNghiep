"use client";

import React, { useState } from "react";

interface Props {
    classId: string;
    className: string;
    onDelete: (id: string) => void;
    onCancel: () => void;  // hàm tắt form
}

export default function DeleteClassForm({ classId, className, onDelete, onCancel }: Props) {
    const [isDeleting, setIsDeleting] = useState(false);
    const [error, setError] = useState("");

    const handleDelete = () => {
        setIsDeleting(true);
        setError("");

        // Giả lập gọi API xóa (fake)
        setTimeout(() => {
            // Giả sử xóa thành công
            onDelete(classId);
            setIsDeleting(false);
        }, 1000);
    };

    return (
        <div className="relative p-4 border rounded bg-red-50 max-w-md">
            {/* Nút X góc trên phải */}
            <button
                onClick={onCancel}
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 font-bold text-xl"
                aria-label="Đóng"
                disabled={isDeleting}
            >
                ×
            </button>

            <h2 className="text-lg font-semibold mb-2">Xác nhận xóa lớp học</h2>
            <p>Bạn có chắc muốn xóa lớp: <strong>{className}</strong> không?</p>
            {error && <p className="text-red-600 my-2">{error}</p>}

            <div className="mt-4 flex gap-3">
                <button
                    onClick={handleDelete}
                    disabled={isDeleting}
                    className="px-4 py-2 bg-red-600 text-white rounded disabled:opacity-50"
                >
                    {isDeleting ? "Đang xóa..." : "Xóa lớp"}
                </button>

                <button
                    onClick={onCancel}
                    disabled={isDeleting}
                    className="px-4 py-2 border rounded hover:bg-gray-200 disabled:opacity-50"
                >
                    Không
                </button>
            </div>
        </div>
    );
}
