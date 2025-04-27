'use client';

import {Button} from '@/components/ui/button';
import {Navigation} from '@/components/navigation';

export function Header() {
  return (
    <header className="bg-secondary py-4 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-2xl font-bold">SharpCut</div>
        <Navigation />
        <Button>Book Now</Button>
      </div>
    </header>
  );
}
