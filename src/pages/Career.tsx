import { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Clock, Search, Filter, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Career = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [departmentFilter, setDepartmentFilter] = useState("all");

  const jobPostings = [
    {
      id: 1,
      title: "Mathematics Teacher",
      department: "Mathematics",
      type: "Full-time",
      experience: "2-5 years",
      deadline: "2024-09-15",
      salary: "Competitive"
    },
    {
      id: 2,
      title: "English Language Teacher",
      department: "English",
      type: "Full-time",
      experience: "3-7 years",
      deadline: "2024-09-20",
      salary: "Competitive"
    },
    {
      id: 3,
      title: "Science Laboratory Assistant",
      department: "Science",
      type: "Part-time",
      experience: "1-3 years",
      deadline: "2024-08-30",
      salary: "Hourly Rate"
    },
    {
      id: 4,
      title: "Physical Education Teacher",
      department: "Physical Education",
      type: "Full-time",
      experience: "2-5 years",
      deadline: "2024-09-10",
      salary: "Competitive"
    },
    {
      id: 5,
      title: "Librarian",
      department: "Library",
      type: "Full-time",
      experience: "2-4 years",
      deadline: "2024-09-25",
      salary: "Competitive"
    }
  ];

  const departments = ["all", "Mathematics", "English", "Science", "Physical Education", "Library"];

  const filteredJobs = jobPostings.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.department.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDepartment = departmentFilter === "all" || job.department === departmentFilter;
    return matchesSearch && matchesDepartment;
  });

  const getTypeColor = (type: string) => {
    return type === "Full-time" ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground";
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Career Opportunities
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join our dedicated team of educators and staff members who are committed to providing 
            excellence in education and shaping the future of our students.
          </p>
        </div>

        {/* Search and Filter Section */}
        <div className="mb-8 bg-muted/30 p-6 rounded-lg">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search positions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex items-center gap-2">
              <Filter className="h-4 w-4 text-muted-foreground" />
              <Select value={departmentFilter} onValueChange={setDepartmentFilter}>
                <SelectTrigger className="w-48">
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
          </div>
        </div>

        {/* Job Listings */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredJobs.map((job) => (
            <Card key={job.id} className="hover:shadow-lg transition-shadow border border-border bg-card group">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-semibold text-foreground mb-1">
                  {job.title}
                </CardTitle>
                <Badge className={getTypeColor(job.type)} variant="secondary">
                  {job.type}
                </Badge>
              </CardHeader>
              <CardContent className="pt-2">
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-muted-foreground">Experience</span>
                    <span className="text-sm text-foreground">{job.experience}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-muted-foreground">Salary</span>
                    <span className="text-sm text-foreground">{job.salary}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground pt-2">
                    <Clock className="h-4 w-4" />
                    <span>Deadline: {new Date(job.deadline).toLocaleDateString()}</span>
                  </div>
                </div>

                <Link to={`/career/${job.id}`} className="block mt-4">
                  <Button 
                    variant="outline" 
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                  >
                    Apply Now
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* No Results */}
        {filteredJobs.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-xl font-semibold text-foreground mb-2">No positions found</h3>
            <p className="text-muted-foreground">
              Try adjusting your search criteria or check back later for new opportunities.
            </p>
          </div>
        )}

        {/* Contact Information */}
        <div className="mt-12 text-center">
          <h3 className="text-xl font-semibold text-foreground mb-4">
            Questions About Careers?
          </h3>
          <p className="text-muted-foreground mb-4">
            Contact our Human Resources department for more information about career opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline">
              Email: hr@cusmanschool.edu
            </Button>
            <Button variant="outline">
              Phone: +252 61 234 5678
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Career;