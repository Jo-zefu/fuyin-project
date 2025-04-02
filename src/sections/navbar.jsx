import { useState } from "react";
import NavItems from "./navItems.jsx";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen((pre) => !pre);
    };
    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white/90">
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-center py-5 mx-auto c-space navbar">
                    <a
                        href="/"
                        rel="noreferrer"
                    >
                        <img src="/logo.png" alt="Logo" className="h-10 w-12" />
                    </a>
                    <nav>
                        <NavItems/>
                    </nav>
                </div>
            </div>
        </header>
    );
}

export default Navbar;
