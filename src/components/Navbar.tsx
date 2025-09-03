import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Logo } from "./Logo";
import { NavigationItems } from "@/data";

export const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const isActiveLink = (path: string) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-xl shadow-lg border-b border-gray-200/50"
          : "bg-white/90 backdrop-blur-md shadow-sm"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-18">
          {/* Logo */}
          <Logo textColor="text-church-brown" />

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-2">
            {NavigationItems.map((item) => (
              <div key={item.name} className="relative">
                {item.dropdown ? (
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="ghost"
                        className="group relative bg-transparent hover:bg-transparent text-gray-700 hover:text-church-brown border-0 px-4 py-2 h-10 font-medium transition-all duration-300 flex items-center space-x-1"
                      >
                        <span className="relative z-10">{item.name}</span>
                        <ChevronDown className="w-4 h-4 relative z-10 transition-transform group-data-[state=open]:rotate-180 duration-200" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="bg-white/95 backdrop-blur-xl border border-gray-200/50 shadow-xl rounded-lg p-2 min-w-[200px] animate-in fade-in-0 zoom-in-95 duration-200">
                      {item.dropdown.map((subItem) => (
                        <DropdownMenuItem key={subItem.name} asChild>
                          <Link
                            to={subItem.path}
                            className="group relative flex items-center w-full px-3 py-2.5 text-sm font-medium text-gray-700 hover:text-church-brown cursor-pointer rounded-md transition-all duration-200 hover:bg-transparent"
                          >
                            <span className="relative z-10">
                              {subItem.name}
                            </span>
                          </Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  <Link to={item.path}>
                    <Button
                      variant="ghost"
                      className={`group relative border-0 px-4 py-2 h-10 font-medium transition-all duration-300 hover:bg-transparent ${
                        isActiveLink(item.path)
                          ? "text-church-brown"
                          : "hover:text-church-brown"
                      }`}
                    >
                      <span className="relative z-10">{item.name}</span>
                      {isActiveLink(item.path) && (
                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-0.5 bg-church-brown rounded-full" />
                      )}
                      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-church-brown rounded-full transition-all duration-300 group-hover:w-3/4" />
                    </Button>
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Contact Button */}
          <div className="hidden lg:flex gap-4">
            <Link to="/register">
              <Button
                // variant="churchPrimary"
                size="sm"
                className="relative overflow-hidden font-semibold px-6 py-2 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <span className="relative z-10">Get Started</span>
              </Button>
            </Link>
            <Link to="/contact">
              <Button
                // variant="churchPrimary"
                size="sm"
                className="relative overflow-hidden font-semibold px-6 py-2 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <span className="relative z-10">Contact Us</span>
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden relative bg-transparent hover:bg-transparent border-0 transition-all duration-300 text-gray-700 hover:text-church-brown"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="relative z-10 transition-transform duration-200">
              {isMenuOpen ? <X size={30} /> : <Menu size={30} />}
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden transition-all duration-300 ease-out ${
            isMenuOpen
              ? "max-h-screen opacity-100"
              : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <div className="px-2 pt-4 pb-6 space-y-2 bg-white/95 backdrop-blur-xl border-t border-gray-200/50 rounded-b-2xl shadow-lg">
            {NavigationItems.map((item, index) => (
              <div
                key={item.name}
                className={`animate-in slide-in-from-left duration-300 ${
                  isMenuOpen ? "animate-delay-75" : ""
                }`}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <Link
                  to={item.path}
                  className={`group relative block px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 ${
                    isActiveLink(item.path)
                      ? "text-church-brown"
                      : "text-gray-700 hover:text-church-brown"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="relative z-10">{item.name}</span>
                  {isActiveLink(item.path) && (
                    <div className="absolute left-2 top-1/2 -translate-y-1/2 w-1 h-6 bg-church-brown rounded-full" />
                  )}
                </Link>
                {item.dropdown && (
                  <div className="ml-6 mt-2 space-y-1">
                    {item.dropdown.map((subItem, subIndex) => (
                      <Link
                        key={subItem.name}
                        to={subItem.path}
                        className="group relative block px-4 py-2.5 rounded-lg text-sm font-medium text-gray-600 hover:text-church-brown transition-all duration-200"
                        onClick={() => setIsMenuOpen(false)}
                        style={{
                          animationDelay: `${(index + subIndex + 1) * 50}ms`,
                        }}
                      >
                        <span className="relative z-10">{subItem.name}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div
              className={`pt-6 animate-in slide-in-from-left duration-300 ${
                isMenuOpen ? "animate-delay-300" : ""
              }`}
            >
              <Link to="/contact">
                <Button
                  // variant="churchPrimary"
                  className="w-full relative overflow-hidden font-semibold py-3 shadow-lg transition-all duration-300 transform active:scale-95"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="relative z-10">Contact Us</span>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
