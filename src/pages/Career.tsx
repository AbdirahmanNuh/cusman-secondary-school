import { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@radix-ui/react-card"; // Adjusted path as it's a common issue with shadcn/ui
import { Badge } from "@/components/ui/badge"; // Assuming this path works within shadcn setup
import { Button } from "@/components/ui/button"; // Assuming this path works within shadcn setup
import { Input } from "@/components/ui/input"; // Assuming this path works within shadcn setup
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@radix-ui/react-select"; // Adjusted path as it's a common issue with shadcn/ui
import { MapPin, Clock, Users, GraduationCap, Search, Filter, ArrowRight, Heart, TrendingUp, Lightbulb, MessageSquare } from "lucide-react"; // Added new icons

// Inlined simple Header component to resolve import issues
const Header = () => (
  <header className="bg-primary text-primary-foreground p-4 shadow-md">
    <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
      <h1 className="text-2xl font-bold mb-2 sm:mb-0">Cusman Bina Cafaan</h1>
      <nav>
        <ul className="flex flex-wrap justify-center space-x-4">
          <li><Link to="/" className="hover:underline">Home</Link></li>
          <li><Link to="/career" className="hover:underline">Career</Link></li>
          <li><Link to="/contact" className="hover:underline">Contact</Link></li>
          <li><Link to="/about" className="hover:underline">About Us</Link></li> {/* Added basic navigation */}
          <li><Link to="/academics" className="hover:underline">Academics</Link></li>
          <li><Link to="/school-life" className="hover:underline">School Life</Link></li>
          <li className="ml-4"><Link to="/enroll" className="bg-yellow-500 text-yellow-900 px-3 py-1 rounded-md hover:bg-yellow-400 transition-colors">Enroll Now</Link></li>
        </ul>
      </nav>
    </div>
  </header>
);

// Inlined simple Footer component to resolve import issues
const Footer = () => (
  <footer className="bg-secondary text-secondary-foreground p-8 text-center mt-auto">
    <div className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 text-left mb-8">
        {/* About Section */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Cusman Bina Cafaan</h3>
          <p className="text-sm leading-relaxed">
            Committed to academic excellence, character development, and nurturing tomorrow's leaders through quality education and holistic development.
          </p>
          <div className="flex space-x-4 mt-4">
            {/* Placeholder for social media icons */}
            <a href="#" className="hover:text-primary-foreground"><Users className="h-5 w-5" /></a>
            <a href="#" className="hover:text-primary-foreground"><Lightbulb className="h-5 w-5" /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/about" className="hover:underline">About Us</Link></li>
            <li><Link to="/admissions" className="hover:underline">Admissions</Link></li>
            <li><Link to="/curriculum" className="hover:underline">Curriculum</Link></li>
            <li><Link to="/news-events" className="hover:underline">News & Events</Link></li>
            <li><Link to="/gallery" className="hover:underline">Gallery</Link></li>
          </ul>
        </div>

        {/* Academic Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Academic</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/principal-message" className="hover:underline">Principal's Message</Link></li>
            <li><Link to="/student-life" className="hover:underline">Student Life</Link></li>
            <li><Link to="/academic-calendar" className="hover:underline">Academic Calendar</Link></li>
            <li><Link to="/career-guidance" className="hover:underline">Career Guidance</Link></li>
            <li><Link to="/enroll" className="hover:underline">Enroll Now</Link></li>
          </ul>
        </div>

        {/* Contact Information */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact Info</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span>123 Education Street, Schoolville, Ory, State 12345</span>
            </li>
            <li className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>+1 234 567 8901</span>
            </li>
            <li className="flex items-center gap-2">
              <MessageSquare className="h-4 w-4" />
              <span>info@cusmanschool.edu</span>
            </li>
          </ul>
        </div>
      </div>
      <p className="mt-8 pt-4 border-t border-secondary-foreground/20">&copy; 2024 Cusman Bina Cafaan Secondary School. All rights reserved.</p>
    </div>
  </footer>
);


const Career = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [departmentFilter, setDepartmentFilter] = useState("all");

  // Updated jobPostings with shorter descriptions
  const jobPostings = [
    {
      id: 1,
      title: "Mathematics Teacher",
      department: "Mathematics",
      type: "Full-time",
      location: "Main Campus",
      experience: "2-5 years",
      deadline: "2024-09-15",
      description: "Inspire students in mathematics with engaging lessons and strong subject knowledge.",
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
      description: "Inspire students to develop language and literature skills.",
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
      description: "Maintain laboratory equipment and assist with practical science sessions.",
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
      description: "Lead engaging physical education programs and coach sports teams.",
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
      description: "Manage the school library and promote a vibrant reading culture.",
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

  // Function to get the color for the job type badge
  const getTypeColor = (type: string) => {
    return type === "Full-time" ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground";
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      
      <main className="container mx-auto px-4 py-12 flex-grow">
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

        {/* Why Work Here Section - New */}
        <section className="mb-12 bg-card p-8 rounded-lg shadow-sm">
          <h2 className="text-3xl font-bold text-center text-foreground mb-8">Why Work at Cusman Bina Cafaan?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center mb-8">
            <div className="flex flex-col items-center p-4">
              <Heart className="h-10 w-10 text-primary mb-3" />
              <h3 className="text-lg font-semibold text-foreground mb-2">Supportive Community</h3>
              <p className="text-muted-foreground">Collaborate with passionate colleagues in a nurturing environment.</p>
            </div>
            <div className="flex flex-col items-center p-4">
              <TrendingUp className="h-10 w-10 text-primary mb-3" />
              <h3 className="text-lg font-semibold text-foreground mb-2">Professional Growth</h3>
              <p className="text-muted-foreground">Access ongoing development and career advancement opportunities.</p>
            </div>
            <div className="flex flex-col items-center p-4">
              <Users className="h-10 w-10 text-primary mb-3" />
              <h3 className="text-lg font-semibold text-foreground mb-2">Impactful Work</h3>
              <p className="text-muted-foreground">Make a real difference in the lives of our students every day.</p>
            </div>
            <div className="flex flex-col items-center p-4">
              <Lightbulb className="h-10 w-10 text-primary mb-3" />
              <h3 className="text-lg font-semibold text-foreground mb-2">Innovative Environment</h3>
              <p className="text-muted-foreground">Embrace creativity and modern teaching methodologies.</p>
            </div>
          </div>
          {/* Placeholder image for culture/environment */}
          <div className="flex justify-center mb-8">
            <img 
              src="https://placehold.co/800x400/D0F0C0/000000?text=Engaged+Learning+Environment" 
              alt="Engaged Learning Environment" 
              className="rounded-lg shadow-md max-w-full h-auto"
              // Fallback for image loading errors
              onError={(e) => { e.currentTarget.src = 'https://placehold.co/800x400/D0F0C0/000000?text=Image+Not+Available'; }}
            />
          </div>
        </section>

        {/* Search and Filter Section */}
        <div className="mb-8 bg-muted/30 p-6 rounded-lg shadow-sm">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md w-full"> {/* Added w-full */}
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search positions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 w-full" // Added w-full
              />
            </div>
            <div className="flex items-center gap-2 w-full lg:w-auto justify-end"> {/* Added w-full lg:w-auto justify-end */}
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
            <Card key={job.id} className="hover:shadow-lg transition-shadow border border-border bg-card">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl text-foreground font-bold mb-2"> {/* Increased font weight */}
                  {job.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground leading-normal min-h-[40px]"> {/* Adjusted min-h for shorter text */}
                  {job.description} {/* No substring needed for shorter descriptions */}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge className={getTypeColor(job.type)} variant="secondary">
                    {job.type}
                  </Badge>
                  <Badge variant="outline">{job.department}</Badge>
                </div>
                
                <div className="space-y-2 mb-6">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span>{job.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground font-medium"> {/* Added font-medium */}
                    <Clock className="h-4 w-4" />
                    <span>Apply by {new Date(job.deadline).toLocaleDateString()}</span>
                  </div>
                </div>

                <Link to={`/career/${job.id}`}>
                  <Button 
                    variant="ghost" 
                    className="text-orange-600 hover:text-orange-700 hover:bg-orange-50 p-0 h-auto font-medium group"
                  >
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
            <h3 className="text-xl font-semibold text-foreground mb-2">No positions found</h3>
            <p className="text-muted-foreground">
              Try adjusting your search criteria or check back later for new opportunities.
            </p>
          </div>
        )}

        {/* Application Process Section - Revised Content */}
        <section className="bg-muted/30 p-8 rounded-lg shadow-sm mb-12">
          <h2 className="text-3xl font-bold text-center text-foreground mb-8">Our Application Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary text-primary-foreground text-xl font-bold mb-4">1</div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Submit Application</h3>
              <p className="text-muted-foreground">Complete our online application form with your details and qualifications.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary text-primary-foreground text-xl font-bold mb-4">2</div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Interview Process</h3>
              <p className="text-muted-foreground">Qualified candidates will be contacted for an interview with our hiring committee.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary text-primary-foreground text-xl font-bold mb-4">3</div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Join Our Team</h3>
              <p className="text-muted-foreground">Successful candidates will receive an offer and begin their journey with our school.</p>
            </div>
          </div>
        </section>

        {/* Employee Testimonial Section - New */}
        <section className="bg-accent/20 p-8 rounded-lg shadow-sm mb-12 flex flex-col md:flex-row items-center gap-8">
            <div className="flex-shrink-0">
                <img 
                    src="https://placehold.co/120x120/ADD8E6/000000?text=Teacher+Photo" 
                    alt="Employee Testimonial" 
                    className="rounded-full w-32 h-32 object-cover shadow-md"
                    onError={(e) => { e.currentTarget.src = 'https://placehold.co/120x120/ADD8E6/000000?text=Photo'; }}
                />
            </div>
            <div className="text-center md:text-left">
                <MessageSquare className="h-8 w-8 text-muted-foreground mx-auto md:mx-0 mb-3" />
                <blockquote className="text-xl italic text-foreground mb-4 leading-relaxed">
                    "Working at Cusman Bina Cafaan has been incredibly rewarding. The collaborative spirit and commitment to student success make every day fulfilling."
                </blockquote>
                <p className="text-lg font-semibold text-primary">— Aisha Mohamed</p>
                <p className="text-muted-foreground">Senior English Teacher</p>
            </div>
        </section>

        {/* Contact Information */}
        <div className="mt-12 text-center">
          <h3 className="text-xl font-semibold text-foreground mb-4">
            Questions About Careers?
          </h3>
          <p className="text-muted-foreground mb-4">
            Contact our Human Resources department for more information about career opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" className="flex items-center gap-2"> {/* Added flex items-center gap-2 */}
              <Link to="mailto:hr@cusmanschool.edu">hr@cusmanschool.edu</Link> {/* Made email clickable */}
            </Button>
            <Button variant="outline" className="flex items-center gap-2"> {/* Added flex items-center gap-2 */}
              <Link to="tel:+252612345678">Phone: +252 61 234 5678</Link> {/* Made phone clickable */}
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Career;
