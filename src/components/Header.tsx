
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Resources", path: "/resources" },
    { name: "Contact", path: "/contact" },
    { name: "Products", path: "/products" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "py-3 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-subtle"
          : "py-5 bg-transparent"
      )}
    >
      <div className="container flex items-center justify-between">
        <Link to="/" className="flex items-center group">
          <span className="text-xl font-semibold tracking-tight transition-all group-hover:text-primary">
            MyNeedfully<span className="text-primary">.com</span>
          </span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-1">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                "px-4 py-2 rounded-md transition-all duration-300",
                location.pathname === link.path
                  ? "text-primary font-medium"
                  : "text-foreground/80 hover:text-primary hover:bg-secondary"
              )}
            >
              {link.name}
            </Link>
          ))}
          <div className="ml-2">
            <Button asChild>
              <Link to="/create-wishlist">Create Wishlist</Link>
            </Button>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-foreground p-2 rounded-md"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu */}
        <div
          className={cn(
            "fixed inset-0 bg-background/95 backdrop-blur-md z-50 transition-all duration-300 md:hidden",
            isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          )}
        >
          <div className="flex flex-col items-center justify-center h-full space-y-6 p-8 animate-fade-in">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "text-xl py-2 transition-all duration-300",
                  location.pathname === link.path
                    ? "text-primary font-medium"
                    : "text-foreground/80 hover:text-primary"
                )}
              >
                {link.name}
              </Link>
            ))}
            <Button asChild size="lg" className="mt-4 w-full">
              <Link to="/create-wishlist">Create Wishlist</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
