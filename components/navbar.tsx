"use client"

import Link from "next/link"
import { routes } from "@/lib/routes"
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Menu, Stethoscope } from "lucide-react"
import { usePathname } from "next/navigation"

export function Navbar() {
  const pathname = usePathname()
  if (pathname.startsWith("/dashboard")) return null

  return (
    <nav
      className="sticky top-0 z-50 text-primary-foreground shadow-lg"
      style={{
        background: "linear-gradient(90deg, #1e3a8a 0%, #2563eb 100%)", // dark blue gradient
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href={routes.home} className="flex items-center gap-2 font-bold text-2xl hover:opacity-90 transition-opacity">
            <Stethoscope className="h-8 w-8" />
            <span>MediCare</span>
          </Link>

          {/* Navigation Links - Desktop */}
          <div className="hidden md:flex space-x-6">
            <Link href={routes.doctors.list} className="hover:opacity-80 transition-opacity">
              Find Doctors
            </Link>
            <Link href={routes.auth.login} className="hover:opacity-80 transition-opacity">
              Login
            </Link>
            <Link href={routes.auth.register} className="hover:opacity-80 transition-opacity">
              Register
            </Link>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-white/10">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[250px] sm:w-[400px] bg-blue-50">
                <div className="flex flex-col gap-4 mt-15 px-4">
                  <SheetClose asChild>
                    <Link href={routes.doctors.list} className="text-base font-medium hover:text-primary transition-colors">
                      Find Doctors
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link href={routes.auth.login} className="text-base font-medium hover:text-primary transition-colors">
                      Login
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link href={routes.auth.register} className="text-base font-medium hover:text-primary transition-colors">
                      Register
                    </Link>
                  </SheetClose>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  )
}
