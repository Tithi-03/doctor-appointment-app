

"use client"
import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"


export default function DoctorSchedulePage() {
  const initialSchedule = [
    "Monday: 09:00 AM - 05:00 PM",
    "Tuesday: 09:00 AM - 05:00 PM",
    "Wednesday: 09:00 AM - 05:00 PM",
    "Thursday: 09:00 AM - 05:00 PM",
    "Friday: 09:00 AM - 03:00 PM",
    "Saturday: Closed",
    "Sunday: Closed",
  ];
  const [schedule, setSchedule] = useState(initialSchedule);
  const [editIndex, setEditIndex] = useState<number | null>(null);
  const [editValue, setEditValue] = useState("");

  const handleEdit = (idx: number) => {
    setEditIndex(idx);
    setEditValue(schedule[idx]);
  };

  const handleSave = () => {
    if (editIndex === null) return;
    setSchedule((prev) => prev.map((item, idx) => (idx === editIndex ? editValue : item)));
    setEditIndex(null);
    setEditValue("");
  };

  const handleCancel = () => {
    setEditIndex(null);
    setEditValue("");
  };

  return (
    <div className="max-w-7xl bg-blue-50 p-6 rounded-lg">
      <h1 className="text-3xl font-bold mb-8">My Schedule</h1>

      <Card>
        <CardHeader>
          <CardTitle className="pt-6">Weekly Schedule</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4 pb-6">
            {schedule.map((day, i) => (
              <div key={i} className="flex items-center justify-between p-4 border border-border rounded">
                {editIndex === i ? (
                  <>
                    <input
                      className="font-medium border px-2 py-1 rounded mr-2 w-full max-w-xs"
                      value={editValue}
                      onChange={e => setEditValue(e.target.value)}
                    />
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" onClick={handleSave}>
                        Save
                      </Button>
                      <Button variant="ghost" size="sm" onClick={handleCancel}>
                        Cancel
                      </Button>
                    </div>
                  </>
                ) : (
                  <>
                    <span className="font-medium">{day}</span>
                    <Button variant="outline" size="sm" onClick={() => handleEdit(i)}>
                      Edit
                    </Button>
                  </>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
