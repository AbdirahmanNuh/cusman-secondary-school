import { useParams, Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Users, GraduationCap, ArrowLeft, Calendar, DollarSign, FileText } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const JobDetail = () => {
  const { id } = useParams();

  // Mock job data - in a real app, this would come from an API
  const jobData: { [key: string]: any } = {
    "1": {
      id: 1,
      title: "Mathematics Teacher",
      department: "Mathematics",
      type: "Full-time",
      location: "Main Campus",
      experience: "2-5 years",
      deadline: "2024-09-15",
      salary: "$35,000 - $45,000 annually",
      description: "We are seeking a passionate Mathematics teacher to join our dynamic team. The ideal candidate will have strong subject knowledge and excellent communication skills to inspire and educate students in various mathematical concepts from basic arithmetic to advanced algebra and geometry.",
      requirements: [
        "Bachelor's degree in Mathematics or related field",
        "Teaching certification required",
        "Minimum 2 years teaching experience",
        "Strong classroom management skills",
        "Proficiency in educational technology",
        "Excellent communication and interpersonal skills"
      ],
      responsibilities: [
        "Plan and deliver engaging mathematics lessons for grades 6-12",
        "Assess student progress and provide constructive feedback",
        "Participate in school activities and events",
        "Collaborate with colleagues and parents",
        "Maintain accurate records of student performance",
        "Attend professional development workshops",
        "Supervise students during examinations",
        "Organize math competitions and events"
      ],
      benefits: [
        "Competitive salary package",
        "Health insurance coverage",
        "Professional development opportunities",
        "Paid vacation and sick leave",
        "Retirement savings plan",
        "Free meals during school hours"
      ],
      applicationProcess: [
        "Submit online application with CV and cover letter",
        "Provide academic transcripts and teaching certificates",
        "Complete a teaching demonstration",
        "Interview with hiring committee",
        "Reference checks",
        "Final decision notification"
      ]
    },
    "2": {
      id: 2,
      title: "English Language Teacher",
      department: "English",
      type: "Full-time",
      location: "Main Campus",
      experience: "3-7 years",
      deadline: "2024-09-20",
      salary: "$38,000 - $48,000 annually",
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
      ],
      benefits: [
        "Competitive salary package",
        "Health insurance coverage",
        "Professional development opportunities",
        "Paid vacation and sick leave"
      ],
      applicationProcess: [
        "Submit online application",
        "Teaching demonstration",
        "Interview process",
        "Reference checks"
      ]
    },
    "3": {
      id: 3,
      title: "Science Laboratory Assistant",
      department: "Science",
      type: "Part-time",
      location: "Science Block",
      experience: "1-3 years",
      deadline: "2024-08-30",
      salary: "$18,000 - $25,000 annually",
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
      ],
      benefits: [
        "Flexible working hours",
        "Training opportunities",
        "Health insurance",
        "Friendly work environment"
      ],
      applicationProcess: [
        "Submit application and CV",
        "Skills assessment",
        "Interview",
        "Background check"
      ]
    },
    "4": {
      id: 4,
      title: "Physical Education Teacher",
      department: "Physical Education",
      type: "Full-time",
      location: "Sports Complex",
      experience: "2-5 years",
      deadline: "2024-09-10",
      salary: "$36,000 - $46,000 annually",
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
      ],
      benefits: [
        "Competitive salary",
        "Access to sports facilities",
        "Health and wellness benefits",
        "Professional development"
      ],
      applicationProcess: [
        "Submit application",
        "Practical demonstration",
        "Interview with sports committee",
        "Reference verification"
      ]
    },
    "5": {
      id: 5,
      title: "Librarian",
      department: "Library",
      type: "Full-time",
      location: "Main Library",
      experience: "2-4 years",
      deadline: "2024-09-25",
      salary: "$32,000 - $42,000 annually",
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
      ],
      benefits: [
        "Quiet work environment",
        "Professional development",
        "Health benefits",
        "Vacation time"
      ],
      applicationProcess: [
        "Online application",
        "Portfolio review",
        "Interview",
        "Skills assessment"
      ]
    }
  };

  const job = jobData[id || "1"];

  if (!job) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto px-4 py-12">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-foreground mb-4">Job Not Found</h1>
            <Link to="/career">
              <Button>Back to Careers</Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const getTypeColor = (type: string) => {
    return type === "Full-time" ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground";
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        {/* Back Button */}
        <Link to="/career" className="inline-flex items-center text-muted-foreground hover:text-foreground mb-8 group">
          <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
          Back to Careers
        </Link>

        {/* Job Header */}
        <div className="mb-8">
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-6">
            <div>
              <h1 className="text-4xl font-bold text-foreground mb-4">{job.title}</h1>
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge className={getTypeColor(job.type)}>
                  {job.type}
                </Badge>
                <Badge variant="outline">{job.department}</Badge>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  <span>{job.location}</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Users className="h-4 w-4" />
                  <span>{job.experience}</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span>Apply by {new Date(job.deadline).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <DollarSign className="h-4 w-4" />
                  <span>{job.salary}</span>
                </div>
              </div>
            </div>
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              <GraduationCap className="mr-2 h-5 w-5" />
              Apply Now
            </Button>
          </div>
        </div>

        {/* Job Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            {/* Job Description */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5" />
                  Job Description
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">{job.description}</p>
              </CardContent>
            </Card>

            {/* Responsibilities */}
            <Card>
              <CardHeader>
                <CardTitle>Key Responsibilities</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {job.responsibilities.map((responsibility: string, index: number) => (
                    <li key={index} className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground">{responsibility}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Requirements */}
            <Card>
              <CardHeader>
                <CardTitle>Requirements & Qualifications</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {job.requirements.map((requirement: string, index: number) => (
                    <li key={index} className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground">{requirement}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            {/* Benefits */}
            <Card>
              <CardHeader>
                <CardTitle>Benefits & Perks</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {job.benefits.map((benefit: string, index: number) => (
                    <li key={index} className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm text-muted-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Application Process */}
            <Card>
              <CardHeader>
                <CardTitle>Application Process</CardTitle>
              </CardHeader>
              <CardContent>
                <ol className="space-y-3">
                  {job.applicationProcess.map((step: string, index: number) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0">
                        {index + 1}
                      </div>
                      <span className="text-sm text-muted-foreground">{step}</span>
                    </li>
                  ))}
                </ol>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <Card>
              <CardHeader>
                <CardTitle>Questions?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Contact our HR department for more information about this position.
                </p>
                <div className="space-y-2 text-sm">
                  <div>
                    <strong>Email:</strong> hr@cusmanschool.edu
                  </div>
                  <div>
                    <strong>Phone:</strong> +252 61 234 5678
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Apply Section */}
        <div className="mt-12 text-center bg-muted/30 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-foreground mb-4">Ready to Apply?</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Join our team of dedicated educators and make a difference in students' lives. 
            We look forward to hearing from you!
          </p>
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
            <GraduationCap className="mr-2 h-5 w-5" />
            Apply for this Position
          </Button>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default JobDetail;