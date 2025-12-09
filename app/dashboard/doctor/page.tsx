
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function DoctorDashboard() {
  const stats = [
    { label: "Appointments Today", value: "8", change: "2 pending" },
    { label: "Total Patients", value: "156", change: "+5 this month" },
    { label: "Avg Rating", value: "4.8", change: "Excellent" },
    { label: "Revenue", value: "$2,450", change: "This month" },
  ]

  return (
    <div className="max-w-7xl bg-blue-50 p-6 rounded-lg">
      <h1 className="text-3xl font-bold mb-8">Doctor Dashboard</h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map((stat) => (
          <Card key={stat.label}>
            <CardHeader className="pb-2 pt-4">
              <CardTitle className="text-sm font-medium text-muted-foreground">{stat.label}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground mt-1 pb-2">{stat.change}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="pt-6">Upcoming Appointments</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4 pb-6">
            {[
              "10:00 AM - John Doe (Checkup)",
              "11:30 AM - Jane Smith (Follow-up)",
              "02:00 PM - Bob Johnson (Consultation)",
              "03:30 PM - Alice Brown (Review)",
            ].map((apt, i) => (
              <div key={i} className="flex items-center justify-between p-4 border border-border rounded">
                <span>{apt}</span>
                <button className="text-primary font-semibold text-sm">Details</button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
