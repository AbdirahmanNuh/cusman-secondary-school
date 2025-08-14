import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "@/components/ui/calendar";
import { Separator } from "@/components/ui/separator";
import { 
  Calendar as CalendarIcon, 
  Clock, 
  MapPin, 
  Users, 
  ChevronLeft, 
  ChevronRight,
  Plus,
  Filter
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { format, isSameDay, startOfMonth, endOfMonth, eachDayOfInterval, isSameMonth } from "date-fns";

const CalendarPage = () => {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [viewDate, setViewDate] = useState<Date>(new Date());
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Events", color: "bg-gray-100 text-gray-800" },
    { id: "academic", name: "Academic", color: "bg-blue-100 text-blue-800" },
    { id: "sports", name: "Sports", color: "bg-red-100 text-red-800" },
    { id: "cultural", name: "Cultural", color: "bg-purple-100 text-purple-800" },
    { id: "meeting", name: "Meetings", color: "bg-yellow-100 text-yellow-800" },
    { id: "holiday", name: "Holidays", color: "bg-green-100 text-green-800" },
  ];

  const events = [
    {
      id: 1,
      title: "Mathematics Olympiad Registration",
      date: new Date(2024, 2, 15), // March 15, 2024
      time: "9:00 AM - 12:00 PM",
      location: "Mathematics Department",
      description: "Registration for the National Mathematics Olympiad competition.",
      category: "academic",
      attendees: "Form 3 & 4 students"
    },
    {
      id: 2,
      title: "Inter-School Football Match",
      date: new Date(2024, 2, 18), // March 18, 2024
      time: "2:00 PM - 5:00 PM",
      location: "School Sports Ground",
      description: "Football match against Riverside Secondary School.",
      category: "sports",
      attendees: "School football team"
    },
    {
      id: 3,
      title: "Parent-Teacher Conference",
      date: new Date(2024, 2, 22), // March 22, 2024
      time: "1:00 PM - 6:00 PM",
      location: "All Classrooms",
      description: "Mid-term progress discussion with parents and guardians.",
      category: "meeting",
      attendees: "Parents and teachers"
    },
    {
      id: 4,
      title: "Science Fair Preparation",
      date: new Date(2024, 2, 25), // March 25, 2024
      time: "10:00 AM - 4:00 PM",
      location: "Science Laboratory",
      description: "Final preparations for the annual science fair.",
      category: "academic",
      attendees: "Science club members"
    },
    {
      id: 5,
      title: "Cultural Day Celebration",
      date: new Date(2024, 2, 28), // March 28, 2024
      time: "8:00 AM - 4:00 PM",
      location: "Main Auditorium",
      description: "Celebration of Somali culture with traditional performances.",
      category: "cultural",
      attendees: "All students and staff"
    },
    {
      id: 6,
      title: "Mid-Term Examinations Begin",
      date: new Date(2024, 3, 1), // April 1, 2024
      time: "8:00 AM - 12:00 PM",
      location: "All Examination Halls",
      description: "Mid-term examinations for all forms begin.",
      category: "academic",
      attendees: "All students"
    },
    {
      id: 7,
      title: "Basketball Tournament",
      date: new Date(2024, 3, 5), // April 5, 2024
      time: "9:00 AM - 5:00 PM",
      location: "Basketball Court",
      description: "Annual inter-class basketball tournament.",
      category: "sports",
      attendees: "All students"
    },
    {
      id: 8,
      title: "Staff Development Workshop",
      date: new Date(2024, 3, 8), // April 8, 2024
      time: "9:00 AM - 4:00 PM",
      location: "Conference Room",
      description: "Professional development workshop for teaching staff.",
      category: "meeting",
      attendees: "All teaching staff"
    },
    {
      id: 9,
      title: "Labour Day Holiday",
      date: new Date(2024, 4, 1), // May 1, 2024
      time: "All Day",
      location: "School Closed",
      description: "International Workers' Day - School holiday.",
      category: "holiday",
      attendees: "N/A"
    },
    {
      id: 10,
      title: "Drama Club Performance",
      date: new Date(2024, 4, 15), // May 15, 2024
      time: "6:00 PM - 8:00 PM",
      location: "Main Auditorium",
      description: "Annual drama club performance for parents and community.",
      category: "cultural",
      attendees: "Drama club and audience"
    }
  ];

  const filteredEvents = selectedCategory === "all" 
    ? events 
    : events.filter(event => event.category === selectedCategory);

  const selectedDateEvents = filteredEvents.filter(event => 
    isSameDay(event.date, selectedDate || new Date())
  );

  const monthEvents = filteredEvents.filter(event => 
    isSameMonth(event.date, viewDate)
  );

  const getCategoryColor = (category: string) => {
    const categoryData = categories.find(cat => cat.id === category);
    return categoryData?.color || "bg-gray-100 text-gray-800";
  };

  const getEventsForDate = (date: Date) => {
    return filteredEvents.filter(event => isSameDay(event.date, date));
  };

  const navigateMonth = (direction: 'prev' | 'next') => {
    const newDate = new Date(viewDate);
    if (direction === 'prev') {
      newDate.setMonth(newDate.getMonth() - 1);
    } else {
      newDate.setMonth(newDate.getMonth() + 1);
    }
    setViewDate(newDate);
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-primary to-primary-dark">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 to-primary-dark/90"></div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="font-academic text-5xl md:text-6xl font-bold text-white mb-6">
            School Calendar
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Stay informed about important dates, events, and activities at 
            Cusman Binu Cafaan Secondary School throughout the academic year.
          </p>
        </div>
      </section>

      {/* Calendar Controls */}
      <section className="py-8 bg-muted">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Month Navigation */}
            <div className="flex items-center gap-4">
              <Button
                variant="outline"
                size="sm"
                onClick={() => navigateMonth('prev')}
                className="flex items-center gap-2"
              >
                <ChevronLeft className="h-4 w-4" />
                Previous
              </Button>
              
              <h2 className="font-academic text-2xl font-bold text-primary">
                {format(viewDate, 'MMMM yyyy')}
              </h2>
              
              <Button
                variant="outline"
                size="sm"
                onClick={() => navigateMonth('next')}
                className="flex items-center gap-2"
              >
                Next
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category.id)}
                  className="text-xs"
                >
                  <Filter className="h-3 w-3 mr-1" />
                  {category.name}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Calendar Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Calendar */}
            <div className="lg:col-span-2">
              <Card className="overflow-hidden">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-primary">
                    <CalendarIcon className="h-5 w-5" />
                    {format(viewDate, 'MMMM yyyy')}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Calendar
                    mode="single"
                    selected={selectedDate}
                    onSelect={setSelectedDate}
                    month={viewDate}
                    onMonthChange={setViewDate}
                    className="rounded-md border w-full"
                    modifiers={{
                      hasEvents: (date) => getEventsForDate(date).length > 0
                    }}
                    modifiersStyles={{
                      hasEvents: {
                        fontWeight: 'bold',
                        backgroundColor: 'hsl(var(--secondary) / 0.1)',
                        color: 'hsl(var(--secondary))'
                      }
                    }}
                  />
                  
                  {/* Event Indicators */}
                  <div className="mt-4 p-4 bg-muted rounded-lg">
                    <h4 className="font-semibold text-sm mb-2">Event Legend:</h4>
                    <div className="flex flex-wrap gap-2">
                      {categories.slice(1).map((category) => (
                        <div key={category.id} className="flex items-center gap-1 text-xs">
                          <div className={`w-3 h-3 rounded-full ${category.color.split(' ')[0]}`}></div>
                          <span>{category.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Selected Date Events */}
            <div className="space-y-6">
              {/* Selected Date Info */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">
                    {selectedDate ? format(selectedDate, 'EEEE, MMMM d, yyyy') : 'Select a date'}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {selectedDateEvents.length > 0 ? (
                    <div className="space-y-4">
                      {selectedDateEvents.map((event) => (
                        <div key={event.id} className="border-l-4 border-secondary pl-4">
                          <div className="flex items-start justify-between gap-2 mb-2">
                            <h4 className="font-semibold text-sm">{event.title}</h4>
                            <Badge className={`text-xs ${getCategoryColor(event.category)}`}>
                              {event.category}
                            </Badge>
                          </div>
                          <div className="space-y-1 text-xs text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <Clock className="h-3 w-3" />
                              <span>{event.time}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <MapPin className="h-3 w-3" />
                              <span>{event.location}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Users className="h-3 w-3" />
                              <span>{event.attendees}</span>
                            </div>
                          </div>
                          <p className="text-xs text-muted-foreground mt-2">{event.description}</p>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-muted-foreground text-sm">No events scheduled for this date.</p>
                  )}
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button variant="outline" className="w-full justify-start" size="sm">
                    <Plus className="h-4 w-4 mr-2" />
                    Request Event
                  </Button>
                  <Button variant="outline" className="w-full justify-start" size="sm">
                    <CalendarIcon className="h-4 w-4 mr-2" />
                    Download Calendar
                  </Button>
                  <Button variant="outline" className="w-full justify-start" size="sm">
                    <Filter className="h-4 w-4 mr-2" />
                    Subscribe to Updates
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="font-academic text-3xl font-bold text-primary text-center mb-12">
            Upcoming Events This Month
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {monthEvents
              .filter(event => event.date >= new Date())
              .sort((a, b) => a.date.getTime() - b.date.getTime())
              .slice(0, 6)
              .map((event) => (
                <Card key={event.id} className="hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-start justify-between gap-2">
                      <CardTitle className="text-lg line-clamp-2">{event.title}</CardTitle>
                      <Badge className={`text-xs ${getCategoryColor(event.category)}`}>
                        {event.category}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2">
                        <CalendarIcon className="h-4 w-4 text-secondary" />
                        <span>{format(event.date, 'EEEE, MMMM d, yyyy')}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-secondary" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-secondary" />
                        <span>{event.location}</span>
                      </div>
                    </div>
                    <Separator />
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {event.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
          </div>

          {monthEvents.filter(event => event.date >= new Date()).length === 0 && (
            <div className="text-center py-12">
              <CalendarIcon className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="font-semibold text-lg text-muted-foreground mb-2">No Upcoming Events</h3>
              <p className="text-muted-foreground">
                There are no events scheduled for this month. Check back later for updates.
              </p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CalendarPage;