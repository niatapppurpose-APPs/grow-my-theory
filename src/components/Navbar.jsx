/**
 * Navbar Component
 * 
 * PURPOSE: Top navigation bar that appears on every page
 * LAYOUT: Logo on the left, navigation links on the right
 * RESPONSIVE: Hamburger menu on mobile devices
 * 
 * This component uses:
 * - useState for mobile menu toggle
 * - Tailwind for responsive design (md: breakpoint)
 */

"use client"; // Required for useState in Next.js App Router

import { useState } from "react";

export default function Navbar() {
    // State to track if mobile menu is open or closed
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Toggle mobile menu visibility
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="bg-white shadow-sm fixed w-full top-0 z-50">
            {/* Container to center and constrain content width */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">

                    {/* Logo Section - Left Side */}
                    <div className="flex-shrink-0">
                        <a href="#" className="flex items-center">
                            {/* Logo Text - Using primary color */}
                            <span className="text-2xl font-semibold text-primary">
                                Dr. Maya Reynolds
                            </span>
                        </a>
                    </div>

                    {/* Desktop Navigation - Right Side (hidden on mobile) */}
                    <div className="hidden md:flex items-center space-x-8">
                        <a
                            href="#services"
                            className="text-dark hover:text-primary transition-colors duration-300"
                        >
                            Services
                        </a>
                        <a
                            href="#about"
                            className="text-dark hover:text-primary transition-colors duration-300"
                        >
                            About
                        </a>
                        <a
                            href="#office"
                            className="text-dark hover:text-primary transition-colors duration-300"
                        >
                            Office
                        </a>
                        <a
                            href="#faq"
                            className="text-dark hover:text-primary transition-colors duration-300"
                        >
                            FAQ
                        </a>
                        {/* Contact Button - Uses accent color for emphasis */}
                        <button className="bg-[#C8A27A] px-5 py-2 rounded-full text-white hover:bg-[#b8926c] transition">
                            Book a Session
                        </button>

                    </div>

                    {/* Mobile Menu Button (visible only on mobile) */}
                    <div className="md:hidden">
                        <button
                            onClick={toggleMenu}
                            className="text-dark hover:text-primary focus:outline-none"
                            aria-label="Toggle menu"
                        >
                            {/* Hamburger Icon (changes to X when menu is open) */}
                            {isMenuOpen ? (
                                // X icon when menu is open
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                // Hamburger icon when menu is closed
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu Dropdown (only shows when isMenuOpen is true) */}
                {isMenuOpen && (
                    <div className="md:hidden bg-white border-t">
                        <div className="px-2 pt-2 pb-4 space-y-2">
                            <a
                                href="#services"
                                className="block px-3 py-2 text-dark hover:text-primary hover:bg-secondary rounded-md"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Services
                            </a>
                            <a
                                href="#about"
                                className="block px-3 py-2 text-dark hover:text-primary hover:bg-secondary rounded-md"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                About
                            </a>
                            <a
                                href="#office"
                                className="block px-3 py-2 text-dark hover:text-primary hover:bg-secondary rounded-md"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Office
                            </a>
                            <a
                                href="#faq"
                                className="block px-3 py-2 text-dark hover:text-primary hover:bg-secondary rounded-md"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                FAQ
                            </a>
                            <a
                                href="#contact"
                                className="block px-3 py-2 btn-accent text-center rounded-full"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Contact
                            </a>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}
