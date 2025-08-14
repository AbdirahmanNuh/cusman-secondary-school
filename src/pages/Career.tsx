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
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6">
            Join Our <span className="text-orange-500">Team</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We are looking for passionate professionals to join our vibrant learning community.
          </p>
        </div>

        {/* Job Listings */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredJobs.slice(0, 3).map((job) => (
            <Card key={job.id} className="bg-gray-50 border-0 p-8 hover:shadow-md transition-shadow">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-teal-700 mb-4">
                  {job.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {job.description.length > 100 
                    ? `${job.description.substring(0, 100)}...` 
                    : job.description}
                </p>
              </div>

              <Link to={`/career/${job.id}`}>
                <Button 
                  variant="ghost" 
                  className="text-orange-500 hover:text-orange-600 p-0 h-auto font-medium group"
                >
                  View Details →
                </Button>
              </Link>
            </Card>
          ))}
        </div>

        {/* General Application Section */}
        <div className="text-center mb-12">
          <p className="text-lg text-gray-600 mb-6">
            Don't see a role that fits? We welcome general applications.
          </p>
          <Button className="bg-teal-700 hover:bg-teal-800 text-white px-8 py-3 rounded-md text-base font-medium">
            Submit General Application
          </Button>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Career;