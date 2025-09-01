import React from "react";
import { Link } from "react-router";
import { Logo } from "./Logo";
import {
  FooterAdditionalLinks,
  FooterNavigationItems,
  FooterSocialLinks,
} from "@/data";
import { Mail, MapPin, PhoneCallIcon } from "lucide-react";

export const Footer: React.FC = () => (
  <footer className="relative grid md:grid-cols-2 gap-10 lg:justify-items-center lg:grid-cols-3 bg-church-brown p-5 sm:p-10 lg:p-20 text-white">
    {/* Logo and Description */}
    <div className="flex flex-col space-y-5">
      <Logo textColor="text-white" />
      <p className="font-accent text-gray-200">
        Building faith, fellowship, and spiritual growth in our community
      </p>
      <p className="font-accent text-gray-300">
        © <span>{new Date().getFullYear()}</span> Apostolic Church
        International. All rights reserved
      </p>
    </div>

    {/* Navigation Links */}
    <div className="flex flex-col">
      <h2 className="font-accent text-xl font-semibold mb-4 text-white">
        Quick Links
      </h2>
      <div className="grid md:grid-cols-2 gap-4">
        <ul className="space-y-2">
          {FooterNavigationItems.slice(0, 3).map(({ name, path }, index) => (
            <li key={index} className="font-accent">
              <Link
                to={path}
                className="text-gray-200 hover:text-white transition-colors duration-200"
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>
        <ul className="space-y-2">
          {FooterNavigationItems.slice(3, 6).map(({ name, path }, index) => (
            <li key={index} className="font-accent">
              <Link
                to={path}
                className="text-gray-200 hover:text-white transition-colors duration-200"
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-6">
        <h3 className="font-accent text-lg font-medium mb-3 text-white">
          More Services
        </h3>
        <ul className="space-y-2">
          {FooterAdditionalLinks.map(({ name, path }, index) => (
            <li key={index} className="font-accent">
              <Link
                to={path}
                className="text-gray-200 hover:text-white transition-colors duration-200 text-sm"
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>

    {/* Social Media Links */}
    <div>
      <h2 className="font-accent text-xl font-semibold mb-4 text-white">
        Follow Us
      </h2>
      <ul className="flex gap-4">
        {FooterSocialLinks.map(({ name, href, icon }, index) => (
          <li key={index}>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors duration-200 p-2 hover:bg-white hover:bg-opacity-10 rounded-full block"
              aria-label={`Follow us on ${name}`}
            >
              {icon}
            </a>
          </li>
        ))}
      </ul>

      {/* Contact Info */}
      <div className="mt-8">
        <h3 className="font-accent text-lg font-medium mb-3 text-white">
          Contact Info
        </h3>
        <div className="space-y-5 text-gray-200 text-sm">
          <span className="flex gap-2 align-middle">
            <Mail />
            <p>info@apostolicchurch.org</p>
          </span>

          <span className="flex gap-2 align-middle">
            <PhoneCallIcon size={20} />
            <p>+1 (555) 123-4567</p>
          </span>
          <span className="flex gap-2 align-middle">
            <MapPin />
            <p>123 Faith Street, City, State 12345</p>
          </span>
        </div>
      </div>
    </div>
  </footer>
);
