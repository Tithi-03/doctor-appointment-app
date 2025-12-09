
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { routes } from "@/lib/routes"

export default function PatientSearchDoctorPage() {
  const doctors = [
    { id: 1, name: "Dr. Sarah Johnson", specialty: "Cardiologist", rating: 4.8 },
    { id: 2, name: "Dr. Michael Chen", specialty: "Neurologist", rating: 4.7 },
    { id: 3, name: "Dr. Emily Rodriguez", specialty: "Dermatologist", rating: 4.9 },
  ]

  return (
    <div className="max-w-7xl bg-blue-50 p-6 rounded-lg">
      <h1 className="text-3xl font-bold mb-8">Search for Doctors</h1>

      <Card>
        <CardHeader>
          <CardTitle className="pt-6">Available Doctors</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4 pb-12">
            {doctors.map((doctor) => (
              <div
                key={doctor.id}
                className="flex items-center justify-between p-4 border border-border rounded hover:bg-muted/50"
              >
                <div>
                  <p className="font-semibold">{doctor.name}</p>
                  <p className="text-sm text-muted-foreground">{doctor.specialty}</p>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-sm">⭐ {doctor.rating}</span>
                  <Link href={routes.doctors.details(doctor.id.toString())}>
                    <Button>Book Now</Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
