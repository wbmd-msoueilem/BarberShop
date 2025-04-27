import { Facebook, Instagram, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-secondary py-6 text-right">
      <div className="container mx-auto">
        <p>نواكشوط، موريتانيا</p>
        <p>
          الهاتف: <a href="https://wa.me/22246357572">+222 46 35 75 72</a>
        </p>
        <p>البريد الإلكتروني: info@lebjawi.com</p>
        <div className="flex justify-center space-x-4 mt-4 flex-row-reverse">
          <a
            href="https://www.facebook.com/example"
            className="text-foreground hover:text-primary"
          >
            <Facebook className="h-5 w-5" />
          </a>
          <a href="https://www.instagram.com/example" className="text-foreground hover:text-primary">
            <Instagram className="h-5 w-5" />
          </a>
          <a
            href="https://www.twitter.com/example"
            className="text-foreground hover:text-primary"
          >
            <Twitter className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
