import type {Metadata} from 'next';
import {Tajawal} from 'next/font/google';
import './globals.css';
import {Toaster} from '@/components/ui/toaster';
import {Header} from '@/components/header';
import {Footer} from '@/components/footer';

const tajawal = Tajawal({
  subsets: ['latin'],
  variable: '--font-tajwal',
  weight: ['400', '500', '700'],
});

export const metadata: Metadata = {
  title: 'Lebjawi - Barbershop',
  description: 'CUT FOR LESS',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${tajawal.variable} antialiased`}>
          <div className="flex flex-col min-h-screen w-full">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <Toaster />
      </body>
    </html>
  );
}

