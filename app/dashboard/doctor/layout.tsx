import { Sidebar } from "@/components/sidebar"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function DoctorDashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="flex min-h-screen">
            <Sidebar role="doctor" />
            <main className="flex-1 bg-background ml-64">
                <header className="flex justify-end items-center p-4 border-b bg-white/50 backdrop-blur-sm sticky top-0 z-10">
                    <div className="flex items-center gap-2">
                        <span className="text-sm font-medium text-muted-foreground mr-2">Dr. Sarah Johnson</span>
                        <Avatar>
                            <AvatarImage src="https://github.com/shadcn.png" alt="Dr. Sarah" />
                            <AvatarFallback>DR</AvatarFallback>
                        </Avatar>
                    </div>
                </header>
                <div className="p-8">
                    {children}
                </div>
            </main>
        </div>
    )
}
