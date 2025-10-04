export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  priceId: string; // Stripe Price ID
  downloadUrl: string;
  category: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  format: string;
  highlights: string[];
  popular?: boolean;
}

export const products: Product[] = [
  {
    id: "1",
    title: "E-Book: Web Development Guide",
    description: "Complete guide to modern web development with Next.js and React",
    price: 2999, // $29.99 in cents
    priceId: "price_test_ebook", // Replace with actual Stripe Price ID
    downloadUrl: "/downloads/web-dev-guide.pdf",
    category: "Guides",
    level: "Beginner",
    format: "200-page PDF",
    highlights: [
      "Step-by-step curriculum",
      "Project-based learning",
      "Access to resource library",
    ],
    popular: true,
  },
  {
    id: "2",
    title: "UI Kit: Professional Dashboard",
    description: "Premium UI components and templates for dashboard applications",
    price: 4999, // $49.99 in cents
    priceId: "price_test_uikit", // Replace with actual Stripe Price ID
    downloadUrl: "/downloads/ui-kit.zip",
    category: "Design",
    level: "Intermediate",
    format: "Figma & Sketch files",
    highlights: [
      "30+ ready-made screens",
      "Light & dark mode",
      "Editable components",
    ],
  },
  {
    id: "3",
    title: "Video Course: TypeScript Mastery",
    description: "Master TypeScript with 10+ hours of video content and exercises",
    price: 7999, // $79.99 in cents
    priceId: "price_test_course", // Replace with actual Stripe Price ID
    downloadUrl: "/downloads/typescript-course.zip",
    category: "Courses",
    level: "Advanced",
    format: "10-hour video series",
    highlights: [
      "Hands-on projects",
      "Expert code reviews",
      "Lifetime updates",
    ],
    popular: true,
  },
];
