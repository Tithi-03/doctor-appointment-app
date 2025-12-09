"use client"

import { routes } from "@/lib/routes"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { useState, use } from "react"

export default function DoctorDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)
  const allDoctors = [
    {
      id: "1",
      name: "Dr. Sarah Johnson",
      specialty: "Cardiologist",
      experience: 12,
      rating: 4.8,
      image: "/doctor-default.png",
      qualifications: ["MBBS", "MD - Cardiology", "Fellowship in Interventional Cardiology"],
      bio: "Dr. Sarah Johnson is a highly experienced cardiologist with over 12 years of practice in the field. She specializes in preventive cardiology, coronary artery disease, and heart failure management.",
      clinics: [
        { name: "City Heart Clinic", location: "123 Main St, Downtown" },
        { name: "Medical Center", location: "456 Oak Ave, Midtown" },
      ],
      availableSlots: ["09:00 AM", "10:30 AM", "02:00 PM", "03:30 PM"],
    },
    {
      id: "2",
      name: "Dr. Michael Chen",
      specialty: "Neurologist",
      experience: 8,
      rating: 4.7,
      image: "/doctor-default.png",
      qualifications: ["MBBS", "MD - Neurology", "Fellowship in Epilepsy"],
      bio: "Dr. Michael Chen is an expert neurologist specializing in brain disorders, stroke management, and neurodegenerative diseases. With 8 years of experience, he provides comprehensive neurological care.",
      clinics: [
        { name: "Neuro Care Center", location: "789 Elm St, Uptown" },
        { name: "Brain Health Clinic", location: "321 Pine Ave, Downtown" },
      ],
      availableSlots: ["08:30 AM", "11:00 AM", "01:00 PM", "04:00 PM"],
    },
    {
      id: "3",
      name: "Dr. Emily Rodriguez",
      specialty: "Dermatologist",
      experience: 10,
      rating: 4.9,
      image: "/doctor-default.png",
      qualifications: ["MBBS", "MD - Dermatology", "Fellowship in Cosmetic Dermatology"],
      bio: "Dr. Emily Rodriguez is a renowned dermatologist with expertise in skin care, acne treatment, and cosmetic procedures. She has been practicing for 10 years and is known for her patient-centered approach.",
      clinics: [
        { name: "Skin Wellness Clinic", location: "567 Maple Rd, Westside" },
        { name: "Derma Care Center", location: "890 Cedar Ln, Eastside" },
      ],
      availableSlots: ["09:30 AM", "12:00 PM", "02:30 PM", "05:00 PM"],
    },
    {
      id: "4",
      name: "Dr. James Wilson",
      specialty: "Orthopedic Surgeon",
      experience: 15,
      rating: 4.6,
      image: "/doctor-default.png",
      qualifications: ["MBBS", "MS - Orthopedics", "Fellowship in Sports Medicine"],
      bio: "Dr. James Wilson is a highly skilled orthopedic surgeon with 15 years of experience in joint replacements, sports injuries, and fracture management. He is dedicated to helping patients regain mobility.",
      clinics: [
        { name: "Ortho Plus Hospital", location: "234 Birch Ave, Northside" },
        { name: "Joint Care Clinic", location: "678 Spruce St, Southside" },
      ],
      availableSlots: ["08:00 AM", "10:00 AM", "01:30 PM", "03:00 PM"],
    },
  ]

  const doctor = allDoctors.find(d => d.id === id)
  if (!doctor) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <div className="text-2xl font-bold text-red-600">Doctor not found</div>
      </main>
    )
  }

  const [selectedSlot, setSelectedSlot] = useState<string>("")

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50">
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Doctor Info Card */}
        <Card className="mb-8 bg-gradient-to-r from-blue-50 to-white shadow-xl border-blue-100 hover:scale-105 transition-transform duration-300">
          <CardHeader className="flex flex-row items-start justify-between">
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <CardTitle className="text-4xl font-bold text-primary">{doctor.name}</CardTitle>
                <span className="px-3 py-1 text-xs font-semibold text-blue-700 bg-blue-100 rounded-full border border-blue-200">
                  Verified
                </span>
              </div>
              <CardDescription className="text-lg font-medium text-slate-600">{doctor.specialty}</CardDescription>
            </div>
            <div className="text-right bg-white p-3 rounded-xl shadow-sm border border-blue-50">
              <div className="text-3xl font-bold text-yellow-500">⭐ {doctor.rating}</div>
              <div className="text-xs text-muted-foreground mt-1">Patient Rating</div>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white/60 p-4 rounded-lg border border-blue-50/50">
                <h3 className="font-semibold mb-2 text-blue-900 flex items-center gap-2">
                  <span className="text-xl">🏥</span> Experience
                </h3>
                <p className="text-slate-700 font-medium">{doctor.experience} years in practice</p>
              </div>
              <div className="bg-white/60 p-4 rounded-lg border border-blue-50/50">
                <h3 className="font-semibold mb-2 text-blue-900 flex items-center gap-2">
                  <span className="text-xl">🎓</span> Qualifications
                </h3>
                <ul className="text-slate-700 space-y-1">
                  {doctor.qualifications.map((qual) => (
                    <li key={qual} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
                      {qual}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* About Section */}
        <Card className="mb-8 bg-gradient-to-r from-blue-50 to-white shadow-xl border-blue-100 hover:scale-105 transition-transform duration-300">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-primary">About</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-slate-700 leading-relaxed text-lg">{doctor.bio}</p>
          </CardContent>
        </Card>

        {/* Clinics Section */}
        <Card className="mb-8 bg-gradient-to-r from-blue-50 to-white shadow-xl border-blue-100 hover:scale-105 transition-transform duration-300">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-primary">Practice Locations</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {doctor.clinics.map((clinic, index) => (
                <div key={index} className="flex items-center gap-4 p-4 border border-blue-100 rounded-lg bg-white/60 hover:bg-white transition-colors">
                  <div className="bg-blue-100 p-3 rounded-full text-blue-600">
                    📍
                  </div>
                  <div>
                    <p className="font-semibold text-slate-800">{clinic.name}</p>
                    <p className="text-sm text-slate-600">{clinic.location}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Book Appointment Section */}
        <Card className="bg-gradient-to-r from-blue-50 to-white shadow-xl border-blue-100 hover:scale-105 transition-transform duration-300">
          <CardHeader>
            <CardTitle>Book an Appointment</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 pb-4">
            <div>
              <h3 className="font-semibold mb-3">Available Time Slots</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {doctor.availableSlots.map((slot) => (
                  <Button
                    key={slot}
                    variant={selectedSlot === slot ? "default" : "outline"}
                    className={`w-full bg-transparent ${selectedSlot === slot
                      ? "bg-blue-500 text-white ring-2 ring-blue-400"
                      : ""
                      }`}
                    onClick={() => setSelectedSlot(slot)}
                  >
                    {slot}
                  </Button>
                ))}
              </div>
            </div>
            <Button size="lg" className="w-full bg-blue-400 hover:bg-blue-700 text-white">
              Confirm Booking
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="w-full mt-2 "
              onClick={() => {
                const a = document.createElement("a");
                a.href = "/appointment_receipt.pdf";
                a.download = "appointment_receipt.pdf";
                a.click();
              }}
              disabled={!selectedSlot}
            >
              Receipt Download
            </Button>
          </CardContent>
        </Card>

        <div className="mt-8">
          <Link href={routes.doctors.list}>
            <Button variant="outline">← Back to Doctors</Button>
          </Link>
        </div>
      </div>
    </main>
  )
}
