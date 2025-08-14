import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  Calendar as CalendarIcon, 
  Clock, 
  MapPin, 
  Users, 
  ChevronLeft, 
  ChevronRight,
  Plus,
  Filter,
  List
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { format, isSameDay, startOfMonth, endOfMonth, eachDayOfInterval, isSameMonth, isToday, isFuture, isPast } from "date-fns";

const CalendarPage = () => {
  const [viewDate, setViewDate] = useState<Date>(new Date());
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [viewMode, setViewMode] = useState<'upcoming' | 'month' | 'all'>('upcoming');

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

  const getFilteredEventsByMode = () => {
    switch (viewMode) {
      case 'upcoming':
        return filteredEvents.filter(event => isFuture(event.date) || isToday(event.date));
      case 'month':
        return filteredEvents.filter(event => isSameMonth(event.date, viewDate));
      case 'all':
      default:
        return filteredEvents;
    }
  };

  const displayEvents = getFilteredEventsByMode().sort((a, b) => a.date.getTime() - b.date.getTime());

  const getCategoryColor = (category: string) => {
    const categoryData = categories.find(cat => cat.id === category);
    return categoryData?.color || "bg-gray-100 text-gray-800";
  };

  const getEventStatus = (eventDate: Date) => {
    if (isToday(eventDate)) return 'today';
    if (isFuture(eventDate)) return 'upcoming';
    return 'past';
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

            {/* View Mode Toggle */}
            <div className="flex flex-wrap gap-2">
              <Button
                variant={viewMode === 'upcoming' ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode('upcoming')}
                className="text-xs"
              >
                <List className="h-3 w-3 mr-1" />
                Upcoming
              </Button>
              <Button
                variant={viewMode === 'month' ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode('month')}
                className="text-xs"
              >
                <CalendarIcon className="h-3 w-3 mr-1" />
                This Month
              </Button>
              <Button
                variant={viewMode === 'all' ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode('all')}
                className="text-xs"
              >
                <Filter className="h-3 w-3 mr-1" />
                All Events
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-4 bg-background border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2">
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
      </section>

      {/* Events List */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Events List */}
            <div className="lg:col-span-3">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="font-academic text-2xl font-bold text-primary">
                    {viewMode === 'upcoming' && 'Upcoming Events'}
                    {viewMode === 'month' && `Events for ${format(viewDate, 'MMMM yyyy')}`}
                    {viewMode === 'all' && 'All Events'}
                    <span className="text-lg font-normal text-muted-foreground ml-2">
                      ({displayEvents.length} events)
                    </span>
                  </h2>
                </div>

                {displayEvents.length > 0 ? (
                  <div className="space-y-4">
                    {displayEvents.map((event) => {
                      const eventStatus = getEventStatus(event.date);
                      return (
                        <Card 
                          key={event.id} 
                          className={`transition-all duration-300 hover:shadow-lg ${
                            eventStatus === 'today' ? 'ring-2 ring-secondary' : 
                            eventStatus === 'past' ? 'opacity-75' : ''
                          }`}
                        >
                          <CardContent className="p-6">
                            <div className="flex flex-col md:flex-row md:items-start gap-4">
                              {/* Date Section */}
                              <div className="flex-shrink-0">
                                <div className={`text-center p-3 rounded-lg ${
                                  eventStatus === 'today' ? 'bg-secondary text-secondary-foreground' :
                                  eventStatus === 'upcoming' ? 'bg-primary/10 text-primary' :
                                  'bg-muted text-muted-foreground'
                                }`}>
                                  <div className="text-xs font-medium uppercase tracking-wide">
                                    {format(event.date, 'MMM')}
                                  </div>
                                  <div className="text-2xl font-bold">
                                    {format(event.date, 'd')}
                                  </div>
                                  <div className="text-xs">
                                    {format(event.date, 'yyyy')}
                                  </div>
                                </div>
                              </div>

                              {/* Event Details */}
                              <div className="flex-1 space-y-3">
                                <div className="flex items-start justify-between gap-4">
                                  <div>
                                    <h3 className="font-semibold text-xl text-foreground mb-1">
                                      {event.title}
                                    </h3>
                                    <div className="flex items-center gap-2 mb-2">
                                      <Badge className={`text-xs ${getCategoryColor(event.category)}`}>
                                        {event.category}
                                      </Badge>
                                      {eventStatus === 'today' && (
                                        <Badge variant="secondary" className="text-xs">
                                          Today
                                        </Badge>
                                      )}
                                      {eventStatus === 'past' && (
                                        <Badge variant="outline" className="text-xs">
                                          Past Event
                                        </Badge>
                                      )}
                                    </div>
                                  </div>
                                </div>

                                <p className="text-muted-foreground leading-relaxed">
                                  {event.description}
                                </p>

                                <div className="grid md:grid-cols-3 gap-4 text-sm">
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

                                <Separator />

                                <div className="flex items-center justify-between">
                                  <div className="text-sm text-muted-foreground">
                                    {format(event.date, 'EEEE, MMMM d, yyyy')}
                                  </div>
                                  <Button variant="outline" size="sm">
                                    View Details
                                  </Button>
                                </div>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      );
                    })}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <CalendarIcon className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                    <h3 className="font-semibold text-lg text-muted-foreground mb-2">No Events Found</h3>
                    <p className="text-muted-foreground">
                      {viewMode === 'upcoming' && "There are no upcoming events."}
                      {viewMode === 'month' && `No events scheduled for ${format(viewDate, 'MMMM yyyy')}.`}
                      {viewMode === 'all' && "No events match your current filter."}
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Quick Stats */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Event Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-primary">
                        {filteredEvents.filter(e => isFuture(e.date) || isToday(e.date)).length}
                      </div>
                      <div className="text-xs text-muted-foreground">Upcoming</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-secondary">
                        {filteredEvents.filter(e => isSameMonth(e.date, new Date())).length}
                      </div>
                      <div className="text-xs text-muted-foreground">This Month</div>
                    </div>
                  </div>
                  <Separator />
                  <div className="space-y-2">
                    {categories.slice(1).map((category) => {
                      const count = filteredEvents.filter(e => e.category === category.id).length;
                      return (
                        <div key={category.id} className="flex items-center justify-between text-sm">
                          <div className="flex items-center gap-2">
                            <div className={`w-3 h-3 rounded-full ${category.color.split(' ')[0]}`}></div>
                            <span>{category.name}</span>
                          </div>
                          <span className="font-medium">{count}</span>
                        </div>
                      );
                    })}
                  </div>
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

      <Footer />
    </div>
  );
};

export default CalendarPage;