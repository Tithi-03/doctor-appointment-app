"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"


import { useState } from "react"

export default function PatientAppointmentsPage() {
  const [appointments, setAppointments] = useState([
    {
      id: 1,
      doctor: "Dr. Sarah Johnson",
      date: "2025-01-15",
      time: "10:00 AM",
      status: "Confirmed",
      notes: "Cardiology checkup",
    },
    {
      id: 2,
      doctor: "Dr. Michael Chen",
      date: "2025-01-20",
      time: "02:00 PM",
      status: "Confirmed",
      notes: "Neurological evaluation",
    },
    {
      id: 3,
      doctor: "Dr. Emily Rodriguez",
      date: "2025-01-25",
      time: "03:30 PM",
      status: "Pending",
      notes: "Skin consultation",
    },
  ])

  const handleCancel = (id: number) => {
    setAppointments((prev) => prev.filter((apt) => apt.id !== id))
  }

  return (
    <div className="max-w-7xl bg-blue-50 p-6 rounded-lg">
      <h1 className="text-3xl font-bold mb-8">My Appointments</h1>

      <Card>
        <CardHeader>
          <CardTitle className="pt-6">Appointment History</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="border-b">
                <tr>
                  <th className="text-left py-3 px-4">Doctor</th>
                  <th className="text-left py-3 px-4">Date</th>
                  <th className="text-left py-3 px-4">Time</th>
                  <th className="text-left py-3 px-4">Status</th>
                  <th className="text-left py-3 px-4">Actions</th>
                </tr>
              </thead>
              <tbody>
                {appointments.map((apt) => (
                  <tr key={apt.id} className="border-b hover:bg-muted/50">
                    <td className="py-3 px-4">{apt.doctor}</td>
                    <td className="py-3 px-4">{apt.date}</td>
                    <td className="py-3 px-4">{apt.time}</td>
                    <td className="py-3 px-4">
                      <span
                        className={`px-2 py-1 rounded text-sm ${apt.status === "Confirmed" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"}`}
                      >
                        {apt.status}
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      <Button variant="outline" size="sm" className="mr-2 bg-transparent">
                        Reschedule
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleCancel(apt.id)}
                      >
                        Cancel
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
