import { Globe, ShoppingCart, Smartphone, HeartPulse, Leaf } from "lucide-react";

export type Client = {
  id: string;
  slug: string;
  name: string;
  category: string;
  services: string[];
  links: {
    website?: string;
    instagram?: string;
    app?: string;
    apps?: {
      name: string;
      androidUrl?: string;
      macUrl?: string;
    }[];
  };
  instagramVideos?: string[];
  shortDescription: string;
  longDescription: string;
  icon: any; // Using lucide icon component
  logoUrl?: string;
  previewUrl?: string;
  tags: string[];
  projectType: string;
  highlights: string[];
  results: { label: string; value: string }[];
  technologiesUsed: string[];
  colorTheme: {
    primary: string;
    secondary: string;
  };
};

export const clients: Client[] = [
  {
    id: "madhuram",
    slug: "dr-madhuram-chowdry",
    name: "Dr. Madhuram Chowdry",
    category: "Healthcare / Orthopedic Care",
    services: ["Website Maintenance", "Social Media Management"],
    links: {
      website: "https://drmadhuramchowdryortho.com/",
      instagram: "https://www.instagram.com/madhuramchowdry14",
    },
    instagramVideos: [
      "https://www.instagram.com/reel/DV0yxitDSzH/",
      "https://www.instagram.com/reel/DWGu59TkWF8/",
      "https://www.instagram.com/reel/DXg0dhdzhSw/",
      "https://www.instagram.com/reel/DYMvmqITaVU/"
    ],
    shortDescription: "Website and social media support for a trusted orthopedic care specialist.",
    longDescription: "NAVABHARATH TECHNOLOGIES supports Dr. Madhuram Chowdry with website maintenance and social media management, helping create a professional, informative, and trustworthy digital presence for patients.",
    icon: HeartPulse,
    logoUrl: "/navabharath-portfolio/clients/dr-madhuram.png",
    previewUrl: "/navabharath-portfolio/clients/covers/madhuram-v2.png", 
    tags: ["Healthcare", "Orthopedics", "Social Media", "Website"],
    projectType: "Ongoing Digital Support",
    highlights: [
      "Consistent digital presence",
      "Professional website support",
      "Social media visibility",
      "Better user experience",
      "Patient-friendly access"
    ],
    results: [
      { label: "Improved Visibility", value: "85%" },
      { label: "Patient Engagement", value: "60%" },
      { label: "Uptime Guaranteed", value: "99.9%" }
    ],
    technologiesUsed: ["Next.js", "Tailwind CSS", "Social Media Analytics"],
    colorTheme: {
      primary: "from-blue-500",
      secondary: "to-cyan-400"
    }
  },
  {
    id: "jisha",
    slug: "jisha-prime-ortho-care",
    name: "Jisha Prime Ortho Care",
    category: "Healthcare / Ortho Care",
    services: ["Website Maintenance", "Social Media Management"],
    links: {
      website: "https://www.jishaprimeorthocare.com/",
      instagram: "https://www.instagram.com/thespinemechanic07",
    },
    instagramVideos: [
      "https://www.instagram.com/reel/DYW-p_kiIEO/",
      "https://www.instagram.com/reel/DYRvkyZz_Zj/",
      "https://www.instagram.com/reel/DYAI5nNRsgA/",
      "https://www.instagram.com/reel/DYE3j3_T3Ef/"
    ],
    shortDescription: "Digital presence management for an orthopedic and spine care brand.",
    longDescription: "We maintain the website and social media presence for Jisha Prime Ortho Care, ensuring consistent communication, strong visual branding, and a smooth online experience for patients.",
    icon: HeartPulse,
    logoUrl: "/navabharath-portfolio/clients/jisha-prime.jpg",
    previewUrl: "/navabharath-portfolio/clients/covers/jisha-v2.png",
    tags: ["Clinic", "Spine Care", "Website", "Instagram"],
    projectType: "Ongoing Digital Support",
    highlights: [
      "Consistent brand communication",
      "Strong visual branding",
      "Smooth online experience",
      "Ongoing digital maintenance",
      "Patient-friendly access"
    ],
    results: [
      { label: "Brand Consistency", value: "100%" },
      { label: "Monthly Reach", value: "5K+" },
      { label: "Content Quality", value: "High" }
    ],
    technologiesUsed: ["React", "CMS Integration", "Social Media Tools"],
    colorTheme: {
      primary: "from-cyan-500",
      secondary: "to-indigo-500"
    }
  },
  {
    id: "navabharatha",
    slug: "navabharatha-sustainable-organisation",
    name: "Navabharatha Sustainable Organisation",
    category: "Sustainable Organisation",
    services: ["Website Maintenance", "Social Media Management"],
    links: {
      website: "https://www.navabharatha.com/",
      instagram: "https://www.instagram.com/navabharatha_sustainable",
      apps: [
        {
          name: "FME",
          androidUrl: "https://play.google.com/store/apps/details?id=com.navabharathtechnologies.FMEapp&hl=en_IN",
          macUrl: "https://apps.apple.com/us/app/fme-facilitator-mock-exam/id6758837825"
        },
        {
          name: "Navabharatha CRM",
          androidUrl: "https://play.google.com/store/search?q=navabharatha+crm&c=apps&hl=en_IN",
          macUrl: "https://apps.apple.com/us/app/navabharatha-crm/id6759153041"
        }
      ]
    },
    instagramVideos: [
      "https://www.instagram.com/reel/DV04t4TjNW-/",
      "https://www.instagram.com/p/DYRgwhexjmJ/",
      "https://www.instagram.com/p/DYjJzBCRcxi/",
      "https://www.instagram.com/reel/DWgAbPbDa6C/"
    ],
    shortDescription: "Website and social media support for a sustainability-focused organisation.",
    longDescription: "NAVABHARATH TECHNOLOGIES manages the website and social media presence for Navabharatha Sustainable Organisation for Consistency, helping communicate its mission, initiatives, and impact through digital channels.",
    icon: Leaf,
    logoUrl: "/navabharath-portfolio/clients/navabharatha.jpg",
    previewUrl: "/navabharath-portfolio/clients/covers/navabharatha.png", 
    tags: ["NGO", "Sustainability", "Community", "Digital Presence"],
    projectType: "Ongoing Digital Support",
    highlights: [
      "Consistent digital presence",
      "Impact communication",
      "Professional website support",
      "Social media visibility",
      "Better user experience"
    ],
    results: [
      { label: "Community Growth", value: "120%" },
      { label: "Engagement Rate", value: "45%" },
      { label: "Global Reach", value: "Expanding" }
    ],
    technologiesUsed: ["Web Development", "Content Strategy", "SEO"],
    colorTheme: {
      primary: "from-emerald-500",
      secondary: "to-teal-400"
    }
  },
  {
    id: "nidhi",
    slug: "nidhi-fresh-basket",
    name: "Nidhi Fresh Basket",
    category: "Fresh Produce / Grocery",
    services: ["Website Maintenance", "Social Media Management"],
    links: {
      website: "https://www.nidhifreshbasket.com/",
      instagram: "https://www.instagram.com/nidhifreshbasket",
    },
    instagramVideos: [
      "https://www.instagram.com/reel/DYCE3DIJwCU/",
      "https://www.instagram.com/reel/DYMCVRYMkYT/",
      "https://www.instagram.com/reel/DYW7-ZdM3rb/"
    ],
    shortDescription: "Digital support for a fresh produce and grocery brand.",
    longDescription: "We maintain Nidhi Fresh Basket’s website and social media platforms, helping the brand connect with customers through a clean, engaging, and reliable online presence.",
    icon: ShoppingCart,
    logoUrl: "/navabharath-portfolio/clients/nidhi-fresh.png",
    previewUrl: "/navabharath-portfolio/clients/covers/nidhi-v2.png", 
    tags: ["E-commerce", "Grocery", "Fresh Produce", "Branding"],
    projectType: "Ongoing Digital Support",
    highlights: [
      "Consistent digital presence",
      "Customer-friendly access",
      "Professional website support",
      "Social media visibility",
      "Ongoing digital maintenance"
    ],
    results: [
      { label: "Online Orders", value: "+35%" },
      { label: "Customer Retention", value: "80%" },
      { label: "Brand Loyalty", value: "High" }
    ],
    technologiesUsed: ["E-commerce Platform", "Payment Gateways", "Social Media Marketing"],
    colorTheme: {
      primary: "from-green-500",
      secondary: "to-emerald-400"
    }
  },
  {
    id: "shetty",
    slug: "dr-shettys-hi-tech-clinic",
    name: "Shetty's Hi-Tech Multispeciality Dental Clinic",
    category: "Healthcare / Dental Clinic",
    services: ["Token Booking Application"],
    links: {
      app: "https://play.google.com/store/apps/details?id=com.shettys.patientapp.clinic&hl=en_IN",
    },
    shortDescription: "Token booking application for smooth clinic appointment handling.",
    longDescription: "NAVABHARATH TECHNOLOGIES developed a token booking application for Shetty's Hi-Tech Multispeciality Dental Clinic, making appointment flow, queue handling, and patient convenience easier through a digital solution.",
    icon: Smartphone,
    logoUrl: "/navabharath-portfolio/clients/shetty-dental.png",
    previewUrl: "/navabharath-portfolio/clients/covers/shetty-cover.jpeg", 
    tags: ["Mobile App", "Healthcare", "Queue Management", "Booking"],
    projectType: "Application Development",
    highlights: [
      "Digital token booking",
      "Appointment convenience",
      "Reduced manual queue handling",
      "Better clinic workflow",
      "Patient-friendly access"
    ],
    results: [
      { label: "Wait Time Reduced", value: "50%" },
      { label: "Daily Bookings", value: "200+" },
      { label: "App Ratings", value: "4.8/5" }
    ],
    technologiesUsed: ["React Native", "Node.js", "Firebase", "Queue Algorithms"],
    colorTheme: {
      primary: "from-indigo-500",
      secondary: "to-violet-400"
    }
  }
];
