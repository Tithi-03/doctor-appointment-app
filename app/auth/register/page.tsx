"use client"

import type React from "react"

import Link from "next/link"
import { routes } from "@/lib/routes"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { useState } from "react"
import { ChevronDown } from "lucide-react"

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "patient",
  })
  const [showPopup, setShowPopup] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle registration logic here
    console.log("Register:", formData)
    setShowPopup(true)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-50 py-12 px-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center pt-12">
          <CardTitle>Create Your Account</CardTitle>
          <CardDescription>Join MediCare to book appointments with qualified doctors</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Full Name
              </label>
              <Input
                id="name"
                type="text"
                name="name"
                placeholder="John Doe"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email Address
              </label>
              <Input
                id="email"
                type="email"
                name="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            {/* <div>
              <label htmlFor="role" className="block text-sm font-medium mb-2">
                Register As
              </label>
              <select
                id="role"
                name="role"
                value={formData.role}
                onChange={handleChange}
                className="w-full px-3 py-2 pr-10 border border-input rounded-md bg-background"
              >
                <option value="patient">Patient</option>
                <option value="doctor">Doctor</option>
              </select>
            </div> */}
            <div>
              <label htmlFor="role" className="block text-sm font-medium mb-2">
                Register As
              </label>
              <div className="relative">
                <select
                  id="role"
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  className="w-full h-10 px-3 pr-8 border border-gray-300 rounded-md bg-white appearance-none text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="patient">Patient</option>
                  <option value="doctor">Doctor</option>
                </select>

                {/* Custom arrow */}
                <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">
                  <ChevronDown size={16} />
                </span>
              </div>
            </div>



            <div>
              <label htmlFor="password" className="block text-sm font-medium mb-2">
                Password
              </label>
              <Input
                id="password"
                type="password"
                name="password"
                placeholder="••••••••"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium mb-2">
                Confirm Password
              </label>
              <Input
                id="confirmPassword"
                type="password"
                name="confirmPassword"
                placeholder="••••••••"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
            </div>

            <Button type="submit" className="w-full bg-blue-500 hover:bg-blue-600">
              Create Account
            </Button>
          </form>

          <div className="mt-4 text-sm text-center pb-12 py-2">
            Already have an account?{" "}
            <Link href={routes.auth.login} className="text-primary hover:underline font-semibold">
              Login here
            </Link>
          </div>
        </CardContent>
      </Card>
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-blue-100 bg-opacity-50 z-50">
          <div className="bg-white rounded-lg shadow-lg p-8 text-center">
            <h2 className="text-2xl font-bold mb-4 text-green-600">Registered Successful</h2>
            <Button onClick={() => setShowPopup(false)} className="mt-2">
              Close
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}
