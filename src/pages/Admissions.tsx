import { CheckCircle, Calendar, FileText, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const Admissions = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-light text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-academic text-5xl font-bold mb-6">Admissions</h1>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed">
            Join our community of learners and begin your journey toward academic excellence
          </p>
        </div>
      </section>

      {/* Admission Process */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="font-academic text-4xl font-bold text-primary text-center mb-12">
            Admission Process
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Application",
                description: "Complete and submit the online application form with required documents",
                icon: FileText
              },
              {
                step: "2", 
                title: "Assessment",
                description: "Attend entrance examination and interview sessions",
                icon: Users
              },
              {
                step: "3",
                title: "Review",
                description: "Applications are reviewed by our admissions committee",
                icon: CheckCircle
              },
              {
                step: "4",
                title: "Enrollment",
                description: "Successful candidates receive admission letters and can proceed with enrollment",
                icon: Calendar
              }
            ].map((step, index) => (
              <Card key={index} className="card-elegant text-center">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-secondary-foreground">{step.step}</span>
                  </div>
                  <step.icon className="h-8 w-8 text-primary mx-auto mb-3" />
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="font-academic text-4xl font-bold text-primary text-center mb-12">
            Admission Requirements
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8">
              <Card className="card-elegant">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">Academic Requirements</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {[
                      "Completed primary/elementary education certificate",
                      "Minimum grade average of B- in core subjects",
                      "English proficiency (written and oral)",
                      "Mathematics competency assessment",
                      "Science aptitude (for science track students)"
                    ].map((requirement, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                        <span>{requirement}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="card-elegant">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">Required Documents</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {[
                      "Completed application form",
                      "Birth certificate or passport",
                      "Primary school transcripts/certificates",
                      "Medical examination report",
                      "Passport-sized photographs (4 copies)",
                      "Parent/guardian identification documents"
                    ].map((document, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                        <span>{document}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Important Dates */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="font-academic text-4xl font-bold text-primary text-center mb-12">
            Important Dates
          </h2>
          
          <div className="max-w-3xl mx-auto">
            <Card className="card-elegant">
              <CardContent className="p-8">
                <div className="space-y-6">
                  {[
                    {
                      event: "Application Period Opens",
                      date: "January 15, 2024",
                      description: "Online application portal becomes available"
                    },
                    {
                      event: "Application Deadline",
                      date: "March 31, 2024",
                      description: "Last date to submit completed applications"
                    },
                    {
                      event: "Entrance Examinations",
                      date: "April 15-20, 2024",
                      description: "Assessment tests and interviews conducted"
                    },
                    {
                      event: "Admission Results",
                      date: "May 15, 2024",
                      description: "Admission decisions communicated to applicants"
                    },
                    {
                      event: "Enrollment Period",
                      date: "May 20 - June 15, 2024",
                      description: "Successful candidates complete enrollment process"
                    },
                    {
                      event: "Academic Year Begins",
                      date: "September 1, 2024",
                      description: "New academic year commences"
                    }
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-4 pb-6 border-b last:border-b-0">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                          <Calendar className="h-6 w-6 text-primary-foreground" />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-primary">{item.event}</h3>
                        <p className="text-secondary font-medium">{item.date}</p>
                        <p className="text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Fees Structure */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="font-academic text-4xl font-bold text-primary text-center mb-12">
            Fees Structure
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <Card className="card-elegant">
              <CardContent className="p-8">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-3 px-4 font-semibold text-primary">Fee Category</th>
                        <th className="text-right py-3 px-4 font-semibold text-primary">Amount (Annual)</th>
                      </tr>
                    </thead>
                    <tbody className="space-y-2">
                      {[
                        { category: "Tuition Fee", amount: "$2,500" },
                        { category: "Laboratory Fee", amount: "$300" },
                        { category: "Library Fee", amount: "$150" },
                        { category: "Sports & Activities", amount: "$200" },
                        { category: "Technology Fee", amount: "$250" },
                        { category: "Examination Fee", amount: "$100" }
                      ].map((fee, index) => (
                        <tr key={index} className="border-b last:border-b-0">
                          <td className="py-3 px-4">{fee.category}</td>
                          <td className="py-3 px-4 text-right font-medium">{fee.amount}</td>
                        </tr>
                      ))}
                      <tr className="border-t-2 font-semibold text-primary">
                        <td className="py-3 px-4">Total Annual Fee</td>
                        <td className="py-3 px-4 text-right">$3,500</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                
                <div className="mt-6 p-4 bg-muted rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    <strong>Note:</strong> Payment plans are available. Scholarships and financial aid may be available 
                    for qualified students. Contact our admissions office for more information.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-academic text-4xl font-bold text-primary mb-6">
            Ready to Join Our Community?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Take the first step toward an exceptional education. Start your application today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/enroll">
              <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary-dark">
                Apply Now
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline">
                Contact Admissions
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Admissions;