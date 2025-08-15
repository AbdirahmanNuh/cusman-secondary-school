import { useState } from "react";
import { Clock, Download, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FormSelector from "@/components/FormSelector";

const Timetable = () => {
  const [selectedClass, setSelectedClass] = useState("1A");

  const timeSlots = [
    "7:40 - 8:20",
    "8:20 - 9:00", 
    "9:00 - 9:40",
    "9:40 - 10:00", // Break
    "10:00 - 10:40",
    "10:40 - 11:20",
    "11:20 - 12:00"
  ];

  // Map form selector values to timetable data keys
  const formToTimetableMap = {
    "1A": "form-1a", "1B": "form-1b", "1C": "form-1c", "1D": "form-1d",
    "2A": "form-2a", "2B": "form-2b", "2C": "form-2c", "2D": "form-2d", 
    "3A": "form-3a", "3B": "form-3b", "3C": "form-3c", "3D": "form-3d",
    "4A": "form-4a", "4B": "form-4b", "4C": "form-4c", "4D": "form-4d"
  };

  const timetableData = {
    "form-1a": {
      saturday: ["Mathematics", "English", "Somali", "BREAK", "Biology", "Islamic Studies", "History & Geography"],
      sunday: ["English", "Chemistry", "Physics", "BREAK", "Mathematics", "Arabic", "Computer Studies"],
      monday: ["Somali", "Biology", "English", "BREAK", "Chemistry", "Islamic Studies", "Mathematics"],
      tuesday: ["Physics", "Mathematics", "Arabic", "BREAK", "History & Geography", "Computer Studies", "Somali"],
      wednesday: ["Chemistry", "Somali", "Biology", "BREAK", "English", "Physics", "Islamic Studies"]
    },
    "form-1b": {
      saturday: ["English", "Mathematics", "Biology", "BREAK", "Chemistry", "Somali", "Islamic Studies"],
      sunday: ["Physics", "English", "Arabic", "BREAK", "Mathematics", "History & Geography", "Computer Studies"],
      monday: ["Mathematics", "Somali", "Chemistry", "BREAK", "Biology", "Islamic Studies", "English"],
      tuesday: ["English", "Physics", "Mathematics", "BREAK", "Arabic", "Computer Studies", "History & Geography"],
      wednesday: ["Somali", "Biology", "English", "BREAK", "Chemistry", "Mathematics", "Islamic Studies"]
    },
    "form-1c": {
      saturday: ["Somali", "Chemistry", "Mathematics", "BREAK", "English", "Physics", "Biology"],
      sunday: ["Mathematics", "Biology", "Islamic Studies", "BREAK", "Arabic", "Computer Studies", "History & Geography"],
      monday: ["English", "Physics", "Somali", "BREAK", "Chemistry", "Mathematics", "Islamic Studies"],
      tuesday: ["Biology", "English", "Mathematics", "BREAK", "Somali", "Arabic", "Computer Studies"],
      wednesday: ["Physics", "Mathematics", "Chemistry", "BREAK", "Islamic Studies", "History & Geography", "English"]
    },
    "form-1d": {
      saturday: ["Biology", "English", "Physics", "BREAK", "Mathematics", "Somali", "Chemistry"],
      sunday: ["Somali", "Mathematics", "Computer Studies", "BREAK", "Islamic Studies", "Arabic", "History & Geography"],
      monday: ["Chemistry", "Physics", "English", "BREAK", "Biology", "Mathematics", "Somali"],
      tuesday: ["Mathematics", "Somali", "Islamic Studies", "BREAK", "English", "Chemistry", "Arabic"],
      wednesday: ["English", "Biology", "Mathematics", "BREAK", "Physics", "Computer Studies", "History & Geography"]
    },
    "form-2a": {
      saturday: ["Mathematics", "Chemistry", "English", "BREAK", "Physics", "Biology", "Islamic Studies"],
      sunday: ["English", "Mathematics", "Arabic", "BREAK", "Somali", "Computer Studies", "History & Geography"],
      monday: ["Physics", "Biology", "Mathematics", "BREAK", "Chemistry", "English", "Islamic Studies"],
      tuesday: ["Somali", "English", "Physics", "BREAK", "Mathematics", "Arabic", "Computer Studies"],
      wednesday: ["Chemistry", "Mathematics", "Biology", "BREAK", "Somali", "History & Geography", "Islamic Studies"]
    },
    "form-2b": {
      saturday: ["English", "Physics", "Mathematics", "BREAK", "Chemistry", "Somali", "Biology"],
      sunday: ["Mathematics", "English", "Islamic Studies", "BREAK", "Arabic", "History & Geography", "Computer Studies"],
      monday: ["Chemistry", "Biology", "English", "BREAK", "Physics", "Mathematics", "Somali"],
      tuesday: ["English", "Mathematics", "Chemistry", "BREAK", "Biology", "Islamic Studies", "Arabic"],
      wednesday: ["Physics", "Somali", "Mathematics", "BREAK", "English", "Computer Studies", "History & Geography"]
    },
    "form-2c": {
      saturday: ["Chemistry", "Mathematics", "Biology", "BREAK", "English", "Physics", "Somali"],
      sunday: ["Biology", "English", "Computer Studies", "BREAK", "Mathematics", "Islamic Studies", "Arabic"],
      monday: ["English", "Physics", "Chemistry", "BREAK", "Somali", "Mathematics", "History & Geography"],
      tuesday: ["Mathematics", "Somali", "Biology", "BREAK", "Chemistry", "English", "Islamic Studies"],
      wednesday: ["Physics", "Mathematics", "English", "BREAK", "Arabic", "Computer Studies", "Biology"]
    },
    "form-2d": {
      saturday: ["Physics", "English", "Mathematics", "BREAK", "Biology", "Chemistry", "Islamic Studies"],
      sunday: ["Mathematics", "Somali", "History & Geography", "BREAK", "English", "Arabic", "Computer Studies"],
      monday: ["Biology", "Chemistry", "Physics", "BREAK", "Mathematics", "Somali", "English"],
      tuesday: ["English", "Mathematics", "Islamic Studies", "BREAK", "Physics", "Chemistry", "Arabic"],
      wednesday: ["Somali", "Biology", "Mathematics", "BREAK", "Computer Studies", "History & Geography", "English"]
    },
    "form-3a": {
      saturday: ["Mathematics", "Chemistry", "Physics", "BREAK", "Biology", "English", "Islamic Studies"],
      sunday: ["English", "Mathematics", "Arabic", "BREAK", "Somali", "Computer Studies", "History & Geography"],
      monday: ["Physics", "Biology", "Mathematics", "BREAK", "Chemistry", "English", "Islamic Studies"],
      tuesday: ["Chemistry", "English", "Physics", "BREAK", "Mathematics", "Arabic", "Computer Studies"],
      wednesday: ["Biology", "Mathematics", "English", "BREAK", "Somali", "History & Geography", "Islamic Studies"]
    },
    "form-3b": {
      saturday: ["English", "Physics", "Chemistry", "BREAK", "Mathematics", "Biology", "Somali"],
      sunday: ["Mathematics", "English", "Islamic Studies", "BREAK", "Arabic", "History & Geography", "Computer Studies"],
      monday: ["Chemistry", "Biology", "English", "BREAK", "Physics", "Mathematics", "Somali"],
      tuesday: ["English", "Mathematics", "Chemistry", "BREAK", "Biology", "Islamic Studies", "Arabic"],
      wednesday: ["Physics", "Somali", "Mathematics", "BREAK", "English", "Computer Studies", "History & Geography"]
    },
    "form-3c": {
      saturday: ["Chemistry", "Mathematics", "Biology", "BREAK", "English", "Physics", "Islamic Studies"],
      sunday: ["Biology", "English", "Computer Studies", "BREAK", "Mathematics", "Arabic", "Somali"],
      monday: ["English", "Physics", "Chemistry", "BREAK", "Somali", "Mathematics", "History & Geography"],
      tuesday: ["Mathematics", "Somali", "Biology", "BREAK", "Chemistry", "English", "Islamic Studies"],
      wednesday: ["Physics", "Mathematics", "English", "BREAK", "Arabic", "Computer Studies", "Biology"]
    },
    "form-3d": {
      saturday: ["Physics", "English", "Mathematics", "BREAK", "Biology", "Chemistry", "Somali"],
      sunday: ["Mathematics", "Somali", "History & Geography", "BREAK", "English", "Islamic Studies", "Computer Studies"],
      monday: ["Biology", "Chemistry", "Physics", "BREAK", "Mathematics", "Somali", "English"],
      tuesday: ["English", "Mathematics", "Arabic", "BREAK", "Physics", "Chemistry", "Islamic Studies"],
      wednesday: ["Somali", "Biology", "Mathematics", "BREAK", "Computer Studies", "History & Geography", "English"]
    },
    "form-4a": {
      saturday: ["Mathematics", "Chemistry", "Physics", "BREAK", "Biology", "English", "Islamic Studies"],
      sunday: ["English", "Mathematics", "Arabic", "BREAK", "Somali", "Computer Studies", "History & Geography"],
      monday: ["Physics", "Biology", "Mathematics", "BREAK", "Chemistry", "English", "Islamic Studies"],
      tuesday: ["Chemistry", "English", "Physics", "BREAK", "Mathematics", "Arabic", "Computer Studies"],
      wednesday: ["Biology", "Mathematics", "English", "BREAK", "Somali", "History & Geography", "Islamic Studies"]
    },
    "form-4b": {
      saturday: ["English", "Physics", "Chemistry", "BREAK", "Mathematics", "Biology", "Somali"],
      sunday: ["Mathematics", "English", "Islamic Studies", "BREAK", "Arabic", "History & Geography", "Computer Studies"],
      monday: ["Chemistry", "Biology", "English", "BREAK", "Physics", "Mathematics", "Somali"],
      tuesday: ["English", "Mathematics", "Chemistry", "BREAK", "Biology", "Islamic Studies", "Arabic"],
      wednesday: ["Physics", "Somali", "Mathematics", "BREAK", "English", "Computer Studies", "History & Geography"]
    },
    "form-4c": {
      saturday: ["Chemistry", "Mathematics", "Biology", "BREAK", "English", "Physics", "Islamic Studies"],
      sunday: ["Biology", "English", "Computer Studies", "BREAK", "Mathematics", "Arabic", "Somali"],
      monday: ["English", "Physics", "Chemistry", "BREAK", "Somali", "Mathematics", "History & Geography"],
      tuesday: ["Mathematics", "Somali", "Biology", "BREAK", "Chemistry", "English", "Islamic Studies"],
      wednesday: ["Physics", "Mathematics", "English", "BREAK", "Arabic", "Computer Studies", "Biology"]
    },
    "form-4d": {
      saturday: ["Physics", "English", "Mathematics", "BREAK", "Biology", "Chemistry", "Somali"],
      sunday: ["Mathematics", "Somali", "History & Geography", "BREAK", "English", "Islamic Studies", "Computer Studies"],
      monday: ["Biology", "Chemistry", "Physics", "BREAK", "Mathematics", "Somali", "English"],
      tuesday: ["English", "Mathematics", "Arabic", "BREAK", "Physics", "Chemistry", "Islamic Studies"],
      wednesday: ["Somali", "Biology", "Mathematics", "BREAK", "Computer Studies", "History & Geography", "English"]
    }
  };

  const getSubjectColor = (subject: string) => {
    const colors = {
      "Mathematics": "bg-red-100 text-red-800",
      "English": "bg-indigo-100 text-indigo-800", 
      "Arabic": "bg-orange-100 text-orange-800",
      "Somali": "bg-teal-100 text-teal-800",
      "Biology": "bg-green-100 text-green-800",
      "Chemistry": "bg-blue-100 text-blue-800",
      "Physics": "bg-purple-100 text-purple-800",
      "History & Geography": "bg-amber-100 text-amber-800",
      "Islamic Studies": "bg-emerald-100 text-emerald-800",
      "Computer Studies": "bg-cyan-100 text-cyan-800",
      "BREAK": "bg-gray-100 text-gray-600"
    };
    
    return colors[subject as keyof typeof colors] || "bg-gray-100 text-gray-800";
  };

  const days = ["saturday", "sunday", "monday", "tuesday", "wednesday"];
  const dayNames = ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday"];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-light text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-academic text-5xl font-bold mb-6">Student Timetable</h1>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed">
            View class schedules for all forms and plan your academic week
          </p>
        </div>
      </section>

      {/* Class Selection */}
      <section className="py-12 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-2">Select a class to view its weekly schedule</h2>
            <p className="text-muted-foreground">Choose from Forms 1A to 4D to see the complete timetable</p>
          </div>
          <div className="flex justify-center">
            <FormSelector 
              onSelectionChange={setSelectedClass}
              defaultValue="1A"
              placeholder="Select your form level"
            />
          </div>
        </div>
      </section>

      {/* Timetable */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-academic text-3xl font-bold text-primary">
              Form {selectedClass} Timetable
            </h2>
            <Button variant="outline" className="flex items-center gap-2">
              <Download className="h-4 w-4" />
              Download PDF
            </Button>
          </div>

          <Card className="card-elegant overflow-hidden">
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[800px]">
                  <thead>
                    <tr className="bg-primary text-primary-foreground">
                      <th className="p-4 text-left font-semibold min-w-[120px]">
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4" />
                          Time
                        </div>
                      </th>
                      {dayNames.map((day) => (
                        <th key={day} className="p-4 text-center font-semibold min-w-[150px]">
                          {day}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {timeSlots.map((time, timeIndex) => (
                      <tr key={timeIndex} className="border-b hover:bg-muted/50 transition-colors">
                        <td className="p-4 font-medium text-muted-foreground bg-muted/30">
                          {time}
                        </td>
                        {days.map((day) => {
                          const timetableKey = formToTimetableMap[selectedClass as keyof typeof formToTimetableMap];
                          const currentTimetable = timetableData[timetableKey as keyof typeof timetableData];
                          const subject = currentTimetable[day as keyof typeof currentTimetable][timeIndex];
                          const isBreak = subject === "BREAK";
                          
                          return (
                            <td key={day} className="p-2">
                              <div className={`
                                p-2 rounded-md text-center text-sm font-medium transition-all
                                ${getSubjectColor(subject)}
                                ${isBreak ? 'italic' : 'hover:shadow-sm'}
                              `}>
                                {subject}
                              </div>
                            </td>
                          );
                        })}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          {/* Legend */}
          <Card className="card-elegant mt-8">
            <CardHeader>
              <CardTitle className="text-xl text-primary">Subject Categories</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {[
                  { category: "Mathematics", color: "bg-blue-100 text-blue-800" },
                  { category: "Sciences", color: "bg-purple-100 text-purple-800" },
                  { category: "Languages", color: "bg-green-100 text-green-800" },
                  { category: "Humanities", color: "bg-amber-100 text-amber-800" },
                  { category: "Arts", color: "bg-pink-100 text-pink-800" },
                  { category: "Technology", color: "bg-indigo-100 text-indigo-800" },
                  { category: "Physical Ed", color: "bg-lime-100 text-lime-800" },
                  { category: "Breaks", color: "bg-gray-100 text-gray-600" }
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className={`w-4 h-4 rounded ${item.color}`}></div>
                    <span className="text-sm">{item.category}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Additional Information */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="font-academic text-3xl font-bold text-primary text-center mb-12">
            Important Information
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="card-elegant">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-primary">
                  <Clock className="h-5 w-5" />
                  School Hours
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p><strong>Monday - Friday:</strong> 8:00 AM - 3:00 PM</p>
                  <p><strong>Morning Break:</strong> 10:00 AM - 10:20 AM</p>
                  <p><strong>Lunch Break:</strong> 12:20 PM - 1:00 PM</p>
                  <p><strong>Assembly:</strong> Fridays 2:20 PM - 3:00 PM</p>
                </div>
              </CardContent>
            </Card>

            <Card className="card-elegant">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-primary">
                  <Calendar className="h-5 w-5" />
                  Academic Terms
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p><strong>Term 1:</strong> September - December</p>
                  <p><strong>Term 2:</strong> January - April</p>
                  <p><strong>Term 3:</strong> May - August</p>
                  <p><strong>Holidays:</strong> Between each term</p>
                </div>
              </CardContent>
            </Card>

            <Card className="card-elegant">
              <CardHeader>
                <CardTitle className="text-primary">Special Activities</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p><strong>Study Hall:</strong> Supervised homework time</p>
                  <p><strong>Library:</strong> Research and reading period</p>
                  <p><strong>Tutorials:</strong> Extra help sessions</p>
                  <p><strong>Career Guidance:</strong> Future planning</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Timetable;