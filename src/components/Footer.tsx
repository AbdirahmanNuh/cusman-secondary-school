import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import schoolLogo from "@/assets/school-logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* School Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img 
                src={schoolLogo} 
                alt="School Logo" 
                className="h-10 w-10"
              />
              <div>
                <h3 className="font-academic font-bold text-lg">
                  Cusman Binu Cafaan
                </h3>
                <p className="text-sm opacity-90">Secondary School</p>
              </div>
            </div>
            <p className="text-sm opacity-80 leading-relaxed">
              Committed to academic excellence, character development, and nurturing tomorrow's leaders through quality education and holistic development.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 opacity-80 hover:opacity-100 cursor-pointer transition-elegant" />
              <Twitter className="h-5 w-5 opacity-80 hover:opacity-100 cursor-pointer transition-elegant" />
              <Instagram className="h-5 w-5 opacity-80 hover:opacity-100 cursor-pointer transition-elegant" />
              <Linkedin className="h-5 w-5 opacity-80 hover:opacity-100 cursor-pointer transition-elegant" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { name: "About Us", path: "/about" },
                { name: "Admissions", path: "/admissions" },
                { name: "Curriculum", path: "/curriculum" },
                { name: "News & Events", path: "/news" },
                { name: "Gallery", path: "/gallery" },
              ].map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path} 
                    className="text-sm opacity-80 hover:opacity-100 transition-elegant"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Academic */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Academic</h4>
            <ul className="space-y-2">
              {[
                { name: "Principal's Message", path: "/principal" },
                { name: "Student Timetable", path: "/timetable" },
                { name: "Academic Calendar", path: "/calendar" },
                { name: "Career Guidance", path: "/career" },
                { name: "Enroll Now", path: "/enroll" },
              ].map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path} 
                    className="text-sm opacity-80 hover:opacity-100 transition-elegant"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 mt-0.5 opacity-80" />
                <div>
                  <p className="text-sm opacity-80">
                    123 Education Street<br />
                    Academic District<br />
                    City, State 12345
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 opacity-80" />
                <p className="text-sm opacity-80">+1 (555) 123-4567</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 opacity-80" />
                <p className="text-sm opacity-80">info@cusmanbinucafaan.edu</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-light/20 mt-8 pt-8 text-center">
          <p className="text-sm opacity-80">
            &copy; 2024 Cusman Binu Cafaan Secondary School. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;