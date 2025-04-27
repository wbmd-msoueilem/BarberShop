import {Button} from '@/components/ui/button';
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from '@/components/ui/card';
import {Input} from '@/components/ui/input';
import {Textarea} from '@/components/ui/textarea';
import {MapEmbed} from '@/components/map-embed';

const shopInfo = {
  name: 'SharpCut Barbershop',
  address: '123 Main Street, Anytown USA',
  phone: '555-123-4567',
  email: 'info@sharpcut.com',
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
        </div>
      </div>
    </div>
  );
}
