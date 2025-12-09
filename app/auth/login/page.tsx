"use client"

import type React from "react"
import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { routes } from "@/lib/routes"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [role, setRole] = useState("patient")
  const router = useRouter()
  const ADMIN_EMAIL = "admin@medicare.com"

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (role === 'admin') {
      console.log("Logging in as Admin")
      router.push(routes.dashboard.admin.home)
      return
    }

    console.log("Logging in as:", role)
    // In a real app, you'd pass the role to your auth function
    if (role === 'doctor') {
      router.push(routes.dashboard.doctor.home)
    } else {
      router.push(routes.dashboard.patient.home)
    }
  }

  return (
    <div
      className="min-h-screen flex items-center justify-center py-12 px-4"
      style={{
        background: "white",
      }}
    >
      <Card className="w-full max-w-md shadow-2xl bg-[#e0f2fe] border-none">
        <CardHeader className="text-center py-12 pb-2">
          <CardTitle>Login to MediCare</CardTitle>
          <CardDescription>Access your account to manage appointments</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="patient" className="w-full mb-6" onValueChange={setRole}>
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="patient">Patient</TabsTrigger>
              <TabsTrigger value="doctor">Doctor</TabsTrigger>
              <TabsTrigger value="admin">Admin</TabsTrigger>
            </TabsList>
          </Tabs>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email Address
              </label>
              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium mb-2">
                Password
              </label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <Button type="submit" className="w-full">
              Login
            </Button>
          </form>

          <div className="mt-6 space-y-2 text-sm text-center pb-8">
            <div>
              Don't have an account?{" "}
              <Link href={routes.auth.register} className="text-primary hover:underline font-semibold">
                Register here
              </Link>
            </div>
            <div>
              <Link href={routes.auth.resetPassword} className="text-primary hover:underline">
                Forgot password?
              </Link>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
