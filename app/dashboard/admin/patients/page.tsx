"use client"

import { Sidebar } from "@/components/sidebar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import { useState } from "react"

export default function AdminPatientsPage() {
  const patients = [
    { id: 1, name: "John Doe", email: "john@example.com", phone: "555-0101", appointments: 3 },
    { id: 2, name: "Jane Smith", email: "jane@example.com", phone: "555-0102", appointments: 5 },
    { id: 3, name: "Bob Johnson", email: "bob@example.com", phone: "555-0103", appointments: 2 },
  ]

  const [showDetailsDialog, setShowDetailsDialog] = useState(false)
  const [selectedPatient, setSelectedPatient] = useState<typeof patients[0] | null>(null)

  const handleDownload = () => {
    const csvContent = [
      ['ID', 'Name', 'Email', 'Phone', 'Appointments'],
      ...patients.map(p => [p.id, p.name, p.email, p.phone, p.appointments])
    ].map(row => row.join(',')).join('\n')

    const blob = new Blob([csvContent], { type: 'text/csv' })
    const url = window.URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = `patients-list-${new Date().toISOString().split('T')[0]}.csv`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    window.URL.revokeObjectURL(url)
  }

  return (
    <div className="flex min-h-screen">
      <Sidebar role="admin" />
      <main className="flex-1 bg-blue-50 p-8" style={{ marginLeft: "16rem" }}>
        <div className="max-w-7xl">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold">Manage Patients</h1>
            <Button 
              className="bg-blue-500 hover:bg-blue-600 text-white"
              onClick={handleDownload}
            >
              Download
            </Button>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="pt-6">Patient List</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="border-b">
                    <tr>
                      <th className="text-left py-3 px-4">Name</th>
                      <th className="text-left py-3 px-4">Email</th>
                      <th className="text-left py-3 px-4">Phone</th>
                      <th className="text-left py-3 px-4">Appointments</th>
                      <th className="text-left py-3 px-4">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {patients.map((patient) => (
                      <tr key={patient.id} className="border-b hover:bg-muted/50">
                        <td className="py-3 px-4">{patient.name}</td>
                        <td className="py-3 px-4">{patient.email}</td>
                        <td className="py-3 px-4">{patient.phone}</td>
                        <td className="py-3 px-4">{patient.appointments}</td>
                        <td className="py-3 px-4">
                          <Button 
                            variant="outline" 
                            size="sm"
                            onClick={() => {
                              setSelectedPatient(patient)
                              setShowDetailsDialog(true)
                            }}
                          >
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

        {/* Patient Details Dialog */}
        <Dialog open={showDetailsDialog} onOpenChange={setShowDetailsDialog}>
          <DialogContent className="max-w-2xl">
            {selectedPatient && (
              <>
                <DialogHeader>
                  <DialogTitle className="text-2xl">{selectedPatient.name}</DialogTitle>
                </DialogHeader>
                <div className="space-y-4 pt-2">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <div className="text-sm text-muted-foreground">Patient ID</div>
                      <div className="font-semibold">#{selectedPatient.id}</div>
                    </div>
                    <div className="space-y-2">
                      <div className="text-sm text-muted-foreground">Total Appointments</div>
                      <div className="font-semibold">{selectedPatient.appointments}</div>
                    </div>
                  </div>
                  <div className="border-t pt-4">
                    <div className="text-sm text-muted-foreground mb-2">Contact Information</div>
                    <div className="space-y-1 text-sm">
                      <div>Email: {selectedPatient.email}</div>
                      <div>Phone: {selectedPatient.phone}</div>
                    </div>
                  </div>
                  <div className="border-t pt-4">
                    <div className="text-sm text-muted-foreground mb-2">Status</div>
                    <p className="text-sm">
                      Active patient with {selectedPatient.appointments} completed appointments.
                    </p>
                  </div>
                </div>
                <DialogFooter className="pt-4">
                  <Button variant="outline" onClick={() => setShowDetailsDialog(false)}>Close</Button>
                </DialogFooter>
              </>
            )}
          </DialogContent>
        </Dialog>
      </main>
    </div>
  )
}
