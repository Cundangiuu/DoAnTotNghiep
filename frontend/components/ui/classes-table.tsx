import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Pencil } from "lucide-react"
import Link from "next/link"

interface ClassData {
    code: string
    name: string
    schedule: string
    location: string
    nextClassLesson: string
    academicStaff: {
        name: string
        avatar: string
        initials: string
    }
}

const classesData: ClassData[] = [
    {
        code: "CLA-091224001",
        name: "Starter 2 - K22",
        schedule: "MF-1730-1940",
        location: "Branch 1 - Room 2",
        nextClassLesson: "class_day_id",
        academicStaff: {
            name: "Ms. Jane",
            avatar: "/placeholder-user.jpg",
            initials: "MJ",
        },
    },
    {
        code: "CLA-091224002",
        name: "Starter 3 - K55",
        schedule: "TTh-1730-1940",
        location: "Branch 2 - Room 1",
        nextClassLesson: "class_day_id",
        academicStaff: {
            name: "Ms. April",
            avatar: "/placeholder-user.jpg",
            initials: "MA",
        },
    },
]

export default function ClassesTable() {
    return (
        <div className="border rounded-md overflow-hidden">
            <table className="w-full">
                <thead>
                    <tr className="bg-gray-50 border-b">
                        <th className="text-left py-3 px-4 font-medium text-sm text-gray-500">Code</th>
                        <th className="text-left py-3 px-4 font-medium text-sm text-gray-500">Name</th>
                        <th className="text-left py-3 px-4 font-medium text-sm text-gray-500">Schedule</th>
                        <th className="text-left py-3 px-4 font-medium text-sm text-gray-500">Location</th>
                        <th className="text-left py-3 px-4 font-medium text-sm text-gray-500">Next Class Lesson</th>
                        <th className="text-left py-3 px-4 font-medium text-sm text-gray-500">Academic Staff</th>
                        <th className="text-left py-3 px-4 font-medium text-sm text-gray-500">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {classesData.map((classItem) => (
                        <tr key={classItem.code} className="border-b hover:bg-gray-50">
                            <td className="py-3 px-4">
                                <Link href="#" className="text-blue-600 hover:underline">
                                    {classItem.code}
                                </Link>
                            </td>
                            <td className="py-3 px-4">{classItem.name}</td>
                            <td className="py-3 px-4">{classItem.schedule}</td>
                            <td className="py-3 px-4">{classItem.location}</td>
                            <td className="py-3 px-4">{classItem.nextClassLesson}</td>
                            <td className="py-3 px-4">
                                <div className="flex items-center gap-2">
                                    <Avatar className="h-8 w-8">
                                        <AvatarImage
                                            src={classItem.academicStaff.avatar || "/placeholder.svg"}
                                            alt={classItem.academicStaff.name}
                                        />
                                        <AvatarFallback>{classItem.academicStaff.initials}</AvatarFallback>
                                    </Avatar>
                                    <span>{classItem.academicStaff.name}</span>
                                </div>
                            </td>
                            <td className="py-3 px-4">
                                <Button variant="ghost" size="icon">
                                    <Pencil className="h-4 w-4" />
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
