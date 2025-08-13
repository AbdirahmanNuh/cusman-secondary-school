import { Users, Award, Globe, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import studentsStudying from "@/assets/students-studying.jpg";

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-light text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-academic text-5xl font-bold mb-6">About Our School</h1>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed">
            Discover the story behind Cusman Binu Cafaan Secondary School and our commitment to educational excellence
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-academic text-4xl font-bold text-primary mb-8">Our Mission & Vision</h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-secondary">Our Mission</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    To provide quality secondary education that empowers students with knowledge, skills, and values 
                    necessary for lifelong learning, responsible citizenship, and meaningful contribution to society.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-secondary">Our Vision</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    To be a leading secondary school that nurtures confident, creative, and compassionate learners 
                    who are prepared to excel in an interconnected world.
                  </p>
                </div>
              </div>
            </div>
            
            <div>
              <img 
                src={studentsStudying} 
                alt="Students in classroom" 
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="font-academic text-4xl font-bold text-primary text-center mb-12">Our Core Values</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Award,
                title: "Excellence",
                description: "We strive for the highest standards in academics, character, and service."
              },
              {
                icon: Heart,
                title: "Integrity",
                description: "We act with honesty, respect, and ethical principles in all our endeavors."
              },
              {
                icon: Users,
                title: "Community",
                description: "We foster a supportive environment where everyone belongs and thrives."
              },
              {
                icon: Globe,
                title: "Innovation",
                description: "We embrace creativity and forward-thinking approaches to education."
              }
            ].map((value, index) => (
              <Card key={index} className="card-elegant text-center">
                <CardContent className="p-6">
                  <value.icon className="h-16 w-16 text-secondary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* School History */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-academic text-4xl font-bold text-primary text-center mb-12">Our History</h2>
            
            <div className="space-y-8">
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Founded in 1999, Cusman Binu Cafaan Secondary School has been a beacon of educational excellence 
                  for over two decades. What began as a small institution with just 50 students has grown into 
                  one of the region's most respected secondary schools, serving over 500 students from diverse backgrounds.
                </p>
                
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Our school was established with the vision of providing quality education that would prepare 
                  students not just for academic success, but for life. Over the years, we have continuously 
                  evolved our programs and facilities to meet the changing needs of our students and society.
                </p>
                
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Today, we are proud of our graduates who have gone on to excel in various fields including 
                  medicine, engineering, business, arts, and public service. Their success is a testament to 
                  the solid foundation they received at our institution.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="font-academic text-4xl font-bold text-primary text-center mb-12">Why Choose Us</h2>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                title: "Experienced Faculty",
                description: "Our teachers are highly qualified professionals with years of experience and a passion for education.",
                features: ["Master's degree holders", "Continuous professional development", "Student-centered approach"]
              },
              {
                title: "Modern Facilities",
                description: "State-of-the-art classrooms, laboratories, and recreational facilities to support learning.",
                features: ["Science laboratories", "Computer labs", "Library and resource center", "Sports facilities"]
              },
              {
                title: "Holistic Development",
                description: "We focus on developing the whole student - academically, socially, and emotionally.",
                features: ["Co-curricular activities", "Leadership programs", "Community service", "Career guidance"]
              }
            ].map((feature, index) => (
              <Card key={index} className="card-elegant">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-primary">{feature.title}</h3>
                  <p className="text-muted-foreground mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.features.map((item, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-secondary rounded-full"></div>
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
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

export default About;