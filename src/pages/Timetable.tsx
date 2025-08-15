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
    "8:00 - 8:40",
    "8:40 - 9:20", 
    "9:20 - 10:00",
    "10:00 - 10:20", // Break
    "10:20 - 11:00",
    "11:00 - 11:40",
    "11:40 - 12:20",
    "12:20 - 1:00", // Lunch
    "1:00 - 1:40",
    "1:40 - 2:20",
    "2:20 - 3:00"
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
      monday: ["Mathematics", "English", "Science", "BREAK", "History", "Geography", "Kiswahili", "LUNCH", "Art", "PE", "Study Hall"],
      tuesday: ["English", "Mathematics", "Biology", "BREAK", "Chemistry", "Physics", "Computer", "LUNCH", "Music", "French", "Library"],
      wednesday: ["Science", "Mathematics", "English", "BREAK", "Social Studies", "Religious Ed", "Kiswahili", "LUNCH", "Drama", "Art", "Study Hall"],
      thursday: ["Mathematics", "English", "Physics", "BREAK", "Chemistry", "Biology", "Geography", "LUNCH", "PE", "Computer", "Study Hall"],
      friday: ["English", "Science", "Mathematics", "BREAK", "History", "Art", "Music", "LUNCH", "French", "Study Hall", "Assembly"]
    },
    "form-1b": {
      monday: ["English", "Mathematics", "Science", "BREAK", "Geography", "History", "Kiswahili", "LUNCH", "PE", "Art", "Study Hall"],
      tuesday: ["Mathematics", "English", "Biology", "BREAK", "Physics", "Chemistry", "Computer", "LUNCH", "French", "Music", "Library"],
      wednesday: ["Mathematics", "Science", "English", "BREAK", "Religious Ed", "Social Studies", "Kiswahili", "LUNCH", "Art", "Drama", "Study Hall"],
      thursday: ["English", "Mathematics", "Physics", "BREAK", "Biology", "Chemistry", "Geography", "LUNCH", "Computer", "PE", "Study Hall"],
      friday: ["Science", "English", "Mathematics", "BREAK", "Art", "History", "Music", "LUNCH", "Study Hall", "French", "Assembly"]
    },
    "form-1c": {
      monday: ["Science", "Mathematics", "English", "BREAK", "Kiswahili", "Geography", "History", "LUNCH", "Art", "PE", "Study Hall"],
      tuesday: ["Mathematics", "Science", "Biology", "BREAK", "Chemistry", "Physics", "Computer", "LUNCH", "Music", "French", "Library"],
      wednesday: ["English", "Mathematics", "Science", "BREAK", "Social Studies", "Religious Ed", "Kiswahili", "LUNCH", "Drama", "Art", "Study Hall"],
      thursday: ["Mathematics", "English", "Physics", "BREAK", "Chemistry", "Biology", "Geography", "LUNCH", "PE", "Computer", "Study Hall"],
      friday: ["Mathematics", "Science", "English", "BREAK", "History", "Art", "Music", "LUNCH", "French", "Study Hall", "Assembly"]
    },
    "form-1d": {
      monday: ["English", "Science", "Mathematics", "BREAK", "History", "Geography", "Kiswahili", "LUNCH", "PE", "Art", "Study Hall"],
      tuesday: ["Science", "Mathematics", "Biology", "BREAK", "Physics", "Chemistry", "Computer", "LUNCH", "French", "Music", "Library"],
      wednesday: ["Mathematics", "English", "Science", "BREAK", "Religious Ed", "Social Studies", "Kiswahili", "LUNCH", "Art", "Drama", "Study Hall"],
      thursday: ["Science", "Mathematics", "Physics", "BREAK", "Biology", "Chemistry", "Geography", "LUNCH", "Computer", "PE", "Study Hall"],
      friday: ["English", "Mathematics", "Science", "BREAK", "Art", "History", "Music", "LUNCH", "Study Hall", "French", "Assembly"]
    },
    "form-2a": {
      monday: ["Advanced Math", "English Lit", "Biology", "BREAK", "Chemistry", "Physics", "Geography", "LUNCH", "Computer Sci", "PE", "Study Hall"],
      tuesday: ["English Lang", "Mathematics", "Chemistry", "BREAK", "Biology", "Physics", "History", "LUNCH", "Art", "French", "Library"],
      wednesday: ["Science", "Mathematics", "English", "BREAK", "Geography", "Religious Ed", "Kiswahili", "LUNCH", "Drama", "Music", "Study Hall"],
      thursday: ["Mathematics", "English", "Physics", "BREAK", "Chemistry", "Biology", "Computer Sci", "LUNCH", "PE", "Art", "Study Hall"],
      friday: ["English", "Advanced Math", "Science", "BREAK", "History", "Geography", "Music", "LUNCH", "French", "Study Hall", "Assembly"]
    },
    "form-2b": {
      monday: ["English Lit", "Advanced Math", "Biology", "BREAK", "Physics", "Chemistry", "Geography", "LUNCH", "PE", "Computer Sci", "Study Hall"],
      tuesday: ["Mathematics", "English Lang", "Chemistry", "BREAK", "Physics", "Biology", "History", "LUNCH", "French", "Art", "Library"],
      wednesday: ["Mathematics", "Science", "English", "BREAK", "Religious Ed", "Geography", "Kiswahili", "LUNCH", "Music", "Drama", "Study Hall"],
      thursday: ["English", "Mathematics", "Physics", "BREAK", "Biology", "Chemistry", "Computer Sci", "LUNCH", "Art", "PE", "Study Hall"],
      friday: ["Advanced Math", "English", "Science", "BREAK", "Geography", "History", "Music", "LUNCH", "Study Hall", "French", "Assembly"]
    },
    "form-2c": {
      monday: ["Biology", "Advanced Math", "English Lit", "BREAK", "Chemistry", "Physics", "Geography", "LUNCH", "Computer Sci", "PE", "Study Hall"],
      tuesday: ["Chemistry", "English Lang", "Mathematics", "BREAK", "Biology", "Physics", "History", "LUNCH", "Art", "French", "Library"],
      wednesday: ["English", "Mathematics", "Science", "BREAK", "Geography", "Religious Ed", "Kiswahili", "LUNCH", "Drama", "Music", "Study Hall"],
      thursday: ["Physics", "English", "Mathematics", "BREAK", "Chemistry", "Biology", "Computer Sci", "LUNCH", "PE", "Art", "Study Hall"],
      friday: ["Science", "Advanced Math", "English", "BREAK", "History", "Geography", "Music", "LUNCH", "French", "Study Hall", "Assembly"]
    },
    "form-2d": {
      monday: ["Mathematics", "Biology", "English Lit", "BREAK", "Physics", "Chemistry", "Geography", "LUNCH", "PE", "Computer Sci", "Study Hall"],
      tuesday: ["English Lang", "Chemistry", "Mathematics", "BREAK", "Physics", "Biology", "History", "LUNCH", "French", "Art", "Library"],
      wednesday: ["Science", "English", "Mathematics", "BREAK", "Religious Ed", "Geography", "Kiswahili", "LUNCH", "Music", "Drama", "Study Hall"],
      thursday: ["Mathematics", "Physics", "English", "BREAK", "Biology", "Chemistry", "Computer Sci", "LUNCH", "Art", "PE", "Study Hall"],
      friday: ["English", "Science", "Advanced Math", "BREAK", "Geography", "History", "Music", "LUNCH", "Study Hall", "French", "Assembly"]
    },
    "form-3a": {
      monday: ["Pure Math", "English Lit", "Biology", "BREAK", "Chemistry", "Physics", "Economics", "LUNCH", "Computer Sci", "PE", "Tutorials"],
      tuesday: ["English Lang", "Mathematics", "Chemistry", "BREAK", "Biology", "Physics", "History", "LUNCH", "Geography", "French", "Library"],
      wednesday: ["Applied Math", "English", "Science", "BREAK", "Economics", "Business", "Kiswahili", "LUNCH", "Drama", "Music", "Study Hall"],
      thursday: ["Mathematics", "English", "Physics", "BREAK", "Chemistry", "Biology", "Computer Sci", "LUNCH", "PE", "Economics", "Tutorials"],
      friday: ["English", "Pure Math", "Science", "BREAK", "History", "Geography", "Business", "LUNCH", "French", "Study Hall", "Assembly"]
    },
    "form-3b": {
      monday: ["English Lit", "Pure Math", "Biology", "BREAK", "Physics", "Chemistry", "Economics", "LUNCH", "PE", "Computer Sci", "Tutorials"],
      tuesday: ["Mathematics", "English Lang", "Chemistry", "BREAK", "Physics", "Biology", "History", "LUNCH", "French", "Geography", "Library"],
      wednesday: ["English", "Applied Math", "Science", "BREAK", "Business", "Economics", "Kiswahili", "LUNCH", "Music", "Drama", "Study Hall"],
      thursday: ["English", "Mathematics", "Physics", "BREAK", "Biology", "Chemistry", "Computer Sci", "LUNCH", "Economics", "PE", "Tutorials"],
      friday: ["Pure Math", "English", "Science", "BREAK", "Geography", "History", "Business", "LUNCH", "Study Hall", "French", "Assembly"]
    },
    "form-3c": {
      monday: ["Biology", "Pure Math", "English Lit", "BREAK", "Chemistry", "Physics", "Economics", "LUNCH", "Computer Sci", "PE", "Tutorials"],
      tuesday: ["Chemistry", "English Lang", "Mathematics", "BREAK", "Biology", "Physics", "History", "LUNCH", "Geography", "French", "Library"],
      wednesday: ["Science", "Applied Math", "English", "BREAK", "Economics", "Business", "Kiswahili", "LUNCH", "Drama", "Music", "Study Hall"],
      thursday: ["Physics", "English", "Mathematics", "BREAK", "Chemistry", "Biology", "Computer Sci", "LUNCH", "PE", "Economics", "Tutorials"],
      friday: ["Science", "Pure Math", "English", "BREAK", "History", "Geography", "Business", "LUNCH", "French", "Study Hall", "Assembly"]
    },
    "form-3d": {
      monday: ["Mathematics", "Biology", "English Lit", "BREAK", "Physics", "Chemistry", "Economics", "LUNCH", "PE", "Computer Sci", "Tutorials"],
      tuesday: ["English Lang", "Chemistry", "Mathematics", "BREAK", "Physics", "Biology", "History", "LUNCH", "French", "Geography", "Library"],
      wednesday: ["Applied Math", "Science", "English", "BREAK", "Business", "Economics", "Kiswahili", "LUNCH", "Music", "Drama", "Study Hall"],
      thursday: ["Mathematics", "Physics", "English", "BREAK", "Biology", "Chemistry", "Computer Sci", "LUNCH", "Economics", "PE", "Tutorials"],
      friday: ["English", "Science", "Pure Math", "BREAK", "Geography", "History", "Business", "LUNCH", "Study Hall", "French", "Assembly"]
    },
    "form-4a": {
      monday: ["Advanced Math", "English Lit", "Biology", "BREAK", "Chemistry", "Physics", "Economics", "LUNCH", "Computer Sci", "Career Guid", "Exam Prep"],
      tuesday: ["English Lang", "Mathematics", "Chemistry", "BREAK", "Biology", "Physics", "History", "LUNCH", "Geography", "French", "Library"],
      wednesday: ["Pure Math", "English", "Science", "BREAK", "Business", "Economics", "Kiswahili", "LUNCH", "Leadership", "Music", "Study Hall"],
      thursday: ["Mathematics", "English", "Physics", "BREAK", "Chemistry", "Biology", "Computer Sci", "LUNCH", "PE", "Career Guid", "Exam Prep"],
      friday: ["English", "Advanced Math", "Science", "BREAK", "History", "Geography", "Business", "LUNCH", "French", "Study Hall", "Assembly"]
    },
    "form-4b": {
      monday: ["English Lit", "Advanced Math", "Biology", "BREAK", "Physics", "Chemistry", "Economics", "LUNCH", "Career Guid", "Computer Sci", "Exam Prep"],
      tuesday: ["Mathematics", "English Lang", "Chemistry", "BREAK", "Physics", "Biology", "History", "LUNCH", "French", "Geography", "Library"],
      wednesday: ["English", "Pure Math", "Science", "BREAK", "Economics", "Business", "Kiswahili", "LUNCH", "Music", "Leadership", "Study Hall"],
      thursday: ["English", "Mathematics", "Physics", "BREAK", "Biology", "Chemistry", "Computer Sci", "LUNCH", "Career Guid", "PE", "Exam Prep"],
      friday: ["Advanced Math", "English", "Science", "BREAK", "Geography", "History", "Business", "LUNCH", "Study Hall", "French", "Assembly"]
    },
    "form-4c": {
      monday: ["Biology", "Advanced Math", "English Lit", "BREAK", "Chemistry", "Physics", "Economics", "LUNCH", "Computer Sci", "Career Guid", "Exam Prep"],
      tuesday: ["Chemistry", "English Lang", "Mathematics", "BREAK", "Biology", "Physics", "History", "LUNCH", "Geography", "French", "Library"],
      wednesday: ["Science", "Pure Math", "English", "BREAK", "Business", "Economics", "Kiswahili", "LUNCH", "Leadership", "Music", "Study Hall"],
      thursday: ["Physics", "English", "Mathematics", "BREAK", "Chemistry", "Biology", "Computer Sci", "LUNCH", "PE", "Career Guid", "Exam Prep"],
      friday: ["Science", "Advanced Math", "English", "BREAK", "History", "Geography", "Business", "LUNCH", "French", "Study Hall", "Assembly"]
    },
    "form-4d": {
      monday: ["Mathematics", "Biology", "English Lit", "BREAK", "Physics", "Chemistry", "Economics", "LUNCH", "Career Guid", "Computer Sci", "Exam Prep"],
      tuesday: ["English Lang", "Chemistry", "Mathematics", "BREAK", "Physics", "Biology", "History", "LUNCH", "French", "Geography", "Library"],
      wednesday: ["Pure Math", "Science", "English", "BREAK", "Economics", "Business", "Kiswahili", "LUNCH", "Music", "Leadership", "Study Hall"],
      thursday: ["Mathematics", "Physics", "English", "BREAK", "Biology", "Chemistry", "Computer Sci", "LUNCH", "Career Guid", "PE", "Exam Prep"],
      friday: ["English", "Science", "Advanced Math", "BREAK", "Geography", "History", "Business", "LUNCH", "Study Hall", "French", "Assembly"]
    }
  };

  const getSubjectColor = (subject: string) => {
    const colors = {
      "Mathematics": "bg-blue-100 text-blue-800",
      "Advanced Math": "bg-blue-100 text-blue-800", 
      "Pure Math": "bg-blue-100 text-blue-800",
      "Applied Math": "bg-blue-100 text-blue-800",
      "English": "bg-green-100 text-green-800",
      "English Lit": "bg-green-100 text-green-800",
      "English Lang": "bg-green-100 text-green-800",
      "Science": "bg-purple-100 text-purple-800",
      "Biology": "bg-emerald-100 text-emerald-800",
      "Chemistry": "bg-orange-100 text-orange-800",
      "Physics": "bg-red-100 text-red-800",
      "History": "bg-amber-100 text-amber-800",
      "Geography": "bg-teal-100 text-teal-800",
      "Computer": "bg-indigo-100 text-indigo-800",
      "Computer Sci": "bg-indigo-100 text-indigo-800",
      "BREAK": "bg-gray-100 text-gray-600",
      "LUNCH": "bg-gray-100 text-gray-600",
      "PE": "bg-lime-100 text-lime-800",
      "Art": "bg-pink-100 text-pink-800",
      "Music": "bg-violet-100 text-violet-800",
      "French": "bg-cyan-100 text-cyan-800",
      "Economics": "bg-yellow-100 text-yellow-800",
      "Business": "bg-orange-100 text-orange-800"
    };
    
    return colors[subject as keyof typeof colors] || "bg-gray-100 text-gray-800";
  };

  const days = ["monday", "tuesday", "wednesday", "thursday", "friday"];
  const dayNames = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

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
                          const isBreak = subject === "BREAK" || subject === "LUNCH";
                          
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