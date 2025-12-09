"use client"

import { Sidebar } from "@/components/sidebar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
// import MoreVertical from "lucide-react/dist/esm/icons/more-vertical"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Dialog } from "@/components/ui/dialog"
import { DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import { useState } from "react"
import { MoreVertical } from "lucide-react"

export default function AdminDashboard() {
  const stats = [
    { label: "Total Doctors", value: "128", change: "+12 this month", icon: "👨‍⚕️" },
    { label: "Total Patients", value: "1,245", change: "+89 this month", icon: "👥" },
    { label: "Appointments Today", value: "42", change: "8 completed", icon: "📅" },
    { label: "Revenue", value: "$12,450", change: "+15% this month", icon: "💰" },
  ]

  const [recentDoctors, setRecentDoctors] = useState([
    { id: 1, name: "Dr. Sarah Johnson", specialization: "Cardiology", patients: 156, rating: 4.8 },
    { id: 2, name: "Dr. Michael Brown", specialization: "Neurology", patients: 142, rating: 4.9 },
    { id: 3, name: "Dr. Emily Davis", specialization: "Pediatrics", patients: 198, rating: 4.7 },
    { id: 4, name: "Dr. James Wilson", specialization: "Orthopedics", patients: 124, rating: 4.6 },
    { id: 5, name: "Dr. Lisa Anderson", specialization: "Dermatology", patients: 89, rating: 4.8 },
  ])

  const [showAddDialog, setShowAddDialog] = useState(false)
  const [newDoctor, setNewDoctor] = useState({
    name: "",
    specialization: "",
    patients: "",
    rating: ""
  })

  const [showDetailsDialog, setShowDetailsDialog] = useState(false)
  const [selectedDoctor, setSelectedDoctor] = useState<typeof recentDoctors[0] | null>(null)

  const handleAddDoctor = (e: React.FormEvent) => {
    e.preventDefault()
    if (!newDoctor.name || !newDoctor.specialization || !newDoctor.patients || !newDoctor.rating) return
    setRecentDoctors((prev) => [
      ...prev,
      {
        id: prev.length ? prev[prev.length - 1].id + 1 : 1,
        name: newDoctor.name,
        specialization: newDoctor.specialization,
        patients: Number(newDoctor.patients),
        rating: Number(newDoctor.rating)
      }
    ])
    setNewDoctor({ name: "", specialization: "", patients: "", rating: "" })
    setShowAddDialog(false)
  }

  const upcomingAppointments = [
    { id: 1, patient: "John Smith", doctor: "Dr. Sarah Johnson", time: "10:30 AM", date: "Today", status: "Confirmed" },
    { id: 2, patient: "Jane Doe", doctor: "Dr. Michael Brown", time: "11:00 AM", date: "Today", status: "Confirmed" },
    { id: 3, patient: "Robert Lee", doctor: "Dr. Emily Davis", time: "2:00 PM", date: "Today", status: "Pending" },
    { id: 4, patient: "Maria Garcia", doctor: "Dr. James Wilson", time: "3:30 PM", date: "Today", status: "Confirmed" },
  ]

  const recentActivity = [
    "New doctor Dr. Alex registered",
    "Patient John booked appointment",
    "Dr. Sarah completed 5 appointments",
    "Payment received from insurance",
    "System maintenance completed",
  ]

  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar role="admin" />
      <main className="flex-1 p-8 overflow-auto bg-blue-50" style={{ marginLeft: "16rem" }}>
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-foreground">Admin Dashboard</h1>
            <p className="text-muted-foreground mt-2">Welcome back! Here's your clinic overview.</p>
          </div>

          {/* Stats Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-2 mb-8">
            {stats.map((stat) => (
              <Card key={stat.label} className="hover:shadow-lg transition-shadow">
                <CardHeader className="pb-2 pt-4">
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-sm font-medium text-muted-foreground">{stat.label}</CardTitle>
                    <span className="text-2xl">{stat.icon}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                  <p className="text-xs text-green-600 mt-1 pb-2">✓ {stat.change}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-3 gap-6">
            {/* Recent Appointments */}
            <div className="lg:col-span-2" >
              <Card>
                <CardHeader>
                  <CardTitle  className="pt-4">Today's Appointments</CardTitle>
                  <CardDescription>Manage and track all appointments for today</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4 pb-4">
                    {upcomingAppointments.map((apt) => (
                      <div
                        key={apt.id}
                        className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted transition-colors"
                      >
                        <div className="flex-1">
                          <p className="font-medium text-foreground">{apt.patient}</p>
                          <p className="text-sm text-muted-foreground">{apt.doctor}</p>
                        </div>
                        <div className="text-right mr-4">
                          <p className="font-medium text-foreground">{apt.time}</p>
                          <p className={`text-xs ${apt.status === "Confirmed" ? "text-green-600" : "text-yellow-600"}`}>
                            {apt.status}
                          </p>
                        </div>
                        <Button variant="ghost" size="sm">
                          <MoreVertical className="w-4 h-4" />
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Recent Activity */}
            <div>
              <Card>
                <CardHeader>
                  <CardTitle className="pt-4">Recent Activity</CardTitle>
                  <CardDescription>Platform updates</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4 pb-4">
                    {recentActivity.map((activity, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-sm text-foreground">{activity}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Top Doctors */}
          <Card className="mt-6">
            <CardHeader>
              <CardTitle className="pt-4">Doctors</CardTitle>
              <CardDescription>Best performing doctors based on patient ratings</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-2 px-4 font-semibold">Doctor Name</th>
                      <th className="text-left py-2 px-4 font-semibold">Specialization</th>
                      <th className="text-left py-2 px-4 font-semibold">Active Patients</th>
                      <th className="text-left py-2 px-4 font-semibold">Rating</th>
                      <th className="text-left py-2 px-4 font-semibold">Action</th>
                      <th className="text-left py-2 px-4 font-semibold">Remove</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentDoctors.map((doctor) => (
                      <tr key={doctor.id} className="border-b hover:bg-muted transition-colors">
                        <td className="py-3 px-4 font-medium">{doctor.name}</td>
                        <td className="py-3 px-4 text-muted-foreground">{doctor.specialization}</td>
                        <td className="py-3 px-4">{doctor.patients}</td>
                        <td className="py-3 px-4">
                          <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">
                            {doctor.rating}
                          </span>
                        </td>
                        <td className="py-3 px-4">
                          <Button 
                            variant="outline" 
                            size="sm"
                            onClick={() => {
                              setSelectedDoctor(doctor)
                              setShowDetailsDialog(true)
                            }}
                          >
                            View Details
                          </Button>
                        </td>
                        <td className="py-3 px-4">
                          <Button
                            variant="destructive"
                            size="sm"
                            className="transition-transform duration-150 hover:scale-105 hover:shadow-lg"
                            onClick={() => setRecentDoctors(prev => prev.filter(d => d.id !== doctor.id))}
                          >
                            Remove
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <Button
                size="lg"
                className="w-full mt-4 flex justify-center items-center pt-1 bg-blue-400 text-white pr-2"
                onClick={() => setShowAddDialog(true)}
              >
                Add Doctor
              </Button>
            </CardContent>
          </Card>
          
          {/* Add Doctor Dialog */}
          <Dialog open={showAddDialog} onOpenChange={setShowAddDialog}>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Add New Doctor</DialogTitle>
                  </DialogHeader>
                  <form onSubmit={handleAddDoctor} className="space-y-4 pt-2">
                    <Input
                      type="text"
                      placeholder="Doctor Name"
                      value={newDoctor.name}
                      onChange={e => setNewDoctor({ ...newDoctor, name: e.target.value })}
                      required
                    />
                    <Input
                      type="text"
                      placeholder="Specialization"
                      value={newDoctor.specialization}
                      onChange={e => setNewDoctor({ ...newDoctor, specialization: e.target.value })}
                      required
                    />
                    <Input
                      type="number"
                      placeholder="Active Patients"
                      value={newDoctor.patients}
                      onChange={e => setNewDoctor({ ...newDoctor, patients: e.target.value })}
                      required
                    />
                    <Input
                      type="number"
                      step="0.1"
                      min="0"
                      max="5"
                      placeholder="Rating (0-5)"
                      value={newDoctor.rating}
                      onChange={e => setNewDoctor({ ...newDoctor, rating: e.target.value })}
                      required
                    />
                    <DialogFooter>
                      <Button type="submit" size="lg" className="w-full">Add Doctor</Button>
                    </DialogFooter>
                  </form>
                </DialogContent>
              </Dialog>

              {/* Doctor Details Dialog */}
              <Dialog open={showDetailsDialog} onOpenChange={setShowDetailsDialog}>
                <DialogContent className="max-w-2xl">
                  {selectedDoctor && (
                    <>
                      <DialogHeader>
                        <DialogTitle className="text-2xl">{selectedDoctor.name}</DialogTitle>
                      </DialogHeader>
                      <div className="space-y-4 pt-2">
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <div className="text-sm text-muted-foreground">Specialization</div>
                            <div className="font-semibold">{selectedDoctor.specialization}</div>
                          </div>
                          <div className="space-y-2">
                            <div className="text-sm text-muted-foreground">Active Patients</div>
                            <div className="font-semibold">{selectedDoctor.patients}</div>
                          </div>
                          <div className="space-y-2">
                            <div className="text-sm text-muted-foreground">Rating</div>
                            <div className="font-semibold">⭐ {selectedDoctor.rating}</div>
                          </div>
                          <div className="space-y-2">
                            <div className="text-sm text-muted-foreground">Doctor ID</div>
                            <div className="font-semibold">#{selectedDoctor.id}</div>
                          </div>
                        </div>
                        <div className="border-t pt-4">
                          <div className="text-sm text-muted-foreground mb-2">About</div>
                          <p className="text-sm">
                            Experienced {selectedDoctor.specialization.toLowerCase()} specialist with a proven track record 
                            of providing excellent patient care. Currently managing {selectedDoctor.patients} active patients 
                            with a rating of {selectedDoctor.rating}/5.0.
                          </p>
                        </div>
                        <div className="border-t pt-4">
                          <div className="text-sm text-muted-foreground mb-2">Contact Information</div>
                          <div className="space-y-1 text-sm">
                            <div>Email: {selectedDoctor.name.toLowerCase().replace(/\s+/g, '.')}@clinic.com</div>
                            <div>Phone: +1 (555) {1000 + selectedDoctor.id * 111}</div>
                          </div>
                        </div>
                      </div>
                      <DialogFooter className="pt-4">
                        <Button variant="outline" onClick={() => setShowDetailsDialog(false)}>Close</Button>
                      </DialogFooter>
                    </>
                  )}
                </DialogContent>
              </Dialog>
        </div>
      </main>
    </div>
  )
}
