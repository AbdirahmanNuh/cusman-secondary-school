import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  MessageSquare,
  User,
  Building,
  Globe
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you soon.",
    });
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: ""
    });
  };

  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone Numbers",
      details: [
        "+252 61 234 5678 (Main Office)",
        "+252 61 234 5679 (Admissions)",
        "+252 61 234 5680 (Principal's Office)"
      ]
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email Addresses",
      details: [
        "info@cusmanbinucafaan.edu.so",
        "admissions@cusmanbinucafaan.edu.so",
        "principal@cusmanbinucafaan.edu.so"
      ]
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "School Address",
      details: [
        "Cusman Binu Cafaan Secondary School",
        "Hodan District, Mogadishu",
        "Banadir Region, Somalia"
      ]
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Office Hours",
      details: [
        "Monday - Thursday: 8:00 AM - 4:00 PM",
        "Friday: 8:00 AM - 12:00 PM",
        "Saturday: 9:00 AM - 1:00 PM (Admissions Only)"
      ]
    }
  ];

  const departments = [
    {
      name: "Principal's Office",
      contact: "principal@cusmanbinucafaan.edu.so",
      phone: "+252 61 234 5680",
      description: "For general inquiries and school administration matters"
    },
    {
      name: "Admissions Office",
      contact: "admissions@cusmanbinucafaan.edu.so",
      phone: "+252 61 234 5679",
      description: "For enrollment, application, and admission inquiries"
    },
    {
      name: "Academic Office",
      contact: "academics@cusmanbinucafaan.edu.so",
      phone: "+252 61 234 5681",
      description: "For curriculum, examinations, and academic matters"
    },
    {
      name: "Student Affairs",
      contact: "students@cusmanbinucafaan.edu.so",
      phone: "+252 61 234 5682",
      description: "For student support, counseling, and welfare services"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-primary to-primary-dark">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 to-primary-dark/90"></div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="font-academic text-5xl md:text-6xl font-bold text-white mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            We're here to help and answer any questions you might have. 
            Reach out to us through any of the methods below or visit us in person.
          </p>
        </div>
      </section>

      {/* Contact Information Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <div className="p-4 bg-secondary/10 rounded-full text-secondary">
                      {info.icon}
                    </div>
                  </div>
                  <CardTitle className="text-lg">{info.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-sm text-muted-foreground">
                        {detail}
                      </p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-2xl">
                    <MessageSquare className="h-6 w-6 text-secondary" />
                    Send us a Message
                  </CardTitle>
                  <p className="text-muted-foreground">
                    Fill out the form below and we'll get back to you as soon as possible.
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Enter your full name"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="Enter your email"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="Enter your phone number"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="subject">Subject *</Label>
                        <Input
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          placeholder="What is this regarding?"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Please provide details about your inquiry..."
                        rows={6}
                        required
                      />
                    </div>

                    <Button type="submit" className="w-full bg-secondary hover:bg-secondary-dark">
                      <Send className="h-4 w-4 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* School Map & Additional Info */}
            <div className="space-y-8">
              {/* Map Placeholder */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-secondary" />
                    Our Location
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="bg-muted h-64 rounded-lg flex items-center justify-center mb-4">
                    <div className="text-center">
                      <MapPin className="h-12 w-12 text-muted-foreground mx-auto mb-2" />
                      <p className="text-muted-foreground">Interactive Map</p>
                      <p className="text-sm text-muted-foreground">Hodan District, Mogadishu</p>
                    </div>
                  </div>
                  <div className="space-y-2 text-sm">
                    <p><strong>Address:</strong> Cusman Binu Cafaan Secondary School</p>
                    <p>Hodan District, Mogadishu, Banadir Region, Somalia</p>
                    <Button variant="outline" size="sm" className="w-full mt-4">
                      <Globe className="h-4 w-4 mr-2" />
                      Get Directions
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Contact */}
              <Card>
                <CardHeader>
                  <CardTitle>Quick Contact</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Phone className="h-4 w-4 text-secondary" />
                      <div>
                        <p className="font-medium">Main Office</p>
                        <p className="text-sm text-muted-foreground">+252 61 234 5678</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="h-4 w-4 text-secondary" />
                      <div>
                        <p className="font-medium">General Inquiries</p>
                        <p className="text-sm text-muted-foreground">info@cusmanbinucafaan.edu.so</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Building className="h-4 w-4 text-secondary" />
                      <div>
                        <p className="font-medium">Admissions Office</p>
                        <p className="text-sm text-muted-foreground">Room 101, Administration Block</p>
                      </div>
                    </div>
                  </div>
                  <Separator />
                  <div className="space-y-2">
                    <p className="font-medium text-sm">Emergency Contact</p>
                    <p className="text-sm text-muted-foreground">
                      For urgent matters outside office hours, please call:
                    </p>
                    <p className="text-sm font-medium">+252 61 234 5690</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Departments Contact */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-academic text-3xl font-bold text-primary mb-4">
              Department Contacts
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Need to reach a specific department? Here are the direct contact details 
              for our various offices and services.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {departments.map((dept, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-lg">{dept.name}</CardTitle>
                  <p className="text-sm text-muted-foreground">{dept.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <Mail className="h-4 w-4 text-secondary" />
                      <span className="text-sm">{dept.contact}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="h-4 w-4 text-secondary" />
                      <span className="text-sm">{dept.phone}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Visit Us Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto bg-gradient-to-br from-primary/5 to-secondary/5 border-none">
            <CardContent className="p-12 text-center">
              <h2 className="font-academic text-3xl font-bold text-primary mb-6">
                Visit Our Campus
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                We welcome visitors to our campus! Schedule a tour to see our facilities, 
                meet our staff, and experience the Cusman Binu Cafaan difference.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <Button className="bg-secondary hover:bg-secondary-dark px-8">
                  <User className="mr-2 h-4 w-4" />
                  Schedule a Visit
                </Button>
                <Button variant="outline" className="px-8">
                  <MapPin className="mr-2 h-4 w-4" />
                  Campus Map
                </Button>
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                Campus tours available Monday-Friday, 9:00 AM - 3:00 PM
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;