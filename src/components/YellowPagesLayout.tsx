import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import CookieBanner from "./CookieBanner";

interface YellowPagesLayoutProps {
    children: ReactNode;
    title?: string;
    description?: string;
}

const YellowPagesLayout = ({ children, title, description }: YellowPagesLayoutProps) => {
    return (
        <div className="min-h-screen flex flex-col bg-yp-cream">
            <Navbar />

            {/* Page header if title provided */}
            {title && (
                <div className="bg-gradient-to-b from-[#FFD700] to-yp-cream border-b-2 border-yp-dark/10">
                    <div className="max-w-[1400px] mx-auto px-4 sm:px-6 py-8 sm:py-12">
                        <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-yp-dark text-center">
                            {title}
                        </h1>
                        {description && (
                            <p className="mt-3 text-center text-sm sm:text-base text-yp-dark/70 font-heading tracking-wide max-w-2xl mx-auto">
                                {description}
                            </p>
                        )}
                        {/* Decorative rule */}
                        <div className="flex items-center justify-center gap-3 mt-6">
                            <div className="h-px w-12 bg-yp-dark/20" />
                            <div className="w-2 h-2 bg-yp-dark/30 rotate-45" />
                            <div className="h-px w-12 bg-yp-dark/20" />
                        </div>
                    </div>
                </div>
            )}

            {/* Main content area */}
            <main className="flex-1">
                <div className="page-enter">
                    {children}
                </div>
            </main>

            <Footer />
            <CookieBanner />
        </div>
    );
};

export default YellowPagesLayout;
