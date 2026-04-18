import { Link, useLocation } from "react-router-dom";
import { Phone, Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
    { label: "Home", path: "/" },
    { label: "Disabled Access", path: "/disabled-access" },
    { label: "Airport Trips", path: "/airport-trips" },
    { label: "Service Areas", path: "/service-areas" },
    { label: "Request a Call", path: "/request-a-call" },
];

const Navbar = () => {
    const location = useLocation();
    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <header className="w-full">
            {/* Top phone strip */}
            <div className="bg-yp-dark text-white py-2 px-4">
                <div className="max-w-[1400px] mx-auto flex items-center justify-between gap-2">
                    <span className="text-xs tracking-wider opacity-80 min-w-0 truncate">
                        Serving Ringwood, Bournemouth &amp; South UK
                    </span>
                    <a
                        href="tel:07387777202"
                        className="flex items-center gap-1.5 hover:text-yp-yellow transition-colors whitespace-nowrap shrink-0"
                    >
                        <Phone className="w-3.5 h-3.5 shrink-0" />
                        <span className="text-sm font-bold tracking-wide">07387 777202</span>
                    </a>
                </div>
            </div>

            {/* Main navbar */}
            <div className="bg-gradient-to-b from-[#FFD700] to-[#FFC107] border-b-4 border-double border-yp-dark">
                <div className="max-w-[1400px] mx-auto flex items-center justify-between px-4 sm:px-6 py-3">
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-3 group">
                        <img
                            src="/ringo-logo.png"
                            alt="Ringo's Taxis logo"
                            className="h-12 w-12 sm:h-14 sm:w-14 object-contain transition-transform group-hover:scale-105"
                        />
                        <div>
                            <h1 className="font-display text-xl sm:text-2xl font-bold tracking-wide leading-none text-yp-dark">
                                Ringo's Taxis
                            </h1>
                            <p className="hidden sm:block text-[9px] sm:text-[10px] tracking-[0.25em] text-yp-dark/70 uppercase font-heading font-semibold whitespace-nowrap">
                                Premium Taxi Service in Ringwood &amp; Bournemouth
                            </p>
                        </div>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden lg:flex items-center gap-1">
                        {navLinks.map(({ label, path }) => {
                            const isActive = location.pathname === path;
                            return (
                                <Link
                                    key={path}
                                    to={path}
                                    className={`px-4 py-2 text-xs font-heading font-bold tracking-wider uppercase transition-all border-2 ${isActive
                                            ? "bg-yp-dark text-white border-yp-dark"
                                            : "bg-transparent text-yp-dark border-transparent hover:border-yp-dark/30 hover:bg-yp-dark/5"
                                        }`}
                                >
                                    {label}
                                </Link>
                            );
                        })}
                    </nav>

                    {/* Phone CTA (desktop) */}
                    <a
                        href="tel:07387777202"
                        className="hidden md:flex lg:hidden items-center gap-2 bg-yp-dark text-white px-4 py-2 font-heading font-bold text-sm tracking-wider hover:bg-black transition-colors"
                    >
                        <Phone className="w-4 h-4" />
                        CALL NOW
                    </a>

                    {/* Mobile hamburger */}
                    <button
                        onClick={() => setMobileOpen(!mobileOpen)}
                        className="lg:hidden p-2 text-yp-dark hover:bg-yp-dark/10 transition-colors"
                        aria-label="Toggle menu"
                    >
                        {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>

                {/* Mobile menu */}
                {mobileOpen && (
                    <div className="lg:hidden bg-yp-cream border-t-2 border-yp-dark/20">
                        <nav className="max-w-[1400px] mx-auto px-4 py-3 flex flex-col gap-1">
                            {navLinks.map(({ label, path }) => {
                                const isActive = location.pathname === path;
                                return (
                                    <Link
                                        key={path}
                                        to={path}
                                        onClick={() => setMobileOpen(false)}
                                        className={`px-4 py-3 text-sm font-heading font-bold tracking-wider uppercase border-b border-yp-dark/10 transition-colors ${isActive ? "bg-yp-dark text-white" : "text-yp-dark hover:bg-yp-dark/5"
                                            }`}
                                    >
                                        {label}
                                    </Link>
                                );
                            })}
                            <a
                                href="tel:07387777202"
                                className="flex items-center justify-center gap-2 mt-2 bg-yp-dark text-white px-4 py-3 font-heading font-bold text-sm tracking-wider"
                            >
                                <Phone className="w-4 h-4" />
                                CALL 07387 777202
                            </a>
                        </nav>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Navbar;
