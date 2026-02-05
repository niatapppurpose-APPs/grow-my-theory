/**
 * Homepage (Main Page)
 * 
 * PURPOSE: The single-page website for Dr. Maya Reynolds' therapy practice
 * 
 * This file imports and renders ALL components in the correct order:
 * 1. Navbar - Fixed navigation at top
 * 2. Hero - First impression with SEO heading and CTA
 * 3. Services - 3-column specialty showcase
 * 4. About - Professional bio and credentials
 * 5. Office - NEW SECTION (not in original template)
 * 6. FAQ - Common questions answered
 * 7. Footer - Contact info and links
 * 
 * DESIGN THEME:
 * - Primary: Sage Green (#6B8E7B) - Calm, healing
 * - Secondary: Warm Cream (#F9F6F0) - Welcoming
 * - Accent: Terracotta (#C4A484) - Warm CTAs
 */

// Import all components from the components folder
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Office from "@/components/Office";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      {/* 
        Main wrapper element using React Fragment (<>)
        This allows us to return multiple elements without adding an extra div
      */}

      {/* SECTION 1: Navigation Bar
          - Fixed at top of page
          - Contains logo and navigation links
          - Responsive hamburger menu on mobile
      */}
      <Navbar />

      {/* MAIN CONTENT AREA */}
      <main>
        
        {/* SECTION 2: Hero Section
            - First thing visitors see
            - Contains SEO-optimized H1 heading
            - Image on left, text on right
            - Primary call-to-action buttons
        */}
        <Hero />

        {/* SECTION 3: Services Section
            - 3-column grid showcasing specialties
            - Anxiety & Panic
            - Trauma & EMDR
            - Burnout & Chronic Stress
        */}
        <Services />

        {/* SECTION 4: About Section
            - Professional bio and credentials
            - Dr. Maya Reynolds' approach to therapy
            - Who she helps (high-achieving adults)
        */}
        <About />

        {/* SECTION 5: Office Section (NEW - Custom Section)
            - This section is NOT in the original template
            - Showcases the Santa Monica office
            - Mentions in-person and telehealth options
            - Includes office images
        */}
        <Office />

        {/* SECTION 6: FAQ Section
            - Accordion-style frequently asked questions
            - Covers: in-person, telehealth, who she works with, specialties
            - Helps reduce barriers to booking
        */}
        <FAQ />
      </main>

      {/* SECTION 7: Footer
          - Contact information
          - Quick links
          - Social media
          - Copyright notice
      */}
      <Footer />
    </>
  );
}
