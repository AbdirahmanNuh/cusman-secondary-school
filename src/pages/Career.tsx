Gemini

2.5 Flash

PRO





Conversation with Gemini

let us improve the UI:

import { useState } from "react";

import { Link } from "react-router-dom";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { Button } from "@/components/ui/button";

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

import { ArrowRight } from "lucide-react";

import Header from "@/components/Header";

import Footer from "@/components/Footer";



const Career = () => {

  const [departmentFilter, setDepartmentFilter] = useState("all");



  const jobPostings = [

    {

      id: 1,

      title: "Primary School Teacher",

      description: "Seeking an enthusiastic teacher to inspire young minds in core subjects.",

    },

    {

      id: 2,

      title: "French Language Teacher",

      description: "A passionate linguist to deliver engaging French lessons to primary students.",

    },

    {

      id: 3,

      title: "School Administrator",

      description: "An organized administrator to support our daily operations and parent communications.",

    },

    {

      id: 4,

      title: "Mathematics Teacher",

      description: "Join our team to teach mathematics with creativity and passion.",

    },

    {

      id: 5,

      title: "Science Laboratory Assistant",

      description: "Support our science department with laboratory management and student assistance.",

    },

    {

      id: 6,

      title: "Physical Education Teacher",

      description: "Lead our sports programs and promote healthy, active lifestyles among students.",

    }

  ];



  const departments = ["all", "Teaching", "Administration", "Support Staff"];



  const filteredJobs = jobPostings.filter(job => {

    if (departmentFilter === "all") return true;

    // Simple categorization - you can make this more sophisticated

    if (departmentFilter === "Teaching") {

      return job.title.includes("Teacher");

    }

    if (departmentFilter === "Administration") {

      return job.title.includes("Administrator");

    }

    if (departmentFilter === "Support Staff") {

      return job.title.includes("Assistant");

    }

    return true;

  });



  return (

    <div className="min-h-screen bg-background">

      <Header />

     

      <main className="container mx-auto px-4 py-12">

        {/* Header with Brand Colors */}

        <div className="text-center mb-12">

          <h1 className="text-4xl font-bold text-blue-800 mb-4">

            Career Opportunities

          </h1>

          <p className="text-xl text-blue-600">

            Join our dedicated team at Cusman Secondary School

          </p>

        </div>



        {/* Simple Filter with Brand Styling */}

        <div className="mb-8 flex justify-center">

          <Select value={departmentFilter} onValueChange={setDepartmentFilter}>

            <SelectTrigger className="w-64 border-blue-300 focus:border-blue-500 focus:ring-blue-500">

              <SelectValue placeholder="Filter by category" />

            </SelectTrigger>

            <SelectContent>

              {departments.map((dept) => (

                <SelectItem key={dept} value={dept}>

                  {dept === "all" ? "All Positions" : dept}

                </SelectItem>

              ))}

            </SelectContent>

          </Select>

        </div>



        {/* Clean Job Cards with Brand Colors */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">

          {filteredJobs.map((job) => (

            <Card key={job.id} className="hover:shadow-lg transition-shadow bg-white border border-blue-200 hover:border-blue-300">

              <CardHeader className="pb-4">

                <CardTitle className="text-xl font-semibold text-blue-800 mb-3">

                  {job.title}

                </CardTitle>

                <p className="text-gray-600 text-sm leading-relaxed">

                  {job.description}

                </p>

              </CardHeader>

              <CardContent className="pt-0">

                <Link to={`/career/${job.id}`}>

                  <Button

                    variant="ghost"

                    className="text-blue-600 hover:text-blue-700 hover:bg-blue-50 p-0 h-auto font-medium group"

                  >

                    View Details

                    <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />

                  </Button>

                </Link>

              </CardContent>

            </Card>

          ))}

        </div>



        {/* No Results with Brand Colors */}

        {filteredJobs.length === 0 && (

          <div className="text-center py-12">

            <h3 className="text-xl font-semibold text-blue-800 mb-2">No positions found</h3>

            <p className="text-gray-600">

              Try selecting a different category or check back later.

            </p>

          </div>

        )}



        {/* Contact Section with Brand Colors */}

        <div className="text-center bg-gradient-to-r from-blue-50 to-yellow-50 border border-blue-200 rounded-lg p-8">

          <h2 className="text-2xl font-bold text-blue-800 mb-4">

            Ready to Join Us?

          </h2>

          <p className="text-gray-600 mb-6">

            Contact our HR department for more information about these positions.

          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">

            <Button variant="outline" className="bg-white border-blue-600 text-blue-600 hover:bg-blue-50">

              hr@cusmanschool.edu

            </Button>

            <Button variant="outline" className="bg-white border-yellow-500 text-yellow-700 hover:bg-yellow-50">

              +252 61 234 5678

            </Button>

          </div>

        </div>

      </main>



      <Footer />

    </div>

  );

};



export default Career;



Let's refine this code to give the UI a more professional and clean look. By making a few adjustments, we can improve readability, enhance the visual hierarchy, and make the user experience more intuitive.

Here are a few ways we can improve the existing code:

Improved Filtering Logic: The current filter logic is simple, and if the job titles change, it could break. We'll introduce a new department key to the job postings data, which makes the filtering more robust.

Enhanced Contact Section: The current contact section is a bit plain. We'll add some icons and make the buttons more actionable to encourage users to get in touch.

Better Use of Spacing and Layout: We can adjust some of the margins and padding to create a more balanced and visually pleasing layout.

Here is the improved code:

JavaScript

import { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowRight, Mail, Phone, School } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Career = () => {
  const [departmentFilter, setDepartmentFilter] = useState("all");

  const jobPostings = [
    {
      id: 1,
      title: "Primary School Teacher",
      department: "Teaching",
      description: "Seeking an enthusiastic teacher to inspire young minds in core subjects.",
    },
    {
      id: 2,
      title: "French Language Teacher",
      department: "Teaching",
      description: "A passionate linguist to deliver engaging French lessons to primary students.",
    },
    {
      id: 3,
      title: "School Administrator",
      department: "Administration",
      description: "An organized administrator to support our daily operations and parent communications.",
    },
    {
      id: 4,
      title: "Mathematics Teacher",
      department: "Teaching",
      description: "Join our team to teach mathematics with creativity and passion.",
    },
    {
      id: 5,
      title: "Science Laboratory Assistant",
      department: "Support Staff",
      description: "Support our science department with laboratory management and student assistance.",
    },
    {
      id: 6,
      title: "Physical Education Teacher",
      department: "Teaching",
      description: "Lead our sports programs and promote healthy, active lifestyles among students.",
    }
  ];

  const departments = ["all", "Teaching", "Administration", "Support Staff"];

  const filteredJobs = jobPostings.filter(job => {
    return departmentFilter === "all" || job.department === departmentFilter;
  });

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <Header />
      
      <main className="container mx-auto px-4 py-16 md:py-24">
        {/* Hero Section */}
        <div className="text-center mb-16 md:mb-20">
          <div className="inline-flex items-center space-x-2 text-blue-600 mb-4">
            <School className="h-8 w-8" />
            <h1 className="text-4xl font-extrabold text-gray-900">
              Join Our Team
            </h1>
          </div>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            We are seeking dedicated individuals to help shape the next generation. Explore our current career opportunities below.
          </p>
        </div>

        {/* Filter and Job Listings */}
        <section>
          <div className="flex justify-center mb-8">
            <Select value={departmentFilter} onValueChange={setDepartmentFilter}>
              <SelectTrigger className="w-full sm:w-64 border-gray-300 focus:border-blue-500">
                <SelectValue placeholder="Filter by department" />
              </SelectTrigger>
              <SelectContent>
                {departments.map((dept) => (
                  <SelectItem key={dept} value={dept}>
                    {dept === "all" ? "All Departments" : dept}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Job Cards */}
          {filteredJobs.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredJobs.map((job) => (
                <Card key={job.id} className="bg-white border border-gray-200 transition-all duration-300 ease-in-out hover:shadow-md hover:scale-105">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-xl font-semibold text-blue-700">
                      {job.title}
                    </CardTitle>
                    <p className="text-sm text-gray-500">{job.department}</p>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-gray-600 mb-4">{job.description}</p>
                    <Link to={`/career/${job.id}`} className="group inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors">
                      <span className="font-medium">View Details</span>
                      <ArrowRight className="ml-2 h-4 w-4 transform transition-transform duration-200 group-hover:translate-x-1" />
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            {/* No Results */}
            <div className="text-center py-12 bg-gray-100 rounded-lg border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-700 mb-2">No positions found</h3>
              <p className="text-gray-500">
                There are no job openings in this category at the moment.
              </p>
            </div>
          )}
        </section>
        
        <hr className="my-16 md:my-24 border-gray-200" />

        {/* Call-to-Action Contact Section */}
        <section className="text-center bg-blue-600 text-white rounded-xl p-10 shadow-lg">
          <h2 className="text-3xl font-bold mb-4">
            Have Questions?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Our HR department is here to help with any inquiries you may have about our career opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:hr@cusmanschool.edu">
              <Button 
                variant="default" 
                className="w-full sm:w-auto bg-white text-blue-600 hover:bg-gray-100"
              >
                <Mail className="h-4 w-4 mr-2" />
                Email Us
              </Button>
            </a>
            <a href="tel:+252612345678">
              <Button 
                variant="outline" 
                className="w-full sm:w-auto text-white border-white hover:bg-white hover:text-blue-600"
              >
                <Phone className="h-4 w-4 mr-2" />
                Call Our Office
              </Button>
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Career;


