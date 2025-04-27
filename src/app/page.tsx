'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { MapEmbed } from '@/components/map-embed';
import { Facebook, Instagram, Twitter } from 'lucide-react';
import { getServiceRecommendation } from '@/ai/flows/service-recommendation';
import { useState } from 'react';
import { Input } from '@/components/ui/input';

// Updated shop information to Arabic
const shopInfo = {
  name: 'Lebjawi Barbershop',
  tagline: 'Where style meets precision.',
  address: 'Carefour Lebrar, Tensoueilem, Nouakchott',
  phone: '46 35 75 72',
  email: 'info@lebjawi.com',
  socialMedia: {
    facebook: 'https://www.facebook.com/example',
    instagram: 'https://www.instagram.com/example',
    twitter: 'https://www.twitter.com/example',
  },
  welcomeMessage: `مرحبًا بكم في الموضة للحلاقة العليا! نحن ملتزمون بتقديم أفضل خدمات قص وتجميل الشعر في أجواء مريحة وعصرية.`,
};

const barbers = [
  {
    id: '1',
    name: 'Tony',
    bio: 'Master barber with 15 years of experience.',
    photoUrl: 'https://picsum.photos/id/237/100/100', // Keep placeholder photos
    specialties: ['تلاشي', 'تشذيب اللحية'],
  },
  {
    id: '2',
    name: 'Sarah',
    bio: 'Expert in modern hairstyles and coloring.',
    photoUrl: 'https://picsum.photos/id/1027/100/100', // Keep placeholder photos
    specialties: ['تلوين الشعر', 'قصات عصرية'],
  },
  {
    id: '3',
    name: 'Carlos',
    bio: 'Classic cuts and straight razor shaves.',
    photoUrl: 'https://picsum.photos/id/1005/100/100', // Keep placeholder photos
    specialties: ['قصات كلاسيكية', 'حلاقة بالشفرة المستقيمة'],
  },
];

export default function Home() {
  const [preferences, setPreferences] = useState('');
  const [recommendation, setRecommendation] = useState('');

  const handleRecommendation = async () => {
    const result = await getServiceRecommendation({preferences: preferences});
    setRecommendation(result.recommendation);
  };

  return (
    <div className="container flex flex-col" dir="rtl">
      <div className="flex-1 p-4 ">
        <HeroSection shopName={'الموضة للحلاقة العليا'} tagline={'حيث يلتقي الأسلوب بالدقة'} />

        <div className="container mx-auto py-10">
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>{'الموضة للحلاقة العليا'}</CardTitle>
              <CardDescription>{shopInfo.welcomeMessage}</CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                <strong>العنوان:</strong>{' '}
                {
                  'نواكشوط، موريتانيا'
                }
              </p>
              <p>
                <strong>الهاتف:</strong> {'+222 46 35 75 72'}
              </p>
              <p>
                <strong>البريد الإلكتروني:</strong> {shopInfo.email}
              </p>
              <div className="flex space-x-4 mt-4">
                <a
                  href={shopInfo.socialMedia.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Facebook className="h-5 w-5 text-foreground" />
                </a>
                <a
                  href={shopInfo.socialMedia.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram className="h-5 w-5 text-foreground" />
                </a>
                <a
                  href={shopInfo.socialMedia.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Twitter className="h-5 w-5 text-foreground" />
                </a>
              </div>
              <div className="mt-4">
                <MapEmbed address={'نواكشوط، موريتانيا'} />
              </div>
            </CardContent>
          </Card>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">الحلاقين لدينا</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {barbers.map((barber, index) => {
                const updatedBarber = { ...barber };
                if (index === 0) updatedBarber.name = 'طوني';
                if (index === 1) updatedBarber.name = 'سارة';
                if (index === 2) updatedBarber.name = 'كارلوس';
                
                if (updatedBarber.name === 'طوني') updatedBarber.bio = 'حلاق ماهر بخبرة 15 عامًا.';
                if (updatedBarber.name === 'سارة') updatedBarber.bio = 'خبير في قصات الشعر الحديثة والتلوين.';
                if (updatedBarber.name === 'كارلوس') updatedBarber.bio = 'قصات كلاسيكية وحلاقة بالشفرة المستقيمة.';
                
                return <BarberCard key={updatedBarber.id} barber={updatedBarber} />;
              })}
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">اقتراح الخدمة</h2>
            <div className="flex flex-col md:flex-row items-center gap-4">
              <Input
                type="text"
                placeholder="أدخل تفضيلاتك (مثل: شعر قصير، تشذيب اللحية)"
                value={preferences}
                onChange={(e) => setPreferences(e.target.value)}
                className="flex-grow"
              />
              <Button onClick={handleRecommendation}>احصل على الاقتراح</Button>
            </div>
            {recommendation && (
              <div className="mt-4">
                <strong>الاقتراح:</strong> {recommendation}
              </div>
            )}
          </section>
        </div>
      </div>
    </div>
  );
}

function HeroSection({shopName, tagline}: {shopName: string; tagline: string}) {
  return (
    <section
      className="relative py-24 bg-gray-100"
      style={{
        backgroundImage: 'url(https://picsum.photos/id/39/1600/400)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div className="container mx-auto text-center relative z-10" >
        <h1 className="text-5xl font-bold text-white mb-4 ">{shopName}</h1>
        <p className="text-xl text-gray-200">{tagline}</p>
        <Button className="mt-8">Book Now</Button>
      </div>
    </section>
  );
}

function BarberCard({ barber }: { barber: any }) {
  return (
    <Card >
      <CardHeader dir='rtl' >
          <div className="flex items-center space-x-4" >
            <Avatar>
              <AvatarImage src={barber.photoUrl} alt={barber.name} />
              <AvatarFallback>{barber.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <CardTitle >{barber.name}</CardTitle>
          </div>
        
        <CardDescription >{barber.bio}</CardDescription>
      </CardHeader>
      <CardHeader>
        <div className="flex items-center space-x-4">
        </div>
      </CardHeader>
      {/* <CardContent dir='rtl'>

      </CardHeader> */}
      <CardContent>
        <p>
          <strong>Specialties:</strong> {barber.specialties.join(', ')}
        </p>
      </CardContent>
    </Card>
  );
}

