/**
 * Root Layout Component
 * 
 * PURPOSE: Wraps all pages with common elements (metadata, fonts, global styles)
 * 
 * This is the ROOT layout for the entire Next.js application.
 * It applies to every page in the app.
 * 
 * INCLUDES:
 * - HTML lang attribute for accessibility
 * - Global CSS import
 * - SEO metadata (title, description)
 * - Font configuration
 */

import "./globals.css";

// Metadata for SEO - this appears in search results and browser tabs
export const metadata = {
  title: "Dr. Maya Reynolds, PsyD | Anxiety & Trauma Therapist | Santa Monica, CA",
  description:
    "Dr. Maya Reynolds is a licensed clinical psychologist in Santa Monica, California specializing in anxiety, trauma (EMDR), and burnout therapy for high-achieving adults. Book a consultation today.",
  keywords: [
    "therapist Santa Monica",
    "psychologist Santa Monica CA",
    "anxiety therapist California",
    "trauma therapy EMDR",
    "burnout therapy",
    "licensed clinical psychologist",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* 
        Body element with:
        - antialiased: Smooths font rendering
        - bg-secondary: Sets default background color
        - text-dark: Sets default text color
      */}
      <body className="antialiased bg-secondary text-dark">
        {children}
      </body>
    </html>
  );
}
