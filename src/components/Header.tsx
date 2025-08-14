import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import schoolLogo from "@/assets/school-logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigationItems = [
    { name: "Home", path: "/" },
    { name: "Career", path: "/career" },
    { name: "Contact", path: "/contact" },
  ];

  const aboutUsItems = [
    { name: "About Us", path: "/about" },
    { name: "Principal's Message", path: "/principal" },
  ];

  const academicsItems = [
    { name: "Curriculum", path: "/curriculum" },
    { name: "Timetable", path: "/timetable" },
    { name: "Admissions", path: "/admissions" },
  ];

  const schoolLifeItems = [
    { name: "Events", path: "/news" },
    { name: "Calendar", path: "/calendar" },
    { name: "Gallery", path: "/gallery" },
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
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList>
              {navigationItems.map((item) => (
                <NavigationMenuItem key={item.path}>
                  <Link to={item.path}>
                    <NavigationMenuLink
                      className={`px-3 py-2 rounded-md text-sm font-medium transition-elegant ${
                        isActivePage(item.path)
                          ? "bg-primary text-primary-foreground"
                          : "text-foreground hover:bg-muted hover:text-primary"
                      }`}
                    >
                      {item.name}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              ))}
              
              {/* About Us Dropdown */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-sm font-medium">
                  About Us
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-48 p-2">
                    {aboutUsItems.map((item) => (
                      <Link key={item.path} to={item.path}>
                        <NavigationMenuLink
                          className={`block px-3 py-2 rounded-md text-sm font-medium transition-elegant ${
                            isActivePage(item.path)
                              ? "bg-primary text-primary-foreground"
                              : "text-foreground hover:bg-muted hover:text-primary"
                          }`}
                        >
                          {item.name}
                        </NavigationMenuLink>
                      </Link>
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Academics Dropdown */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-sm font-medium">
                  Academics
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-48 p-2">
                    {academicsItems.map((item) => (
                      <Link key={item.path} to={item.path}>
                        <NavigationMenuLink
                          className={`block px-3 py-2 rounded-md text-sm font-medium transition-elegant ${
                            isActivePage(item.path)
                              ? "bg-primary text-primary-foreground"
                              : "text-foreground hover:bg-muted hover:text-primary"
                          }`}
                        >
                          {item.name}
                        </NavigationMenuLink>
                      </Link>
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* School Life Dropdown */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-sm font-medium">
                  School Life
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-48 p-2">
                    {schoolLifeItems.map((item) => (
                      <Link key={item.path} to={item.path}>
                        <NavigationMenuLink
                          className={`block px-3 py-2 rounded-md text-sm font-medium transition-elegant ${
                            isActivePage(item.path)
                              ? "bg-primary text-primary-foreground"
                              : "text-foreground hover:bg-muted hover:text-primary"
                          }`}
                        >
                          {item.name}
                        </NavigationMenuLink>
                      </Link>
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

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
              
              {/* About Us Section */}
              <div className="px-3 py-1 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                About Us
              </div>
              {aboutUsItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`pl-6 pr-3 py-2 rounded-md text-sm font-medium transition-elegant ${
                    isActivePage(item.path)
                      ? "bg-primary text-primary-foreground"
                      : "text-foreground hover:bg-muted hover:text-primary"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Academics Section */}
              <div className="px-3 py-1 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                Academics
              </div>
              {academicsItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`pl-6 pr-3 py-2 rounded-md text-sm font-medium transition-elegant ${
                    isActivePage(item.path)
                      ? "bg-primary text-primary-foreground"
                      : "text-foreground hover:bg-muted hover:text-primary"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              
              {/* School Life Section */}
              <div className="px-3 py-1 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                School Life
              </div>
              {schoolLifeItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`pl-6 pr-3 py-2 rounded-md text-sm font-medium transition-elegant ${
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