import type { Metadata } from 'next';
import '@/styles/reset.css';
import '@/styles/global.css';
import { WindowSizeProvider } from './_context/WindowSizeContext';
import NavigationBar from './_components/NavigationBar';

export const metadata: Metadata = {
    title: '토스채용',
    description: '토스 채용 페이지 클론코딩입니다.',
    icons: {
        icon: '/images/favicon.svg',
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <WindowSizeProvider>
            <html lang="en">
                <body>
                    <NavigationBar />
                    {children}
                </body>
            </html>
        </WindowSizeProvider>
    );
}
