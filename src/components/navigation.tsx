'use client';
import Link from 'next/link';
import {usePathname} from 'next/navigation';
import {cn} from '@/lib/utils';

const navItems = [
  {href: '/', label: 'Home'},
  {href: '/about', label: 'About'},
  {href: '/gallery', label: 'Gallery'},
  {href: '/contact', label: 'Contact Us'},
  {href: '/policy', label: 'Policy'},
  {href: '/book-now', label: 'Book Now'},
];

export function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="flex space-x-6">
      {navItems.map(item => (
        <Link
          key={item.href}
          href={item.href}
          className={cn(
            'text-sm font-medium transition-colors hover:text-primary',
            pathname === item.href ? 'text-primary' : 'text-foreground'
          )}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
