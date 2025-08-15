import { Link } from "react-router-dom";
import { ArrowRight, Users, BookOpen, Trophy, Globe, Microscope, Atom, Heart, Calculator, FileText, MessageCircle, Clock, Map, Star, Monitor } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import schoolCampus from "@/assets/school-campus.jpg";
import studentsStudying from "@/assets/students-studying.jpg";
import principalImage from "@/assets/principal.jpg";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${schoolCampus})` }}
        />
        <div className="absolute inset-0 hero-gradient opacity-80" />
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="font-academic text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Excellence in <span className="text-secondary">Education</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 leading-relaxed">
            Nurturing tomorrow's leaders through academic excellence, character development, and innovative learning
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/enroll">
              <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary-dark font-semibold text-lg px-8 py-4">
                Enroll Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/about">
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-primary font-semibold text-lg px-8 py-4"
              >
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "500+", label: "Students Enrolled" },
              { number: "98%", label: "Graduation Rate" },
              { number: "25", label: "Years of Excellence" },
              { number: "50+", label: "Dedicated Teachers" },
            ].map((stat, index) => (
              <div key={index} className="space-y-2">
                <h3 className="text-4xl font-bold text-primary">{stat.number}</h3>
                <p className="text-muted-foreground font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-academic text-4xl font-bold text-primary mb-6">
                About Cusman Binu Cafaan Secondary School
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                For over two decades, we have been committed to providing exceptional education that goes beyond textbooks. 
                Our holistic approach combines rigorous academics with character development, preparing students for success 
                in higher education and life.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center space-x-3">
                  <Users className="h-6 w-6 text-secondary" />
                  <span className="font-medium">Experienced Faculty</span>
                </div>
                <div className="flex items-center space-x-3">
                  <BookOpen className="h-6 w-6 text-secondary" />
                  <span className="font-medium">Modern Curriculum</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Trophy className="h-6 w-6 text-secondary" />
                  <span className="font-medium">Award-Winning Programs</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Globe className="h-6 w-6 text-secondary" />
                  <span className="font-medium">Global Perspective</span>
                </div>
              </div>
              <Link to="/about">
                <Button className="bg-primary hover:bg-primary-dark">
                  Learn More About Us
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            <div className="relative">
              <img 
                src={studentsStudying} 
                alt="Students studying in library"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Principal's Message Preview */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-academic text-4xl font-bold text-primary mb-8">
              Message from Our Principal
            </h2>
            <Card className="card-elegant">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <img 
                    src={principalImage} 
                    alt="Principal"
                    className="w-32 h-32 rounded-full object-cover"
                  />
                  <div className="text-left">
                    <blockquote className="text-lg italic text-muted-foreground mb-4">
                      "At Cusman Binu Cafaan Secondary School, we believe every student has the potential to achieve 
                      greatness. Our mission is to provide an environment where academic excellence meets character 
                      development, preparing our students to become responsible global citizens."
                    </blockquote>
                    <div>
                      <p className="font-semibold text-primary">Dr. Sarah Johnson</p>
                      <p className="text-sm text-muted-foreground">Principal</p>
                    </div>
                  </div>
                </div>
                <div className="mt-6">
                  <Link to="/principal">
                    <Button variant="outline">
                      Read Full Message
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Curriculum Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-academic text-4xl font-bold text-primary mb-4">
              Complete Subject Overview
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              All subjects offered across Forms 1-4 with detailed descriptions and key topics
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Chemistry",
                description: "Study of matter, its properties, and chemical reactions through experiments and theory.",
                topics: ["Atomic Structure", "Chemical Bonding", "Reactions", "Laboratory Work"],
                icon: Microscope,
                color: "text-blue-600"
              },
              {
                title: "Physics",
                description: "Understanding the fundamental laws of nature, energy, and the physical world.",
                topics: ["Mechanics", "Electricity", "Waves", "Thermodynamics"],
                icon: Atom,
                color: "text-purple-600"
              },
              {
                title: "Biology",
                description: "Exploration of living organisms, their structures, functions, and interactions.",
                topics: ["Cell Biology", "Genetics", "Ecology", "Human Anatomy"],
                icon: Heart,
                color: "text-green-600"
              },
              {
                title: "Mathematics",
                description: "Development of logical thinking through numbers, algebra, geometry, and problem-solving.",
                topics: ["Algebra", "Geometry", "Calculus", "Statistics"],
                icon: Calculator,
                color: "text-red-600"
              },
              {
                title: "English",
                description: "Mastery of English language, skills, literature, and effective communication.",
                topics: ["Grammar", "Literature", "Writing", "Speaking"],
                icon: FileText,
                color: "text-indigo-600"
              },
              {
                title: "Arabic",
                description: "Learning Arabic language, grammar, and cultural understanding.",
                topics: ["Grammar", "Vocabulary", "Reading", "Islamic Texts"],
                icon: MessageCircle,
                color: "text-orange-600"
              },
              {
                title: "Somali",
                description: "Study of Somali language, literature, and cultural heritage.",
                topics: ["Grammar", "Literature", "Poetry", "Cultural Studies"],
                icon: Globe,
                color: "text-teal-600"
              },
              {
                title: "History & Geography",
                description: "Understanding world history, geography, and their impact on modern society.",
                topics: ["World History", "Geography", "Political Science", "Current Events"],
                icon: Map,
                color: "text-amber-600"
              },
              {
                title: "Islamic Studies",
                description: "Study of Islamic principles, history, and moral values.",
                topics: ["Quran Studies", "Hadith", "Islamic History", "Islamic Ethics"],
                icon: Star,
                color: "text-emerald-600"
              },
              {
                title: "Computer Studies",
                description: "Introduction to computer science, programming, and digital literacy.",
                topics: ["Programming", "Web Development", "Digital Skills", "Computer Hardware"],
                icon: Monitor,
                color: "text-cyan-600"
              }
            ].map((subject, index) => (
              <Card key={index} className="card-elegant hover:shadow-lg transition-elegant">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <subject.icon className={`h-8 w-8 ${subject.color}`} />
                    <h3 className="font-semibold text-xl text-primary">{subject.title}</h3>
                  </div>
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    {subject.description}
                  </p>
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-primary">Key Topics:</p>
                    <div className="flex flex-wrap gap-1">
                      {subject.topics.map((topic, topicIndex) => (
                        <span 
                          key={topicIndex}
                          className="inline-block bg-muted text-muted-foreground text-xs px-2 py-1 rounded-md"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/curriculum">
              <Button className="bg-primary hover:bg-primary-dark">
                View Complete Curriculum Details
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="font-academic text-4xl font-bold text-primary text-center mb-12">
            Explore Our School
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Admissions",
                description: "Learn about our admission process and requirements",
                link: "/admissions",
                icon: BookOpen,
              },
              {
                title: "Curriculum",
                description: "Discover our comprehensive academic programs",
                link: "/curriculum",
                icon: Users,
              },
              {
                title: "News & Events",
                description: "Stay updated with school activities and announcements",
                link: "/news",
                icon: Globe,
              },
              {
                title: "Gallery",
                description: "View photos from school events and daily life",
                link: "/gallery",
                icon: Trophy,
              },
              {
                title: "Career Guidance",
                description: "Explore career paths and guidance programs",
                link: "/career",
                icon: BookOpen,
              },
              {
                title: "Contact Us",
                description: "Get in touch with our administration",
                link: "/contact",
                icon: Users,
              },
            ].map((item, index) => (
              <Card key={index} className="card-elegant hover:shadow-lg transition-elegant">
                <CardContent className="p-6">
                  <item.icon className="h-12 w-12 text-secondary mb-4" />
                  <h3 className="font-semibold text-xl mb-2">{item.title}</h3>
                  <p className="text-muted-foreground mb-4">{item.description}</p>
                  <Link to={item.link}>
                    <Button variant="outline" size="sm">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;