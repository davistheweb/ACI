import { Users, Globe, Award, Heart, Target, BookOpen } from "lucide-react";
import type {
  INavlinksItems,
  IFeatures,
  IServicesContent,
  TObjectivesParagraphs,
  IProgrammesParagraphs,
  TMembershipBenefitsParagraphs,
  INavItems,
  IFooterNavigationItems,
  TFooterAdditionalLinks,
  IFooterSocialLinks,
} from "@/types";

const NalinksItems: INavlinksItems[] = [
  { value: "Home", href: "/" },
  {
    value: "About Aci",
    href: "/#about",
    dropdownItems: [
      { item: "Consecration", href: "#" },
      { item: "Certificates", href: "#" },
      { item: "Education & Training", href: "#" },
    ],
  },
  { value: "Leadership", href: "#" },
  {
    value: "Membership",
    href: "#",
    dropdownItems: [{ item: "Application Form", href: "#" }],
  },
  { value: "Ministries", href: "Ministries" },
  { value: "Events", href: "#" },
  { value: "Contact", href: "#" },
];

const Features: IFeatures[] = [
  {
    icon: <Users className="w-8 h-8" />,
    title: "Unity in Faith",
    description:
      "Advancing Christian unity nationally and internationally through apostolic leadership.",
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: "Global Network",
    description:
      "International network of church leaders, ministers, and Christian believers worldwide.",
  },
  {
    icon: <Award className="w-8 h-8" />,
    title: "Ministerial Excellence",
    description:
      "Ordination, consecration, and educational programs for ministerial development.",
  },
  {
    icon: <Heart className="w-8 h-8" />,
    title: "Social Impact",
    description:
      "Supporting the poor, sick, disabled, aged, and general welfare of mankind.",
  },
];

const ServicesContent: IServicesContent[] = [
  {
    title: "Ordination & Consecration",
    description:
      "License to preach, ordination of ministers, apostolic installation, consecration of bishops, and enthronement of archbishops.",
    link: "/consecration",
  },
  {
    title: "Education & Training",
    description:
      "Short courses, refresher courses, bachelor to doctorate programs, and recognition awards.",
    link: "/education",
  },
  {
    title: "Membership Benefits",
    description:
      "Strong representation, networking opportunities, certificates and licenses for qualified members.",
    link: "/membership",
  },
];

const ObjectivesParagraphs: TObjectivesParagraphs[] = [
  {
    icon: <Target className="w-6 h-6" />,
    title: "Advance Unity",
    description:
      "To advance the unity of Christian faith nationally and internationally.",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Umbrella Body",
    description:
      "Acting as umbrella body or resource agents to charitable and voluntary bodies.",
  },
  {
    icon: <Heart className="w-6 h-6" />,
    title: "Relief Work",
    description:
      "Using available resources to assist the poor, sick, disabled, and aged and work towards the general welfare of mankind.",
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: "Support Leaders",
    description: "Supporting national leaders to achieve progress and unity.",
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: "Advocacy",
    description:
      "Provide advocacy, advice and information to both member organisations and other interested agencies.",
  },
  {
    icon: <BookOpen className="w-6 h-6" />,
    title: "Business Development",
    description:
      "Provide opportunities for business networking, training, and wealth creation.",
  },
];

const ProgrammesParagraphs: IProgrammesParagraphs[] = [
  {
    title: "Spiritual Congresses",
    description:
      "Organising spiritual congresses or conferences, seminars and workshops for Churches and Christian leaders.",
  },
  {
    title: "Ordination Services",
    description:
      "To enthrone archbishops, consecrate bishops, install apostles, and ordain ministers for the kingdom of God.",
  },
  {
    title: "Social Projects",
    description:
      "To set up projects and social care services to enhance society.",
  },
  {
    title: "Global Networking",
    description:
      "Network with other ministries and leaders worldwide to enhance the potential of members.",
  },
  {
    title: "Ministerial Support",
    description:
      "To encourage fellow ministers who are being challenged in various areas of their lives.",
  },
  {
    title: "Travel Attestation",
    description:
      "To issue letters of Attestation or Confirmation to registered members travelling internationally.",
  },
  {
    title: "Government Collaboration",
    description:
      "To collaborate with governments and contribute to shaping public opinion on matters of national concern.",
  },
  {
    title: "Church-Government Bridge",
    description:
      "To be a voice between the Government and the Church in all Nations to promote unity, faith, and love.",
  },
];

const MembershipBenefitsParagraphs: TMembershipBenefitsParagraphs[] = [
  {
    icon: <Users className="w-6 h-6" />,
    title: "Strong Representation",
    description:
      "Strong representation of the members by the apostolic fathers of the land.",
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: "Global Networking",
    description:
      "Creating opportunities both at international and local levels for networking among gospel leaders and workers.",
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: "Certificates & Licenses",
    description:
      "Issue academic and ministerial certificates and license to qualified members.",
  },
  {
    icon: <Heart className="w-6 h-6" />,
    title: "Vision Support",
    description:
      "Supporting local ministers to achieve and fulfil their visions.",
  },
];

const NavigationItems: INavItems[] = [
  { name: "Home", path: "/" },
  { name: "About ACI", path: "/about" },
  { name: "Leadership", path: "/leadership" },
  { name: "Membership", path: "/membership" },
  { name: "Events", path: "/events" },
  {
    name: "More",
    path: "#",
    dropdown: [
      { name: "Ministries", path: "/ministries" },
      { name: "Consecration", path: "/consecration" },
      { name: "Certificates", path: "/certificates" },
      { name: "Education & Training", path: "/education" },
      { name: "Application Form", path: "/membership/application" },
    ],
  },
];

const FooterNavigationItems: IFooterNavigationItems[] = [
  { name: "Home", path: "/" },
  { name: "About ACI", path: "/about" },
  { name: "Leadership", path: "/leadership" },
  { name: "Membership", path: "/membership" },
  { name: "Ministries", path: "/ministries" },
  { name: "Events", path: "/events" },
];

const FooterAdditionalLinks: TFooterAdditionalLinks[] = [
  { name: "Consecration", path: "/consecration" },
  { name: "Certificates", path: "/certificates" },
  { name: "Education & Training", path: "/education" },
  { name: "Application Form", path: "/membership/application" },
];

const FooterSocialLinks: IFooterSocialLinks[] = [
  {
    name: "Facebook",
    href: "https://facebook.com",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    name: "Twitter",
    href: "https://twitter.com",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "https://instagram.com",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.348-1.051-2.348-2.348s1.051-2.348 2.348-2.348c1.297 0 2.348 1.051 2.348 2.348s-1.051 2.348-2.348 2.348zm7.718 0c-1.297 0-2.348-1.051-2.348-2.348s1.051-2.348 2.348-2.348c1.297 0 2.348 1.051 2.348 2.348s-1.051 2.348-2.348 2.348z" />
      </svg>
    ),
  },
  {
    name: "YouTube",
    href: "https://youtube.com",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
];

export {
  NalinksItems,
  Features,
  ServicesContent,
  ObjectivesParagraphs,
  ProgrammesParagraphs,
  MembershipBenefitsParagraphs,
  NavigationItems,
  FooterNavigationItems,
  FooterAdditionalLinks,
  FooterSocialLinks,
};
