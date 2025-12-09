import Link from "next/link"
import { routes } from "@/lib/routes"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section
        className="py-20 rounded-bl-3xl rounded-br-3xl"
        style={{
          background: "linear-gradient(90deg, #4f8cff 0%, #38c8fa 100%)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6 text-white">Welcome to MediCare</h1>
          <p className="text-xl mb-8 opacity-90 text-white">Your trusted platform for booking doctor appointments online</p>
          <div className="flex gap-4 justify-center">
            <Link href={routes.doctors.list}>
              <Button size="lg" variant="secondary">
                Find a Doctor
              </Button>
            </Link>
            <Link href={routes.auth.register}>
              <Button size="lg">Get Started</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose MediCare?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-[#e0f2fe] transition-transform transition-shadow duration-200 hover:scale-100 hover:shadow-2xl">
              <CardHeader className="pt-6">
                <CardTitle>Easy Booking</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground pb-6">
                  Book appointments with qualified doctors in just a few clicks. No waiting, no hassle.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-[#e0f2fe] transition-transform transition-shadow duration-200 hover:scale-100 hover:shadow-2xl">
              <CardHeader className="pt-6">
                <CardTitle>Verified Doctors</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground pb-6">
                  All our doctors are verified and have years of medical experience in their respective fields.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-[#e0f2fe] transition-transform transition-shadow duration-200 hover:scale-100 hover:shadow-2xl">
              <CardHeader className="pt-6">
                <CardTitle>24/7 Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground pb-6">
                  Our customer support team is available round the clock to assist you with any queries.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-secondary text-secondary-foreground py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Book Your Appointment?</h2>
          <p className="text-lg mb-8">Join thousands of patients who have already found their perfect doctor</p>
          <Link href={routes.auth.register}>
            <Button
              size="lg"
              variant="outline"
              className="text-secondary-foreground border-secondary-foreground hover:bg-secondary-foreground hover:text-secondary bg-transparent"
            >
              Sign Up Now
            </Button>
          </Link>
        </div>
      </section>
    </main>
  )
}
