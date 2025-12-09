import { Sidebar } from "@/components/sidebar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function AdminReportsPage() {
  return (
    <div className="flex min-h-screen">
      <Sidebar role="admin" />
      <main className="flex-1 bg-blue-50 p-8" style={{ marginLeft: "16rem" }}>
        <div className="max-w-7xl">
          <h1 className="text-3xl font-bold mb-8">Reports</h1>

          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="pt-6">Appointment Analytics</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Total Appointments</span>
                    <span className="font-semibold">2,456</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Completed</span>
                    <span className="font-semibold">2,201</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Cancelled</span>
                    <span className="font-semibold">145</span>
                  </div>
                  <div className="flex justify-between pb-6">
                    <span>No-shows</span>
                    <span className="font-semibold">110</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="pt-6">Revenue Report</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Total Revenue</span>
                    <span className="font-semibold">$156,800</span>
                  </div>
                  <div className="flex justify-between">
                    <span>This Month</span>
                    <span className="font-semibold">$12,450</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Pending Payments</span>
                    <span className="font-semibold">$2,340</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Commission Paid</span>
                    <span className="font-semibold">$31,360</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
