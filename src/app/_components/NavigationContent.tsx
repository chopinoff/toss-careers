'use client';

import Link from 'next/link';
import { useWindowSize } from '../_context/WindowSizeContext';
import '@/styles/navigation-bar.scss';
import { useEffect, useState } from 'react';

export default function NavigationContent() {
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
        document
            .querySelector('.navbar-content.mobile')
            ?.classList.toggle('hidden');
    }

    useEffect(() => {
        if (device === 'mobile') {
            document
                .querySelectorAll('.navbar-content,.navbar-icon-container')
                ?.forEach((el) => el.classList.add('mobile'));
            document
                .querySelector('.navbar-content.mobile')
                ?.classList.add('hidden');
        } else
            document
                .querySelectorAll('.navbar-content,.navbar-icon-container')
                ?.forEach((el) => el.classList.remove('mobile'));
        console.log(
            document.querySelectorAll('.navbar-content,.navbar-icon-container')
        );
    }, [device]);

    return (
        <>
            <ul className="navbar-icon-container">
                <li className="item icon-btn">
                    <button>
                        <img src="/images/search-icon.svg" height={18} />
                    </button>
                </li>
                <li className="item icon-btn">
                    <button
                        className="toggle-btn"
                        onClick={handleIsSubMenuOpenevent}
                    >
                        <img src="/images/hamberger-icon.svg" height={20} />
                        <img
                            src="/images/close-icon.svg"
                            height={20}
                            className="hidden"
                        />
                    </button>
                </li>
            </ul>
            <ul className="navbar-content">
                <li className="navbar-content-item item">
                    <button>토스커뮤니티</button>
                    <div className="sub-menu">
                        <div className="sub-menu-container">
                            <ul className="sub-menu-content list">
                                <li className="sub-menu-item item">
                                    <Link href="/toss">토스</Link>
                                </li>
                                <li className="sub-menu-item item">
                                    <Link href="/tossinsurance">
                                        토스인슈어런스
                                    </Link>
                                </li>
                                <li className="sub-menu-item item">
                                    <Link href="/tosspayments">
                                        토스페이먼츠
                                    </Link>
                                </li>
                                <li className="sub-menu-item item">
                                    <Link href="/tosssecurities">토스증권</Link>
                                </li>
                                <li className="sub-menu-item item">
                                    <Link href="/tosscx">토스씨엑스</Link>
                                </li>
                                <li className="sub-menu-item item">
                                    <Link href="/tossbank">토스뱅크</Link>
                                </li>
                                <li className="sub-menu-item item">
                                    <Link href="/tossplace">토스플레이스</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </li>
                <li className="navbar-content-item item">
                    <Link href="/jobs">채용 공고</Link>
                </li>
                <li className="navbar-content-item item">
                    <Link href="/joining-guide">합류 여정</Link>
                </li>
                <li className="navbar-content-item item">
                    <Link href="/faq?category=0">자주 묻는 질문</Link>
                </li>
                <li className="navbar-content-item item">
                    <Link href="/article">아티클</Link>
                </li>
            </ul>
        </>
    );
}
