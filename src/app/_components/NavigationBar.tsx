'use client';

import Link from 'next/link';
import { useWindowSize } from '../_context/WindowSizeContext';
import '@/styles/navigation-bar.scss';
import { useState } from 'react';
import NavigationContent from './NavigationContent';

export default function NavigationBar() {
    const { device } = useWindowSize();
    const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

    function handleIsSubMenuOpenevent(
        e: React.MouseEvent<HTMLElement, MouseEvent>
    ) {
        const target = e.target as HTMLElement;
        target
            .querySelectorAll('img')
            ?.forEach((img) => img.classList.toggle('hidden'));
        setIsSubMenuOpen((prev) => !prev);
    }

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="navbar-inner-container">
                    <Link href="/" className="logo-container">
                        <h1>
                            <img
                                src="/images/symbol-logo.svg"
                                height={20}
                                alt="toss symbol logo"
                                className="symbol-logo"
                            />
                            <img
                                src="/images/text-logo.svg"
                                height={14.4}
                                alt="toss text logo"
                            />
                        </h1>
                    </Link>
                    <NavigationContent />
                </div>
            </div>
        </nav>
    );
}
