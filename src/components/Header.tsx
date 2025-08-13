import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import schoolLogo from "@/assets/school-logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigationItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Principal's Message", path: "/principal" },
    { name: "Curriculum", path: "/curriculum" },
    { name: "Admissions", path: "/admissions" },
    { name: "Timetable", path: "/timetable" },
    { name: "Calendar", path: "/calendar" },
    { name: "News & Events", path: "/news" },
    { name: "Career", path: "/career" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" },
  ];

  const isActivePage = (path: string) => location.pathname === path;

  return (
    <header className="bg-background shadow-sm border-b sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo and School Name */}
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src={schoolLogo} 
              alt="Cusman Binu Cafaan Secondary School Logo" 
              className="h-12 w-12"
            />
            <div>
              <h1 className="font-academic font-bold text-xl text-primary">
                Cusman Binu Cafaan
              </h1>
              <p className="text-sm text-muted-foreground">Secondary School</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigationItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-elegant ${
                  isActivePage(item.path)
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground hover:bg-muted hover:text-primary"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link to="/enroll">
              <Button className="bg-secondary text-secondary-foreground hover:bg-secondary-dark font-semibold">
                <GraduationCap className="mr-2 h-4 w-4" />
                Enroll Now
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-foreground" />
            ) : (
              <Menu className="h-6 w-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t">
            <nav className="flex flex-col space-y-2">
              {navigationItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-elegant ${
                    isActivePage(item.path)
                      ? "bg-primary text-primary-foreground"
                      : "text-foreground hover:bg-muted hover:text-primary"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Link 
                to="/enroll" 
                onClick={() => setIsMenuOpen(false)}
                className="mt-4"
              >
                <Button className="w-full bg-secondary text-secondary-foreground hover:bg-secondary-dark font-semibold">
                  <GraduationCap className="mr-2 h-4 w-4" />
                  Enroll Now
                </Button>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;