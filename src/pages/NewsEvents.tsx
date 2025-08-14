import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Calendar, Clock, MapPin, Users, ExternalLink, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import schoolCampus from "@/assets/school-campus.jpg";
import studentsStudying from "@/assets/students-studying.jpg";
import principalImage from "@/assets/principal.jpg";

const NewsEvents = () => {
  const [activeTab, setActiveTab] = useState("all");

  const tabs = [
    { id: "all", name: "All Updates" },
    { id: "events", name: "Events" },
    { id: "news", name: "News" },
    { id: "announcements", name: "Announcements" },
  ];

  const upcomingEvents = [
    {
      id: 1,
      title: "Annual Science Fair 2024",
      date: "2024-03-15",
      time: "9:00 AM - 4:00 PM",
      location: "Main Auditorium",
      description: "Students will showcase their innovative science projects and research work.",
      attendees: "All students and parents",
      category: "academic",
      image: studentsStudying,
    },
    {
      id: 2,
      title: "Parent-Teacher Conference",
      date: "2024-03-22",
      time: "2:00 PM - 6:00 PM",
      location: "Classroom Building",
      description: "Meet with teachers to discuss your child's academic progress and development.",
      attendees: "Parents and guardians",
      category: "meeting",
      image: principalImage,
    },
    {
      id: 3,
      title: "Inter-School Sports Competition",
      date: "2024-04-05",
      time: "8:00 AM - 5:00 PM",
      location: "School Sports Ground",
      description: "Annual sports competition featuring athletics, football, and basketball.",
      attendees: "Athletes and supporters",
      category: "sports",
      image: schoolCampus,
    },
  ];

  const newsArticles = [
    {
      id: 1,
      title: "Cusman Binu Cafaan Students Excel in National Mathematics Olympiad",
      excerpt: "Our students have achieved remarkable success in the National Mathematics Olympiad, securing top positions and bringing pride to our school community.",
      date: "2024-02-28",
      author: "School Administration",
      category: "achievement",
      type: "news",
      image: studentsStudying,
      content: "Three of our Form 4 students secured positions in the top 10 of the National Mathematics Olympiad..."
    },
    {
      id: 2,
      title: "New Computer Laboratory Officially Opened",
      excerpt: "State-of-the-art computer laboratory with 30 modern workstations has been officially opened to enhance digital learning capabilities.",
      date: "2024-02-25",
      author: "Principal's Office",
      category: "facility",
      type: "news",
      image: schoolCampus,
      content: "The new computer laboratory features the latest technology to prepare students for the digital age..."
    },
    {
      id: 3,
      title: "Registration for Form 1 Admission 2024 Now Open",
      excerpt: "Applications for Form 1 admission for the 2024 academic year are now being accepted. Limited spaces available.",
      date: "2024-02-20",
      author: "Admissions Office",
      category: "admission",
      type: "announcement",
      image: principalImage,
      content: "Interested parents and students can now apply for admission to Form 1 for the upcoming academic year..."
    },
    {
      id: 4,
      title: "School Drama Club Wins Regional Competition",
      excerpt: "Our talented drama club students have won first place in the Regional Secondary Schools Drama Competition.",
      date: "2024-02-18",
      author: "Arts Department",
      category: "achievement",
      type: "news",
      image: studentsStudying,
      content: "The drama club's outstanding performance of 'The Merchant of Venice' impressed judges..."
    },
    {
      id: 5,
      title: "Mid-Term Examination Schedule Released",
      excerpt: "The schedule for mid-term examinations has been released. Students are advised to prepare accordingly.",
      date: "2024-02-15",
      author: "Academic Office",
      category: "academic",
      type: "announcement",
      image: schoolCampus,
      content: "Mid-term examinations will commence on March 1st, 2024. Students should review the complete schedule..."
    },
    {
      id: 6,
      title: "Environmental Club Plants 100 Trees",
      excerpt: "As part of our environmental conservation initiative, the Environmental Club successfully planted 100 trees around the school compound.",
      date: "2024-02-12",
      author: "Environmental Club",
      category: "environment",
      type: "news",
      image: principalImage,
      content: "The tree planting exercise was part of our commitment to environmental sustainability..."
    },
  ];

  const filteredContent = activeTab === "all" 
    ? [...upcomingEvents.map(e => ({...e, type: 'event'})), ...newsArticles]
    : activeTab === "events"
    ? upcomingEvents.map(e => ({...e, type: 'event'}))
    : newsArticles.filter(article => article.type === activeTab);

  const sortedContent = filteredContent.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      academic: "bg-blue-100 text-blue-800",
      achievement: "bg-green-100 text-green-800",
      facility: "bg-purple-100 text-purple-800",
      admission: "bg-orange-100 text-orange-800",
      environment: "bg-emerald-100 text-emerald-800",
      sports: "bg-red-100 text-red-800",
      meeting: "bg-yellow-100 text-yellow-800",
    };
    return colors[category as keyof typeof colors] || "bg-gray-100 text-gray-800";
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-primary to-primary-dark">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 to-primary-dark/90"></div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="font-academic text-5xl md:text-6xl font-bold text-white mb-6">
            News & Events
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Stay updated with the latest happenings at Cusman Binu Cafaan Secondary School. 
            Discover upcoming events, recent achievements, and important announcements.
          </p>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="py-8 bg-muted">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2">
            {tabs.map((tab) => (
              <Button
                key={tab.id}
                variant={activeTab === tab.id ? "default" : "outline"}
                onClick={() => setActiveTab(tab.id)}
                className="transition-all duration-300"
              >
                {tab.name}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events Highlight */}
      {(activeTab === "all" || activeTab === "events") && (
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="font-academic text-3xl font-bold text-primary text-center mb-12">
              Upcoming Events
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {upcomingEvents.map((event) => (
                <Card key={event.id} className="overflow-hidden hover:shadow-lg transition-all duration-300 group">
                  <div className="relative">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <Badge className={`absolute top-4 right-4 ${getCategoryColor(event.category)}`}>
                      {event.category}
                    </Badge>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl group-hover:text-secondary transition-colors">
                      {event.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">{event.description}</p>
                    
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-secondary" />
                        <span>{formatDate(event.date)}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-secondary" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-secondary" />
                        <span>{event.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4 text-secondary" />
                        <span>{event.attendees}</span>
                      </div>
                    </div>
                    
                    <Button variant="outline" size="sm" className="w-full group">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* News and Updates */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="font-academic text-3xl font-bold text-primary text-center mb-12">
            Latest News & Updates
          </h2>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Featured Article */}
            {sortedContent.length > 0 && sortedContent[0].type !== 'event' && (
              <div className="lg:col-span-2">
                <Card className="overflow-hidden hover:shadow-lg transition-all duration-300">
                  <div className="relative">
                    <img
                      src={sortedContent[0].image}
                      alt={sortedContent[0].title}
                      className="w-full h-64 object-cover"
                    />
                    <Badge className={`absolute top-4 left-4 ${getCategoryColor(sortedContent[0].category)}`}>
                      Featured
                    </Badge>
                  </div>
                  <CardHeader>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                      <Calendar className="h-4 w-4" />
                      <span>{formatDate(sortedContent[0].date)}</span>
                      <span>•</span>
                      <span>By {sortedContent[0].type === 'event' ? 'School Administration' : (sortedContent[0] as any).author}</span>
                    </div>
                    <CardTitle className="text-2xl hover:text-secondary transition-colors cursor-pointer">
                      {sortedContent[0].title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {sortedContent[0].type === 'event' ? (sortedContent[0] as any).description : (sortedContent[0] as any).excerpt}
                    </p>
                    <Button className="bg-secondary hover:bg-secondary-dark">
                      {sortedContent[0].type === 'event' ? 'View Event Details' : 'Read Full Article'}
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              </div>
            )}

            {/* Recent Updates */}
            <div className="space-y-6">
              <h3 className="font-semibold text-xl text-primary">Recent Updates</h3>
              {sortedContent.slice(1, 6).map((item) => (
                <Card key={item.id} className="hover:shadow-md transition-all duration-300 cursor-pointer group">
                  <CardContent className="p-4">
                    <div className="flex gap-4">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-20 h-20 object-cover rounded-md flex-shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-sm group-hover:text-secondary transition-colors line-clamp-2 mb-2">
                          {item.title}
                        </h4>
                        <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                          <Calendar className="h-3 w-3" />
                          <span>{formatDate(item.date)}</span>
                        </div>
                        <Badge className={`${getCategoryColor(item.category)} text-xs`}>
                          {item.category}
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
              
              <Button variant="outline" className="w-full">
                View All Updates
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto bg-gradient-to-br from-primary/5 to-secondary/5 border-none">
            <CardContent className="p-12 text-center">
              <h2 className="font-academic text-3xl font-bold text-primary mb-6">
                Stay Connected
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Never miss important updates, events, or announcements. Join our mailing list 
                to receive the latest news directly to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-3 rounded-md border border-input bg-background"
                />
                <Button className="bg-secondary hover:bg-secondary-dark px-8">
                  Subscribe
                </Button>
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default NewsEvents;