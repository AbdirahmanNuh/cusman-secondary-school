import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { 
  GraduationCap, 
  User, 
  Mail, 
  Phone, 
  Calendar,
  FileText,
  CheckCircle,
  AlertCircle,
  Clock,
  Users,
  Book,
  Award,
  DollarSign
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useToast } from "@/hooks/use-toast";

const EnrollNow = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Student Information
    studentFirstName: "",
    studentLastName: "",
    dateOfBirth: "",
    gender: "",
    nationality: "",
    previousSchool: "",
    formLevel: "",
    
    // Parent/Guardian Information
    parentFirstName: "",
    parentLastName: "",
    relationship: "",
    parentEmail: "",
    parentPhone: "",
    parentAddress: "",
    
    // Emergency Contact
    emergencyName: "",
    emergencyPhone: "",
    emergencyRelationship: "",
    
    // Additional Information
    medicalConditions: "",
    specialNeeds: "",
    previousAcademicRecord: "",
    
    // Agreements
    termsAccepted: false,
    dataProcessingAccepted: false
  });

  const { toast } = useToast();

  const handleInputChange = (name: string, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Application Submitted!",
      description: "Your enrollment application has been received. We'll contact you soon.",
    });
  };

  const nextStep = () => {
    if (currentStep < 4) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const steps = [
    { number: 1, title: "Student Information", icon: <User className="h-4 w-4" /> },
    { number: 2, title: "Parent/Guardian Details", icon: <Users className="h-4 w-4" /> },
    { number: 3, title: "Academic Background", icon: <Book className="h-4 w-4" /> },
    { number: 4, title: "Review & Submit", icon: <CheckCircle className="h-4 w-4" /> }
  ];

  const admissionRequirements = [
    {
      title: "Academic Requirements",
      items: [
        "Certificate of completion from previous educational level",
        "Academic transcripts from the last 2 years",
        "Recommendation letter from previous school (if applicable)"
      ]
    },
    {
      title: "Documentation Required",
      items: [
        "Birth certificate or valid ID",
        "Recent passport-size photographs (4 copies)",
        "Medical certificate of fitness",
        "Proof of residence/address"
      ]
    },
    {
      title: "Application Process",
      items: [
        "Complete online application form",
        "Submit required documents",
        "Attend entrance assessment (if required)",
        "Interview with admissions committee"
      ]
    }
  ];

  const tuitionInfo = [
    {
      level: "Form 1 & 2",
      tuition: "$200",
      period: "per term",
      includes: ["Tuition fees", "Library access", "Sports activities"]
    },
    {
      level: "Form 3 & 4",
      tuition: "$250",
      period: "per term",
      includes: ["Tuition fees", "Laboratory fees", "Examination fees", "Library access"]
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-secondary to-secondary-dark">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/90 to-secondary-dark/90"></div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="font-academic text-5xl md:text-6xl font-bold text-white mb-6">
            Enroll Now
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Join the Cusman Binu Cafaan Secondary School family and embark on an 
            exceptional educational journey that will shape your future.
          </p>
        </div>
      </section>

      {/* Application Process Steps */}
      <section className="py-8 bg-muted">
        <div className="container mx-auto px-4">
          <div className="flex justify-center">
            <div className="flex items-center space-x-4 overflow-x-auto">
              {steps.map((step, index) => (
                <div key={step.number} className="flex items-center">
                  <div className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all ${
                    currentStep >= step.number 
                      ? 'bg-secondary text-secondary-foreground' 
                      : 'bg-background text-muted-foreground'
                  }`}>
                    {step.icon}
                    <span className="text-sm font-medium whitespace-nowrap">{step.title}</span>
                  </div>
                  {index < steps.length - 1 && (
                    <div className="w-8 h-px bg-border mx-2"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Application Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-2xl">
                    <GraduationCap className="h-6 w-6 text-secondary" />
                    Enrollment Application
                  </CardTitle>
                  <p className="text-muted-foreground">
                    Step {currentStep} of {steps.length}: {steps[currentStep - 1].title}
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    
                    {/* Step 1: Student Information */}
                    {currentStep === 1 && (
                      <div className="space-y-6">
                        <h3 className="text-lg font-semibold">Student Information</h3>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="studentFirstName">First Name *</Label>
                            <Input
                              id="studentFirstName"
                              value={formData.studentFirstName}
                              onChange={(e) => handleInputChange('studentFirstName', e.target.value)}
                              placeholder="Student's first name"
                              required
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="studentLastName">Last Name *</Label>
                            <Input
                              id="studentLastName"
                              value={formData.studentLastName}
                              onChange={(e) => handleInputChange('studentLastName', e.target.value)}
                              placeholder="Student's last name"
                              required
                            />
                          </div>
                        </div>
                        
                        <div className="grid md:grid-cols-3 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="dateOfBirth">Date of Birth *</Label>
                            <Input
                              id="dateOfBirth"
                              type="date"
                              value={formData.dateOfBirth}
                              onChange={(e) => handleInputChange('dateOfBirth', e.target.value)}
                              required
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="gender">Gender *</Label>
                            <Select onValueChange={(value) => handleInputChange('gender', value)}>
                              <SelectTrigger>
                                <SelectValue placeholder="Select gender" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="male">Male</SelectItem>
                                <SelectItem value="female">Female</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="nationality">Nationality *</Label>
                            <Input
                              id="nationality"
                              value={formData.nationality}
                              onChange={(e) => handleInputChange('nationality', e.target.value)}
                              placeholder="Student's nationality"
                              required
                            />
                          </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="formLevel">Applying for Form Level *</Label>
                            <Select onValueChange={(value) => handleInputChange('formLevel', value)}>
                              <SelectTrigger>
                                <SelectValue placeholder="Select form level" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="form1">Form 1</SelectItem>
                                <SelectItem value="form2">Form 2</SelectItem>
                                <SelectItem value="form3">Form 3</SelectItem>
                                <SelectItem value="form4">Form 4</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="previousSchool">Previous School</Label>
                            <Input
                              id="previousSchool"
                              value={formData.previousSchool}
                              onChange={(e) => handleInputChange('previousSchool', e.target.value)}
                              placeholder="Name of previous school"
                            />
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Step 2: Parent/Guardian Information */}
                    {currentStep === 2 && (
                      <div className="space-y-6">
                        <h3 className="text-lg font-semibold">Parent/Guardian Information</h3>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="parentFirstName">First Name *</Label>
                            <Input
                              id="parentFirstName"
                              value={formData.parentFirstName}
                              onChange={(e) => handleInputChange('parentFirstName', e.target.value)}
                              placeholder="Parent's first name"
                              required
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="parentLastName">Last Name *</Label>
                            <Input
                              id="parentLastName"
                              value={formData.parentLastName}
                              onChange={(e) => handleInputChange('parentLastName', e.target.value)}
                              placeholder="Parent's last name"
                              required
                            />
                          </div>
                        </div>

                        <div className="grid md:grid-cols-3 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="relationship">Relationship to Student *</Label>
                            <Select onValueChange={(value) => handleInputChange('relationship', value)}>
                              <SelectTrigger>
                                <SelectValue placeholder="Select relationship" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="father">Father</SelectItem>
                                <SelectItem value="mother">Mother</SelectItem>
                                <SelectItem value="guardian">Guardian</SelectItem>
                                <SelectItem value="other">Other</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="parentEmail">Email Address *</Label>
                            <Input
                              id="parentEmail"
                              type="email"
                              value={formData.parentEmail}
                              onChange={(e) => handleInputChange('parentEmail', e.target.value)}
                              placeholder="parent@example.com"
                              required
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="parentPhone">Phone Number *</Label>
                            <Input
                              id="parentPhone"
                              value={formData.parentPhone}
                              onChange={(e) => handleInputChange('parentPhone', e.target.value)}
                              placeholder="+252 61 234 5678"
                              required
                            />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="parentAddress">Home Address *</Label>
                          <Textarea
                            id="parentAddress"
                            value={formData.parentAddress}
                            onChange={(e) => handleInputChange('parentAddress', e.target.value)}
                            placeholder="Full home address"
                            required
                          />
                        </div>

                        <Separator />

                        <h4 className="font-semibold">Emergency Contact</h4>
                        <div className="grid md:grid-cols-3 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="emergencyName">Emergency Contact Name *</Label>
                            <Input
                              id="emergencyName"
                              value={formData.emergencyName}
                              onChange={(e) => handleInputChange('emergencyName', e.target.value)}
                              placeholder="Emergency contact name"
                              required
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="emergencyPhone">Emergency Phone *</Label>
                            <Input
                              id="emergencyPhone"
                              value={formData.emergencyPhone}
                              onChange={(e) => handleInputChange('emergencyPhone', e.target.value)}
                              placeholder="Emergency phone number"
                              required
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="emergencyRelationship">Relationship *</Label>
                            <Input
                              id="emergencyRelationship"
                              value={formData.emergencyRelationship}
                              onChange={(e) => handleInputChange('emergencyRelationship', e.target.value)}
                              placeholder="Relationship to student"
                              required
                            />
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Step 3: Academic Background */}
                    {currentStep === 3 && (
                      <div className="space-y-6">
                        <h3 className="text-lg font-semibold">Academic Background & Additional Information</h3>
                        
                        <div className="space-y-2">
                          <Label htmlFor="previousAcademicRecord">Previous Academic Performance</Label>
                          <Textarea
                            id="previousAcademicRecord"
                            value={formData.previousAcademicRecord}
                            onChange={(e) => handleInputChange('previousAcademicRecord', e.target.value)}
                            placeholder="Brief description of academic performance, achievements, or challenges"
                            rows={4}
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="medicalConditions">Medical Conditions or Allergies</Label>
                          <Textarea
                            id="medicalConditions"
                            value={formData.medicalConditions}
                            onChange={(e) => handleInputChange('medicalConditions', e.target.value)}
                            placeholder="Any medical conditions, allergies, or medications the school should be aware of"
                            rows={3}
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="specialNeeds">Special Educational Needs</Label>
                          <Textarea
                            id="specialNeeds"
                            value={formData.specialNeeds}
                            onChange={(e) => handleInputChange('specialNeeds', e.target.value)}
                            placeholder="Any special educational needs or support requirements"
                            rows={3}
                          />
                        </div>
                      </div>
                    )}

                    {/* Step 4: Review & Submit */}
                    {currentStep === 4 && (
                      <div className="space-y-6">
                        <h3 className="text-lg font-semibold">Review Your Application</h3>
                        
                        <div className="bg-muted p-6 rounded-lg space-y-4">
                          <div>
                            <h4 className="font-semibold">Student Information</h4>
                            <p className="text-sm text-muted-foreground">
                              {formData.studentFirstName} {formData.studentLastName} - {formData.formLevel}
                            </p>
                          </div>
                          <div>
                            <h4 className="font-semibold">Parent/Guardian</h4>
                            <p className="text-sm text-muted-foreground">
                              {formData.parentFirstName} {formData.parentLastName} - {formData.parentEmail}
                            </p>
                          </div>
                        </div>

                        <div className="space-y-4">
                          <div className="flex items-center space-x-2">
                            <Checkbox 
                              id="terms"
                              checked={formData.termsAccepted}
                              onCheckedChange={(checked) => handleInputChange('termsAccepted', checked as boolean)}
                            />
                            <Label htmlFor="terms" className="text-sm">
                              I agree to the school's terms and conditions, policies, and code of conduct *
                            </Label>
                          </div>
                          
                          <div className="flex items-center space-x-2">
                            <Checkbox 
                              id="dataProcessing"
                              checked={formData.dataProcessingAccepted}
                              onCheckedChange={(checked) => handleInputChange('dataProcessingAccepted', checked as boolean)}
                            />
                            <Label htmlFor="dataProcessing" className="text-sm">
                              I consent to the processing of personal data for educational purposes *
                            </Label>
                          </div>
                        </div>

                        <div className="bg-blue-50 p-4 rounded-lg">
                          <div className="flex items-start gap-3">
                            <AlertCircle className="h-5 w-5 text-blue-600 mt-0.5" />
                            <div>
                              <h4 className="font-semibold text-blue-900">Next Steps</h4>
                              <p className="text-sm text-blue-800">
                                After submitting your application, you will receive a confirmation email with 
                                further instructions and required documents.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Navigation Buttons */}
                    <div className="flex justify-between pt-6">
                      <Button 
                        type="button" 
                        variant="outline" 
                        onClick={prevStep}
                        disabled={currentStep === 1}
                      >
                        Previous
                      </Button>
                      
                      {currentStep < 4 ? (
                        <Button type="button" onClick={nextStep}>
                          Continue
                        </Button>
                      ) : (
                        <Button 
                          type="submit"
                          className="bg-secondary hover:bg-secondary-dark"
                          disabled={!formData.termsAccepted || !formData.dataProcessingAccepted}
                        >
                          <FileText className="h-4 w-4 mr-2" />
                          Submit Application
                        </Button>
                      )}
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar Information */}
            <div className="space-y-6">
              {/* Admission Requirements */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Admission Requirements</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {admissionRequirements.map((section, index) => (
                    <div key={index}>
                      <h4 className="font-semibold text-sm mb-2">{section.title}</h4>
                      <ul className="space-y-1">
                        {section.items.map((item, idx) => (
                          <li key={idx} className="text-xs text-muted-foreground flex items-start gap-2">
                            <CheckCircle className="h-3 w-3 text-green-600 mt-0.5 flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                      {index < admissionRequirements.length - 1 && <Separator className="mt-3" />}
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Tuition Information */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <DollarSign className="h-5 w-5" />
                    Tuition Fees
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {tuitionInfo.map((info, index) => (
                    <div key={index} className="border rounded-lg p-4">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-semibold">{info.level}</h4>
                        <Badge variant="secondary">{info.tuition} {info.period}</Badge>
                      </div>
                      <ul className="space-y-1">
                        {info.includes.map((item, idx) => (
                          <li key={idx} className="text-xs text-muted-foreground flex items-center gap-2">
                            <CheckCircle className="h-3 w-3 text-green-600" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                  <p className="text-xs text-muted-foreground">
                    Payment plans and financial assistance available upon request.
                  </p>
                </CardContent>
              </Card>

              {/* Important Dates */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Calendar className="h-5 w-5" />
                    Important Dates
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Application Deadline</span>
                    <Badge variant="outline">July 15, 2024</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Entrance Assessment</span>
                    <Badge variant="outline">July 20-25, 2024</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Academic Year Starts</span>
                    <Badge variant="outline">September 1, 2024</Badge>
                  </div>
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

export default EnrollNow;