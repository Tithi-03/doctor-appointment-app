
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function DoctorProfilePage() {
  return (
    <div className="max-w-3xl bg-blue-50 p-6 rounded-lg">
      <h1 className="text-3xl font-bold mb-8">My Profile</h1>

      <Card>
        <CardHeader>
          <CardTitle className="pt-6">Profile Information</CardTitle>
        </CardHeader>
        <CardContent className="pb-6">
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Full Name</label>
                <Input value="Dr. Sarah Johnson" readOnly />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Specialty</label>
                <Input value="Cardiologist" readOnly />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <Input type="email" value="sarah@example.com" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Phone</label>
                <Input type="tel" value="+1 (555) 123-4567" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Bio</label>
              <textarea className="w-full px-3 py-2 border border-input rounded-md bg-background" rows={4}>
                I am an experienced cardiologist with 12 years of practice...
              </textarea>
            </div>

            <Button>Save Changes</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
