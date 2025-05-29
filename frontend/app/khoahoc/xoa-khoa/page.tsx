"use client"

import { useState } from "react"
import {
    AlertDialog,
    AlertDialogTrigger,
    AlertDialogContent,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogFooter,
    AlertDialogCancel,
    AlertDialogAction,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"

export default function DeleteCourseSection() {
    const [deleting, setDeleting] = useState(false)

    const handleDelete = () => {
        setDeleting(true)
        // TODO: gọi API xóa ở đây
        setTimeout(() => {
            alert("Xóa thành công!") // Replace bằng logic thực tế
            setDeleting(false)
        }, 1000)
    }

    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <Button variant="destructive">Xóa khóa học</Button>
            </AlertDialogTrigger>
            <AlertDialogContent className="rounded-xl border bg-gray-50 p-6 shadow-lg">
                <AlertDialogHeader>
                    <AlertDialogTitle className="text-lg text-red-700 font-semibold">
                        Xác nhận xóa khóa học
                    </AlertDialogTitle>
                </AlertDialogHeader>
                <p className="text-sm text-gray-700 mt-2">
                    Bạn có chắc chắn muốn xóa khóa học này không? Hành động này sẽ không thể hoàn tác.
                </p>
                <AlertDialogFooter className="mt-6">
                    <AlertDialogAction
                        onClick={handleDelete}
                        disabled={deleting}
                        className="bg-red-600 hover:bg-red-700 text-white"
                    >
                        {deleting ? "Đang xóa..." : "Xác nhận xóa"}
                    </AlertDialogAction>
                    <AlertDialogCancel className="bg-white border hover:bg-gray-100 text-gray-700">
                        Hủy
                    </AlertDialogCancel>

                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}
