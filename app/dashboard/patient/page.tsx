
"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { routes } from "@/lib/routes"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Camera } from "lucide-react"
import { useState } from "react"

export default function PatientDashboard() {
  const [patientName] = useState("John Doe")
  const [profileImage, setProfileImage] = useState<string>("")

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setProfileImage(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const stats = [
    { label: "Upcoming Appointments", value: "2", change: "Next: Tomorrow" },
    { label: "Completed Visits", value: "8", change: "This year" },
    { label: "Total Doctors", value: "3", change: "In your network" },
  ]

  return (
    <div className="max-w-7xl bg-blue-50 p-6 rounded-lg">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Welcome Back, Patient!</h1>
        <div className="flex items-center gap-3">
          <span className="font-semibold text-lg">{patientName}</span>
          <div className="relative">
            <Avatar className="w-12 h-12 cursor-pointer">
              <AvatarImage src={profileImage} />
              <AvatarFallback>{patientName.split(' ').map(n => n[0]).join('')}</AvatarFallback>
            </Avatar>
            <label htmlFor="profile-upload" className="absolute bottom-0 right-0 bg-blue-500 text-white rounded-full p-1 cursor-pointer hover:bg-blue-600">
              <Camera size={14} />
            </label>
            <input
              id="profile-upload"
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleImageUpload}
            />
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-4 mb-8">
        {stats.map((stat) => (
          <Card key={stat.label}>
            <CardHeader className="pt-4">
              <CardTitle className="text-sm font-medium text-muted-foreground">{stat.label}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground mt-1 pb-4">{stat.change}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="pt-6">Upcoming Appointments</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4 pb-12">
            {[
              { doctor: "Dr. Sarah Johnson", date: "Tomorrow", time: "10:00 AM", specialty: "Cardiologist" },
              { doctor: "Dr. Michael Chen", date: "Jan 20", time: "02:00 PM", specialty: "Neurologist" },
            ].map((apt, i) => (
              <div key={i} className="flex items-center justify-between p-4 border border-border rounded">
                <div>
                  <p className="font-semibold">{apt.doctor}</p>
                  <p className="text-sm text-muted-foreground">
                    {apt.specialty} • {apt.date} at {apt.time}
                  </p>
                </div>
                <Button variant="outline" size="sm">
                  Reschedule
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="mt-8">
        <Link href={routes.dashboard.patient.searchDoctor}>
          <Button className="bg-blue-500 hover:bg-blue-600 text-white">Book New Appointment</Button>
        </Link>
      </div>
    </div>
  )
}
