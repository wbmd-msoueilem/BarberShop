'use client';
import Link from 'next/link';
import {usePathname} from 'next/navigation';
import {Home, Image, Mail, Shield, Users} from 'lucide-react'; // Correct import
import {cn} from '@/lib/utils';

const navItems: { href: string; label: string; icon: any }[] = [
  { href: '/policy', label: 'سياسة', icon: Shield },
  { href: '/contact', label: 'اتصل بنا', icon: Mail },
  { href: '/about', label: 'معلومات عنا', icon: Users },
  { href: '/gallery', label: 'الصور', icon: Image },
  { href: '/', label: 'الرئيسية', icon: Home },
];

export function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="flex justify-between flex-row-reverse items-center ">
      {navItems.map(item => (
        <Link
          key={item.href}
          href={item.href}
          className={cn(
            'group flex flex-col md:flex-row items-center justify-center space-x-2 transition-colors rounded-md hover:bg-accent p-2', // Add hover effect and padding
            pathname === item.href ? 'text-primary' : 'text-foreground'
          )}
        >
          <div className="flex flex-col items-center">
            <item.icon
              className={cn(
                'w-6 h-6 mb-1 transition-opacity',
                'md:hidden' // Show icon on mobile, hide on desktop
              )}
            />
             <span
              className={cn(
                'text-sm font-medium transition-colors hidden md:block',// Show text on desktop, hide on mobile
                pathname === item.href ? 'text-primary' : 'text-foreground'
              )}
            >
              {item.label}
            </span>
          </div>
        </Link>
      ))}
    </nav>
  );
}