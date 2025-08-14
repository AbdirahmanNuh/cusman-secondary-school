import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { BookOpen, Users, Award, Target, Download, Calendar, Clock, GraduationCap } from "lucide-react";

const Curriculum = () => {
  const [selectedForm, setSelectedForm] = useState("1");

  const subjects = {
    "1": {
      core: ["Mathematics", "English Language", "Somali Language", "Science", "Social Studies", "Islamic Studies", "Physical Education"],
      elective: ["Art", "Computer Studies", "Music"]
    },
    "2": {
      core: ["Mathematics", "English Language", "Somali Language", "Biology", "Chemistry", "Physics", "Geography", "History", "Islamic Studies"],
      elective: ["Computer Studies", "Art", "Business Studies", "Arabic Language"]
    },
    "3": {
      core: ["Mathematics", "English Language", "Somali Language", "Biology", "Chemistry", "Physics", "Geography", "History", "Islamic Studies"],
      elective: ["Computer Studies", "Economics", "Business Studies", "Arabic Language", "Literature"]
    },
    "4": {
      core: ["Mathematics", "English Language", "Somali Language", "Biology", "Chemistry", "Physics", "Geography", "History", "Islamic Studies"],
      elective: ["Computer Studies", "Economics", "Business Studies", "Arabic Language", "Literature", "Advanced Mathematics"]
    }
  };

  const curriculumFeatures = [
    {
      icon: <BookOpen className="h-8 w-8 text-primary" />,
      title: "Comprehensive Academic Program",
      description: "Our curriculum covers all essential subjects following the Somali National Education Standards while incorporating modern teaching methodologies."
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Qualified Teaching Staff",
      description: "All our teachers are certified professionals with extensive experience in secondary education and subject expertise."
    },
    {
      icon: <Award className="h-8 w-8 text-primary" />,
      title: "National Certification",
      description: "Students receive certificates recognized by the Ministry of Education and eligible for higher education admissions."
    },
    {
      icon: <Target className="h-8 w-8 text-primary" />,
      title: "Skill Development Focus",
      description: "Beyond academics, we emphasize critical thinking, problem-solving, and practical skills for real-world applications."
    }
  ];

  const learningOutcomes = [
    "Master fundamental concepts in Mathematics, Sciences, and Languages",
    "Develop strong communication skills in Somali, English, and Arabic",
    "Understand Somali history, culture, and Islamic values",
    "Acquire basic computer literacy and digital skills",
    "Prepare for national examinations and higher education",
    "Build character, leadership, and civic responsibility"
  ];

  const assessmentMethods = [
    {
      method: "Continuous Assessment",
      percentage: "60%",
      description: "Regular quizzes, assignments, projects, and class participation"
    },
    {
      method: "Mid-term Examinations",
      percentage: "20%",
      description: "Comprehensive exams conducted twice per academic year"
    },
    {
      method: "Final Examinations",
      percentage: "20%",
      description: "End-of-year national standard examinations"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Academic Curriculum
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our comprehensive curriculum is designed to provide students with a solid foundation in academics, 
            character development, and practical skills for success in higher education and life.
          </p>
        </div>

        {/* Curriculum Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {curriculumFeatures.map((feature, index) => (
            <Card key={index} className="text-center">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <CardTitle className="text-lg">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Subjects by Form */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <GraduationCap className="h-6 w-6" />
              Subjects by Form Level
            </CardTitle>
            <CardDescription>
              Select a form level to view the subjects offered at that level
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs value={selectedForm} onValueChange={setSelectedForm}>
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="1">Form 1</TabsTrigger>
                <TabsTrigger value="2">Form 2</TabsTrigger>
                <TabsTrigger value="3">Form 3</TabsTrigger>
                <TabsTrigger value="4">Form 4</TabsTrigger>
              </TabsList>
              
              {Object.entries(subjects).map(([form, { core, elective }]) => (
                <TabsContent key={form} value={form} className="mt-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-4 text-primary">Core Subjects</h3>
                      <div className="space-y-2">
                        {core.map((subject, index) => (
                          <div key={index} className="flex items-center gap-2">
                            <Badge variant="default" className="w-full justify-start">
                              {subject}
                            </Badge>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold mb-4 text-secondary">Elective Subjects</h3>
                      <div className="space-y-2">
                        {elective.map((subject, index) => (
                          <div key={index} className="flex items-center gap-2">
                            <Badge variant="secondary" className="w-full justify-start">
                              {subject}
                            </Badge>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </CardContent>
        </Card>

        {/* Learning Outcomes & Assessment */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Learning Outcomes */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-6 w-6" />
                Learning Outcomes
              </CardTitle>
              <CardDescription>
                What students will achieve upon completion
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {learningOutcomes.map((outcome, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm">{outcome}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Assessment Methods */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="h-6 w-6" />
                Assessment Methods
              </CardTitle>
              <CardDescription>
                How student progress is evaluated
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {assessmentMethods.map((assessment, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-semibold">{assessment.method}</h4>
                      <Badge variant="outline">{assessment.percentage}</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">{assessment.description}</p>
                    {index < assessmentMethods.length - 1 && <Separator className="mt-4" />}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Academic Information */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card>
            <CardHeader className="text-center">
              <Calendar className="h-8 w-8 text-primary mx-auto mb-2" />
              <CardTitle>Academic Calendar</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-sm text-muted-foreground mb-4">
                Three terms per academic year following the national education calendar
              </p>
              <Button variant="outline" className="w-full">
                <Download className="mr-2 h-4 w-4" />
                Download Calendar
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="text-center">
              <Clock className="h-8 w-8 text-primary mx-auto mb-2" />
              <CardTitle>Class Schedule</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-sm text-muted-foreground mb-4">
                40 minutes per period, 8 periods daily with breaks and lunch
              </p>
              <Button variant="outline" className="w-full">
                <BookOpen className="mr-2 h-4 w-4" />
                View Timetable
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="text-center">
              <GraduationCap className="h-8 w-8 text-primary mx-auto mb-2" />
              <CardTitle>Certification</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-sm text-muted-foreground mb-4">
                National Secondary Education Certificate upon successful completion
              </p>
              <Button variant="outline" className="w-full">
                <Award className="mr-2 h-4 w-4" />
                Learn More
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <Card className="bg-primary text-primary-foreground">
          <CardContent className="text-center py-12">
            <h2 className="text-3xl font-bold mb-4">Ready to Join Our Academic Program?</h2>
            <p className="text-lg mb-6 opacity-90">
              Discover how our comprehensive curriculum can help your child achieve academic excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary">
                Apply for Admission
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                Schedule a Visit
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>

      <Footer />
    </div>
  );
};

export default Curriculum;