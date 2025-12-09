import { Sidebar } from "@/components/sidebar"

export default function PatientDashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="flex min-h-screen">
            <Sidebar role="patient" />
            <main className="flex-1 bg-background p-8 ml-64">
                {children}
            </main>
        </div>
    )
}
