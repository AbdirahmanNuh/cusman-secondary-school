import { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Career = () => {
  const [departmentFilter, setDepartmentFilter] = useState("all");

  const jobPostings = [
    {
      id: 1,
      title: "Primary School Teacher",
      description: "Seeking an enthusiastic teacher to inspire young minds in core subjects.",
    },
    {
      id: 2,
      title: "French Language Teacher",
      description: "A passionate linguist to deliver engaging French lessons to primary students.",
    },
    {
      id: 3,
      title: "School Administrator",
      description: "An organized administrator to support our daily operations and parent communications.",
    },
    {
      id: 4,
      title: "Mathematics Teacher",
      description: "Join our team to teach mathematics with creativity and passion.",
    },
    {
      id: 5,
      title: "Science Laboratory Assistant",
      description: "Support our science department with laboratory management and student assistance.",
    },
    {
      id: 6,
      title: "Physical Education Teacher",
      description: "Lead our sports programs and promote healthy, active lifestyles among students.",
    }
  ];

  const departments = ["all", "Teaching", "Administration", "Support Staff"];

  const filteredJobs = jobPostings.filter(job => {
    if (departmentFilter === "all") return true;
    // Simple categorization - you can make this more sophisticated
    if (departmentFilter === "Teaching") {
      return job.title.includes("Teacher");
    }
    if (departmentFilter === "Administration") {
      return job.title.includes("Administrator");
    }
    if (departmentFilter === "Support Staff") {
      return job.title.includes("Assistant");
    }
    return true;
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        {/* Header with Brand Colors */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-primary mb-4">
            Career Opportunities
          </h1>
          <p className="text-xl text-primary/80">
            Join our dedicated team at Cusman Secondary School
          </p>
        </div>

        {/* Simple Filter with Brand Styling */}
        <div className="mb-8 flex justify-center">
          <Select value={departmentFilter} onValueChange={setDepartmentFilter}>
            <SelectTrigger className="w-64 border-border focus:border-primary focus:ring-primary">
              <SelectValue placeholder="Filter by category" />
            </SelectTrigger>
            <SelectContent>
              {departments.map((dept) => (
                <SelectItem key={dept} value={dept}>
                  {dept === "all" ? "All Positions" : dept}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Clean Job Cards with Brand Colors */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredJobs.map((job) => (
            <Card key={job.id} className="hover:shadow-lg transition-shadow bg-card border hover:border-primary/20">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl font-semibold text-primary mb-3">
                  {job.title}
                </CardTitle>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {job.description}
                </p>
              </CardHeader>
              <CardContent className="pt-0">
                <Link to={`/career/${job.id}`}>
                  <Button 
                    variant="ghost" 
                    className="text-primary hover:text-primary/90 hover:bg-accent p-0 h-auto font-medium group"
                  >
                    View Details
                    <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* No Results with Brand Colors */}
        {filteredJobs.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-xl font-semibold text-primary mb-2">No positions found</h3>
            <p className="text-muted-foreground">
              Try selecting a different category or check back later.
            </p>
          </div>
        )}

        {/* Contact Section with Brand Colors */}
        <div className="text-center bg-accent/30 border border-border rounded-lg p-8">
          <h2 className="text-2xl font-bold text-primary mb-4">
            Ready to Join Us?
          </h2>
          <p className="text-muted-foreground mb-6">
            Contact our HR department for more information about these positions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
              hr@cusmanschool.edu
            </Button>
            <Button variant="outline" className="border-secondary text-secondary-foreground hover:bg-secondary/10">
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