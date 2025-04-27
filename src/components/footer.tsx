import {Facebook, Instagram, Twitter} from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-secondary py-6">
      <div className="container mx-auto text-center">
        <p>Carefour Lebrar, Tensoueilem, Nouakchott</p>
        <p>Phone: <a href='https://wa.me/22246357572'>46 35 75 72</a></p>
        <p>Email: info@lebjawi.com</p>
        <div className="flex justify-center space-x-4 mt-4">
          <a href="#" className="text-foreground hover:text-primary">
            <Facebook className="h-5 w-5" href='https://facebook.com/mls.cr7'/>
          </a>
          <a href="#" className="text-foreground hover:text-primary">
            <Instagram className="h-5 w-5" href='https://instagram.com/mls.cr7'/>
          </a>
          <a href="#" className="text-foreground hover:text-primary">
            <Twitter className="h-5 w-5" href='https://x.com/mls.cr7'/>
          </a>
        </div>
      </div>
    </footer>
  );
}
