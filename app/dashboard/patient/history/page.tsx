
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function PatientHistoryPage() {
  const history = [
    {
      id: 1,
      doctor: "Dr. Sarah Johnson",
      date: "2024-12-20",
      specialty: "Cardiologist",
      notes: "Regular checkup - All good",
    },
    {
      id: 2,
      doctor: "Dr. Michael Chen",
      date: "2024-11-15",
      specialty: "Neurologist",
      notes: "Follow-up visit - Improving",
    },
    {
      id: 3,
      doctor: "Dr. Emily Rodriguez",
      date: "2024-10-10",
      specialty: "Dermatologist",
      notes: "Treatment consultation",
    },
  ]

  return (
    <div className="max-w-7xl bg-blue-50 p-6 rounded-lg">
      <h1 className="text-3xl font-bold mb-8">Medical History</h1>

      <Card>
        <CardHeader>
          <CardTitle className="pt-6">Past Appointments</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4 pb-6">
            {history.map((record) => (
              <div key={record.id} className="p-4 border border-border rounded">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <p className="font-semibold">{record.doctor}</p>
                    <p className="text-sm text-muted-foreground">
                      {record.specialty} • {record.date}
                    </p>
                  </div>
                  <Button variant="outline" size="sm">
                    View Details
                  </Button>
                </div>
                <p className="text-sm text-muted-foreground mt-3">{record.notes}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
