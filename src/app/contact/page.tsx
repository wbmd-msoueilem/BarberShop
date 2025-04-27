import {Button} from '@/components/ui/button'
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from '@/components/ui/card'
import {Input} from '@/components/ui/input'
import {Textarea} from '@/components/ui/textarea'
import {MapEmbed} from '@/components/map-embed'
import {Facebook, Instagram, Twitter} from 'lucide-react'

const shopInfo = {
  name: 'الموضة للحلاقة العليا',
  address: 'نواكشوط، موريتانيا',
  phone: '+222 46 35 75 72',
  email: 'info@lebjawi.com',
  socialMedia: {
    facebook: 'https://www.facebook.com/example',
    instagram: 'https://www.instagram.com/example',
    twitter: 'https://www.twitter.com/example',
  },
}

export default function ContactPage() {
  return (
    <div className="container mx-auto py-10 flex flex-col items-center" dir="rtl">
      <h1 className="text-3xl font-semibold mb-6">اتصل بنا</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
        <div>
          <Card>
            <CardHeader>
              <CardTitle>معلومات المتجر</CardTitle>
              <CardDescription>تفاصيل الاتصال والموقع.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <p>
                <strong>العنوان:</strong> {shopInfo.address}
              </p>
              <p>
                <strong>الهاتف:</strong> {shopInfo.phone}
              </p>
              <p>
                <strong>البريد الإلكتروني:</strong> {shopInfo.email}
              </p>
              <p className="flex space-x-4 mt-4 justify-start">
                <MapEmbed address={shopInfo.address} />
              </p>
              <div className="mt-4">
              </div>
            </CardContent>
          </Card>
        </div>

        <div>
          <Card>
            <CardHeader>
              <CardTitle>أرسل لنا رسالة</CardTitle>
              <CardDescription>نود أن نسمع منك.</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
              <Input type="text" placeholder="اسمك" />
              <Input type="email" placeholder="بريدك الإلكتروني" />
              <Textarea placeholder="رسالتك" />
              <Button>إرسال الرسالة</Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>معلومات الاتصال</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                <strong>العنوان:</strong> {shopInfo.address}
              </p>
              <p>
                <strong>الهاتف:</strong> {shopInfo.phone}
              </p>
              <p>
                <strong>البريد الإلكتروني:</strong> {shopInfo.email}
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
  )
}
