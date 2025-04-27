import {Facebook, Instagram, Twitter} from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-secondary py-6">
      <div className="container mx-auto text-center">
        <p>123 Main Street, Anytown USA</p>
        <p>Phone: 555-123-4567</p>
        <p>Email: info@sharpcut.com</p>
        <div className="flex justify-center space-x-4 mt-4">
          <a href="#" className="text-foreground hover:text-primary">
            <Facebook className="h-5 w-5" />
          </a>
          <a href="#" className="text-foreground hover:text-primary">
            <Instagram className="h-5 w-5" />
          </a>
          <a href="#" className="text-foreground hover:text-primary">
            <Twitter className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
