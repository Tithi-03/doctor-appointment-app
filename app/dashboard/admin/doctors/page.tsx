"use client"
import React from "react"
import { Sidebar } from "@/components/sidebar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function AdminDoctorsPage() {
  const [doctors, setDoctors] = React.useState([
    { id: 1, name: "Dr. Sarah Johnson", specialty: "Cardiologist", status: "Active", patients: 45 },
    { id: 2, name: "Dr. Michael Chen", specialty: "Neurologist", status: "Active", patients: 32 },
    { id: 3, name: "Dr. Emily Rodriguez", specialty: "Dermatologist", status: "Active", patients: 28 },
  ])

  const [showAddDialog, setShowAddDialog] = React.useState(false)
  const [newDoctor, setNewDoctor] = React.useState({
    name: "",
    specialty: "",
    status: "Active",
    patients: ""
  })

  const [showEditDialog, setShowEditDialog] = React.useState(false)
  const [editDoctor, setEditDoctor] = React.useState({ id: 0, name: "", specialty: "", status: "Active", patients: "" })

  const handleAddDoctor = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    if (!newDoctor.name || !newDoctor.specialty || !newDoctor.patients) return
    setDoctors(prev => [
      ...prev,
      {
        id: prev.length ? prev[prev.length - 1].id + 1 : 1,
        name: newDoctor.name,
        specialty: newDoctor.specialty,
        status: newDoctor.status,
        patients: Number(newDoctor.patients)
      }
    ])
    setNewDoctor({ name: "", specialty: "", status: "Active", patients: "" })
    setShowAddDialog(false)
  }

  const handleEditDoctor = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    setDoctors(prev => prev.map(d => d.id === editDoctor.id ? {
      ...d,
      name: editDoctor.name,
      specialty: editDoctor.specialty,
      status: editDoctor.status,
      patients: Number(editDoctor.patients)
    } : d))
    setShowEditDialog(false)
  }

  return (
    <div className="flex min-h-screen">
      <Sidebar role="admin" />
      <main className="flex-1 bg-background p-8" style={{ marginLeft: "16rem" }}>
        <div className="max-w-7xl">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold">Manage Doctors</h1>
            <Button onClick={() => setShowAddDialog(true)} className="bg-blue-500 hover:bg-blue-600 text-white">Add New Doctor</Button>
            {/* Add Doctor Dialog */}
            <Card style={{ display: showAddDialog ? 'block' : 'none', position: 'absolute', zIndex: 50, left: 0, right: 0, margin: 'auto', maxWidth: 400, top: 100 }}>
              <CardHeader>
                <CardTitle>Add New Doctor</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleAddDoctor} className="space-y-4 pt-2">
                  <input
                    type="text"
                    placeholder="Doctor Name"
                    value={newDoctor.name}
                    onChange={e => setNewDoctor({ ...newDoctor, name: e.target.value })}
                    required
                    className="w-full border rounded px-2 py-1"
                  />
                  <input
                    type="text"
                    placeholder="Specialty"
                    value={newDoctor.specialty}
                    onChange={e => setNewDoctor({ ...newDoctor, specialty: e.target.value })}
                    required
                    className="w-full border rounded px-2 py-1"
                  />
                  <input
                    type="number"
                    placeholder="Patients"
                    value={newDoctor.patients}
                    onChange={e => setNewDoctor({ ...newDoctor, patients: e.target.value })}
                    required
                    className="w-full border rounded px-2 py-1"
                  />
                  <div className="flex gap-2">
                    <Button type="submit" className="w-full">Add Doctor</Button>
                    <Button type="button" variant="outline" className="w-full" onClick={() => setShowAddDialog(false)}>Cancel</Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="pt-4" >Registered Doctors</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="border-b">
                    <tr>
                      <th className="text-left py-3 px-4">Name</th>
                      <th className="text-left py-3 px-4">Specialty</th>
                      <th className="text-left py-3 px-4">Status</th>
                      <th className="text-left py-3 px-4">Patients</th>
                      <th className="text-left py-3 px-4">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {doctors.map((doctor) => (
                      <tr key={doctor.id} className="border-b hover:bg-muted/50">
                        <td className="py-3 px-4">{doctor.name}</td>
                        <td className="py-3 px-4">{doctor.specialty}</td>
                        <td className="py-3 px-4">
                          <span className="px-2 py-1 bg-green-100 text-green-800 rounded text-sm">{doctor.status}</span>
                        </td>
                        <td className="py-3 px-4">{doctor.patients}</td>
                        <td className="py-3 px-4">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => {
                              setEditDoctor({
                                id: doctor.id,
                                name: doctor.name,
                                specialty: doctor.specialty,
                                status: doctor.status,
                                patients: doctor.patients.toString()
                              })
                              setShowEditDialog(true)
                            }}
                          >
                            Edit
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        {/* Edit Doctor Dialog */}
        <Card style={{ display: showEditDialog ? 'block' : 'none', position: 'absolute', zIndex: 50, left: 0, right: 0, margin: 'auto', maxWidth: 400, top: 100 }}>
          <CardHeader>
            <CardTitle>Edit Doctor</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleEditDoctor} className="space-y-4 pt-2">
              <input
                type="text"
                placeholder="Doctor Name"
                value={editDoctor.name}
                onChange={e => setEditDoctor({ ...editDoctor, name: e.target.value })}
                required
                className="w-full border rounded px-2 py-1"
              />
              <input
                type="text"
                placeholder="Specialty"
                value={editDoctor.specialty}
                onChange={e => setEditDoctor({ ...editDoctor, specialty: e.target.value })}
                required
                className="w-full border rounded px-2 py-1"
              />
              <input
                type="number"
                placeholder="Patients"
                value={editDoctor.patients}
                onChange={e => setEditDoctor({ ...editDoctor, patients: e.target.value })}
                required
                className="w-full border rounded px-2 py-1"
              />
              <div className="flex gap-2">
                <Button type="submit" className="w-full">Save Changes</Button>
                <Button type="button" variant="outline" className="w-full" onClick={() => setShowEditDialog(false)}>Cancel</Button>
              </div>
            </form>
          </CardContent>
        </Card>
        </div>
      </main>
    </div>
  )
}

