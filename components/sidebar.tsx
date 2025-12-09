"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { routes } from "@/lib/routes"
import { cn } from "@/lib/utils"

interface SidebarProps {
  role: "admin" | "doctor" | "patient"
}

export function Sidebar({ role }: SidebarProps) {
  const pathname = usePathname()

  const getMenuItems = () => {
    switch (role) {
      case "admin":
        return [
          { label: "Dashboard", href: routes.dashboard.admin.home },
          { label: "Doctors", href: routes.dashboard.admin.doctors },
          { label: "Patients", href: routes.dashboard.admin.patients },
          { label: "Reports", href: routes.dashboard.admin.reports },

        ]
      case "doctor":
        return [
          { label: "Dashboard", href: routes.dashboard.doctor.home },
          { label: "Appointments", href: routes.dashboard.doctor.appointments },
          { label: "Schedule", href: routes.dashboard.doctor.schedule },
          { label: "Profile", href: routes.dashboard.doctor.profile },
        ]
      case "patient":
        return [
          { label: "Dashboard", href: routes.dashboard.patient.home },
          { label: "Find Doctor", href: routes.dashboard.patient.searchDoctor },
          { label: "My Appointments", href: routes.dashboard.patient.appointments },
          { label: "History", href: routes.dashboard.patient.history },
        ]
    }
  }

  const menuItems = getMenuItems()

  return (
    <aside className="fixed top-0 left-0 h-screen w-64 bg-gradient-to-b from-blue-100 to-blue-200 text-slate-800 shadow-2xl flex flex-col z-40">
      <div className="p-6 flex-1">
        <h2 className="text-xl font-bold mb-8 flex items-center gap-2 text-blue-700">
          <span className="text-2xl">🏥</span> Menu
        </h2>
        <nav className="space-y-2 mb-8">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "block px-4 py-2 rounded-lg transition-all duration-200 font-medium",
                pathname === item.href
                  ? "bg-blue-500 text-white shadow-lg scale-105"
                  : "hover:bg-blue-300/50 hover:scale-102 hover:shadow-md text-slate-700",
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
      {/* Logout Button always at the end */}
      <div className="p-6">
        <Link href={routes.home}>
          <button className="w-full px-4 py-2 rounded-lg bg-gradient-to-r from-red-500 to-pink-500 text-white font-semibold shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-200">
            Logout
          </button>
        </Link>
      </div>
    </aside>
  )
}
