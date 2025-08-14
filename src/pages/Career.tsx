import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Clock, Users, GraduationCap, Search, Filter } from "lucide-react";
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
      location: "Main Campus",
      experience: "2-5 years",
      deadline: "2024-09-15",
      description: "We are seeking a passionate Mathematics teacher to join our dynamic team. The ideal candidate will have strong subject knowledge and excellent communication skills.",
      requirements: [
        "Bachelor's degree in Mathematics or related field",
        "Teaching certification required",
        "Minimum 2 years teaching experience",
        "Strong classroom management skills"
      ],
      responsibilities: [
        "Plan and deliver engaging mathematics lessons",
        "Assess student progress and provide feedback",
        "Participate in school activities and events",
        "Collaborate with colleagues and parents"
      ]
    },
    {
      id: 2,
      title: "English Language Teacher",
      department: "English",
      type: "Full-time",
      location: "Main Campus",
      experience: "3-7 years",
      deadline: "2024-09-20",
      description: "Join our English department as an experienced teacher who can inspire students to develop their language and literature skills.",
      requirements: [
        "Bachelor's degree in English or Literature",
        "Teaching certification required",
        "Minimum 3 years teaching experience",
        "Native or near-native English proficiency"
      ],
      responsibilities: [
        "Teach English language and literature",
        "Develop curriculum and lesson plans",
        "Organize literary events and competitions",
        "Mentor student publications"
      ]
    },
    {
      id: 3,
      title: "Science Laboratory Assistant",
      department: "Science",
      type: "Part-time",
      location: "Science Block",
      experience: "1-3 years",
      deadline: "2024-08-30",
      description: "Support our science department by maintaining laboratory equipment and assisting with practical sessions.",
      requirements: [
        "Diploma in Science or related field",
        "Laboratory experience preferred",
        "Knowledge of safety procedures",
        "Attention to detail"
      ],
      responsibilities: [
        "Prepare laboratory equipment for classes",
        "Maintain inventory of chemicals and materials",
        "Ensure laboratory safety standards",
        "Assist teachers during practical sessions"
      ]
    },
    {
      id: 4,
      title: "Physical Education Teacher",
      department: "Physical Education",
      type: "Full-time",
      location: "Sports Complex",
      experience: "2-5 years",
      deadline: "2024-09-10",
      description: "Lead our physical education program and coach various sports teams to promote student fitness and teamwork.",
      requirements: [
        "Bachelor's degree in Physical Education",
        "Sports coaching certification",
        "First aid certification",
        "Strong leadership skills"
      ],
      responsibilities: [
        "Conduct physical education classes",
        "Coach school sports teams",
        "Organize sports events and competitions",
        "Promote student health and fitness"
      ]
    },
    {
      id: 5,
      title: "Librarian",
      department: "Library",
      type: "Full-time",
      location: "Main Library",
      experience: "2-4 years",
      deadline: "2024-09-25",
      description: "Manage our school library and promote reading culture among students and staff.",
      requirements: [
        "Bachelor's degree in Library Science",
        "Library management experience",
        "Computer literacy",
        "Excellent organizational skills"
      ],
      responsibilities: [
        "Manage library resources and catalog",
        "Assist students and staff with research",
        "Organize reading programs and events",
        "Maintain digital and physical collections"
      ]
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
        <div className="grid gap-6 mb-12">
          {filteredJobs.map((job) => (
            <Card key={job.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <div>
                    <CardTitle className="text-xl text-foreground">{job.title}</CardTitle>
                    <CardDescription className="text-muted-foreground mt-1">
                      {job.description}
                    </CardDescription>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Badge className={getTypeColor(job.type)}>
                      {job.type}
                    </Badge>
                    <Badge variant="outline">{job.department}</Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                {/* Job Details */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span>{job.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Users className="h-4 w-4" />
                    <span>{job.experience}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    <span>Apply by {new Date(job.deadline).toLocaleDateString()}</span>
                  </div>
                </div>

                {/* Requirements and Responsibilities */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Requirements:</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                      {job.requirements.map((req, index) => (
                        <li key={index}>{req}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Responsibilities:</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                      {job.responsibilities.map((resp, index) => (
                        <li key={index}>{resp}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Apply Button */}
                <div className="flex justify-end">
                  <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                    <GraduationCap className="mr-2 h-4 w-4" />
                    Apply Now
                  </Button>
                </div>
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

        {/* Application Process */}
        <div className="mt-16 bg-muted/30 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-foreground mb-6 text-center">
            Application Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                1
              </div>
              <h3 className="font-semibold text-foreground mb-2">Submit Application</h3>
              <p className="text-sm text-muted-foreground">
                Click "Apply Now" and fill out our online application form with your details and qualifications.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                2
              </div>
              <h3 className="font-semibold text-foreground mb-2">Interview Process</h3>
              <p className="text-sm text-muted-foreground">
                Qualified candidates will be contacted for an interview with our hiring committee.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                3
              </div>
              <h3 className="font-semibold text-foreground mb-2">Join Our Team</h3>
              <p className="text-sm text-muted-foreground">
                Successful candidates will receive an offer and begin their journey with our school.
              </p>
            </div>
          </div>
        </div>

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