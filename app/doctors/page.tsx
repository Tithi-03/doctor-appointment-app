"use client"

import Link from "next/link"
import { routes } from "@/lib/routes"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from "react"

interface Doctor {
  id: string
  name: string
  specialty: string
  experience: number
  rating: number
  image: string
}

export default function DoctorsPage() {
  const [searchTerm, setSearchTerm] = useState("")

  const doctors: Doctor[] = [
    {
      id: "1",
      name: "Dr. Sarah Johnson",
      specialty: "Cardiologist",
      experience: 12,
      rating: 4.8,
      image: "/doctor-default.png",
    },
    {
      id: "2",
      name: "Dr. Michael Chen",
      specialty: "Neurologist",
      experience: 8,
      rating: 4.7,
      image: "/doctor-default.png",
    },
    {
      id: "3",
      name: "Dr. Emily Rodriguez",
      specialty: "Dermatologist",
      experience: 10,
      rating: 4.9,
      image: "/doctor-default.png",
    },
    {
      id: "4",
      name: "Dr. James Wilson",
      specialty: "Orthopedic Surgeon",
      experience: 15,
      rating: 4.6,
      image: "/doctor-default.png",
    },
  ]

  const filteredDoctors = doctors.filter(
    (doctor) =>
      doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doctor.specialty.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="mb-12 bg-white/60 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-blue-100">
          <h1 className="text-4xl font-bold mb-4 text-primary">Find Doctors</h1>
          <p className="text-lg text-slate-600 mb-6">
            Search and book appointments with our experienced healthcare professionals
          </p>
          <div className="relative">
            <Input
              type="text"
              placeholder="Search by doctor name or specialty..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full shadow-md"
            />
          </div>
        </div>

        {filteredDoctors.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredDoctors.map((doctor) => (
              <Card
                key={doctor.id}
                className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 bg-blue-50 border-blue-100"
              >
                <div className="bg-white/50 h-40 flex items-center justify-center">
                  <div className="text-6xl text-muted-foreground">👨‍⚕️</div>
                </div>
                <CardHeader>
                  <CardTitle>{doctor.name}</CardTitle>
                  <CardDescription>{doctor.specialty}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Experience</span>
                    <span className="font-semibold">{doctor.experience} years</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Rating</span>
                    <span className="font-semibold">⭐ {doctor.rating}</span>
                  </div>
                  <Link href={routes.doctors.details(doctor.id)} className="block pb-8">
                    <Button variant="outline" className="w-full bg-transparent">
                      View Details
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <Card>
            <CardContent className="py-12 text-center">
              <p className="text-lg text-muted-foreground">
                No doctors found matching your search. Please try a different query.
              </p>
            </CardContent>
          </Card>
        )}
      </div>
    </main>
  )
}
