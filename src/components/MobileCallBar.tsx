import { Phone } from "lucide-react";

/** Call button pinned to the bottom of the screen on phones and tablets. */
const MobileCallBar = () => (
    <div className="lg:hidden fixed inset-x-0 bottom-0 z-40 bg-yp-dark border-t-2 border-yp-yellow pb-[env(safe-area-inset-bottom)]">
        <a
            href="tel:07387777202"
            className="flex items-center justify-center gap-3 bg-yp-yellow text-yp-dark py-3.5 font-heading font-bold tracking-wider active:bg-yp-gold"
        >
            <Phone className="w-5 h-5" />
            <span className="text-sm uppercase">Call Now</span>
            <span className="phone-banner text-lg">07387 777202</span>
        </a>
    </div>
);

export default MobileCallBar;
