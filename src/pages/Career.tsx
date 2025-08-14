import { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Clock, ArrowRight, Mail, Phone } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Career = () => {
  const [departmentFilter, setDepartmentFilter] = useState("all");

  const jobPostings = [
    {
      id: 1,
      title: "Mathematics Teacher",
      department: "Mathematics",
      type: "Full-time",
      location: "Main Campus",
      deadline: "2024-09-15",
    },
    {
      id: 2,
      title: "English Language Teacher",
      department: "English",
      type: "Full-time",
      location: "Main Campus",
      deadline: "2024-09-20",
    },
    {
      id: 3,
      title: "Science Laboratory Assistant",
      department: "Science",
      type: "Part-time",
      location: "Science Block",
      deadline: "2024-08-30",
    },
    {
      id: 4,
      title: "Physical Education Teacher",
      department: "Physical Education",
      type: "Full-time",
      location: "Sports Complex",
      deadline: "2024-09-10",
    },
    {
      id: 5,
      title: "Librarian",
      department: "Library",
      type: "Full-time",
      location: "Main Library",
      deadline: "2024-09-25",
    }
  ];

  const departments = ["all", "Mathematics", "English", "Science", "Physical Education", "Library"];

  const filteredJobs = jobPostings.filter(job => {
    return departmentFilter === "all" || job.department === departmentFilter;
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        {/* Simplified Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Join Our Team
          </h1>
          <p className="text-xl text-muted-foreground">
            Discover exciting career opportunities at Cusman Secondary School
          </p>
        </div>

        {/* Simple Filter */}
        <div className="mb-8 flex justify-center">
          <Select value={departmentFilter} onValueChange={setDepartmentFilter}>
            <SelectTrigger className="w-64">
              <SelectValue placeholder="Filter by department" />
            </SelectTrigger>
            <SelectContent>
              {departments.map((dept) => (
                <SelectItem key={dept} value={dept}>
                  {dept === "all" ? "All Departments" : dept}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Simplified Job Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredJobs.map((job) => (
            <Card key={job.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">{job.title}</CardTitle>
                <Badge variant="outline" className="w-fit">{job.department}</Badge>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span>{job.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    <span>Apply by {new Date(job.deadline).toLocaleDateString()}</span>
                  </div>
                </div>

                <Link to={`/career/${job.id}`}>
                  <Button variant="ghost" className="text-primary hover:text-primary/80 p-0 h-auto font-medium group">
                    View Details
                    <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* No Results */}
        {filteredJobs.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-xl font-semibold mb-2">No positions found</h3>
            <p className="text-muted-foreground">
              Check back later for new opportunities.
            </p>
          </div>
        )}

        {/* Simplified Contact Section */}
        <div className="mt-16 text-center bg-muted/30 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-4">Ready to Apply?</h2>
          <p className="text-muted-foreground mb-6">
            Contact our HR department for more information
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              hr@cusmanschool.edu
            </Button>
            <Button variant="outline" className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              +252 61 234 5678
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Career;