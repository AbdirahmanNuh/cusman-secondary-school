import { Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import principalImage from "@/assets/principal.jpg";

const Principal = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-light text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-academic text-5xl font-bold mb-6">Principal's Message</h1>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed">
            A message of welcome and inspiration from our school leader
          </p>
        </div>
      </section>

      {/* Principal's Message */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="card-elegant">
              <CardContent className="p-8 lg:p-12">
                <div className="flex flex-col lg:flex-row gap-8 items-start">
                  <div className="flex-shrink-0">
                    <img 
                      src={principalImage} 
                      alt="Dr. Sarah Johnson, Principal"
                      className="w-64 h-64 rounded-lg object-cover shadow-lg"
                    />
                    <div className="mt-4 text-center">
                      <h3 className="text-xl font-semibold text-primary">Dr. Sarah Johnson</h3>
                      <p className="text-muted-foreground">Principal</p>
                      <p className="text-sm text-muted-foreground mt-1">
                        M.Ed., Ph.D. in Educational Leadership
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <Quote className="h-12 w-12 text-secondary mb-6" />
                    
                    <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                      <p>
                        Dear Students, Parents, and Esteemed Members of our School Community,
                      </p>
                      
                      <p>
                        It is with great pride and enthusiasm that I welcome you to Cusman Binu Cafaan Secondary School. 
                        As we embark on another academic year, I am reminded of the incredible privilege we have to 
                        shape young minds and nurture the leaders of tomorrow.
                      </p>
                      
                      <p>
                        Our school stands as a beacon of educational excellence, where academic rigor meets compassionate 
                        care. We believe that every student who walks through our doors possesses unique talents and 
                        unlimited potential. Our role as educators is to unlock that potential, providing the tools, 
                        support, and inspiration necessary for each student to flourish.
                      </p>
                      
                      <p>
                        At Cusman Binu Cafaan, we are committed to fostering an environment where:
                      </p>
                      
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>Academic excellence is pursued with passion and dedication</li>
                        <li>Character development is valued as highly as intellectual growth</li>
                        <li>Diversity is celebrated and inclusion is practiced</li>
                        <li>Innovation and creativity are encouraged and rewarded</li>
                        <li>Global citizenship and social responsibility are cultivated</li>
                      </ul>
                      
                      <p>
                        Our exceptional faculty brings years of experience and unwavering dedication to their craft. 
                        They are not just teachers but mentors, coaches, and guides who invest in each student's 
                        journey toward success. Together with our comprehensive curriculum, state-of-the-art facilities, 
                        and rich co-curricular programs, we provide a holistic education that prepares our students 
                        for the challenges and opportunities of the 21st century.
                      </p>
                      
                      <p>
                        To our students, I encourage you to embrace every opportunity for learning and growth. 
                        Challenge yourselves, ask questions, pursue your passions, and never be afraid to dream big. 
                        The future belongs to those who are prepared, and we are here to ensure you are ready to 
                        make your mark on the world.
                      </p>
                      
                      <p>
                        To our parents and guardians, thank you for entrusting us with your most precious gifts – 
                        your children. We do not take this responsibility lightly and are committed to working in 
                        partnership with you to ensure every student reaches their full potential.
                      </p>
                      
                      <p>
                        As we continue our journey of excellence, I invite you to be active participants in our 
                        school community. Together, we can create an environment where every student thrives, 
                        every dream is nurtured, and every future is bright.
                      </p>
                      
                      <p className="font-semibold">
                        With warm regards and best wishes for a successful academic year,
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Educational Philosophy */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-academic text-4xl font-bold text-primary text-center mb-12">
              Educational Philosophy
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Student-Centered Learning",
                  description: "We believe in placing students at the heart of the educational process, recognizing their individual learning styles and needs."
                },
                {
                  title: "Character First",
                  description: "While academic excellence is important, we prioritize the development of strong moral character and ethical values."
                },
                {
                  title: "Global Perspective",
                  description: "We prepare our students to be global citizens who understand and appreciate diversity while making positive contributions to society."
                }
              ].map((philosophy, index) => (
                <Card key={index} className="card-elegant text-center">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4 text-primary">{philosophy.title}</h3>
                    <p className="text-muted-foreground">{philosophy.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Principal;