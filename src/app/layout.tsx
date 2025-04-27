import type { Metadata } from 'next';
import {Tajawal} from 'next/font/google';
import './globals.css';
import {Toaster} from '@/components/ui/toaster';
import {Header} from '@/components/header';
import {Footer} from '@/components/footer';

const tajawal = Tajawal({
  subsets: ['arabic'],
  variable: '--font-tajwal',
  weight: ['400', '500', '700'],
});

export const metadata: Metadata = {
  title: 'الموضة للحلاقة العليا',
  description: 'قص بأقل التكاليف',
};

export default function RootLayout({
  children,

}: Readonly<{
  children: React.ReactNode;
}>) {
  return (<html lang="ar" dir="rtl">
    <body className={`${tajawal.variable} antialiased`}>
          <div className="flex flex-col min-h-screen w-full">
            <Header />
            <main className="flex-1 flex justify-center w-full max-w-7xl mx-auto">{children}</main>
            <Footer />
          </div>
          <Toaster />
      </body>
    </html>
  );
}

