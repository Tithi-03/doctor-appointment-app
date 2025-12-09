// "use client"

// import { useState } from "react"
// import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"

// const doctorId = "doc-001" // In real app, get from auth/session

// const initialAppointments = [
//   { id: 1, patient: "John Doe", time: "09:00 AM", status: "Pending" },
//   { id: 2, patient: "Jane Smith", time: "10:30 AM", status: "Pending" },
//   { id: 3, patient: "Bob Johnson", time: "02:00 PM", status: "Accepted" },
// ]

// const initialSlots = ["09:00 AM", "10:30 AM", "02:00 PM", "03:30 PM"]

// export default function DoctorDashboardPage() {
//   const [appointments, setAppointments] = useState(initialAppointments)
//   const [slots, setSlots] = useState(initialSlots)
//   const [newSlot, setNewSlot] = useState("")

//   const handleAccept = (id: number) => {
//     setAppointments(apps =>
//       apps.map(app => app.id === id ? { ...app, status: "Accepted" } : app)
//     )
//   }

//   const handleReschedule = (id: number, newTime: string) => {
//     setAppointments(apps =>
//       apps.map(app => app.id === id ? { ...app, time: newTime, status: "Rescheduled" } : app)
//     )
//   }

//   const handleAddSlot = () => {
//     if (newSlot && !slots.includes(newSlot)) {
//       setSlots([...slots, newSlot])
//       setNewSlot("")
//     }
//   }

//   return (
//     <main className="min-h-screen bg-background p-8">
//       <div className="max-w-4xl mx-auto">
//         <h1 className="text-3xl font-bold mb-6">Doctor Dashboard</h1>
//         <Card className="mb-8">
//           <CardHeader>
//             <CardTitle>My Appointments</CardTitle>
//             <CardDescription>Review, accept, or reschedule your appointments</CardDescription>
//           </CardHeader>
//           <CardContent>
//             <div className="space-y-4">
//               {appointments.map(app => (
//                 <div key={app.id} className="flex items-center justify-between p-4 border rounded-lg">
//                   <div>
//                     <p className="font-medium">{app.patient}</p>
//                     <p className="text-sm text-muted-foreground">Time: {app.time}</p>
//                     <p className="text-xs text-muted-foreground">Status: {app.status}</p>
//                   </div>
//                   <div className="flex gap-2">
//                     {app.status === "Pending" && (
//                       <Button size="sm" onClick={() => handleAccept(app.id)}>
//                         Accept
//                       </Button>
//                     )}
//                     <RescheduleButton
//                       currentTime={app.time}
//                       onReschedule={newTime => handleReschedule(app.id, newTime)}
//                     />
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </CardContent>
//         </Card>

//         <Card>
//           <CardHeader>
//             <CardTitle>Set Available Time Slots</CardTitle>
//             <CardDescription>Manage your available slots for appointments</CardDescription>
//           </CardHeader>
//           <CardContent>
//             <div className="mb-4 flex gap-2">
//               <Input
//                 placeholder="e.g. 04:00 PM"
//                 value={newSlot}
//                 onChange={e => setNewSlot(e.target.value)}
//               />
//               <Button onClick={handleAddSlot}>Add Slot</Button>
//             </div>
//             <div className="flex flex-wrap gap-2">
//               {slots.map(slot => (
//                 <span key={slot} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
//                   {slot}
//                 </span>
//               ))}
//             </div>
//           </CardContent>
//         </Card>
//       </div>
//     </main>
//   )
// }

// // RescheduleButton component
// function RescheduleButton({
//   currentTime,
//   onReschedule,
// }: {
//   currentTime: string
//   onReschedule: (newTime: string) => void
// }) {
//   const [showInput, setShowInput] = useState(false)
//   const [newTime, setNewTime] = useState(currentTime)

//   return showInput ? (
//     <div className="flex gap-2">
//       <Input
//         value={newTime}
//         onChange={e => setNewTime(e.target.value)}
//         className="w-24"
//         placeholder="New Time"
//       />
//       <Button
//         size="sm"
//         onClick={() => {
//           onReschedule(newTime)
//           setShowInput(false)
//         }}
//       >
//         Save
//       </Button>
//       <Button size="sm" variant="outline" onClick={() => setShowInput(false)}>
//         Cancel
//       </Button>
//     </div>
//   ) : (
//     <Button size="sm" variant="outline" onClick={() => setShowInput(true)}>
//       Reschedule
//     </Button>
//   )
// }
