
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function DoctorAppointmentsPage() {
  const appointments = [
    { id: 1, patient: "John Doe", date: "2025-01-15", time: "10:00 AM", status: "Completed" },
    { id: 2, patient: "Jane Smith", date: "2025-01-16", time: "02:00 PM", status: "Pending" },
    { id: 3, patient: "Bob Johnson", date: "2025-01-17", time: "03:30 PM", status: "Confirmed" },
  ]

  return (
    <div className="max-w-7xl bg-blue-50 p-6 rounded-lg">
      <h1 className="text-3xl font-bold mb-8">My Appointments</h1>

      <Card>
        <CardHeader>
          <CardTitle className="pt-6">Appointment Schedule</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="border-b">
                <tr>
                  <th className="text-left py-3 px-4">Patient</th>
                  <th className="text-left py-3 px-4">Date</th>
                  <th className="text-left py-3 px-4">Time</th>
                  <th className="text-left py-3 px-4">Status</th>
                  <th className="text-left py-3 px-4">Actions</th>
                </tr>
              </thead>
              <tbody>
                {appointments.map((apt) => (
                  <tr key={apt.id} className="border-b hover:bg-muted/50">
                    <td className="py-3 px-4">{apt.patient}</td>
                    <td className="py-3 px-4">{apt.date}</td>
                    <td className="py-3 px-4">{apt.time}</td>
                    <td className="py-3 px-4">
                      <span
                        className={`px-2 py-1 rounded text-sm ${apt.status === "Completed" ? "bg-green-100 text-green-800" : apt.status === "Pending" ? "bg-yellow-100 text-yellow-800" : "bg-blue-100 text-blue-800"}`}
                      >
                        {apt.status}
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      <Button variant="outline" size="sm">
                        View
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
