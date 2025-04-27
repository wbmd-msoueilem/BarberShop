'use client';

import { Button } from '@/components/ui/button';
import { Navigation } from '@/components/navigation';
import Link from 'next/link';

export function Header() {
    return (
        <header className="bg-secondary py-4 shadow-md">
            <div className="container mx-auto flex items-center justify-between flex-row-reverse">
                <Link
                    key={"/book-now"}
                    href={"/book-now"}>
                    <Button>
                        احجز الآن
                    </Button>
                </Link>
                <Navigation />
                <div className="text-2xl font-bold">
                    <img src="/barber-text.png/" className="w-20" />
                </div>
            </div>
        </header>
    );
}
