import {Button} from '@/components/ui/button';
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from '@/components/ui/card';
import {Input} from '@/components/ui/input';
import {Textarea} from '@/components/ui/textarea';
import {MapEmbed} from '@/components/map-embed';
import {Facebook, Instagram, Twitter} from 'lucide-react';

const shopInfo = {
  name: 'Lebjawi Barbershop',
  address: 'Carefour Lebrar, Tensoueilem, Nouakchott',
  phone: '46 35 75 72',
  email: 'info@lebjawi.com',
  socialMedia: {
    facebook: 'https://facebook.com/mls.cr7',
    instagram: 'https://instagram.com/mls.cr7',
    twitter: 'https://twitter.com/mls.cr7',
  },
};

export default function ContactPage() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-semibold mb-6">Contact Us</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Shop Information</CardTitle>
              <CardDescription>Contact details and location.</CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                <strong>Address:</strong> {shopInfo.address}
              </p>
              <p>
                <strong>Phone:</strong> {shopInfo.phone}
              </p>
              <p>
                <strong>Email:</strong> {shopInfo.email}
              </p>
              <div className="mt-4">
                <MapEmbed address={shopInfo.address} />
              </div>
            </CardContent>
          </Card>
        </div>

        <div>
          <Card>
            <CardHeader>
              <CardTitle>Send us a Message</CardTitle>
              <CardDescription>We'd love to hear from you.</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
              <Input type="text" placeholder="Your Name" />
              <Input type="email" placeholder="Your Email" />
              <Textarea placeholder="Your Message" />
              <Button>Send Message</Button>
            </CardContent>
          </Card>
          <Card>
              <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent>
                  <p>
                      <strong>Address:</strong> {shopInfo.address}
                  </p>
                  <p>
                      <strong>Phone:</strong> {shopInfo.phone}
                  </p>
                  <p>
                      <strong>Email:</strong> {shopInfo.email}
                  </p>
                  <div className="flex space-x-4 mt-4">
                      <a href={shopInfo.socialMedia.facebook} target="_blank" rel="noopener noreferrer">
                          <Facebook className="h-5 w-5 text-foreground" />
                      </a>
                      <a href={shopInfo.socialMedia.instagram} target="_blank" rel="noopener noreferrer">
                          <Instagram className="h-5 w-5 text-foreground" />
                      </a>
                      <a href={shopInfo.socialMedia.twitter} target="_blank" rel="noopener noreferrer">
                          <Twitter className="h-5 w-5 text-foreground" />
                      </a>
                  </div>
              </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
