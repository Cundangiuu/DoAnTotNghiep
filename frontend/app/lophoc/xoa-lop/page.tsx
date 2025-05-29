"use client";

import React, { useState } from "react";

interface Props {
    classId: string;
    className: string;
    onDelete: (id: string) => void;
}

export default function DeleteClassForm({ classId, className, onDelete }: Props) {
    const [isOpen, setIsOpen] = useState(false);
    const [isDeleting, setIsDeleting] = useState(false);
    const [error, setError] = useState("");

    const openModal = () => setIsOpen(true);
    const closeModal = () => {
        if (!isDeleting) {
            setIsOpen(false);
            setError("");
        }
    };

    const handleDelete = () => {
        setIsDeleting(true);
        setError("");

        setTimeout(() => {
            try {
                onDelete(classId); // gọi callback xóa
                setIsDeleting(false);
                setIsOpen(false); // đóng modal sau xóa thành công
            } catch (e) {
                setError("Đã có lỗi xảy ra khi xóa.");
                setIsDeleting(false);
            }
        }, 1000);
    };

    return (
        <>
            {/* Nút bấm mở modal */}
            <button
                onClick={openModal}
                className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
            >
                Xóa lớp
            </button>

            {/* Modal Overlay + Nội dung modal */}
            {isOpen && (
                <>
                    {/* Overlay nền mờ */}
                    <div
                        onClick={closeModal}
                        className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm z-40"
                    ></div>

                    {/* Modal Content */}
                    <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
                        <div className="relative bg-white rounded-lg shadow-xl w-full max-w-md p-6 border">
                            {/* Nút đóng góc trên phải */}
                            <button
                                onClick={closeModal}
                                disabled={isDeleting}
                                aria-label="Đóng"
                                className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 font-bold text-xl"
                            >
                                ×
                            </button>

                            <h2 className="text-lg font-semibold mb-2 text-red-600">
                                Xác nhận xóa lớp học
                            </h2>
                            <p className="text-gray-700">
                                Bạn có chắc muốn xóa lớp: <strong>{className}</strong> không?
                            </p>
                            {error && <p className="text-red-600 my-2">{error}</p>}

                            <div className="mt-6 flex justify-end gap-3">
                                <button
                                    onClick={handleDelete}
                                    disabled={isDeleting}
                                    className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 disabled:opacity-50"
                                >
                                    {isDeleting ? "Đang xóa..." : "Xóa lớp"}
                                </button>
                                <button
                                    onClick={closeModal}
                                    disabled={isDeleting}
                                    className="px-4 py-2 border rounded hover:bg-gray-100 disabled:opacity-50"
                                >
                                    Không
                                </button>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </>
    );
}
