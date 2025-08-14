import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import schoolCampus from "@/assets/school-campus.jpg";
import studentsStudying from "@/assets/students-studying.jpg";
import principalImage from "@/assets/principal.jpg";

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Photos" },
    { id: "campus", name: "Campus Life" },
    { id: "academics", name: "Academics" },
    { id: "events", name: "Events" },
    { id: "sports", name: "Sports" },
    { id: "facilities", name: "Facilities" },
  ];

  const galleryItems = [
    {
      id: 1,
      src: schoolCampus,
      alt: "School campus overview showing the main building and courtyard",
      title: "Main Campus Building",
      category: "campus",
      description: "Our beautiful main campus building where education excellence happens daily"
    },
    {
      id: 2,
      src: studentsStudying,
      alt: "Students engaged in collaborative study session in the library",
      title: "Library Study Session",
      category: "academics",
      description: "Students collaborating in our well-equipped library"
    },
    {
      id: 3,
      src: principalImage,
      alt: "Principal Dr. Sarah Johnson during graduation ceremony",
      title: "Graduation Ceremony",
      category: "events",
      description: "Our Principal addressing graduates at the annual ceremony"
    },
    {
      id: 4,
      src: schoolCampus,
      alt: "Science laboratory with students conducting experiments",
      title: "Science Laboratory",
      category: "facilities",
      description: "State-of-the-art science lab for hands-on learning"
    },
    {
      id: 5,
      src: studentsStudying,
      alt: "Students participating in mathematics competition",
      title: "Mathematics Competition",
      category: "academics",
      description: "Annual mathematics competition showcasing student talent"
    },
    {
      id: 6,
      src: principalImage,
      alt: "School sports day with students competing in various events",
      title: "Annual Sports Day",
      category: "sports",
      description: "Students showcasing their athletic abilities"
    },
    {
      id: 7,
      src: schoolCampus,
      alt: "Students performing in the annual cultural festival",
      title: "Cultural Festival",
      category: "events",
      description: "Celebrating our rich cultural heritage through performance"
    },
    {
      id: 8,
      src: studentsStudying,
      alt: "Modern computer laboratory with students learning technology",
      title: "Computer Laboratory",
      category: "facilities",
      description: "Modern computing facilities for digital literacy"
    },
    {
      id: 9,
      src: principalImage,
      alt: "School debate team winning regional championship",
      title: "Debate Championship",
      category: "academics",
      description: "Our debate team excelling in regional competitions"
    },
  ];

  const filteredItems = activeCategory === "all" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-primary to-primary-dark">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 to-primary-dark/90"></div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="font-academic text-5xl md:text-6xl font-bold text-white mb-6">
            School Gallery
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Discover life at Cusman Binu Cafaan Secondary School through our comprehensive photo gallery. 
            Witness our students' achievements, campus facilities, and memorable moments.
          </p>
        </div>
      </section>

      {/* Gallery Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? "default" : "outline"}
                onClick={() => setActiveCategory(category.id)}
                className="transition-all duration-300"
              >
                {category.name}
              </Button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <Card key={item.id} className="overflow-hidden group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                <div className="relative overflow-hidden">
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <Badge 
                    className="absolute top-4 right-4 bg-secondary text-secondary-foreground"
                  >
                    {categories.find(cat => cat.id === item.category)?.name}
                  </Badge>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-xl mb-2 text-primary group-hover:text-secondary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Empty State */}
          {filteredItems.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg">
                No photos found in this category. Please try another category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Photo Statistics */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="font-academic text-3xl font-bold text-center text-primary mb-12">
            Our Visual Journey
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "500+", label: "Photos Captured" },
              { number: "25", label: "Events Documented" },
              { number: "15", label: "Facilities Showcased" },
              { number: "100+", label: "Student Activities" },
            ].map((stat, index) => (
              <div key={index} className="space-y-2">
                <h3 className="text-4xl font-bold text-secondary">{stat.number}</h3>
                <p className="text-muted-foreground font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <Card className="max-w-4xl mx-auto bg-gradient-to-br from-primary/5 to-secondary/5 border-none">
            <CardContent className="p-12">
              <h2 className="font-academic text-3xl font-bold text-primary mb-6">
                Be Part of Our Story
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Join our vibrant school community and create your own memorable moments. 
                Experience excellence in education and become part of our growing legacy.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-secondary hover:bg-secondary-dark">
                  Apply for Admission
                </Button>
                <Button size="lg" variant="outline">
                  Schedule a Visit
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Gallery;